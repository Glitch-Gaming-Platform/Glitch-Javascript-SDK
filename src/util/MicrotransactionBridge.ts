import type { MicrotransactionHandoffClaim } from '../api/Microtransactions';

/** A one-time notification, never a receipt or authorization to grant goods. */
export interface MicrotransactionPurchaseMessage {
  type: 'glitch.microtransaction.updated';
  version: 1;
  title_id: string;
  checkout_session_id: string;
  order_id: string;
  /** Cryptographically random value bound to the checkout session at creation. */
  nonce: string;
  /** Server-issued one-time code; not an account or player bearer token. */
  claim_code: string;
}

/** Exact authoritative /handoffs/claim response, not the hosted session DTO. */
export type MicrotransactionVerifiedSession = MicrotransactionHandoffClaim;

export interface MicrotransactionBridgeOptions<T extends MicrotransactionVerifiedSession> {
  titleId: string;
  checkoutSessionId: string;
  /** Exact trusted Glitch checkout origin, with no path, wildcard, or credentials. */
  checkoutOrigin: string;
  /** The actual Window returned by window.open or the checkout iframe.contentWindow. */
  checkoutWindow: Window;
  /** At least 128 bits of randomness; use createMicrotransactionNonce(). */
  nonce: string;
  /**
   * Exchange message.claim_code at Glitch using claimHandoff(titleId,
   * {claim_code, nonce, return_origin: window.location.origin,
   * checkout_session_id}). Return response.data.data, the actual claim DTO.
   * The message has already passed source/origin/nonce checks but is still NOT
   * proof of payment. The server validates and consumes the one-time code.
   * Never exchange a site-wide login token with the game or put credentials in
   * postMessage, analytics, logs, or query strings.
   */
  verify: (message: MicrotransactionPurchaseMessage) => Promise<T>;
  /**
   * Restore using the previously verified scoped token plus getOrder and
   * listEntitlements. Return the claim identity/token with current inventory.
   * Never redeem the code again. When its token expires, return the player to
   * the authenticated hosted flow to obtain a fresh scoped handoff.
   */
  refresh?: (previous: T) => Promise<T>;
  /** Refresh display/inventory from the verified result. Make local effects idempotent. */
  onVerified: (result: T) => void | Promise<void>;
  /** A failed refresh is not a failed payment. Keep the same session and retry. */
  onError?: (error: unknown) => void;
  /** Explicit local development only; production checkout must use HTTPS. */
  allowLocalDevelopment?: boolean;
  /** Defaults to window. Useful for browser integration tests. */
  eventTarget?: Pick<Window, 'addEventListener' | 'removeEventListener'>;
}

/** Restore authenticates an existing receipt in Glitch and creates a new session. */
export interface MicrotransactionRestoreBridgeOptions<T extends MicrotransactionVerifiedSession> extends Omit<MicrotransactionBridgeOptions<T>, 'checkoutSessionId'> {
  /** Previously verified receipt/order ID. This, not the old expired session ID, is pinned. */
  orderId: string;
}

export interface MicrotransactionBridge {
  /**
   * Refresh only after a successful claim, using options.refresh and its scoped
   * token. Concurrent refreshes share one request. A lost first-claim response
   * requires a fresh handoff from the authenticated hosted page, not code replay
   * or a new payment. No automatic polling or token refresh is performed.
   */
  refresh(): Promise<void>;
  /** Remove the listener. In-flight results cannot call onVerified after disposal. */
  dispose(): void;
}

/** Generate a 256-bit browser nonce. Fails closed without secure Web Crypto. */
export function createMicrotransactionNonce(): string {
  if (typeof globalThis.crypto?.getRandomValues !== 'function') {
    throw new Error('Secure Web Crypto is required for a checkout nonce.');
  }
  const bytes = new Uint8Array(32);
  globalThis.crypto.getRandomValues(bytes);
  return Array.from(bytes, value => value.toString(16).padStart(2, '0')).join('');
}

/**
 * Listen for Glitch-hosted, game-branded checkout changes with strict origin,
 * source, title, session, and nonce binding. Message data cannot grant an item.
 * The caller always verifies the session at Glitch before updating inventory.
 *
 * Prefer openMicrotransactionOverlay with the exact server-returned URL. The
 * game stays mounted; no top-level navigation fallback is permitted. If an
 * embedded flow is unavailable, show retry/close and preserve the game state.
 * refresh() requires an already verified claim. Keep
 * secrets in memory/session storage or a URL fragment, never query parameters.
 * Dispose on game unmount/account change. Reconnect restores ownership through
 * the authenticated entitlement API, not a saved "purchase successful" flag.
 */
export function createMicrotransactionBridge<T extends MicrotransactionVerifiedSession>(
  options: MicrotransactionBridgeOptions<T>
): MicrotransactionBridge {
  if (!options.checkoutSessionId) throw new Error('The original checkout session is required.');
  return createBridge(options, options.checkoutSessionId);
}

