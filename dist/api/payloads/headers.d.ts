type Header = {
    origin?: unknown;
    contentType?: unknown;
    authorization?: unknown;
    appKey?: unknown;
    apiKey?: unknown;
    xVersion?: unknown;
};
export declare class Headers {
    static headers: Record<string, unknown>;
    static getHeaders(options?: Header): Record<string, unknown>;
}
export {};
