import { BaseAPI } from "../base.api";
export type GetMerchantListingQueryParamsOptions = {
    pageSize?: number | string;
    startRow?: number | string;
    sortField?: string;
    asc?: boolean | string;
    allyName?: string;
};

class GetMerchantListingQueryParams extends BaseAPI {

    static queryParams: Record<string, unknown>;

    static getPayload(options: GetMerchantListingQueryParamsOptions = {}) {
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
    }

}