import Hosting from './api/Hosting';
import Config from './config/Config';

type HostedPreorderOffer = {
  id?: string;
  sku?: string;
  platform_code?: string;
  fulfillment_type?: string;
  state?: string;
  remaining?: number | null;
};

type HostedPreorderCatalog = {
  hosted_checkout_enabled?: boolean;
  offers?: HostedPreorderOffer[];
};

type HostedPreorderClient = {
  open: (options: {
    offerId: string;
    onComplete?: (order: Record<string, any>) => void;
    onClose?: (reason?: string) => void;
    onError?: (error: any) => void;
  }) => Promise<any>;
  restore?: (options?: {
    onClose?: (reason?: string) => void;
    onError?: (error: any) => void;
  }) => Promise<any>;
};

declare global {
  interface Window {
    GlitchHosting?: {
      ready: Promise<Record<string, any>>;
      session?: Record<string, any>;
      getContext: () => Record<string, any> | null;
    };
    GlitchPreorders?: HostedPreorderClient;
  }
}

const script = document.currentScript as HTMLScriptElement | null;
const siteId = script?.dataset.glitchHostingSite || '';
const releaseId = script?.dataset.glitchHostingRelease || '';
const apiBase = script?.dataset.glitchApiBase || 'https://api.glitch.fun/api';
const preorderScriptUrl =
  script?.dataset.glitchPreorderScript || 'https://www.glitch.fun/hosting/glitch-preorders.js';
Config.setConfig(apiBase, '');

const preorderSelector =
  '[data-glitch-preorder],[data-glitch-preorder-manage],[data-steam-cta],[data-glitch-cta]';
let hostedPreorderCatalogPromise: Promise<HostedPreorderCatalog> | null = null;
let preorderClientPromise: Promise<HostedPreorderClient> | null = null;
let checkoutOpen = false;

const emit = (name: string, detail: Record<string, any>) => {
  window.dispatchEvent(new CustomEvent(name, { detail }));
};

const fetchHostedPreorderCatalog = (): Promise<HostedPreorderCatalog> => {
  if (hostedPreorderCatalogPromise) return hostedPreorderCatalogPromise;
  hostedPreorderCatalogPromise = fetch(`${apiBase.replace(/\/$/, '')}/hosting/preorders/catalog`, {
    method: 'GET',
    mode: 'cors',
    credentials: 'omit',
    cache: 'no-store',
    headers: { Accept: 'application/json' },
  })
    .then(async (response) => {
      if (!response.ok) throw new Error(`Hosted preorder catalog returned HTTP ${response.status}.`);
      const json = await response.json();
      const data = (json?.data || json || {}) as HostedPreorderCatalog;
      if (!data.hosted_checkout_enabled) throw new Error('Hosted preorder checkout is disabled.');
      if (!Array.isArray(data.offers)) data.offers = [];
      return data;
    })
    .catch((error) => {
      hostedPreorderCatalogPromise = null;
      throw error;
    });
  return hostedPreorderCatalogPromise;
};

const loadPreorderClient = (): Promise<HostedPreorderClient> => {
  if (window.GlitchPreorders?.open) return Promise.resolve(window.GlitchPreorders);
  if (preorderClientPromise) return preorderClientPromise;

  preorderClientPromise = new Promise<HostedPreorderClient>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-glitch-hosted-preorders-runtime="1"]'
    );
    const runtimeScript = existing || document.createElement('script');
    const finish = () => {
      if (window.GlitchPreorders?.open) resolve(window.GlitchPreorders);
      else reject(new Error('Glitch hosted preorder runtime loaded without a checkout client.'));
    };

    runtimeScript.addEventListener('load', finish, { once: true });
    runtimeScript.addEventListener(
      'error',
      () => reject(new Error('Glitch hosted preorder runtime could not be loaded.')),
      { once: true }
    );

    if (!existing) {
      runtimeScript.src = preorderScriptUrl;
      runtimeScript.async = true;
      runtimeScript.dataset.glitchHostedPreordersRuntime = '1';
      runtimeScript.referrerPolicy = 'no-referrer';
      document.head.appendChild(runtimeScript);
    } else if (window.GlitchPreorders?.open) {
      finish();
    }
  }).catch((error) => {
    preorderClientPromise = null;
    throw error;
  });

  return preorderClientPromise;
};

const isAvailable = (offer?: HostedPreorderOffer) =>
  Boolean(
    offer &&
      offer.state === 'available' &&
      (offer.remaining === null || offer.remaining === undefined || Number(offer.remaining) > 0)
  );

const offerForElement = (
  element: HTMLElement,
  offers: HostedPreorderOffer[]
): HostedPreorderOffer | undefined => {
  const explicitId =
    element.dataset.glitchPreorderOfferId ||
    element.dataset.offerId;
  if (explicitId) {
    const byId = offers.find((offer) => offer.id === explicitId);
    if (byId) return byId;
  }

  const explicitSku =
    element.dataset.glitchPreorderSku ||
    element.dataset.preorderSku ||
    (element.dataset.glitchPreorder && element.dataset.glitchPreorder !== 'true'
      ? element.dataset.glitchPreorder
      : undefined);
  if (explicitSku) {
    const bySku = offers.find((offer) => offer.sku === explicitSku);
    if (bySku) return bySku;
  }

  if (element.hasAttribute('data-steam-cta')) {
    return offers.find((offer) => offer.platform_code === 'steam');
  }
  if (element.hasAttribute('data-glitch-cta')) {
    return offers.find(
      (offer) => offer.fulfillment_type === 'glitch_license' || offer.platform_code === 'glitch'
    );
  }

  return offers.find(isAvailable);
};

