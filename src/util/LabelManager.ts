interface CommunityLabels {
    [key: string]: string;
}
  
  class LabelManager {
    private static community: CommunityLabels;
  
    static initialize(community: CommunityLabels) {
      LabelManager.community = community;
    }
  
    private static getLabel(labelName: string, plural: boolean, capitalize: boolean): string {
      let label = LabelManager.community[labelName + (plural ? "_plural" : "_singular")];
  
      if (capitalize) {
        label = label.charAt(0).toUpperCase() + label.slice(1);
      }
  
      return label;
    }
  
    static getUserLabel(plural: boolean, capitalize: boolean): string {
      return LabelManager.getLabel("label_users", plural, capitalize);
    }
  
    static getCompetitionLabel(plural: boolean, capitalize: boolean): string {
      return LabelManager.getLabel("label_competitions", plural, capitalize);
    }
  
    static getStreamLabel(plural: boolean, capitalize: boolean): string {
      return LabelManager.getLabel("label_streams", plural, capitalize);
    }

    static getPostLabel(plural: boolean, capitalize: boolean): string {
        return LabelManager.getLabel("label_posts", plural, capitalize);
      }
  }
  
  export default LabelManager;