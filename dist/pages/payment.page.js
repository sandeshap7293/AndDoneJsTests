"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPage = void 0;
const base_page_1 = require("./base.page");
class PaymentPage extends base_page_1.BasePage {
    constructor(page) {
        super(page);
        this.paymentMethod_sctn_hdr = page.locator("//span[text()='Payment Method']");
        this.paymentMethod_sctn_tab_list = page.locator("div.paySelect");
        this.ach_sctn_hdr = page.locator("//span[text()='Bank Details']");
        this.ach_sctn_accountHolderName_tb = page.locator("input#accountHolderName");
        this.ach_sctn_bankRountingNumber_tb = page.locator("input#verifyBankRoutingNumberInput");
        this.ach_sctn_bankName_tb = page.locator("input#bankName");
        this.ach_sctn_bankAccountNumber_tb = page.locator("input#bankAccountNumberInput");
        this.ach_sctn_verifyBankAccountNumber_tb = page.locator("input#verifyBankAccountNumberInput");
        this.card_sctn_hdr = page.locator("//span[text()='Card Details']");
        this.card_sctn_nameOnCard_tb = page.locator("input#cardAccountHolder");
        this.card_sctn_cardNo_tb = page.locator("input#cardNumber");
        this.card_sctn_expirationData_tb = page.locator("input#validThrough");
        this.card_sctn_securityCode_tb = page.locator("input#cardCvv");
        this.card_sctn_billingAddress_sctn_hdr = page.locator("//span[text()='Billing Address']");
        this.card_sctn_billingAddress_sctn_address_tb = page.locator("input#streetName");
        this.card_sctn_billingAddress_sctn_suiteOrUnit_tb = page.locator("input#streetNumber");
        this.card_sctn_billingAddress_sctn_city_tb = page.locator("input#city");
        this.card_sctn_billingAddress_sctn_countryOrRegion_tb = page.locator("select#selectCountry");
        this.card_sctn_billingAddress_sctn_stateOrProvince_tb = page.locator("select#selectState");
        this.card_sctn_billingAddress_sctn_postalCode_tb = page.locator("input#postalCode");
    }
}
exports.PaymentPage = PaymentPage;
