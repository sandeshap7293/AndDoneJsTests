import { BaseAPI, Customer, Header, Reference, Split } from "./base.api";
export type CreateIntentOptions2 = {
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
export declare class CreateIntent extends BaseAPI {
    static payload: Record<string, unknown>;
    static getPayload(options?: CreateIntentOptions2): Record<string, unknown>;
    static getPaylodWithDefaultValues(options?: CreateIntentOptions2): Record<string, unknown>;
    static createIntent(body: CreateIntentOptions2, headers?: Header): Promise<any>;
    static createIntentWithDefaultValues(body: CreateIntentOptions2, headers?: Header): Promise<any>;
    static getPaymentIntentId(): Promise<any>;
}
