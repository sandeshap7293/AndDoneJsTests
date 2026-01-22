import { BaseAPI, Header } from "../base.api";
export declare class Headers extends BaseAPI {
    static headers: Record<string, string>;
    static getHeaders(options?: Header): Record<string, string>;
}
