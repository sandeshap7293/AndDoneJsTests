import { BaseAPI, Header } from "../base.api";
export declare class Headers extends BaseAPI {
    static headers: Record<string, unknown>;
    static getHeaders(options?: Header): Record<string, unknown>;
}
