import { MicrotransactionCreatedCheckoutSession, MicrotransactionHandoffClaim, MicrotransactionOrder } from '../api/Microtransactions';
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
export declare function openMicrotransactionOverlay(options: MicrotransactionOverlayOptions): MicrotransactionOverlay;
/** Same in-game modal for anonymous-safe restore sessions; never opens a new payment. */
export declare function openMicrotransactionRestoreOverlay(options: MicrotransactionOverlayOptions): MicrotransactionOverlay;
