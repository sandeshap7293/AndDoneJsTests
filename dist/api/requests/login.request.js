"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRequest = void 0;
const headers_1 = require("../payloads/headers");
const base_api_1 = require("../base.api");
class LoginRequest extends base_api_1.BaseAPI {
    static async login(payload, headers) {
        this.setApiData("login");
        const defaultValue = {
            origin: this.getAdminPortalUrl(),
            contentType: 'application/json'
        };
        return await this.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headers_1.Headers.getHeaders({ ...defaultValue, ...headers }), body: payload });
    }
}
exports.LoginRequest = LoginRequest;
