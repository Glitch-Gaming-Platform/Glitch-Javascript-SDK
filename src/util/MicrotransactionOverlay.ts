import Microtransactions, { MicrotransactionCheckoutSession, MicrotransactionCreatedCheckoutSession, MicrotransactionHandoffClaim, MicrotransactionOrder } from '../api/Microtransactions';
import { createMicrotransactionBridge, MicrotransactionBridge } from './MicrotransactionBridge';

export interface MicrotransactionOverlayOptions {
  titleId: string;
  /** Exact configured Glitch HTTPS origin, never taken from postMessage data. */
  checkoutOrigin: string;
  /** Result of createCheckoutSession or createRestoreSession; keep its capability private. */
  session: MicrotransactionCreatedCheckoutSession;
  /** Replace displayed inventory from verified backend data; never increment blindly. */
  onVerified: (claim: MicrotransactionHandoffClaim) => void | Promise<void>;
  /** Pause game input/audio here. The SDK never unmounts or resets the game. */
  onOpen?: () => void;
  /** Resume game input/audio here. Called once, even on escape/error cleanup. */
  onClose?: (reason: 'dismissed' | 'completed' | 'unavailable') => void;
  /** Receipt/status-only update after close; this callback does not authorize item grants. */
  onOrderUpdate?: (order: MicrotransactionOrder | null) => void | Promise<void>;
  onError?: (error: unknown) => void;
  label?: string;
  /** Permit HTTP loopback/.test origins only for explicit local development. */
  allowLocalDevelopment?: boolean;
  /** Defaults to the caller's document, including when the game itself is embedded. */
  document?: Document;
  /** Bounded network timeout; defaults to 15 seconds. */
  timeoutMs?: number;
  /** Per-phase iframe load/application-ready timeout; 1–60 seconds, defaults to 20 seconds. */
  frameLoadTimeoutMs?: number;
}

/** Hosted page signals usable checkout/account UI, never payment or inventory authority. */
export interface MicrotransactionReadyMessage {
  type: 'glitch.microtransaction.ready';
  version: 1;
  title_id: string;
  checkout_session_id: string;
  nonce: string;
}

export interface MicrotransactionOverlay {
  readonly element: HTMLDialogElement;
  readonly iframe: HTMLIFrameElement;
  /** Refresh verified inventory, or limited receipt status before the first claim. */
  refresh(): Promise<void>;
  /** Removes only this modal, restores focus/input, and refreshes authoritative state. */
  close(reason?: 'dismissed' | 'completed' | 'unavailable'): Promise<void>;
  /** Reload only the same checkout iframe/session. Never starts another payment. */
  retry(): void;
}

let overlaySequence = 0;
const activeOverlays = new WeakMap<Document, MicrotransactionOverlay>();

/**
 * Mount Glitch checkout IN the running game. The game document, URL and session
 * stay intact. Uses a modal dialog with focus restore and a sandboxed payment
 * iframe. No top-navigation permission or top-level/popup-blocked fallback exists.
 * Only bank/OAuth verification may open a controlled provider window from inside
 * the frame. If embedding is unavailable, show retry/close instead of navigating.
 *
 * Receipt messages must originate from this exact iframe.contentWindow and pass
 * origin/title/session/nonce checks. The SDK redeems the one-time claim at Glitch
 * and uses the returned scoped player token only on commerce requests. Closing
 * does not cancel an uncertain payment, grant goods, or discard the game state.
 */
