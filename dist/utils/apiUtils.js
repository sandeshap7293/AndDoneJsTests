"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUtils = void 0;
const readAndStoreTestData_1 = require("../helpers/readAndStoreTestData");
class ApiUtils extends readAndStoreTestData_1.ReadAndStoreTestData {
    static async sendRequest(method, url, options) {
        const reqOptions = {};
        if (options?.headers) {
            reqOptions.headers = options.headers;
        }
        if (options?.queryParams) {
            reqOptions.params = options.queryParams;
        }
        if (options?.body) {
            reqOptions.data = options.body;
        }
        console.log(method, url);
        if (reqOptions.headers)
            console.log('Headers:', JSON.stringify(reqOptions.headers, null, 2));
        if (reqOptions.data)
            console.log('Body:', JSON.stringify(reqOptions.data, null, 2));
        if (reqOptions.queryParams)
            console.log('Query Params:', JSON.stringify(reqOptions.params, null, 2));
        const response = await this.getRequest().fetch(url, {
            method,
            ...reqOptions
        });
        this.setResponse(response);
        this.setResponseCode(response.status());
        this.setResponseBody(await response.json());
        console.log('Status:', this.getResponseCode());
        console.log('Response:', this.getResponseBody());
        return response;
    }
    static getResponseValue(path, defaultValue = "") {
        try {
            const body = this.getResponseBody();
            if (!body || !path)
                return defaultValue;
            const result = path
                .replace(/\[(\d+)\]/g, ".$1")
                .split(".")
                .reduce((obj, key) => obj?.[key], body);
            return result ?? defaultValue;
        }
        catch (e) {
            return defaultValue;
        }
    }
    static getResponseArray(path) {
        const value = this.getResponseValue(path, []);
        return Array.isArray(value) ? value : [];
    }
}
exports.ApiUtils = ApiUtils;
