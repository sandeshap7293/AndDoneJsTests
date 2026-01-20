"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntentPaylod = void 0;
const common_base_1 = require("@siddheshwar.anajekar/common-base");
const base_api_1 = require("../base.api");
class CreateIntentPaylod extends base_api_1.BaseAPI {
    static getPayload(options = {}) {
        this.payload = {};
        const simpleFields = [
            'amount',
            'title',
            'paymentDescription',
            'shortDescription',
            'expiresIn',
            'invoiceNumber',
            'saveForFuture',
            'enablePremiumFinance',
            'suppressTechnologyFee',
            'overrideTechnologyFee',
            'additionalDetailsPreference',
            'selectedCustomerFields'
        ];
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.payload[field] = options[field];
            }
        }
        if (options.paymentTypes?.length) {
            this.payload.intent = {
                paymentTypes: options.paymentTypes
            };
        }
        if (options.customers?.length) {
            this.payload.customers = options.customers
                .map(c => ({
                ...(c.firstName && { firstName: c.firstName }),
                ...(c.lastName && { lastName: c.lastName }),
                ...(c.email && { email: c.email }),
                ...(c.phone && { phone: c.phone }),
            }))
                .filter(c => Object.keys(c).length > 0);
        }
        if (options.references?.length) {
            this.payload.referenceDataList = options.references
                .map(r => ({
                ...(r.referenceType && { referenceType: r.referenceType }),
                ...(r.referenceKey && { referenceKey: r.referenceKey }),
                ...(r.referenceNumber && { referenceNumber: r.referenceNumber }),
            }))
                .filter(r => Object.keys(r).length > 0);
        }
        if (options.splits?.length) {
            this.payload.splits = options.splits
                .map(s => ({
                ...(s.virtualAccount && { virtualAccount: s.virtualAccount }),
                ...(s.amount && { amount: s.amount }),
                ...(s.reference && { reference: s.reference }),
                ...(s.chargeIndicator && { chargeIndicator: s.chargeIndicator }),
            }))
                .filter(s => Object.keys(s).length > 0);
        }
        return this.payload;
    }
    static getPaylodWithDefaultValues(options = {}) {
        const defaultValues = {
            amount: common_base_1.GenerationUtils.randomFloat(100, 9999),
            title: "PI" + common_base_1.GenerationUtils.getCurrentDateByTimezoneFormat('Asia/Kolkata', 'MMddyyyyHHmmss'),
            expiresIn: "3000",
            paymentTypes: ["ACH", "CreditCard", "DebitCard"],
            additionalDetailsPreference: "3"
        };
        if (options.additionalDetailsPreference === '1') {
            if (!options.selectedCustomerFields)
                options.selectedCustomerFields = "First Name,Last Name,Email,Phone Number";
        }
        else if (options.additionalDetailsPreference === '2') {
            if (!options.customers) {
                options.customers = [{
                        firstName: common_base_1.GenerationUtils.randomFirstName(),
                        lastName: common_base_1.GenerationUtils.randomLastName(),
                        phone: common_base_1.GenerationUtils.randomNumericString(10),
                        email: common_base_1.GenerationUtils.randomEmail()
                    }];
            }
        }
        return this.getPayload({ ...defaultValues, ...options });
    }
}
exports.CreateIntentPaylod = CreateIntentPaylod;
