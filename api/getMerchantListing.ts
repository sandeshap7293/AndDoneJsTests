import { ApiUtils } from "../utils/apiUtils";
import { BaseAPI, Header } from "./base.api";
import { CreateIntentOptions } from "./createIntent";
import { Headers } from "./payloads/headers";

export type GetMerchantListingQueryParamsOptions = {
    pageSize?: number | string;
    startRow?: number | string;
    sortField?: string;
    asc?: boolean | string;
    allyName?: string;
};

export class GetMerchantListing extends BaseAPI {

    static queryParams: Record<string, string | number | boolean>;

    static getQueryParams(options: GetMerchantListingQueryParamsOptions = {}) {
        this.queryParams = {};
        const simpleFields: (keyof GetMerchantListingQueryParamsOptions)[] = [
            'pageSize',
            'startRow',
            'sortField',
            'asc',
            'allyName'
        ]
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.queryParams[field] = options[field];
            }
        }
        return this.queryParams;
    }

    static async getMerchantListing(queryParams: GetMerchantListingQueryParamsOptions, headers?: Header) {
        this.setApiData("getMerchantListing");
        const defaultValue = {
            origin: this.getAdminPortalUrl(),
            authorization: this.getLoginToken()
        }
        this.queryParams = this.getQueryParams(queryParams);
        return this.sendRequest(
            this.geApiMethod(),
            this.getBaseUrl() + this.getApiPath(),
            { headers: Headers.getHeaders({ ...defaultValue, ...headers }), queryParams: this.queryParams }
        );
    }

    static async getTotalRowCount() {
        return ApiUtils.getResponseValue('totalRowCount');
    }

    static async getMerchantsData() {
        return ApiUtils.getResponseArray('data');
    }

    static async getId(index:number) {
        return ApiUtils.getResponseValue('data['+index+'].id');
    } 

}