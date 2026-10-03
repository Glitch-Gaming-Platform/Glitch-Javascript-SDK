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
export {};
