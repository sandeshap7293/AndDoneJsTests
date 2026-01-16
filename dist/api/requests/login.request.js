"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequest = void 0;
const apiUtils_1 = require("../../utils/apiUtils");
const headers_1 = require("../payloads/headers");
class LoginRequest extends apiUtils_1.ApiUtils {
    static async login(payload, options) {
        this.setApiData("login");
        const reqOptions = {};
        if (options?.origin)
            reqOptions.origin = options.origin;
        else
            reqOptions.origin = this.getMerchantPortalUrl();
        let headerData = headers_1.Headers.getHeaders({ contentType: 'application/json', ...reqOptions });
        await apiUtils_1.ApiUtils.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headerData, body: payload });
    }
}
exports.LoginRequest = LoginRequest;
