import MediaRoute from "../routes/MediaRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosProgressEvent, AxiosPromise } from "axios";

export interface SteamCapsuleCropRequest {
    media_id: string;
    capsule_type: 'header' | 'small' | 'main' | 'vertical' | 'library' | 'library_header' | 'library_hero' | 'page_background' | 'screenshot' | 'app_icon' | 'shortcut_icon';
    crop_x?: number;
    crop_y?: number;
    crop_width?: number;
    crop_height?: number;
}

export interface SteamCapsuleAnalysisRequest {
    media_id: string;
    capsule_type: 'header' | 'small' | 'main' | 'vertical' | 'library' | 'library_header' | 'library_hero' | 'page_background';
    game_name?: string;
    game_genre?: string;
}

export interface RemoveBackgroundRequest {
    media_id: string;
    output_format?: 'png' | 'webp';
}

export interface RemoveBackgroundAIRequest {
    media_id: string;
    use_ai_analysis?: boolean;
}

export interface CreateLibraryLogoRequest {
    media_id: string;
    target_width?: number;
    target_height?: number;
}

export interface ValidateScreenshotRequest {
    media_id: string;
}

export interface SteamCapsuleDimensions {
    width: number;
    height: number;
}

export interface SteamCapsuleCropResponse {
    media: any;
    download_url: string;
    dimensions: SteamCapsuleDimensions;
    capsule_type: string;
}

export interface CategoryScores {
    visual_hierarchy: number;
    title_readability: number;
    genre_communication: number;
    brand_identity: number;
    composition_balance: number;
    art_style: number;
    emotional_impact: number;
    steam_compliance: number;
}

export interface SteamCapsuleAnalysisResponse {
    media_id: string;
    capsule_type: string;
    dimensions: SteamCapsuleDimensions;
    overall_score: number;
    category_scores: CategoryScores;
    strengths: string[];
    improvements: string[];
    recommendations: string[];
    ai_description: string;
    guidelines: any;
}

export interface RemoveBackgroundResponse {
    success: boolean;
    message: string;
    data: any;
}

export interface RemoveBackgroundAIResponse {
    success: boolean;
    message: string;
    data: any;
    ai_used: boolean;
}

export interface CreateLibraryLogoResponse {
    success: boolean;
    message: string;
    data: any;
}

export interface ScreenshotValidationResponse {
    success: boolean;
    valid: boolean;
    dimensions: SteamCapsuleDimensions;
    aspect_ratio: number;
    issues: string[];
    recommendations: string[];
}

class Media {
    /**
     * Upload media content using a File object.
     * 
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     * 
     * @param file The file object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>> {
        return Requests.uploadFile(MediaRoute.routes.upload.url, 'media', file, data, params, onUploadProgress);
    }

    /**
     * Upload media content using a Blob.
     * 
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/uploadMedia
     * 
     * @param blob The Blob object to upload.
     * @param data Any additional data to pass along to the upload.
     * 
     * @returns promise
     */
    public static uploadBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>> {
        return Requests.uploadBlob(MediaRoute.routes.upload.url, 'media', blob, data, params, onUploadProgress);
    }

