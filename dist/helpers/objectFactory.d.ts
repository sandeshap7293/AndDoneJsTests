import { APIRequestContext, APIResponse } from "@playwright/test";
import { LoginPL } from "../api/payloads/login.payload";
import { Headers } from "../api/payloads/headers";
import { VariableFactory } from "./vaiarbleFactory";
export declare class ObjectFactory extends VariableFactory {
    private static request;
    private static response;
    private static header;
    private static loginPL;
    static getRequest(): APIRequestContext;
    static setRequest(request: APIRequestContext): void;
    static getResponse(): APIResponse;
    static setResponse(response: APIResponse): void;
    static getHeaders(): Headers;
    static setHeaders(header: Headers): void;
    static getLoginPL(): LoginPL;
    static setLoginPL(loginPL: LoginPL): void;
}
