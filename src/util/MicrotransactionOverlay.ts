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
  // Older purchase-session creation responses need not include an intent.
  const restoring = session.intent === 'restore';
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
  dialog.style.cssText = 'position:fixed;inset:0;margin:auto;padding:0;border:1px solid #cbd5e1;border-radius:16px;box-sizing:border-box;display:flex;flex-direction:column;width:min(1100px,calc(100vw - 32px));height:min(850px,calc(100vh - 32px));min-width:0;min-height:0;max-width:none;max-height:none;background:#fff;color:#172033;box-shadow:0 24px 90px #0008;z-index:2147483647;overflow:hidden;';
  const style = doc.createElement('style');
  style.textContent = `
    #${id}::backdrop{background:rgba(8,16,32,.72)}
    #${id} button:focus-visible{outline:3px solid #4263eb;outline-offset:3px}
    @supports(height:100dvh){#${id}{height:min(850px,calc(100dvh - 32px))!important}}
    @media(max-width:600px),(max-height:500px){
      #${id}{width:100%!important;height:100vh!important;border:0!important;border-radius:0!important;padding:env(safe-area-inset-top,0px) env(safe-area-inset-right,0px) env(safe-area-inset-bottom,0px) env(safe-area-inset-left,0px)!important}
      @supports(height:100dvh){#${id}{height:100dvh!important}}
    }`;
  // Natural-height chrome can wrap/scroll without consuming the entire frame.
  // No fixed header/status subtraction; the iframe owns all remaining space.
  const chrome = doc.createElement('div');
  chrome.style.cssText = 'flex:0 1 auto;min-width:0;min-height:0;max-height:50%;overflow:auto;overscroll-behavior:contain;';
  const header = doc.createElement('div');
  header.style.cssText = 'display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;padding:12px 16px;border-bottom:1px solid #e2e8f0;box-sizing:border-box;min-width:0;';
  const heading = doc.createElement('h2');
  heading.id = `${id}-title`;
  heading.textContent = options.label || (restoring ? 'Restore game purchases' : 'Secure game checkout');
  heading.style.cssText = 'flex:1 1 10rem;min-width:0;margin:0;font:600 17px/1.3 system-ui,sans-serif;color:#172033;white-space:normal;overflow-wrap:anywhere;';
  const closeButton = doc.createElement('button');
  closeButton.type = 'button';
  closeButton.textContent = 'Close';
  closeButton.setAttribute('aria-label', restoring ? 'Close restore and return to game' : 'Close checkout and return to game');
  closeButton.style.cssText = 'box-sizing:border-box;flex:1 1 auto;min-width:44px;min-height:44px;max-width:100%;height:auto;margin:0;border:1px solid #cbd5e1;border-radius:8px;padding:10px 14px;background:#fff;color:#172033;font:600 14px/1.4 system-ui,sans-serif;white-space:normal;overflow-wrap:anywhere;cursor:pointer;';
  const retryButton = doc.createElement('button');
  retryButton.type = 'button';
  retryButton.textContent = 'Retry';
  retryButton.setAttribute('aria-label', restoring ? 'Reload this same restore session' : 'Reload this same checkout without starting another purchase');
  retryButton.style.cssText = closeButton.style.cssText;
  closeButton.style.background = '#172033';
  closeButton.style.color = '#fff';
  const controls = doc.createElement('div');
  controls.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;min-width:0;max-width:100%;margin-left:auto;';
  controls.append(retryButton, closeButton);
  header.append(heading, controls);
  const status = doc.createElement('div');
  status.setAttribute('role', 'status');
  status.style.cssText = 'padding:6px 16px;font:12px/1.4 system-ui,sans-serif;background:#f1f5f9;color:#172033;box-sizing:border-box;white-space:normal;overflow-wrap:anywhere;';
  status.textContent = restoring ? 'Your game stays open. Loading secure restore…' : 'Your game stays open. Loading secure checkout…';
  const iframe = doc.createElement('iframe');
  iframe.title = heading.textContent;
  iframe.setAttribute('allow', 'payment');
  iframe.setAttribute('sandbox', 'allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox');
  iframe.referrerPolicy = 'no-referrer';
  iframe.style.cssText = 'display:block;flex:1 1 0%;min-width:0;min-height:0;width:100%;height:100%;margin:0;padding:0;border:0;background:#fff;';
  iframe.src = session.hosted_url;
  chrome.append(header, status);
  dialog.append(style, chrome, iframe);
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
  let retryPhase: 'idle' | 'blank' | 'checkout' | 'failed' = 'idle';
  let retryReady = false;
  const isBlankDocument = (): boolean => {
    // about:blank inherits our origin. A src attribute alone says nothing about
    // which document emitted load; an old checkout load can still be queued.
    try { return iframe.contentDocument?.URL === 'about:blank' && iframe.contentDocument.readyState === 'complete'; }
    catch { return false; }
  };
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
    if (retryPhase !== 'idle') { retryPhase = 'failed'; retryReady = false; }
    status.setAttribute('role', 'alert');
    const flow = restoring ? 'Restore' : 'Checkout';
    status.textContent = reason === 'ready'
      ? `${flow} did not become ready. Retry this same session or Close; your game remains open.`
      : `${flow} could not load here. Retry this same session or Close; your game remains open.`;
    report(new Error(restoring
      ? `Embedded restore ${reason === 'ready' ? 'readiness timed out' : 'loading unavailable'}; no navigation was attempted.`
      : reason === 'ready'
        ? 'Embedded checkout readiness timed out; no navigation or new payment was attempted.'
        : 'Embedded checkout loading unavailable; no navigation or new payment was attempted.'));
  };
  const markApplicationReady = (): void => {
    if (closed) return;
    // A verified claim from the previous document may finish while Retry is
    // navigating. Keep that claim, but it cannot certify the new document UI.
    if (retryPhase !== 'idle') return;
    applicationReady = true;
    clearWatchdogs();
    status.setAttribute('role', 'status');
    status.textContent = restoring ? 'Restore is ready. Your game remains open underneath.' : 'Checkout is ready. Your game remains open underneath.';
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
    // Keep the trap while close waits for an in-flight claim/inventory callback.
    if (event.key === 'Tab' && dialog.isConnected) {
      if (event.shiftKey && doc.activeElement === retryButton) { event.preventDefault(); iframe.focus(); }
      else if (!event.shiftKey && doc.activeElement === iframe) { event.preventDefault(); retryButton.focus(); }
    }
  };
  const onCancel = (event: Event): void => { event.preventDefault(); void overlay.close(); };
  // Keyboard events inside the cross-origin document do not reach onKey.
  // The hosted UI forwards Escape via this existing, strictly bound close message.
  const onCloseMessage = (event: MessageEvent<unknown>): void => {
    if (closed || event.origin !== options.checkoutOrigin || event.source !== frameWindow || !event.data || typeof event.data !== 'object') return;
    const message = event.data as Record<string, unknown>;
    if (message.version !== 1 || message.title_id !== options.titleId ||
        message.checkout_session_id !== session.id || message.nonce !== session.nonce) return;
    if (message.type === 'glitch.microtransaction.ready') {
      if (retryPhase === 'checkout' && !isBlankDocument()) retryReady = true;
      else if (retryPhase === 'idle') markApplicationReady();
      return;
    }
    if (message.type !== 'glitch.microtransaction.close') return;
    void overlay.close(verified ? 'completed' : 'dismissed');
  };
  const onFrameError = (): void => {
    // Events from the document being left cannot fail the blank navigation.
    // Its watchdog still bounds a missing/failed intermediate load.
    if (retryPhase === 'blank' || (retryPhase === 'checkout' && isBlankDocument())) return;
    unavailable('error');
  };
  const onFrameLoad = (): void => {
    if (closed) return;
    if (retryPhase === 'failed') return;
    if (retryPhase === 'blank') {
      if (!isBlankDocument()) return;
      retryPhase = 'checkout';
      armLoadWatchdog();
      iframe.src = session.hosted_url;
      return;
    }
    if (retryPhase === 'checkout') {
      if (isBlankDocument()) return;
      retryPhase = 'idle';
      if (retryReady) { retryReady = false; markApplicationReady(); return; }
    }
    if (frameLoadTimer !== undefined) win.clearTimeout(frameLoadTimer);
    frameLoadTimer = undefined;
    if (applicationReady) return;
    status.setAttribute('role', 'status');
    status.textContent = restoring ? 'Restore document loaded. Waiting for the secure restore interface…' : 'Checkout document loaded. Waiting for the secure checkout interface…';
    // A document load is not proof the app rendered. Repeated loads cannot
    // indefinitely extend this bounded wait; only explicit Retry resets it.
    if (appReadyTimer === undefined) appReadyTimer = win.setTimeout(() => unavailable('ready'), frameTimeout);
  };
  const overlay: MicrotransactionOverlay = {
    element: dialog, iframe, refresh,
    retry: () => {
      if (closed || retryPhase === 'blank' || retryPhase === 'checkout') return;
      status.textContent = restoring ? 'Retrying the same secure restore session. Your game stays open.' : 'Retrying the same secure checkout. Your game stays open.';
      status.setAttribute('role', 'status');
      retryPhase = 'blank';
      retryReady = false;
      armLoadWatchdog();
      // Bootstrap removes #token with replaceState. Reassigning the original
      // URL then only changes the fragment; it does not reload checkout/API.
      // Commit a harmless blank document first, then navigate this SAME iframe
      // to the exact original capability URL. Its WindowProxy/bridge stay pinned.
      iframe.src = 'about:blank';
    },
    close: (reason = 'dismissed') => {
      if (closing) return closing;
      if (closed) return Promise.resolve();
      closed = true;
      clearWatchdogs();
      retryPhase = 'failed';
      retryReady = false;
      status.setAttribute('role', 'status');
      status.textContent = restoring ? 'Finishing secure restore verification. Your game stays open.' : 'Finishing secure purchase verification. Your game stays open.';
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
