"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMerchantListing = void 0;
const apiUtils_1 = require("../utils/apiUtils");
const base_api_1 = require("./base.api");
const headers_1 = require("./payloads/headers");
class GetMerchantListing extends base_api_1.BaseAPI {
    static getQueryParams(options = {}) {
        this.queryParams = {};
        const simpleFields = [
            'pageSize',
            'startRow',
            'sortField',
            'asc',
            'allyName'
        ];
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.queryParams[field] = options[field];
            }
        }
        return this.queryParams;
    }
    static async getMerchantListing(queryParams, headers) {
        this.setApiData("getMerchantListing");
        const defaultValue = {
            origin: this.getAdminPortalUrl(),
            authorization: this.getLoginToken()
        };
        this.queryParams = this.getQueryParams(queryParams);
        return this.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headers_1.Headers.getHeaders({ ...defaultValue, ...headers }), queryParams: this.queryParams });
    }
    static async getTotalRowCount() {
        return apiUtils_1.ApiUtils.getResponseValue('totalRowCount');
    }
    static async getMerchantsData() {
        return apiUtils_1.ApiUtils.getResponseArray('data');
    }
    static async getId(index) {
        return apiUtils_1.ApiUtils.getResponseValue('data[' + index + '].id');
    }
}
exports.GetMerchantListing = GetMerchantListing;
