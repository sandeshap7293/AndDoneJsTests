import { CustomerBlock } from "./customer.block";
import { ReferenceBlock } from "./reference.block";

export class CreateIntentPL {

    private amount: any;
    private title: any;
    private saveForFuture: any;
    private enablePremiumFinance: any;
    private shortDescription: any; 
    private paymentDescription: any;
    private invoiceNumber: any;
    private expiresIn: any;
    private overrideTechnologyFee: any;
    private suppressTechnologyFee: any;
    private additionalDetailsPreference: any;
    private selectedCustomerFields: any;
    private paymentTypes:Array<any> = [];

    private intentBlock:Record<string, any> = {};

    private customers: Array<Record<string, any>> = [];
    private references: Array<Record<string, any>> = [];
    private splits: Array<Record<string, any>> = [];

    private payload: Record<string, any> = {};

    getAmount() {
        return this.amount;
    }

    setAmount(amount: any) {
        this.amount = amount;
    }

    getOverrideTechnologyFee() {
        return this.overrideTechnologyFee;
    }

    setOverrideTechnologyFee(overrideTechnologyFee: any) {
        this.overrideTechnologyFee = overrideTechnologyFee;
    }

    getSuppressTechnologyFee() {
        return this.suppressTechnologyFee;
    }

    setSuppressTechnologyFee(suppressTechnologyFee: any) {
        this.suppressTechnologyFee = suppressTechnologyFee;
    }

    getSaveForFuture() {
        return this.saveForFuture;
    }

    setSaveForFuture(saveForFuture: any) {
        this.saveForFuture = saveForFuture;
    }

    getEnablePremiumFinance() {
        return this.enablePremiumFinance;
    }

    setEnablePremiumFinance(enablePremiumFinance: any) {
        this.enablePremiumFinance = enablePremiumFinance;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: any) {
        this.title = title;
    }

    getShortDescription() {
        return this.shortDescription;
    }

    setShortDescription(shortDescription: any) {
        this.shortDescription = shortDescription;
    }

    getPaymentDescription() {
        return this.paymentDescription;
    }

    setPaymentDescription(paymentDescription: any) {
        this.paymentDescription = paymentDescription;
    }

    getInvoiceNumber() {
        return this.invoiceNumber;
    }

    setInvoiceNumber(invoiceNumber: any) {
        this.invoiceNumber = invoiceNumber;
    }

    getExpiresIn() {
        return this.expiresIn;
    }

    setExpiresIn(expiresIn: any) {
        this.expiresIn = expiresIn;
    }

    getPaymentTypes() {
        return this.paymentTypes;
    }

    setPaymentTypes(paymentTypes: Array<any>) {
        this.paymentTypes = paymentTypes;
    }

    getAdditionalDetailsPreference() {
        return this.additionalDetailsPreference;
    }

    setAdditionalDetailsPreference(additionalDetailsPreference: any) {
        this.additionalDetailsPreference = additionalDetailsPreference;
    }

    getSelectedCustomerFields() {
        return this.selectedCustomerFields;
    }

    setSelectedCustomerFields(selectedCustomerFields: any) {
        this.selectedCustomerFields = selectedCustomerFields;
    }

    getCustomers() {
        return this.customers;
    }

    setCustomers(...customers: CustomerBlock[]) {
        customers.forEach(customer => {
            this.customers.push(customer.getBlock());
        });
    }

    getReferences() {
        return this.references;
    }

    setReferences(...references: ReferenceBlock[]) {
        references.forEach(reference => {
            this.references.push(reference.getBlock());
        });
    }

    getSplits() {
        return this.splits;
    }

    setSplits(...splits: Record<string, any>[]) {
        this.splits.push(splits);
    }

    getIntentBlock() {
        if (this.getPaymentTypes().length > 0) this.intentBlock['paymentTypes'] = this.getPaymentTypes();
        return this.intentBlock;
    }

    getPayload(): Record<string, any> {
        if (this.getAmount() != undefined) this.payload['amount'] = this.getAmount();
        if (this.getSaveForFuture() != undefined) this.payload['saveForFuture'] = this.getSaveForFuture();
        if (this.getTitle() != undefined) this.payload['title'] = this.getTitle();
        if (this.getShortDescription() != undefined) this.payload['shortDescription'] = this.getShortDescription();
        if (this.getEnablePremiumFinance() != undefined) this.payload['enablePremiumFinance'] = this.getEnablePremiumFinance();
        if (this.getPaymentDescription() != undefined) this.payload['paymentDescription'] = this.getPaymentDescription();
        if (this.getInvoiceNumber() != undefined) this.payload['invoiceNumber'] = this.getInvoiceNumber();
        if (this.getExpiresIn() != undefined) this.payload['expiresIn'] = this.getExpiresIn();
        if (this.getOverrideTechnologyFee() != undefined) this.payload['suppressTechnologyFee'] = this.getOverrideTechnologyFee();
        if (this.getSuppressTechnologyFee() != undefined) this.payload['overrideTechnologyFee'] = this.getSuppressTechnologyFee();
        if (this.getAdditionalDetailsPreference() != undefined) this.payload['AdditionalDetailsPreference'] = this.getAdditionalDetailsPreference();
        if (this.getSelectedCustomerFields() != undefined) this.payload['selectedCustomerFields'] = this.getSelectedCustomerFields();
        if (Object.keys(this.getIntentBlock()).length > 0) this.payload['intent'] = this.getIntentBlock();
        if (this.getCustomers().length > 0) this.payload['customers'] = this.getCustomers();
        if (this.getReferences().length > 0) this.payload['referenceDataList'] = this.getReferences();
        if (this.getSplits().length > 0) this.payload['splits'] = this.getSplits();
        return this.payload;
    }


}