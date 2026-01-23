import { APIRequestContext, APIResponse } from "@playwright/test";
import { ObjectFactory } from "../helpers/objectFactory";
import apiData from "../testData/api.data.json"

type ApiName = keyof typeof apiData;

type RequestOptions = {
    body?: unknown;
    headers?: Record<string, string>;
    queryParams?: Record<string, string | number | boolean>;
    pathParams?: Record<string, string>;
};

export class EmptyApiResponse {
    status() { return 0; }
    ok() { return false; }
    url() { return ""; }
    async json() { return {}; }
    async text() { return ""; }
}

export class ApiUtils extends ObjectFactory {

    private static request: APIRequestContext;
    private static response: APIResponse;

    private static apiMethod: string;
    private static apiPath: string;

    private static responseCode: number;
    private static responseBody: any;

    /**
     * This is private method to print json value in pretty format.
     * @param obj 
     * @returns 
     */
    private static pretty(obj: unknown) {
        try {
            return JSON.stringify(obj, null, 2);
        } catch {
            return String(obj);
        }
    }

    /**
     * This method to set APIRequestContext object.
     * @param request APIRequestContext
     */
    static setRequest(request: APIRequestContext) {
        this.request = request;
    }

    /**
     * This method will returns APIRequestContext object. 
     * @returns APIRequestContext
     */
    static getRequest() {
        return this.request;
    }

    /**
     * This method set apiMethod and apiPath using apiData object of the json file.
     * @param apiName ApiName
     */
    static setApiData(apiName: ApiName) {
        this.apiMethod = apiData[apiName].method;
        this.apiPath = apiData[apiName].path;
    }

    /**
     * This method is to get api method.
     * @returns string
     */
    static geApiMethod() {
        return this.apiMethod;
    }

    /**
     * This method is get api path.
     * @returns string
     */
    static getApiPath() {
        return this.apiPath;
    }

    private static buildPath(
        apiPath: string,
        pathParams?: Record<string, string>
    ): string {
        if (!pathParams) return apiPath;
        let finalPath = apiPath;
        for (const [key, value] of Object.entries(pathParams)) {
            finalPath = finalPath.replace(
                new RegExp(`{${key}}`, "g"),
                encodeURIComponent(String(value))
            );
        }
        return finalPath;
    }

    /**
     * This method to log request details in console if apiLogs flag is true.
     * @param method string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
     * @param url string
     * @param options RequestOptions
     */
    static logRequest(method: string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, options?: RequestOptions) {
        if (this.apiLogs) {
            console.log('Request:');
            console.log(method, url);
            if (options?.headers) console.log('Headers:', this.pretty(options.headers));
            if (options?.body) console.log('Body:', this.pretty(options.body));
            if (options?.queryParams) console.log('Query Params:', this.pretty(options.queryParams));
        }
    }

    /**
     * This method is set APIResponse object along with responseCode and responseBody. 
     * Also log response details in console if apiLogs flag is true.
     * @param response APIResponse
     */
    static async setResponse(response: APIResponse) {
        this.response = response;
        try {
            this.responseCode = this.response?.status?.() ?? 0;
        } catch (e) {
            this.responseCode = 0;
        }
        try {
            this.responseBody = await response.json();
        } catch (e) {
            this.responseBody = {};
        }
        this.logResponse();
    }

    /**
     * This method is get APIResponse object.
     * @returns APIResponse
     */
    static getResponse() {
        return this.response;
    }

    /**
     * This method is get response code.
     * @returns number
     */
    static getResponseCode(): number {
        return this.responseCode;
    }

    /**
     * This method is get response body.
     * @returns T = unknown
     */
    static getResponseBody<T = unknown>(): T {
        return this.responseBody;
    }

    /**
     * This method is log response details in console if apiLogs flag is true.
     */
    static logResponse() {
        if (this.apiLogs) {
            console.log('Response:');
            console.log('Status Code:', this.getResponseCode());
            console.log('Body:', this.pretty(this.getResponseBody()));
        }
    }

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
    static async sendRequest(
        method: string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        url: string,
        options?: RequestOptions
    ) {
        url = this.buildPath(url, options?.pathParams);
        this.logRequest(method, url, options);
        const reqOptions: {
            headers?: Record<string, string>;
            params?: Record<string, string | number | boolean>;
            data?: unknown;
        } = {};
        if (options?.headers) reqOptions.headers = options.headers;
        if (options?.queryParams) reqOptions.params = options.queryParams;
        if (options?.body) reqOptions.data = options.body;
        try {
            const response = await this.getRequest().fetch(url, {
                method,
                ...reqOptions
            });
            return response;
        } catch (error) {
            const empty = new EmptyApiResponse() as any;
            await this.setResponse(empty);
            return empty;
        }
    }

    /**
     * This method is get response object value as per passed path. 
     * Also if object value not found then you set return some defaultValue which is optional. 
     * @param path string - example 'token', 'intent.paymentTypes', 'customers[0].firstName'
     * @param defaultValue T = any
     * @returns T = any
     */
    static async getResponseValue<T = any>(path: string, defaultValue?: T): Promise<T> {
        try {
            const body = await this.getResponseBody() as any;
            if (!body || !path) {
                return (defaultValue !== undefined ? defaultValue : "" as any);
            }
            const result = path
                .replace(/\[(\d+)\]/g, ".$1")
                .split(".")
                .reduce((obj, key) => obj?.[key], body);
            if (result === undefined || result === null) {
                return (defaultValue !== undefined ? defaultValue : "" as any);
            }
            return result;
        } catch {
            return (defaultValue !== undefined ? defaultValue : "" as any);
        }
    }

    /**
     * This method is get response object value as array.
     * @param path string - example 'customers'
     * @returns T = any []
     */
    static async getResponseArray<T = any>(path: string): Promise<T[]> {
        const value = await this.getResponseValue(path, []);
        return Array.isArray(value) ? value : [];
    }

    /**
  * Finds an object inside an array and returns its id where multiple fields match
  * @param arrayPath Path to array. Example: "data"
  * @param match Object with fields to match. Example: { allyName: "Zbook1201", status: "ACTIVE" }
  * @param idField Field to return (default = "id")
  */
    static async getResponseValueFromArray(
        arrayPath: string,
        objectName: string,
        match: Record<string, any>
    ): Promise<string> {
        try {
            if (!match || typeof match !== "object") {
                return "";
            }
            let arr: any[];
            if (!arrayPath) {
                // ✅ Root response is array
                const body = await this.getResponseBody();
                arr = Array.isArray(body) ? body : [];
            } else {
                // ✅ Array is inside object path
                arr = await this.getResponseArray<any>(arrayPath);
            }
            if (!Array.isArray(arr) || arr.length === 0) {
                return "";
            }
            const found = arr.find(item => {
                if (!item || typeof item !== "object") return false;
                return Object.entries(match).every(([key, value]) => item?.[key] === value);
            });
            if (!found || typeof found !== "object") {
                return "";
            }
            const result = found?.[objectName];
            return result !== undefined && result !== null ? String(result) : "";
        } catch (error) {
            // Optional: console.warn("⚠️ getResponseValueFromArray failed:", error);
            return "";
        }
    }




}