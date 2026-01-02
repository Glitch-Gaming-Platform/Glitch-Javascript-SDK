import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class DiscordMarketplaceRoute {
    public static routes: { [key: string]: Route } = {
        // Listings
        listListings: { url: '/discord-marketplace/listings', method: HTTP_METHODS.GET },
        createListing: { url: '/discord-marketplace/listings', method: HTTP_METHODS.POST },
        viewListing: { url: '/discord-marketplace/listings/{id}', method: HTTP_METHODS.GET },
        updateListing: { url: '/discord-marketplace/listings/{id}', method: HTTP_METHODS.PUT },
        deleteListing: { url: '/discord-marketplace/listings/{id}', method: HTTP_METHODS.DELETE },

        // Orders
        listOrders: { url: '/discord-marketplace/orders', method: HTTP_METHODS.GET },
        createOrder: { url: '/discord-marketplace/orders', method: HTTP_METHODS.POST },
        viewOrder: { url: '/discord-marketplace/orders/{id}', method: HTTP_METHODS.GET },
        approveOrder: { url: '/discord-marketplace/orders/{id}/approve', method: HTTP_METHODS.POST },
        rejectOrder: { url: '/discord-marketplace/orders/{id}/reject', method: HTTP_METHODS.POST },
        requestChanges: { url: '/discord-marketplace/orders/{id}/request-changes', method: HTTP_METHODS.POST },
        resubmitOrder: { url: '/discord-marketplace/orders/{id}/resubmit', method: HTTP_METHODS.POST },
    };
}

export default DiscordMarketplaceRoute;