/**
 * Restore-only bridge for /games/:titleId/purchases/restore. Pin the prior order,
 * fresh nonce, exact Glitch origin and opened window. The hosted signed-in page
 * creates a NEW session; the server-verified claim must match that new session
 * and the pinned order. This does not relax purchase-session binding.
 *
 * Open the hosted restore page, never request the account JWT in the game.
 * verify(message) exchanges the code using message.checkout_session_id. All
 * duplicate-code, expiry and same-player refresh safeguards still apply.
 */
export function createMicrotransactionRestoreBridge<T extends MicrotransactionVerifiedSession>(
  options: MicrotransactionRestoreBridgeOptions<T>
): MicrotransactionBridge {
  if (!/^[A-Za-z0-9_:-]{1,160}$/.test(options.orderId)) throw new Error('The original verified order is required for restore.');
  return createBridge(options, undefined, options.orderId);
}

function createBridge<T extends MicrotransactionVerifiedSession>(
  options: MicrotransactionBridgeOptions<T> | MicrotransactionRestoreBridgeOptions<T>,
  checkoutSessionId?: string,
  expectedOrderId?: string
): MicrotransactionBridge {
  const origin = new URL(options.checkoutOrigin);
  const local = ['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname) || origin.hostname.endsWith('.test') || (origin.hostname === 'www.glitch.local' && origin.port === '3000');
  if (origin.origin !== options.checkoutOrigin || origin.username || origin.password ||
      (origin.protocol !== 'https:' && !(options.allowLocalDevelopment && local && origin.protocol === 'http:'))) {
    throw new Error('Checkout requires an exact trusted HTTPS origin.');
  }
  if (!options.checkoutWindow || !options.titleId ||
      !/^[A-Za-z0-9_-]{22,128}$/.test(options.nonce)) {
    throw new Error('Checkout window, title, session, and secure nonce are required.');
  }
  const target = options.eventTarget ?? window;
  let disposed = false;
  let inFlight: Promise<void> | undefined;
  let verified: T | undefined;
  const attemptedCodes = new Set<string>();

  const accept = async (result: T, orderId: string, sessionId: string): Promise<void> => {
    if (disposed) return;
    if (result.title_id !== options.titleId || result.checkout_session_id !== sessionId || result.order_id !== orderId ||
        (verified && verified.player_id !== result.player_id) ||
        typeof result.player_id !== 'string' || !result.player_id || typeof result.player_token !== 'string' || !result.player_token ||
        !Array.isArray(result.entitlements) || !Number.isFinite(Date.parse(result.expires_at)) || Date.parse(result.expires_at) <= Date.now()) {
      throw new Error('Checkout verification returned an invalid or differently bound claim.');
    }
    verified = result;
    await options.onVerified(result);
  };

  const refresh = (): Promise<void> => {
    if (disposed) return Promise.resolve();
    if (inFlight) return inFlight;
    if (!verified || !options.refresh) return Promise.reject(new Error('A verified claim and scoped-token refresh callback are required.'));
    const previous = verified;
    inFlight = Promise.resolve().then(() => options.refresh!(previous)).then(result => accept(result, previous.order_id, previous.checkout_session_id)).finally(() => { inFlight = undefined; });
    return inFlight;
  };

  const listener = (event: MessageEvent<unknown>): void => {
    if (disposed || event.origin !== options.checkoutOrigin || event.source !== options.checkoutWindow) return;
    const value = event.data;
    if (!value || typeof value !== 'object') return;
    const message = value as Partial<MicrotransactionPurchaseMessage>;
    if (message.type !== 'glitch.microtransaction.updated' || message.version !== 1 || message.title_id !== options.titleId ||
        (checkoutSessionId && message.checkout_session_id !== checkoutSessionId) || message.nonce !== options.nonce ||
        typeof message.checkout_session_id !== 'string' || !/^[A-Za-z0-9_:-]{1,160}$/.test(message.checkout_session_id) ||
        (expectedOrderId && message.order_id !== expectedOrderId) ||
        typeof message.order_id !== 'string' || !/^[A-Za-z0-9_:-]{1,160}$/.test(message.order_id) ||
        typeof message.claim_code !== 'string' || !/^[A-Za-z0-9_-]{40,128}$/.test(message.claim_code)) return;
    if (inFlight || attemptedCodes.has(message.claim_code) || attemptedCodes.size >= 8) return;
    if (verified && (verified.order_id !== message.order_id || verified.checkout_session_id !== message.checkout_session_id)) return;
    // Mark BEFORE network I/O. Even a timeout can mean the server consumed it.
    attemptedCodes.add(message.claim_code);
    const handoff = message as MicrotransactionPurchaseMessage;
    inFlight = Promise.resolve().then(() => options.verify(handoff)).then(result => accept(result, handoff.order_id, handoff.checkout_session_id)).finally(() => { inFlight = undefined; });
    void inFlight.catch(error => {
      if (!disposed) options.onError?.(error);
    });
  };
  target.addEventListener('message', listener as EventListener);
  return {
    refresh,
    dispose: () => {
      disposed = true;
      verified = undefined;
      attemptedCodes.clear();
      target.removeEventListener('message', listener as EventListener);
    },
  };
}
