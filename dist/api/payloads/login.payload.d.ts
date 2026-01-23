import { BaseAPI, Login } from "../base.api";
export declare class LoginPayload extends BaseAPI {
    static payload: Record<string, unknown>;
    static getPayload(options?: Login): Record<string, unknown>;
}
