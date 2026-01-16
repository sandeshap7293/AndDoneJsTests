import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";
export declare class PaymentPage extends BasePage {
    readonly paymentMethod_sctn_hdr: Locator;
    readonly paymentMethod_sctn_tab_list: Locator;
    readonly ach_sctn_hdr: Locator;
    readonly ach_sctn_accountHolderName_tb: Locator;
    readonly ach_sctn_bankRountingNumber_tb: Locator;
    readonly ach_sctn_bankName_tb: Locator;
    readonly ach_sctn_bankAccountNumber_tb: Locator;
    readonly ach_sctn_verifyBankAccountNumber_tb: Locator;
    readonly card_sctn_hdr: Locator;
    readonly card_sctn_nameOnCard_tb: Locator;
    readonly card_sctn_cardNo_tb: Locator;
    readonly card_sctn_expirationData_tb: Locator;
    readonly card_sctn_securityCode_tb: Locator;
    readonly card_sctn_billingAddress_sctn_hdr: Locator;
    readonly card_sctn_billingAddress_sctn_address_tb: Locator;
    readonly card_sctn_billingAddress_sctn_suiteOrUnit_tb: Locator;
    readonly card_sctn_billingAddress_sctn_city_tb: Locator;
    readonly card_sctn_billingAddress_sctn_countryOrRegion_tb: Locator;
    readonly card_sctn_billingAddress_sctn_stateOrProvince_tb: Locator;
    readonly card_sctn_billingAddress_sctn_postalCode_tb: Locator;
    constructor(page: Page);
}
