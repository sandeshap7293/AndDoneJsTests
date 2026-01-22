"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_api_1 = require("../base.api");
class GetMerchantListingQueryParams extends base_api_1.BaseAPI {
    static getPayload(options = {}) {
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
    }
}
