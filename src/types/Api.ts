export type ResponseCode =
    200 // OK
    | 301 // Permanent Redirect
    | 302 // Temporary Redirect
    | 404 // Not Found
    | 410 // Gone
    | 500 // Internal Server Error
    | 503 // Service Unavailable
    ;

export interface ApiResponse {
    data: any;
    status: ResponseCode;
    config?: any;
    headers?: any;
    request?: any;
    statusText?: string;
}