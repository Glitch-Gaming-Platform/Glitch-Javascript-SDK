declare class Competitions {
    static list(): Promise<import("../util/Response").default<unknown> | undefined>;
    static create(data: object): Promise<import("../util/Response").default<unknown> | undefined>;
    static update(competition_id: string, data: object): Promise<import("../util/Response").default<unknown> | undefined>;
    static view(competition_id: string): Promise<import("../util/Response").default<unknown> | undefined>;
    static delete(competition_id: string): Promise<import("../util/Response").default<unknown> | undefined>;
}
export default Competitions;