    /**
     * Get media details.
     * 
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     * 
     * @param id The ID of the media item.
     * 
     * @returns promise
     */
    public static get<T>(media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>> {
        return Requests.processRoute(MediaRoute.routes.getMedia, {}, { media_id: media_id }, params);
    }

    /**
     * Crop and resize an image to Steam capsule dimensions.
     * 
     * @param request The crop request parameters.
     * @param params Additional query parameters.
     * 
     * @returns promise
     */
    public static cropSteamCapsule(request: SteamCapsuleCropRequest, params?: Record<string, any>): AxiosPromise<Response<SteamCapsuleCropResponse>> {
        return Requests.processRoute(MediaRoute.routes.cropSteamCapsule, request, {}, params);
    }

    /**
     * Analyze a Steam capsule image using AI.
     * 
     * @param request The analysis request parameters.
     * @param params Additional query parameters.
     * 
     * @returns promise
     */
    public static analyzeSteamCapsule(request: SteamCapsuleAnalysisRequest, params?: Record<string, any>): AxiosPromise<Response<SteamCapsuleAnalysisResponse>> {
        return Requests.processRoute(MediaRoute.routes.analyzeSteamCapsule, request, {}, params);
    }

    /**
     * Remove background from an image to create transparent PNG.
     * 
     * @param request The background removal request parameters.
     * @param params Additional query parameters.
     * 
     * @returns promise
     */
    public static removeBackground(request: RemoveBackgroundRequest, params?: Record<string, any>): AxiosPromise<Response<RemoveBackgroundResponse>> {
        return Requests.processRoute(MediaRoute.routes.removeBackground, request, {}, params);
    }

    /**
     * Remove background from an image using AI analysis for better results.
     * 
     * @param request The AI-enhanced background removal request parameters.
     * @param params Additional query parameters.
     * 
     * @returns promise
     */
    public static removeBackgroundAI(request: RemoveBackgroundAIRequest, params?: Record<string, any>): AxiosPromise<Response<RemoveBackgroundAIResponse>> {
        return Requests.processRoute(MediaRoute.routes.removeBackgroundAI, request, {}, params);
    }

    /**
     * Create a Steam Library Logo meeting Steam's requirements.
     * 
     * @param request The library logo creation request parameters.
     * @param params Additional query parameters.
     * 
     * @returns promise
     */
    public static createLibraryLogo(request: CreateLibraryLogoRequest, params?: Record<string, any>): AxiosPromise<Response<CreateLibraryLogoResponse>> {
        return Requests.processRoute(MediaRoute.routes.createLibraryLogo, request, {}, params);
    }

    /**
     * Validate a screenshot against Steam's requirements.
     * 
     * @param request The screenshot validation request parameters.
     * @param params Additional query parameters.
     * 
     * @returns promise
     */
    public static validateScreenshot(request: ValidateScreenshotRequest, params?: Record<string, any>): AxiosPromise<Response<ScreenshotValidationResponse>> {
        return Requests.processRoute(MediaRoute.routes.validateScreenshot, request, {}, params);
    }

    /**
     * Get Steam capsule dimensions for a specific type.
     * 
     * @param capsuleType The type of Steam capsule.
     * 
     * @returns The dimensions object or null if invalid type.
     */
    public static getSteamCapsuleDimensions(capsuleType: string): SteamCapsuleDimensions | null {
        const dimensions: Record<string, SteamCapsuleDimensions> = {
            'header': { width: 920, height: 430 },
            'small': { width: 462, height: 174 },
            'main': { width: 1232, height: 706 },
            'vertical': { width: 748, height: 896 },
            'library': { width: 600, height: 900 },
            'library_header': { width: 920, height: 430 },
            'library_hero': { width: 3840, height: 1240 },
            'page_background': { width: 1438, height: 810 }
        };

        return dimensions[capsuleType] || null;
    }

    /**
     * Get Steam capsule type information and requirements.
     * 
     * @param capsuleType The type of Steam capsule.
     * 
     * @returns Information about the capsule type.
     */
    public static getSteamCapsuleInfo(capsuleType: string) {
        const info: Record<string, any> = {
            'header': {
                name: 'Header Capsule',
                purpose: 'Appears at the top of store page, in recommended sections, grid view in libraries',
                textRequirement: 'Logo must be clearly legible',
                designFocus: 'Focus on branding of your product'
            },
            'small': {
                name: 'Small Capsule',
                purpose: 'Used for all lists throughout Steam: search results, top-sellers, new releases',
                textRequirement: 'Logo should nearly fill the small capsule for readability',
                designFocus: 'Focus on making logo clearly legible at smallest size'
            },
            'main': {
                name: 'Main Capsule',
                purpose: 'Appears at top of front page in featured and recommended carousel',
                textRequirement: 'Logo should be prominent and readable',
                designFocus: 'Designed to market the product with key art and logo'
            },
            'vertical': {
                name: 'Vertical Capsule',
                purpose: 'Can appear at top of front page during seasonal sales',
                textRequirement: 'Logo should be clearly visible',
                designFocus: 'Vertical asset designed to market your game'
            },
            'library': {
                name: 'Library Capsule',
                purpose: 'Used in library overview and collection views',
                textRequirement: 'Game name/logo should be easily legible against background',
                designFocus: 'Graphically-centric to give user sense of experience'
            },
            'library_header': {
                name: 'Library Header',
                purpose: 'Appears in various places in Steam Client Library',
                textRequirement: 'Logo must be clearly legible',
                designFocus: 'Focus on branding, similar to Library Capsule'
            },
            'library_hero': {
                name: 'Library Hero',
                purpose: 'Appears at top of user\'s library details page',
                textRequirement: 'Should NOT contain any text or logos',
                designFocus: 'Visually rich, easily recognizable key art'
            },
            'page_background': {
                name: 'Page Background',
                purpose: 'Background image for store page',
                textRequirement: 'Minimal or no text',
                designFocus: 'Should be ambient, not compete with page content'
            }
        };

        return info[capsuleType] || null;
    }

    /**
     * Get Steam screenshot requirements.
     * 
     * @returns Screenshot requirements object.
     */
    public static getSteamScreenshotRequirements() {
        return {
            minWidth: 1920,
            minHeight: 1080,
            aspectRatio: 16 / 9,
            minCount: 5,
            format: 'Should be high-res, widescreen format',
            content: 'Should show gameplay, not menus or concept art'
        };
    }

    /**
     * Get Steam library logo requirements.
     * 
     * @returns Library logo requirements object.
     */
    public static getSteamLibraryLogoRequirements() {
        return {
            maxWidth: 1280,
            maxHeight: 720,
            format: 'PNG with transparent background',
            requirement: 'Either 1280px wide and/or 720px tall',
            content: 'Logo only, should be legible against any background'
        };
    }

    /**
     * Upload an audio file to TikTok's asset library via our Media controller.
     * 
     * @param file The audio file (mp3).
     * @param scheduler_id The ID of the scheduler to provide OAuth context.
     */
    public static uploadTikTokMusic<T>(file: File, scheduler_id: string): AxiosPromise<Response<T>> {
        // We use the raw URL here as it's a specialized upload path
        return Requests.uploadFile('/media/tiktok/music', 'audio', file, { scheduler_id });
    }
}

export default Media;