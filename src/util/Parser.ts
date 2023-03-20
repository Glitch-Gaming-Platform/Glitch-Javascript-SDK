class Parser {

    /**
     * To be used inside a catch close, this function will parse out any JSON in a error response from the api.
     * 
     * @param error The Error object from the catch clause
     * 
     * @returns Either returns a JSON object or false. 
     */
    public static parseJSONFromError(error: Error): object | boolean {

        let errorString = error.toString();

        errorString = errorString.replace('Error: ', '');

        try {
            return JSON.parse(errorString);
        } catch (e) {
            return false;
        }
    }
}

export default Parser;