export function openMicrotransactionOverlay(options: MicrotransactionOverlayOptions): MicrotransactionOverlay {
  const doc = options.document ?? document;
  const win = doc.defaultView;
  if (!win || !doc.body) throw new Error('A mounted game document is required.');
  if (activeOverlays.has(doc)) throw new Error('A checkout is already open. Resume or close that same purchase first.');
  const session = options.session;
  const parsed = new URL(session.hosted_url);
  const path = `/games/${encodeURIComponent(options.titleId)}/checkout/${encodeURIComponent(session.id)}`;
  if (parsed.origin !== options.checkoutOrigin || parsed.pathname !== path || parsed.search || parsed.username || parsed.password ||
      new URLSearchParams(parsed.hash.slice(1)).get('token') !== session.session_token || !session.session_token ||
      (session.checkout_session_id && session.checkout_session_id !== session.id)) {
    throw new Error('The hosted checkout URL does not match its title, session and capability.');
  }
  const timeout = Math.min(60000, Math.max(1000, options.timeoutMs ?? 15000));
  const requestedFrameTimeout = options.frameLoadTimeoutMs ?? 20000;
  const frameTimeout = Number.isFinite(requestedFrameTimeout) ? Math.min(60000, Math.max(1000, requestedFrameTimeout)) : 20000;
  const beforeFocus = doc.activeElement as HTMLElement | null;
  const beforeOverflow = doc.body.style.overflow;
  const dialog = doc.createElement('dialog');
  const id = `glitch-commerce-modal-${++overlaySequence}`;
  dialog.id = id;
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-labelledby', `${id}-title`);
  dialog.setAttribute('role', 'dialog');
  dialog.style.cssText = 'position:fixed;inset:16px;margin:auto;padding:0;border:1px solid #cbd5e1;border-radius:16px;width:min(1100px,calc(100vw - 32px));height:min(850px,calc(100dvh - 32px));max-width:none;max-height:none;background:#fff;color:#172033;box-shadow:0 24px 90px #0008;z-index:2147483647;overflow:hidden;';
  const style = doc.createElement('style');
  style.textContent = `#${id}::backdrop{background:rgba(8,16,32,.72)}#${id} button:focus-visible{outline:3px solid #4263eb;outline-offset:3px}@media(max-width:600px){#${id}{inset:0!important;width:100vw!important;height:100dvh!important;border-radius:0!important}}`;
  const header = doc.createElement('div');
  header.style.cssText = 'display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 16px;border-bottom:1px solid #e2e8f0;height:56px;box-sizing:border-box;';
  const heading = doc.createElement('h2');
  heading.id = `${id}-title`;
  heading.textContent = options.label || (session.intent === 'restore' ? 'Restore game purchases' : 'Secure game checkout');
  heading.style.cssText = 'margin:0;font:600 17px/1.3 system-ui,sans-serif;color:#172033;';
  const closeButton = doc.createElement('button');
  closeButton.type = 'button';
  closeButton.textContent = 'Close';
  closeButton.setAttribute('aria-label', 'Close checkout and return to game');
  closeButton.style.cssText = 'border:1px solid #cbd5e1;border-radius:8px;padding:7px 14px;background:#fff;color:#172033;font:600 14px system-ui,sans-serif;cursor:pointer;';
  const retryButton = doc.createElement('button');
  retryButton.type = 'button';
  retryButton.textContent = 'Retry';
  retryButton.setAttribute('aria-label', 'Reload this same checkout without starting another purchase');
  retryButton.style.cssText = closeButton.style.cssText;
  const controls = doc.createElement('div');
  controls.style.cssText = 'display:flex;gap:8px;';
  controls.append(retryButton, closeButton);
  header.append(heading, controls);
  const status = doc.createElement('div');
  status.setAttribute('role', 'status');
  status.style.cssText = 'padding:6px 16px;font:12px/1.4 system-ui,sans-serif;background:#f1f5f9;color:#172033;min-height:28px;box-sizing:border-box;';
  status.textContent = 'Your game stays open. Loading secure checkout…';
  const iframe = doc.createElement('iframe');
  iframe.title = heading.textContent;
  iframe.setAttribute('allow', 'payment');
  iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox');
  iframe.referrerPolicy = 'no-referrer';
  iframe.style.cssText = 'display:block;width:100%;height:calc(100% - 84px);border:0;background:#fff;';
  iframe.src = session.hosted_url;
  dialog.append(style, header, status, iframe);
  doc.body.append(dialog);
  const frameWindow = iframe.contentWindow;
  if (!frameWindow) { dialog.remove(); throw new Error('In-game checkout embedding is unavailable. Your game has not navigated.'); }

  let closed = false;
  let closing: Promise<void> | undefined;
  let verified: MicrotransactionHandoffClaim | undefined;
  let bridge: MicrotransactionBridge;
  let frameLoadTimer: number | undefined;
  let appReadyTimer: number | undefined;
  let applicationReady = false;
  const blocked: Array<{ element: HTMLElement; inert: boolean; ariaHidden: string | null }> = [];
  const report = (error: unknown): void => { try { options.onError?.(error); } catch { /* Consumer error handlers cannot prevent modal cleanup. */ } };
  const clearWatchdogs = (): void => {
    if (frameLoadTimer !== undefined) win.clearTimeout(frameLoadTimer);
    if (appReadyTimer !== undefined) win.clearTimeout(appReadyTimer);
    frameLoadTimer = undefined;
    appReadyTimer = undefined;
  };
  const unavailable = (reason: 'load' | 'ready' | 'error'): void => {
    if (closed) return;
    clearWatchdogs();
    status.setAttribute('role', 'alert');
    status.textContent = reason === 'ready'
      ? 'Checkout did not become ready. Retry this same checkout or Close; your game remains open.'
      : 'Checkout could not load here. Retry this same checkout or Close; your game remains open.';
    report(new Error(reason === 'ready'
      ? 'Embedded checkout readiness timed out; no navigation or new payment was attempted.'
      : 'Embedded checkout loading unavailable; no navigation or new payment was attempted.'));
  };
  const markApplicationReady = (): void => {
    if (closed) return;
    applicationReady = true;
    clearWatchdogs();
    status.setAttribute('role', 'status');
    status.textContent = 'Checkout is ready. Your game remains open underneath.';
  };
  const armLoadWatchdog = (): void => {
    clearWatchdogs();
    applicationReady = false;
    frameLoadTimer = win.setTimeout(() => unavailable('load'), frameTimeout);
  };
  const receipt = async (): Promise<void> => {
    const response = await Microtransactions.getCheckoutSession(options.titleId, session.id, { checkoutToken: session.session_token, timeout });
    const current: MicrotransactionCheckoutSession = response.data.data;
    if (current.id !== session.id || current.title.id !== options.titleId) throw new Error('Checkout status returned a different title or session.');
    await options.onOrderUpdate?.(current.order);
  };
  try {
    bridge = createMicrotransactionBridge({
      titleId: options.titleId, checkoutSessionId: session.id, checkoutOrigin: options.checkoutOrigin,
      checkoutWindow: frameWindow, nonce: session.nonce, eventTarget: win,
      allowLocalDevelopment: options.allowLocalDevelopment,
      verify: async message => (await Microtransactions.claimHandoff(options.titleId, {
        claim_code: message.claim_code, checkout_session_id: session.id, nonce: session.nonce, return_origin: win.location.origin,
      }, { timeout })).data.data,
      refresh: async previous => {
        const auth = { playerToken: previous.player_token, timeout };
        const order = (await Microtransactions.getOrder(options.titleId, previous.order_id, auth)).data.data;
        if (order.id !== previous.order_id || order.title_id !== options.titleId) throw new Error('Restored order identity mismatch.');
        const inventory = (await Microtransactions.listEntitlements(options.titleId, undefined, auth)).data.data;
        await options.onOrderUpdate?.(order);
        return { ...previous, entitlements: inventory.entitlements };
      },
      onVerified: async result => { markApplicationReady(); verified = result; await options.onVerified(result); },
      onError: report,
    });
  } catch (error) { dialog.remove(); throw error; }

  const refresh = async (): Promise<void> => {
    if (verified) await bridge.refresh();
    else await receipt();
  };
  const onKey = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') { event.preventDefault(); void overlay.close(); }
    if (event.key === 'Tab' && !closed) {
      if (event.shiftKey && doc.activeElement === retryButton) { event.preventDefault(); iframe.focus(); }
      else if (!event.shiftKey && doc.activeElement === iframe) { event.preventDefault(); retryButton.focus(); }
    }
  };
  const onCancel = (event: Event): void => { event.preventDefault(); void overlay.close(); };
  const onCloseMessage = (event: MessageEvent<unknown>): void => {
    if (closed || event.origin !== options.checkoutOrigin || event.source !== frameWindow || !event.data || typeof event.data !== 'object') return;
    const message = event.data as Record<string, unknown>;
    if (message.version !== 1 || message.title_id !== options.titleId ||
        message.checkout_session_id !== session.id || message.nonce !== session.nonce) return;
    if (message.type === 'glitch.microtransaction.ready') { markApplicationReady(); return; }
    if (message.type !== 'glitch.microtransaction.close') return;
    void overlay.close(verified ? 'completed' : 'dismissed');
  };
  const onFrameError = (): void => { unavailable('error'); };
  const onFrameLoad = (): void => {
    if (closed) return;
    if (frameLoadTimer !== undefined) win.clearTimeout(frameLoadTimer);
    frameLoadTimer = undefined;
    if (applicationReady) return;
    status.setAttribute('role', 'status');
    status.textContent = 'Checkout document loaded. Waiting for the secure checkout interface…';
    // A document load is not proof the app rendered. Repeated loads cannot
    // indefinitely extend this bounded wait; only explicit Retry resets it.
    if (appReadyTimer === undefined) appReadyTimer = win.setTimeout(() => unavailable('ready'), frameTimeout);
  };
  const overlay: MicrotransactionOverlay = {
    element: dialog, iframe, refresh,
    retry: () => {
      if (closed) return;
      status.textContent = 'Retrying the same secure checkout. Your game stays open.';
      status.setAttribute('role', 'status');
      armLoadWatchdog();
      iframe.src = session.hosted_url;
    },
    close: (reason = 'dismissed') => {
      if (closing) return closing;
      if (closed) return Promise.resolve();
      closed = true;
      clearWatchdogs();
      status.textContent = 'Finishing secure purchase verification. Your game stays open.';
      closing = (async () => {
        try {
          // The dialog remains mounted until in-flight claim AND inventory callback finish.
          try { await bridge.refresh(); } catch (error) { if (verified) throw error; }
        } catch (error) { report(error); }
        finally {
          win.removeEventListener('keydown', onKey, true);
          win.removeEventListener('message', onCloseMessage);
          dialog.removeEventListener('cancel', onCancel);
          iframe.removeEventListener('load', onFrameLoad);
          iframe.removeEventListener('error', onFrameError);
          dialog.remove();
          doc.body.style.overflow = beforeOverflow;
          for (const item of blocked) {
            item.element.inert = item.inert;
            if (item.ariaHidden === null) item.element.removeAttribute('aria-hidden');
            else item.element.setAttribute('aria-hidden', item.ariaHidden);
          }
          activeOverlays.delete(doc);
          beforeFocus?.isConnected && beforeFocus.focus();
          try { options.onClose?.(reason); } catch (error) { report(error); }
          // No claimed player token means status-only recovery, never a grant.
          if (!verified) { try { await receipt(); } catch (error) { report(error); } }
          bridge.dispose();
        }
      })();
      return closing;
    },
  };
  closeButton.addEventListener('click', () => { void overlay.close(); });
  retryButton.addEventListener('click', overlay.retry);
  iframe.addEventListener('error', onFrameError);
  iframe.addEventListener('load', onFrameLoad);
  dialog.addEventListener('cancel', onCancel);
  win.addEventListener('keydown', onKey, true);
  win.addEventListener('message', onCloseMessage);
  doc.body.style.overflow = 'hidden';
  if (typeof dialog.showModal === 'function') {
    try { dialog.showModal(); } catch (error) { void overlay.close('unavailable'); throw error; }
  } else {
    dialog.setAttribute('open', '');
    for (const child of Array.from(doc.body.children)) {
      if (child !== dialog && child instanceof win.HTMLElement) {
        const element = child as HTMLElement;
        blocked.push({ element, inert: element.inert, ariaHidden: element.getAttribute('aria-hidden') });
        element.inert = true;
        element.setAttribute('aria-hidden', 'true');
      }
    }
  }
  activeOverlays.set(doc, overlay);
  closeButton.focus();
  try { options.onOpen?.(); } catch (error) { void overlay.close('unavailable'); throw error; }
  if (!closed) armLoadWatchdog();
  return overlay;
}

/** Same in-game modal for anonymous-safe restore sessions; never opens a new payment. */
export function openMicrotransactionRestoreOverlay(options: MicrotransactionOverlayOptions): MicrotransactionOverlay {
  if (options.session.intent !== 'restore') throw new Error('Create a restore session before opening purchase recovery.');
  return openMicrotransactionOverlay(options);
}
