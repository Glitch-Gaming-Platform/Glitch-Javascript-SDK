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
export declare function createMicrotransactionNonce(): string;
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
export declare function createMicrotransactionBridge<T extends MicrotransactionVerifiedSession>(options: MicrotransactionBridgeOptions<T>): MicrotransactionBridge;
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
export declare function createMicrotransactionRestoreBridge<T extends MicrotransactionVerifiedSession>(options: MicrotransactionRestoreBridgeOptions<T>): MicrotransactionBridge;
