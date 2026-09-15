import Route from './interface';
/** Consumer-facing commerce routes. Signed provider webhooks are deliberately not client APIs. */
declare class MicrotransactionsRoute {
    static routes: {
        [key: string]: Route;
    };
}
export default MicrotransactionsRoute;
