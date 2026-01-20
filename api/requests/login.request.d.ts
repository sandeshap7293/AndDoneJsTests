import { BaseAPI, Header } from "../base.api";
export declare class LoginRequest extends BaseAPI {
    static login(payload: Record<string, any>, headers: Header): Promise<any>;
}
