import { APIRequestContext, APIResponse } from "@playwright/test";
import { VariableFactory } from "./vaiarbleFactory";
import { commonUtils } from "@siddheshwar.anajekar/common-base";
export declare class ObjectFactory extends VariableFactory {
    private static request;
    private static response;
    static commonUtils: commonUtils;
    static getRequest(): APIRequestContext;
    static setRequest(request: APIRequestContext): void;
    static getResponse(): APIResponse;
    static setResponse(response: APIResponse): void;
    static getCommonUtils(): commonUtils;
    static setCommonUtils(commonUtils: commonUtils): void;
}
