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
declare class Media {
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
    static uploadFile<T>(file: File, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
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
    static uploadBlob<T>(blob: Blob, data?: object, params?: Record<string, any>, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void): AxiosPromise<Response<T>>;
    /**
     * Get media details.
     *
     * @see https://api.glitch.fun/api/documentation#/Media%20Route/getMedia
     *
     * @param id The ID of the media item.
     *
     * @returns promise
     */
    static get<T>(media_id: string, params?: Record<string, any>): AxiosPromise<Response<T>>;
    /**
     * Crop and resize an image to Steam capsule dimensions.
     *
     * @param request The crop request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static cropSteamCapsule(request: SteamCapsuleCropRequest, params?: Record<string, any>): AxiosPromise<Response<SteamCapsuleCropResponse>>;
    /**
     * Analyze a Steam capsule image using AI.
     *
     * @param request The analysis request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static analyzeSteamCapsule(request: SteamCapsuleAnalysisRequest, params?: Record<string, any>): AxiosPromise<Response<SteamCapsuleAnalysisResponse>>;
    /**
     * Remove background from an image to create transparent PNG.
     *
     * @param request The background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static removeBackground(request: RemoveBackgroundRequest, params?: Record<string, any>): AxiosPromise<Response<RemoveBackgroundResponse>>;
    /**
     * Remove background from an image using AI analysis for better results.
     *
     * @param request The AI-enhanced background removal request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static removeBackgroundAI(request: RemoveBackgroundAIRequest, params?: Record<string, any>): AxiosPromise<Response<RemoveBackgroundAIResponse>>;
    /**
     * Create a Steam Library Logo meeting Steam's requirements.
     *
     * @param request The library logo creation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static createLibraryLogo(request: CreateLibraryLogoRequest, params?: Record<string, any>): AxiosPromise<Response<CreateLibraryLogoResponse>>;
    /**
     * Validate a screenshot against Steam's requirements.
     *
     * @param request The screenshot validation request parameters.
     * @param params Additional query parameters.
     *
     * @returns promise
     */
    static validateScreenshot(request: ValidateScreenshotRequest, params?: Record<string, any>): AxiosPromise<Response<ScreenshotValidationResponse>>;
    /**
     * Get Steam capsule dimensions for a specific type.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns The dimensions object or null if invalid type.
     */
    static getSteamCapsuleDimensions(capsuleType: string): SteamCapsuleDimensions | null;
    /**
     * Get Steam capsule type information and requirements.
     *
     * @param capsuleType The type of Steam capsule.
     *
     * @returns Information about the capsule type.
     */
    static getSteamCapsuleInfo(capsuleType: string): any;
    /**
     * Get Steam screenshot requirements.
     *
     * @returns Screenshot requirements object.
     */
    static getSteamScreenshotRequirements(): {
        minWidth: number;
        minHeight: number;
        aspectRatio: number;
        minCount: number;
        format: string;
        content: string;
    };
    /**
     * Get Steam library logo requirements.
     *
     * @returns Library logo requirements object.
     */
    static getSteamLibraryLogoRequirements(): {
        maxWidth: number;
        maxHeight: number;
        format: string;
        requirement: string;
        content: string;
    };
    /**
     * Upload an audio file to TikTok's asset library via our Media controller.
     *
     * @param file The audio file (mp3).
     * @param scheduler_id The ID of the scheduler to provide OAuth context.
     */
    static uploadTikTokMusic<T>(file: File, scheduler_id: string): AxiosPromise<Response<T>>;
}
export default Media;
