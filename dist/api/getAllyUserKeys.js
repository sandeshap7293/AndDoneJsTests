"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllyUserKeys = void 0;
const base_api_1 = require("./base.api");
const headers_1 = require("./payloads/headers");
class GetAllyUserKeys extends base_api_1.BaseAPI {
    static async getAllyUserKeys(pathParsms, headers) {
        this.setApiData("getAllyUserKeys");
        const defaultValue = {
            origin: this.getAdminPortalUrl(),
            authorization: this.getLoginToken()
        };
        return this.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { pathParams: pathParsms, headers: headers_1.Headers.getHeaders({ ...defaultValue, ...headers }) });
    }
}
exports.GetAllyUserKeys = GetAllyUserKeys;
