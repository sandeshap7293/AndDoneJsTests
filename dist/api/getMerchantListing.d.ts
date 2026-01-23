import { BaseAPI, Header } from "./base.api";
export type GetMerchantListingQueryParamsOptions = {
    pageSize?: number | string;
    startRow?: number | string;
    sortField?: string;
    asc?: boolean | string;
    allyName?: string;
};
export declare class GetMerchantListing extends BaseAPI {
    static queryParams: Record<string, string | number | boolean>;
    static getQueryParams(options?: GetMerchantListingQueryParamsOptions): Record<string, string | number | boolean>;
    static getMerchantListing(queryParams: GetMerchantListingQueryParamsOptions, headers?: Header): Promise<any>;
    static getTotalRowCount(): Promise<any>;
    static getMerchantsData(): Promise<any[]>;
    static getId(index: number): Promise<any>;
}
