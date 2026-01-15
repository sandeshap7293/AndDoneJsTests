import { APIRequestContext, APIResponse } from "@playwright/test";
import { LoginPL } from "../api/payloads/login.payload";
import { Headers } from "../api/payloads/headers";
import { VariableFactory } from "./vaiarbleFactory";

export class ObjectFactory extends VariableFactory {
    private static request: APIRequestContext;
    private static response: APIResponse;
    private static header: Headers;
    private static loginPL: LoginPL;

    static getRequest() {
        return this.request;
    }

    static setRequest(request: APIRequestContext) {
        this.request = request;
    }

    static getResponse() {
        return this.response;
    }

    static setResponse(response: APIResponse) {
        this.response = response;
    }

    static getHeaders() {
        return this.header;
    }

    static setHeaders(header: Headers) {
        this.header = header;
    }

    static getLoginPL() {
        return this.loginPL;
    }

    static setLoginPL(loginPL: LoginPL) {
        this.loginPL = loginPL;
    }

}