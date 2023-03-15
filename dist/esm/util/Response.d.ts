interface Response<T> {
    data: T;
    success: boolean;
    message?: string;
}
export default Response;
