"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntentRequest = void 0;
const base_api_1 = require("../base.api");
const headers_1 = require("../payloads/headers");
class CreateIntentRequest extends base_api_1.BaseAPI {
    static async createIntent(payload, headers) {
        this.setApiData("createIntent");
        const defaultValue = {
            origin: this.getAndDoneJsPortalUrl(),
            appKey: this.getAppKey(),
            apiKey: this.getApiKey,
            xVersion: '2.0',
            contentType: 'application/json'
        };
        return await this.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headers_1.Headers.getHeaders({ ...defaultValue, ...headers }), body: payload });
    }
}
exports.CreateIntentRequest = CreateIntentRequest;
