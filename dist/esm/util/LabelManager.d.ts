interface CommunityLabels {
    [key: string]: string;
}
declare class LabelManager {
    private static community;
    static initialize(community: CommunityLabels): void;
    private static getLabel;
    static getUserLabel(plural: boolean, capitalize: boolean): string;
    static getCompetitionLabel(plural: boolean, capitalize: boolean): string;
    static getStreamLabel(plural: boolean, capitalize: boolean): string;
    static getPostLabel(plural: boolean, capitalize: boolean): string;
}
export default LabelManager;
