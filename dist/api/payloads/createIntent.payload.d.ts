import { BaseAPI, Customer, Reference, Split } from "../base.api";
export type CreateIntentOptions = {
    amount?: number | string;
    paymentTypes?: string[];
    title?: string;
    paymentDescription?: string;
    shortDescription?: string;
    expiresIn?: string;
    invoiceNumber?: string;
    additionalDetailsPreference?: string;
    selectedCustomerFields?: string;
    customers?: Customer[];
    saveForFuture?: boolean | string;
    enablePremiumFinance?: boolean | string;
    references?: Reference[];
    suppressTechnologyFee?: boolean | string;
    overrideTechnologyFee?: number | string;
    splits?: Split[];
};
export declare class CreateIntentPaylod extends BaseAPI {
    static payload: Record<string, unknown>;
    static getPayload(options?: CreateIntentOptions): Record<string, unknown>;
    static getPaylodWithDefaultValues(options?: CreateIntentOptions): Record<string, unknown>;
}
