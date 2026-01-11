import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class EducationRoute {
  public static routes: { [key: string]: Route } = {
    // 1. EducationCategoryController
    listCategories: { url: '/education/categories', method: HTTP_METHODS.GET },
    viewCategory: { url: '/education/categories/{uuid}', method: HTTP_METHODS.GET },
    createCategory: { url: '/education/categories', method: HTTP_METHODS.POST },
    updateCategory: { url: '/education/categories/{uuid}', method: HTTP_METHODS.PUT },
    deleteCategory: { url: '/education/categories/{uuid}', method: HTTP_METHODS.DELETE },

    // 2. EducationTrackController
    listTracks: { url: '/education/tracks', method: HTTP_METHODS.GET },
    viewTrack: { url: '/education/tracks/{uuid}', method: HTTP_METHODS.GET },
    createTrack: { url: '/education/tracks', method: HTTP_METHODS.POST },
    updateTrack: { url: '/education/tracks/{uuid}', method: HTTP_METHODS.PUT },
    deleteTrack: { url: '/education/tracks/{uuid}', method: HTTP_METHODS.DELETE },
    registerTrack: { url: '/education/tracks/{uuid}/register', method: HTTP_METHODS.POST },
    myTracks: { url: '/education/my-tracks', method: HTTP_METHODS.GET },
    trackAnalytics: { url: '/education/tracks/{uuid}/analytics', method: HTTP_METHODS.GET },

    // 3. EducationContentController
    listContent: { url: '/education/content', method: HTTP_METHODS.GET },
    viewContent: { url: '/education/content/{uuid}', method: HTTP_METHODS.GET },
    createContent: { url: '/education/content', method: HTTP_METHODS.POST },
    updateContent: { url: '/education/content/{uuid}', method: HTTP_METHODS.PUT },
    deleteContent: { url: '/education/content/{uuid}', method: HTTP_METHODS.DELETE },
    contentHeartbeat: { url: '/education/content/{uuid}/heartbeat', method: HTTP_METHODS.POST },
    saveContentModuleState: { url: '/education/content/{uuid}/module-state', method: HTTP_METHODS.POST },
    getContentModuleState: { url: '/education/content/{uuid}/module-state', method: HTTP_METHODS.GET },
    getSecureVideo: { url: '/education/content/{uuid}/secure-video', method: HTTP_METHODS.GET },

    // 4. EducationContentTrackController (Pivot)
    listTrackContent: { url: '/education/tracks/{track_id}/content', method: HTTP_METHODS.GET },
    addContentToTrack: { url: '/education/tracks/{track_id}/content', method: HTTP_METHODS.POST },
    updateContentInTrack: { url: '/education/tracks/{track_id}/content/{content_id}', method: HTTP_METHODS.PUT },
    removeContentFromTrack: { url: '/education/tracks/{track_id}/content/{content_id}', method: HTTP_METHODS.DELETE },
    reorderTrackContent: { url: '/education/tracks/{track_id}/reorder', method: HTTP_METHODS.POST },

    // 5. QuizController
    listQuizzes: { url: '/education/quizzes', method: HTTP_METHODS.GET },
    viewQuiz: { url: '/education/quizzes/{uuid}', method: HTTP_METHODS.GET },
    createQuiz: { url: '/education/quizzes', method: HTTP_METHODS.POST },
    updateQuiz: { url: '/education/quizzes/{uuid}', method: HTTP_METHODS.PUT },
    deleteQuiz: { url: '/education/quizzes/{uuid}', method: HTTP_METHODS.DELETE },
    submitQuiz: { url: '/education/quizzes/{uuid}/submit', method: HTTP_METHODS.POST },
    myQuizAttempts: { url: '/education/quizzes/{uuid}/attempts', method: HTTP_METHODS.GET },
    viewQuizAttempt: { url: '/education/quizzes/attempts/{uuid}', method: HTTP_METHODS.GET },

    // 6. QuizQuestionController
    listQuizQuestions: { url: '/education/quizzes/{quiz_id}/questions', method: HTTP_METHODS.GET },
    createQuizQuestion: { url: '/education/quizzes/{quiz_id}/questions', method: HTTP_METHODS.POST },
    viewQuizQuestion: { url: '/education/questions/{uuid}', method: HTTP_METHODS.GET },
    updateQuizQuestion: { url: '/education/questions/{uuid}', method: HTTP_METHODS.PUT },
    deleteQuizQuestion: { url: '/education/questions/{uuid}', method: HTTP_METHODS.DELETE },
    reorderQuizQuestions: { url: '/education/quizzes/{quiz_id}/questions/reorder', method: HTTP_METHODS.POST },

    // 7. QuizOptionController
    listQuizOptions: { url: '/education/questions/{question_id}/options', method: HTTP_METHODS.GET },
    createQuizOption: { url: '/education/questions/{question_id}/options', method: HTTP_METHODS.POST },
    viewQuizOption: { url: '/education/options/{uuid}', method: HTTP_METHODS.GET },
    updateQuizOption: { url: '/education/options/{uuid}', method: HTTP_METHODS.PUT },
    deleteQuizOption: { url: '/education/options/{uuid}', method: HTTP_METHODS.DELETE },

    // 8. QuizAttemptController
    listAllQuizAttempts: { url: '/education/quiz-attempts', method: HTTP_METHODS.GET },
    viewSpecificQuizAttempt: { url: '/education/quiz-attempts/{uuid}', method: HTTP_METHODS.GET },
    deleteQuizAttempt: { url: '/education/quiz-attempts/{uuid}', method: HTTP_METHODS.DELETE },
    listUserQuizAttempts: { url: '/users/{user_id}/quiz-attempts', method: HTTP_METHODS.GET },

    // 9. QuizAttemptAnswerController
    listAttemptAnswers: { url: '/education/quiz-attempts/{attempt_id}/answers', method: HTTP_METHODS.GET },
    viewSpecificAnswer: { url: '/education/quiz-attempt-answers/{uuid}', method: HTTP_METHODS.GET },
    reportQuestionPerformance: { url: '/education/reports/question-performance', method: HTTP_METHODS.GET },

    // 10. UserEducationProgressController
    listAllProgress: { url: '/education/progress', method: HTTP_METHODS.GET },
    syncProgress: { url: '/education/progress/sync', method: HTTP_METHODS.POST },
    viewProgress: { url: '/education/progress/{uuid}', method: HTTP_METHODS.GET },
    deleteProgress: { url: '/education/progress/{uuid}', method: HTTP_METHODS.DELETE },
    myProgressByContent: { url: '/education/content/{content_id}/my-progress', method: HTTP_METHODS.GET },

    // 11. UserTrackController
    listUserTracks: { url: '/education/user-tracks', method: HTTP_METHODS.GET },
    viewUserTrack: { url: '/education/user-tracks/{uuid}', method: HTTP_METHODS.GET },
    updateUserTrack: { url: '/education/user-tracks/{uuid}', method: HTTP_METHODS.PUT },
    deleteUserTrack: { url: '/education/user-tracks/{uuid}', method: HTTP_METHODS.DELETE },
    refreshUserTrack: { url: '/education/user-tracks/{uuid}/refresh', method: HTTP_METHODS.POST },

    // 12. UserTrackRegistrationController
    listRegistrations: { url: '/education/registrations', method: HTTP_METHODS.GET },
    createRegistration: { url: '/education/registrations', method: HTTP_METHODS.POST },
    viewRegistration: { url: '/education/registrations/{uuid}', method: HTTP_METHODS.GET },
    updateRegistration: { url: '/education/registrations/{uuid}', method: HTTP_METHODS.PUT },
    deleteRegistration: { url: '/education/registrations/{uuid}', method: HTTP_METHODS.DELETE },
    listTrackRegistrations: { url: '/education/tracks/{track_id}/registrations', method: HTTP_METHODS.GET },

    // 13. EducationViewController
    listViews: { url: '/education/views', method: HTTP_METHODS.GET },
    logView: { url: '/education/views', method: HTTP_METHODS.POST },
    viewLogDetails: { url: '/education/views/{uuid}', method: HTTP_METHODS.GET },
    reportConversion: { url: '/education/reports/conversion-impact', method: HTTP_METHODS.GET },
    reportAdoption: { url: '/education/reports/adoption-metrics', method: HTTP_METHODS.GET },
    reportRetention: { url: '/education/reports/retention-impact', method: HTTP_METHODS.GET },

    // 14. EducationModuleDataController
    listModuleData: { url: '/education/module-data', method: HTTP_METHODS.GET },
    saveModuleData: { url: '/education/module-data', method: HTTP_METHODS.POST },
    viewModuleData: { url: '/education/module-data/{uuid}', method: HTTP_METHODS.GET },
    updateModuleData: { url: '/education/module-data/{uuid}', method: HTTP_METHODS.PUT },
    deleteModuleData: { url: '/education/module-data/{uuid}', method: HTTP_METHODS.DELETE },

    // 15. EducationCertificateTemplateController
    listTemplates: { url: '/education/certificate-templates', method: HTTP_METHODS.GET },
    createTemplate: { url: '/education/certificate-templates', method: HTTP_METHODS.POST },
    viewTemplate: { url: '/education/certificate-templates/{uuid}', method: HTTP_METHODS.GET },
    updateTemplate: { url: '/education/certificate-templates/{uuid}', method: HTTP_METHODS.PUT },
    deleteTemplate: { url: '/education/certificate-templates/{uuid}', method: HTTP_METHODS.DELETE },
    uploadTemplateSignature: { url: '/education/certificate-templates/{uuid}/uploadSignature', method: HTTP_METHODS.POST },
    uploadTemplateBackground: { url: '/education/certificate-templates/{uuid}/uploadBackground', method: HTTP_METHODS.POST },

    // 16. CertificateController
    listAllCertificates: { url: '/certificates', method: HTTP_METHODS.GET },
    myCertificates: { url: '/certificates/mine', method: HTTP_METHODS.GET },
    viewCertificate: { url: '/certificates/{uuid}', method: HTTP_METHODS.GET },
    downloadCertificate: { url: '/certificates/{uuid}/download', method: HTTP_METHODS.GET },
    issueCertificate: { url: '/certificates', method: HTTP_METHODS.POST },
    revokeCertificate: { url: '/certificates/{uuid}', method: HTTP_METHODS.DELETE },
    listUserCertificates: { url: '/users/{user_id}/certificates', method: HTTP_METHODS.GET },

    // 17. BadgeController
    listAllBadges: { url: '/badges', method: HTTP_METHODS.GET },
    myBadges: { url: '/badges/mine', method: HTTP_METHODS.GET },
    viewBadge: { url: '/badges/{uuid}', method: HTTP_METHODS.GET },
    awardBadge: { url: '/badges', method: HTTP_METHODS.POST },
    updateBadge: { url: '/badges/{uuid}', method: HTTP_METHODS.PUT },
    revokeBadge: { url: '/badges/{uuid}', method: HTTP_METHODS.DELETE },
    listUserBadges: { url: '/users/{user_id}/badges', method: HTTP_METHODS.GET },
    
  };
}

export default EducationRoute;