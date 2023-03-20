declare class Data {
    static dataURItoBlob(dataURI: string): Blob;
    static convertToHHMMSS(time: string | undefined): string | undefined;
}
export default Data;
