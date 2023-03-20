declare class Parser {
    /**
     * To be used inside a catch close, this function will parse out any JSON in a error response from the api.
     *
     * @param error The Error object from the catch clause
     *
     * @returns Either returns a JSON object or false.
     */
    static parseJSONFromError(error: Error): object | boolean;
}
export default Parser;
