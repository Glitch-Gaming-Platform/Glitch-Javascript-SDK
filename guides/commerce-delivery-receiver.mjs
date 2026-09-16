/**
 * Node 24+ example: verify and durably queue Glitch Ed25519 notifications.
 * Run behind your HTTPS reverse proxy. This is NOT an inventory grant engine:
 * a worker/game session refreshes current entitlements with its own authorized
 * player session after durable queue handling. Never apply payload snapshots.
 */
import { createPublicKey, verify } from 'node:crypto';
import { createServer } from 'node:http';
import { DatabaseSync } from 'node:sqlite';
import { isAbsolute } from 'node:path';
import { pathToFileURL } from 'node:url';

const uuid = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
function reject(code, status = 400) { const error = new Error(code); error.code = code; error.status = status; throw error; }
function decodeBase64(value, length) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9+/]+={0,2}$/.test(value)) reject('invalid_base64');
  const bytes = Buffer.from(value, 'base64');
  if (bytes.length !== length || bytes.toString('base64') !== value) reject('invalid_base64');
  return bytes;
}

/** Configuration comes from authenticated delivery-settings, never the message. */
export function createDeliveryInbox({ titleId, environment, keyId, publicKeyBase64, databasePath }) {
  if (!uuid.test(titleId) || !uuid.test(keyId) || !['sandbox', 'live'].includes(environment)) reject('invalid_receiver_configuration');
  if (typeof databasePath !== 'string' || !isAbsolute(databasePath)) reject('durable_absolute_database_path_required');
  // Ed25519 raw public keys need the standard SubjectPublicKeyInfo DER wrapper.
  const publicKey = createPublicKey({ key: Buffer.concat([
    Buffer.from('302a300506032b6570032100', 'hex'), decodeBase64(publicKeyBase64, 32)
  ]), format: 'der', type: 'spki' });
  const db = new DatabaseSync(databasePath);
  db.exec('PRAGMA busy_timeout=5000');
  db.exec(`CREATE TABLE IF NOT EXISTS commerce_notifications (
    title_id TEXT NOT NULL, environment TEXT NOT NULL, event_id TEXT NOT NULL,
    order_id TEXT NOT NULL, event_type TEXT NOT NULL, order_version INTEGER NOT NULL,
    received_at INTEGER NOT NULL, handled_at INTEGER,
    PRIMARY KEY(title_id, environment, event_id)
  )`);
  const existing = db.prepare('SELECT order_id,event_type FROM commerce_notifications WHERE title_id=? AND environment=? AND event_id=?');
  const insert = db.prepare('INSERT INTO commerce_notifications(title_id,environment,event_id,order_id,event_type,order_version,received_at) VALUES(?,?,?,?,?,?,?)');

  return {
    /** rawBody must be the EXACT bytes received before any JSON parser. */
    receive(headers, rawBody, nowSeconds = Math.floor(Date.now() / 1000)) {
      if (!Buffer.isBuffer(rawBody) || rawBody.length > 1048576) reject('invalid_body_size', 413);
      const h = Object.fromEntries(Object.entries(headers).map(([name, value]) => [name.toLowerCase(), value]));
      if (h['x-glitch-signature-algorithm'] !== 'ed25519' || h['x-glitch-key-id'] !== keyId) reject('unexpected_signing_key_or_algorithm', 401);
      const timestamp = h['x-glitch-timestamp'];
      if (typeof timestamp !== 'string' || !/^[0-9]{1,12}$/.test(timestamp) || Math.abs(nowSeconds - Number(timestamp)) > 300) reject('expired_timestamp', 401);
      const signature = decodeBase64(h['x-glitch-signature'], 64);
      const signed = Buffer.concat([Buffer.from(timestamp + '.', 'ascii'), rawBody]);
      if (!verify(null, signed, publicKey, signature)) reject('invalid_signature', 401);
      let event;
      try { event = JSON.parse(rawBody.toString('utf8')); } catch { reject('invalid_json'); }
      if (!event || event.title_id !== titleId || event.environment !== environment || !uuid.test(event.id || '')
        || event.id !== h['x-glitch-event-id'] || typeof event.type !== 'string'
        || !Number.isSafeInteger(event.order_version) || event.order_version < 0
        || !event.authoritative_order || !uuid.test(event.authoritative_order.id || '')
        || event.authoritative_order.title_id !== titleId || event.authoritative_order.environment !== environment) reject('event_scope_mismatch', 401);
      const orderId = event.authoritative_order.id;
      let duplicate = false;
      db.exec('BEGIN IMMEDIATE');
      try {
        const prior = existing.get(titleId, environment, event.id);
        if (prior) {
          if (prior.order_id !== orderId || prior.event_type !== event.type) reject('event_identity_conflict', 409);
          duplicate = true;
        } else {
          // Queue IDs only. Aggregate balances in an older signed notification
          // are not safe to apply across out-of-order events from other orders.
          insert.run(titleId, environment, event.id, orderId, event.type, event.order_version, nowSeconds);
        }
        db.exec('COMMIT');
      } catch (error) { db.exec('ROLLBACK'); throw error; }
      // Retry bodies may carry refreshed authoritative facts. The stable event
      // identity is deduped; embedded inventory is NEVER reapplied on a retry.
      return { event_id: event.id, duplicate };
    },
    close() { db.close(); },
  };
}

/** Complete HTTP receiver. JSON/body middleware must not run before this handler. */
export function createDeliveryServer(inbox) {
  return createServer(async (request, response) => {
    if (request.method !== 'POST' || request.url !== '/glitch/commerce') { response.writeHead(404).end(); return; }
    try {
      const chunks = []; let size = 0;
      for await (const chunk of request) {
        size += chunk.length;
        if (size > 1048576) reject('invalid_body_size', 413);
        chunks.push(chunk);
      }
      const acknowledgement = inbox.receive(request.headers, Buffer.concat(chunks));
      response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      response.end(JSON.stringify(acknowledgement)); // Only after durable commit.
    } catch (error) {
      response.writeHead(error.status || 500, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' });
      response.end(JSON.stringify({ error: error.code || 'delivery_handling_failed' }));
      // Do not log raw payload, signatures, credentials or private player data.
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.umask(0o077); // Keep the new application inbox/journal private.
  const inbox = createDeliveryInbox({
    titleId: process.env.GLITCH_TITLE_ID,
    environment: process.env.GLITCH_COMMERCE_ENVIRONMENT,
    keyId: process.env.GLITCH_DELIVERY_KEY_ID,
    publicKeyBase64: process.env.GLITCH_DELIVERY_PUBLIC_KEY,
    databasePath: process.env.GAME_DELIVERY_DATABASE,
  });
  const server = createDeliveryServer(inbox);
  server.listen(Number(process.env.PORT || 8787), '127.0.0.1');
  const stop = () => server.close(() => { inbox.close(); process.exit(0); });
  process.once('SIGINT', stop); process.once('SIGTERM', stop);
}
