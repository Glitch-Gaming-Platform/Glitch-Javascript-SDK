declare global {
    interface Window {
        GlitchHosting?: {
            ready: Promise<Record<string, any>>;
            session?: Record<string, any>;
            getContext: () => Record<string, any> | null;
        };
    }
}
export {};
