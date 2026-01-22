"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUtils = exports.EmptyApiResponse = void 0;
const objectFactory_1 = require("../helpers/objectFactory");
const api_data_json_1 = __importDefault(require("../testData/api.data.json"));
class EmptyApiResponse {
    status() { return 0; }
    ok() { return false; }
    url() { return ""; }
    async json() { return {}; }
    async text() { return ""; }
}
exports.EmptyApiResponse = EmptyApiResponse;
class ApiUtils extends objectFactory_1.ObjectFactory {
    /**
     * This is private method to print json value in pretty format.
     * @param obj
     * @returns
     */
    static pretty(obj) {
        try {
            return JSON.stringify(obj, null, 2);
        }
        catch {
            return String(obj);
        }
    }
    /**
     * This method to set APIRequestContext object.
     * @param request APIRequestContext
     */
    static setRequest(request) {
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
    static setApiData(apiName) {
        this.apiMethod = api_data_json_1.default[apiName].method;
        this.apiPath = api_data_json_1.default[apiName].path;
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
    /**
     * This method to log request details in console if apiLogs flag is true.
     * @param method string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
     * @param url string
     * @param options RequestOptions
     */
    static logRequest(method, url, options) {
        if (this.apiLogs) {
            console.log('Request:');
            console.log(method, url);
            if (options === null || options === void 0 ? void 0 : options.headers)
                console.log('Headers:', this.pretty(options.headers));
            if (options === null || options === void 0 ? void 0 : options.body)
                console.log('Body:', this.pretty(options.body));
            if (options === null || options === void 0 ? void 0 : options.queryParams)
                console.log('Query Params:', this.pretty(options.queryParams));
        }
    }
    /**
     * This method is set APIResponse object along with responseCode and responseBody.
     * Also log response details in console if apiLogs flag is true.
     * @param response APIResponse
     */
    static async setResponse(response) {
        var _a, _b, _c;
        this.response = response;
        try {
            this.responseCode = (_c = (_b = (_a = this.response) === null || _a === void 0 ? void 0 : _a.status) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : 0;
        }
        catch (e) {
            this.responseCode = 0;
        }
        try {
            this.responseBody = await response.json();
        }
        catch (e) {
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
    static getResponseCode() {
        return this.responseCode;
    }
    /**
     * This method is get response body.
     * @returns T = unknown
     */
    static getResponseBody() {
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
    static async sendRequest(method, url, options) {
        this.logRequest(method, url, options);
        const reqOptions = {};
        if (options === null || options === void 0 ? void 0 : options.headers)
            reqOptions.headers = options.headers;
        if (options === null || options === void 0 ? void 0 : options.queryParams)
            reqOptions.params = options.queryParams;
        if (options === null || options === void 0 ? void 0 : options.body)
            reqOptions.data = options.body;
        try {
            const response = await this.getRequest().fetch(url, {
                method,
                ...reqOptions
            });
            return response;
        }
        catch (error) {
            const empty = new EmptyApiResponse();
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
    static async getResponseValue(path, defaultValue) {
        try {
            const body = await this.getResponseBody();
            if (!body || !path) {
                return (defaultValue !== undefined ? defaultValue : "");
            }
            const result = path
                .replace(/\[(\d+)\]/g, ".$1")
                .split(".")
                .reduce((obj, key) => obj === null || obj === void 0 ? void 0 : obj[key], body);
            if (result === undefined || result === null) {
                return (defaultValue !== undefined ? defaultValue : "");
            }
            return result;
        }
        catch {
            return (defaultValue !== undefined ? defaultValue : "");
        }
    }
    /**
     * This method is get response object value as array.
     * @param path string - example 'customers'
     * @returns T = any []
     */
    static getResponseArray(path) {
        const value = this.getResponseValue(path, []);
        return Array.isArray(value) ? value : [];
    }
}
exports.ApiUtils = ApiUtils;
