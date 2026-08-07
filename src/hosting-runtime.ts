import Hosting from './api/Hosting';
import Config from './config/Config';

declare global {
  interface Window {
    GlitchHosting?: {
      ready: Promise<Record<string, any>>;
      session?: Record<string, any>;
      getContext: () => Record<string, any> | null;
    };
  }
}

const script = document.currentScript as HTMLScriptElement | null;
const siteId = script?.dataset.glitchHostingSite || '';
const releaseId = script?.dataset.glitchHostingRelease || '';
const apiBase = script?.dataset.glitchApiBase || 'https://api.glitch.fun/api';
Config.setConfig(apiBase, '');

const ready = Hosting.startPlaySession<Record<string, any>>({
  hostname: window.location.hostname,
  hosting_site_id: siteId || undefined,
  hosting_release_id: releaseId || undefined,
  surface: 'gameplay',
}).then((response) => {
  const session = (response as any)?.data?.data || (response as any)?.data || response;
  if (window.GlitchHosting) window.GlitchHosting.session = session;
  window.dispatchEvent(new CustomEvent('glitch:hosting-ready', { detail: session }));
  const heartbeat = () => Hosting.heartbeatPlaySession(session.session_id, session.session_token).catch(() => undefined);
  const interval = window.setInterval(heartbeat, 60_000);
  window.addEventListener('pagehide', () => window.clearInterval(interval), { once: true });

  return session;
}).catch((error) => {
  window.dispatchEvent(new CustomEvent('glitch:hosting-error', { detail: { message: error?.message || 'Hosting analytics could not start.' } }));
  // Analytics must never prevent the uploaded game itself from loading.
  return null as any;
});

window.GlitchHosting = {
  ready,
  getContext: () => window.GlitchHosting?.session || null,
};

export {};
