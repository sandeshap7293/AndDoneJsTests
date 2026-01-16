type Customer = {
    firstName?: string;
    lastName?: string;
    phone?: string;
    email?: string;
};
type Reference = {
    referenceType?: string;
    referenceKey?: string;
    referenceNumber?: string;
};
type Split = {
    virtualAccount?: string;
    amount?: number | string;
    reference?: string;
    chargeIndicator?: string;
};
type CreateIntentOptions = {
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
export declare class CreateIntentPL {
    static payload: Record<string, unknown>;
    static buildPayload(options?: CreateIntentOptions): Record<string, unknown>;
}
export {};
