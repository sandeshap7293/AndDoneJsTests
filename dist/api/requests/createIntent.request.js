"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntentRequest = void 0;
const apiUtils_1 = require("../../utils/apiUtils");
const headers_1 = require("../payloads/headers");
class CreateIntentRequest extends apiUtils_1.ApiUtils {
    static async createIntent(payload, options) {
        this.setApiData("createIntent");
        const reqOptions = {};
        if (options?.origin)
            reqOptions.origin = options.origin;
        else
            reqOptions.origin = this.getAndDoneJsPortalUrl();
        if (options?.appKey)
            reqOptions.appKey = options.appKey;
        else
            reqOptions.origin = this.getAppKey();
        if (options?.apiKey)
            reqOptions.apiKey = options.apiKey;
        else
            reqOptions.origin = this.getApiKey();
        if (options?.xVersion)
            reqOptions.xVersion = options.xVersion;
        else
            reqOptions.xVersion = "2.0";
        let headerData = headers_1.Headers.getHeaders({ contentType: 'application/json', ...reqOptions });
        await this.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headerData, body: payload });
    }
}
exports.CreateIntentRequest = CreateIntentRequest;
