import EducationRoute from "../routes/EducationRoute";
import Requests from "../util/Requests";
import Response from "../util/Response";
import { AxiosPromise } from "axios";

class Education {
    // --- 1. CATEGORIES ---
    public static listCategories<T>(params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listCategories, undefined, undefined, params);
    }
    public static viewCategory<T>(uuid: string, params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.viewCategory, undefined, { uuid }, params);
    }
    public static createCategory<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.createCategory, data);
    }
    public static updateCategory<T>(uuid: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.updateCategory, data, { uuid });
    }
    public static deleteCategory<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.deleteCategory, undefined, { uuid });
    }

    // --- 2. TRACKS ---
    public static listTracks<T>(params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listTracks, undefined, undefined, params);
    }
    public static viewTrack<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.viewTrack, undefined, { uuid });
    }
    public static createTrack<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.createTrack, data);
    }
    public static updateTrack<T>(uuid: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.updateTrack, data, { uuid });
    }
    public static deleteTrack<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.deleteTrack, undefined, { uuid });
    }
    public static registerForTrack<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.registerTrack, {}, { uuid });
    }
    public static myTracks<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.myTracks);
    }
    public static getTrackAnalytics<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.trackAnalytics, undefined, { uuid });
    }

    // --- 3. CONTENT ---
    public static listContent<T>(params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listContent, undefined, undefined, params);
    }
    public static viewContent<T>(uuid: string, params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.viewContent, undefined, { uuid }, params);
    }
    public static createContent<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.createContent, data);
    }
    public static updateContent<T>(uuid: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.updateContent, data, { uuid });
    }
    public static deleteContent<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.deleteContent, undefined, { uuid });
    }
    public static heartbeat<T>(uuid: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.contentHeartbeat, data, { uuid });
    }
    public static getSecureVideo<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.getSecureVideo, undefined, { uuid });
    }

    // --- 4. TRACK CONTENT (PIVOT) ---
    public static listTrackContent<T>(track_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listTrackContent, undefined, { track_id });
    }
    public static addContentToTrack<T>(track_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.addContentToTrack, data, { track_id });
    }
    public static removeContentFromTrack<T>(track_id: string, content_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.removeContentFromTrack, undefined, { track_id, content_id });
    }
    public static reorderTrackContent<T>(track_id: string, content_ids: string[]): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.reorderTrackContent, { content_ids }, { track_id });
    }

    // --- 5. QUIZZES ---
    public static listQuizzes<T>(params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listQuizzes, undefined, undefined, params);
    }
    public static viewQuiz<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.viewQuiz, undefined, { uuid });
    }
    public static submitQuiz<T>(uuid: string, answers: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.submitQuiz, { answers }, { uuid });
    }
    public static myQuizAttempts<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.myQuizAttempts, undefined, { uuid });
    }
    public static viewQuizAttempt<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.viewQuizAttempt, undefined, { uuid });
    }

    // --- 6. QUIZ QUESTIONS & OPTIONS ---
    public static listQuizQuestions<T>(quiz_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listQuizQuestions, undefined, { quiz_id });
    }
    public static createQuizQuestion<T>(quiz_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.createQuizQuestion, data, { quiz_id });
    }
    public static reorderQuizQuestions<T>(quiz_id: string, question_ids: string[]): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.reorderQuizQuestions, { question_ids }, { quiz_id });
    }
    public static listQuizOptions<T>(question_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listQuizOptions, undefined, { question_id });
    }
    public static createQuizOption<T>(question_id: string, data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.createQuizOption, data, { question_id });
    }

    // --- 7. PROGRESS & REGISTRATIONS ---
    public static syncProgress<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.syncProgress, data);
    }
    public static getMyProgressByContent<T>(content_id: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.myProgressByContent, undefined, { content_id });
    }
    public static listRegistrations<T>(params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listRegistrations, undefined, undefined, params);
    }
    public static refreshUserTrack<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.refreshUserTrack, {}, { uuid });
    }

    // --- 8. ANALYTICS & MODULE DATA ---
    public static logView<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.logView, data);
    }
    public static saveModuleData<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.saveModuleData, data);
    }
    public static getModuleData<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.viewModuleData, undefined, { uuid });
    }
    public static getConversionReport<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.reportConversion);
    }
    public static getAdoptionReport<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.reportAdoption);
    }
    public static getQuestionPerformanceReport<T>(params?: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.reportQuestionPerformance, undefined, undefined, params);
    }
    public static getRetentionReport<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.reportRetention);
    }

    // --- 9. ACHIEVEMENTS (BADGES & CERTIFICATES) ---
    public static myBadges<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.myBadges);
    }
    public static awardBadge<T>(data: object): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.awardBadge, data);
    }
    public static myCertificates<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.myCertificates);
    }
    public static downloadCertificate<T>(uuid: string): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.downloadCertificate, undefined, { uuid });
    }

    // --- 10. TEMPLATES & UPLOADS ---
    public static listTemplates<T>(): AxiosPromise<Response<T>> {
        return Requests.processRoute(EducationRoute.routes.listTemplates);
    }
    public static uploadTemplateSignature<T>(uuid: string, file: File): AxiosPromise<Response<T>> {
        const url = EducationRoute.routes.uploadTemplateSignature.url.replace('{uuid}', uuid);
        return Requests.uploadFile(url, 'image', file);
    }
    public static uploadTemplateBackground<T>(uuid: string, file: File): AxiosPromise<Response<T>> {
        const url = EducationRoute.routes.uploadTemplateBackground.url.replace('{uuid}', uuid);
        return Requests.uploadFile(url, 'image', file);
    }
}

export default Education;