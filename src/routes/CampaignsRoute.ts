import Route from "./interface";
import HTTP_METHODS from "../constants/HttpMethods";

class CampaignsRoute {

  public static routes: { [key: string]: Route } = {
    listCampaigns: { url: '/campaigns', method: HTTP_METHODS.GET },
    createCampaign: { url: '/campaigns', method: HTTP_METHODS.POST },
    viewCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.GET },
    updateCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.PUT },
    deleteCampaign: { url: '/campaigns/{campaign_id}', method: HTTP_METHODS.DELETE },
    getLedger: { url: '/campaigns/{campaign_id}/ledger', method: HTTP_METHODS.GET },
    getPosts: { url: '/campaigns/{campaign_id}/posts', method: HTTP_METHODS.GET },
    statistics: { url: '/campaigns/{campaign_id}/statistics', method: HTTP_METHODS.GET },
    streamViewCounts: { url: '/campaigns/{campaign_id}/streamViewCounts', method: HTTP_METHODS.GET },
    listCampaignLinks: { url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.GET },
    createCampaignLink: { url: '/campaigns/{campaign_id}/links', method: HTTP_METHODS.POST },
    getCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.GET },
    updateCampaignLink: { url: '/campaigns/{campaign_id}/links/{link_id}', method: HTTP_METHODS.PUT },
    createInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers', method: HTTP_METHODS.POST },
    listInfluencerCampaigns: { url: '/campaigns/influencers', method: HTTP_METHODS.GET },
    viewInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.GET },
    updateInfluencerCampaign: { url: '/campaigns/{campaign_id}/influencers/{user_id}', method: HTTP_METHODS.PUT },
    markInfluencerCampaignComplete: { url: '/campaigns/{campaign_id}/influencers/{user_id}/setComplete', method: HTTP_METHODS.POST },
    markInfluencerCampaignIncomplete: { url: '/campaigns/{campaign_id}/influencers/{user_id}/setIncomplete', method: HTTP_METHODS.POST },
    listInfluencerCampaignLinks: { url: '/campaigns/{campaign_id}/influencers/{user_id}/links', method: HTTP_METHODS.GET },
    listInfluencerCampaignLinkClicks: { url: '/campaigns/{campaign_id}/influencers/{user_id}/linkClicks', method: HTTP_METHODS.GET },
    listCampaignMentions: { url: '/campaigns/{campaign_id}/mentions', method: HTTP_METHODS.GET },
    createCampaignMention: { url: '/campaigns/{campaign_id}/mentions', method: HTTP_METHODS.POST },
    getCampaignMention: { url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.GET },
    updateCampaignMention: { url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.PUT },
    deleteCampaignMention: { url: '/campaigns/{campaign_id}/mentions/{mention_id}', method: HTTP_METHODS.DELETE },
    addCountry: { url: '/campaigns/{campaign_id}/addCountry', method: HTTP_METHODS.POST },
    removeCountry: { url: '/campaigns/{campaign_id}/removeCountry/{country_id}', method: HTTP_METHODS.DELETE },
    addGender: { url: '/campaigns/{campaign_id}/addGender', method: HTTP_METHODS.POST },
    removeGender: { url: '/campaigns/{campaign_id}/removeGender/{gender_id}', method: HTTP_METHODS.DELETE },
    addEthnicity: { url: '/campaigns/{campaign_id}/addEthnicity', method: HTTP_METHODS.POST },
    removeEthnicity: { url: '/campaigns/{campaign_id}/removeEthnicity/{ethnicity_id}', method: HTTP_METHODS.DELETE },
    addType: { url: '/campaigns/{campaign_id}/addType', method: HTTP_METHODS.POST },
    removeType: { url: '/campaigns/{campaign_id}/removeType/{type_id}', method: HTTP_METHODS.DELETE },
    inviteInfluencer: { url: '/campaigns/{campaign_id}/influencers/invites', method: HTTP_METHODS.POST },
    viewInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}', method: HTTP_METHODS.GET },
    updateInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}', method: HTTP_METHODS.PUT },
    updateInfluencerCompensationInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/compensation', method: HTTP_METHODS.PUT },
    listInfluencerInvites: { url: '/campaigns/{campaign_id}/influencers/invites', method: HTTP_METHODS.GET },
    sendInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites', method: HTTP_METHODS.POST },
    acceptInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/accept', method: HTTP_METHODS.POST },
    declineInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/decline', method: HTTP_METHODS.POST },
    widthdrawInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/withdraw', method: HTTP_METHODS.POST },
    finishInfluencerInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/finish', method: HTTP_METHODS.POST },
    acceptInfluencerRequest: { url: '/campaigns/{campaign_id}/influencers/{user_id}/accept', method: HTTP_METHODS.POST },
    declineInfluencerRequest: { url: '/campaigns/{campaign_id}/influencers/{user_id}/deny', method: HTTP_METHODS.POST },
    reviewInfluencerRequest: { url: '/campaigns/{campaign_id}/influencers/{user_id}/review', method: HTTP_METHODS.POST },
    getRecommendedInfluencers: { url: '/campaigns/{campaign_id}/recommendInfluencers', method: HTTP_METHODS.GET },
    generateContentForInfluencer: { url: '/campaigns/{campaign_id}/influencers/{user_id}/generatePostContent', method: HTTP_METHODS.POST },
    getActiveCampaignLinks: { url: '/campaigns/active', method: HTTP_METHODS.GET },
    generateContractFromInvite: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/contract', method: HTTP_METHODS.POST },
    sendContractWithDocusign: { url: '/campaigns/{campaign_id}/influencers/invites/{influencer_id}/docusign', method: HTTP_METHODS.POST },
    resendAcceptanceEmail: { url: '/campaigns/{campaign_id}/influencers/{user_id}/resendInvite', method: HTTP_METHODS.POST },
    payInfluencer: { url: '/campaigns/{campaign_id}/influencers/{user_id}/payInfluencer', method: HTTP_METHODS.POST },
    listPayouts: { url: '/campaigns/{campaign_id}/payouts', method: HTTP_METHODS.GET },
    generateCampaignContract: { url: '/campaigns/{campaign_id}/influencers/{user_id}/contract', method: HTTP_METHODS.POST },
    sendCampaignContractWithDocusign: { url: '/campaigns/{campaign_id}/influencers/{user_id}/docusign', method: HTTP_METHODS.POST },
    sourcingSearchIgdbForCampaignGame: { url: '/campaigns/{campaign_id}/sourcing/search-game', method: HTTP_METHODS.GET },
    sourcingGetSimilarIgdbGames: { url: '/campaigns/{campaign_id}/sourcing/similar-games', method: HTTP_METHODS.GET },
    sourcingFindCreators: { url: '/campaigns/{campaign_id}/sourcing/find-creators', method: HTTP_METHODS.POST },
    updateSourcingSettings: { url: '/campaigns/{campaign_id}/sourcing/settings', method: HTTP_METHODS.PUT },
    sourcingFindAndSaveCreators: { url: '/campaigns/{campaign_id}/sourcing/find-save-creators', method: HTTP_METHODS.POST },
    getSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/creators', method: HTTP_METHODS.GET },
    getSourcedCreator: { url: '/campaigns/{campaign_id}/sourcing/creators/{sourced_creator_id}', method: HTTP_METHODS.GET },
    updateSourcedCreator: { url: '/campaigns/{campaign_id}/sourcing/creators/{sourced_creator_id}', method: HTTP_METHODS.PUT },
    assignKeyToInfluencer: { url: '/campaigns/{campaign_id}/influencers/{user_id}/assign-key', method: HTTP_METHODS.POST },
    enrichSourcedCreator: { url: '/campaigns/{campaign_id}/sourcing/creators/{sourced_creator_id}/enrich', method: HTTP_METHODS.POST },
    sourcingFindAndSaveTwitchCreators: { url: '/campaigns/{campaign_id}/sourcing/find-save-twitch-creators', method: HTTP_METHODS.POST },
    sourcingFindAndSaveYouTubeCreators: { url: '/campaigns/{campaign_id}/sourcing/find-save-youtube-creators', method: HTTP_METHODS.POST },
    exportSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/creators/export', method: HTTP_METHODS.GET },
    sourcingSearchAnyIgdbGame: { url: '/campaigns/{campaign_id}/sourcing/search-any-game', method: HTTP_METHODS.GET },
    sourcingGetGamesByIds: { url: '/campaigns/{campaign_id}/sourcing/games-by-ids', method: HTTP_METHODS.POST },
    updateAutoInviteCriteria: { url: '/campaigns/{campaign_id}/sourcing/auto-invite-criteria', method: HTTP_METHODS.PUT },
    updateCustomRanking: { url: '/campaigns/{campaign_id}/sourcing/custom-ranking', method: HTTP_METHODS.PUT },
    updateCreatorBucket: { url: '/campaigns/{campaign_id}/sourcing/creators/{creator_id}/bucket', method: HTTP_METHODS.PUT },
    reRankSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/re-rank', method: HTTP_METHODS.POST },
    bulkEnrichSourcedCreators: { url: '/campaigns/{campaign_id}/sourcing/creators/bulk-enrich', method: HTTP_METHODS.POST },
    getInfluencerInstallReport: { url: '/campaigns/{campaign_id}/reports/influencer-installs', method: HTTP_METHODS.GET },
    getSpecificInfluencerInstallReport: {
      url: '/campaigns/{campaign_id}/reports/influencer-installs/{influencer_id}',
      method: HTTP_METHODS.GET
    },
    generateInfluencerLandingPage: {
      url: '/campaigns/{campaign_id}/influencers/{user_id}/landing-page/generate',
      method: HTTP_METHODS.POST
    },
    updateInfluencerLandingPage: {
      url: '/campaigns/{campaign_id}/influencers/{user_id}/landing-page',
      method: HTTP_METHODS.PUT
    },
    exportInfluencerInvites: {
      url: '/campaigns/{campaign_id}/influencers/invites/export',
      method: HTTP_METHODS.POST
    },
    sourcingFindAndSaveFanslyCreators: { 
        url: '/campaigns/{campaign_id}/sourcing/find-save-fansly-creators', 
        method: HTTP_METHODS.POST 
    },
    sendOnboarding: { url: '/campaigns/{campaign_id}/influencers/{user_id}/onboarding', method: HTTP_METHODS.POST },

    crossPromote: { url: '/campaigns/{campaign_id}/cross-promote', method: HTTP_METHODS.POST },

  };

}

export default CampaignsRoute;