const fallbackNavigate = (element: HTMLElement) => {
  if (element instanceof HTMLAnchorElement && element.href) {
    window.location.assign(element.href);
  }
};

const focusAvailableAlternative = (
  selected: HostedPreorderOffer | undefined,
  offers: HostedPreorderOffer[]
) => {
  if (selected?.platform_code !== 'steam') return;
  const alternative = offers.find(
    (offer) =>
      isAvailable(offer) &&
      (offer.fulfillment_type === 'glitch_license' || offer.platform_code === 'glitch')
  );
  if (!alternative) return;
  const element = document.querySelector<HTMLElement>('[data-glitch-cta]');
  element?.focus({ preventScroll: false });
};

const initializeHostedPreorderBridge = () => {
  if (!document.querySelector(preorderSelector)) return;

  document.addEventListener(
    'click',
    (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const element = target.closest<HTMLElement>(preorderSelector);
      if (!element) return;

      event.preventDefault();

      if (checkoutOpen) return;

      void (async () => {
        try {
          const catalog = await fetchHostedPreorderCatalog();
          const offers = catalog.offers || [];

          if (element.hasAttribute('data-glitch-preorder-manage')) {
            const client = await loadPreorderClient();
            if (!client.restore) throw new Error('Hosted preorder management is unavailable.');
            checkoutOpen = true;
            emit('glitch:preorder-open', { mode: 'manage', hosting_site_id: siteId });
            await client.restore({
              onClose: (reason) => {
                checkoutOpen = false;
                emit('glitch:preorder-close', { mode: 'manage', reason });
              },
              onError: (error) => {
                checkoutOpen = false;
                emit('glitch:preorder-error', {
                  mode: 'manage',
                  message: error?.message || 'Preorder management could not be opened.',
                });
              },
            });
            return;
          }

          const offer = offerForElement(element, offers);
          if (!isAvailable(offer) || !offer?.id) {
            emit('glitch:preorder-unavailable', {
              offer_id: offer?.id,
              sku: offer?.sku,
              state: offer?.state || 'unavailable',
            });
            element.setAttribute('aria-disabled', 'true');
            focusAvailableAlternative(offer, offers);
            return;
          }

          const client = await loadPreorderClient();
          checkoutOpen = true;
          emit('glitch:preorder-open', {
            mode: 'purchase',
            offer_id: offer.id,
            sku: offer.sku,
            hosting_site_id: siteId,
          });

          await client.open({
            offerId: offer.id,
            onComplete: (order) => {
              hostedPreorderCatalogPromise = null;
              emit('glitch:preorder-complete', {
                order,
                offer_id: offer.id,
                sku: offer.sku,
              });
            },
            onClose: (reason) => {
              checkoutOpen = false;
              emit('glitch:preorder-close', {
                mode: 'purchase',
                offer_id: offer.id,
                sku: offer.sku,
                reason,
              });
            },
            onError: (error) => {
              checkoutOpen = false;
              emit('glitch:preorder-error', {
                mode: 'purchase',
                offer_id: offer.id,
                sku: offer.sku,
                message: error?.message || 'Preorder checkout could not be opened.',
              });
            },
          });
        } catch (error: any) {
          emit('glitch:preorder-error', {
            message: error?.message || 'Hosted preorder checkout is unavailable.',
          });
          fallbackNavigate(element);
        }
      })();
    },
    true
  );
};

const ready = Hosting.startPlaySession<Record<string, any>>({
  hostname: window.location.hostname,
  hosting_site_id: siteId || undefined,
  hosting_release_id: releaseId || undefined,
  surface: 'gameplay',
}).then((response) => {
  const session = (response as any)?.data?.data || (response as any)?.data || response;
  if (window.GlitchHosting) window.GlitchHosting.session = session;
  window.dispatchEvent(new CustomEvent('glitch:hosting-ready', { detail: session }));
  const heartbeat = () =>
    Hosting.heartbeatPlaySession(session.session_id, session.session_token).catch(() => undefined);
  const interval = window.setInterval(heartbeat, 60_000);
  window.addEventListener('pagehide', () => window.clearInterval(interval), { once: true });

  return session;
}).catch((error) => {
  window.dispatchEvent(
    new CustomEvent('glitch:hosting-error', {
      detail: { message: error?.message || 'Hosting analytics could not start.' },
    })
  );
  // Analytics must never prevent the uploaded game itself from loading.
  return null as any;
});

window.GlitchHosting = {
  ready,
  getContext: () => window.GlitchHosting?.session || null,
};

initializeHostedPreorderBridge();

export {};
