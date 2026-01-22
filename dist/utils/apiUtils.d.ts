import { APIRequestContext, APIResponse } from "@playwright/test";
import { ObjectFactory } from "../helpers/objectFactory";
import apiData from "../testData/api.data.json";
type ApiName = keyof typeof apiData;
type RequestOptions = {
    body?: unknown;
    headers?: Record<string, string>;
    queryParams?: Record<string, string | number | boolean>;
};
export declare class EmptyApiResponse {
    status(): number;
    ok(): boolean;
    url(): string;
    json(): Promise<{}>;
    text(): Promise<string>;
}
export declare class ApiUtils extends ObjectFactory {
    private static request;
    private static response;
    private static apiMethod;
    private static apiPath;
    private static responseCode;
    private static responseBody;
    /**
     * This is private method to print json value in pretty format.
     * @param obj
     * @returns
     */
    private static pretty;
    /**
     * This method to set APIRequestContext object.
     * @param request APIRequestContext
     */
    static setRequest(request: APIRequestContext): void;
    /**
     * This method will returns APIRequestContext object.
     * @returns APIRequestContext
     */
    static getRequest(): APIRequestContext;
    /**
     * This method set apiMethod and apiPath using apiData object of the json file.
     * @param apiName ApiName
     */
    static setApiData(apiName: ApiName): void;
    /**
     * This method is to get api method.
     * @returns string
     */
    static geApiMethod(): string;
    /**
     * This method is get api path.
     * @returns string
     */
    static getApiPath(): string;
    /**
     * This method to log request details in console if apiLogs flag is true.
     * @param method string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
     * @param url string
     * @param options RequestOptions
     */
    static logRequest(method: string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, options?: RequestOptions): void;
    /**
     * This method is set APIResponse object along with responseCode and responseBody.
     * Also log response details in console if apiLogs flag is true.
     * @param response APIResponse
     */
    static setResponse(response: APIResponse): Promise<void>;
    /**
     * This method is get APIResponse object.
     * @returns APIResponse
     */
    static getResponse(): APIResponse;
    /**
     * This method is get response code.
     * @returns number
     */
    static getResponseCode(): number;
    /**
     * This method is get response body.
     * @returns T = unknown
     */
    static getResponseBody<T = unknown>(): T;
    /**
     * This method is log response details in console if apiLogs flag is true.
     */
    static logResponse(): void;
    /**
     * This method is to send respuest as per passed details and return response.
     * @param method string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
     * @param url string - passed Base Url and endpoint together, example: {BaseUrl}+{ApiPath}
     * @param options RequestOptions - this is optional.
     * @returns @link APIResponse
     *
     * Examples:
     * const  response = sendRequest('POST', {BaseUrl}+{ApiPath}, {headers: {...headers}, body: {...payload}});
     */
    static sendRequest(method: string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, options?: RequestOptions): Promise<any>;
    /**
     * This method is get response object value as per passed path.
     * Also if object value not found then you set return some defaultValue which is optional.
     * @param path string - example 'token', 'intent.paymentTypes', 'customers[0].firstName'
     * @param defaultValue T = any
     * @returns T = any
     */
    static getResponseValue<T = any>(path: string, defaultValue?: T): Promise<T>;
    /**
     * This method is get response object value as array.
     * @param path string - example 'customers'
     * @returns T = any []
     */
    static getResponseArray<T = any>(path: string): T[];
}
export {};
