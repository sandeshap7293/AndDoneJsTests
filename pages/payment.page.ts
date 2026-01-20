import { Page, Locator } from "@playwright/test";
// import { BasePage } from "@siddheshwar.anajekar/common-base";
import { BasePage } from "./base.page";

type ACH = {
    accountHolderName?:string,
    rountingNumber?:string,
    accountNumber?:string,
    verifyAccountNumber?:string
}

export class PaymentPage extends BasePage {

    readonly paymentMethod_sctn_hdr:Locator;
    readonly paymentMethod_sctn_tab_list:Locator;
    readonly ach_sctn_hdr:Locator;
    readonly ach_sctn_accountHolderName_tb:Locator;
    readonly ach_sctn_bankRountingNumber_tb:Locator;
    readonly ach_sctn_bankName_tb:Locator;
    readonly ach_sctn_bankAccountNumber_tb:Locator;
    readonly ach_sctn_verifyBankAccountNumber_tb:Locator;
    readonly card_sctn_hdr:Locator;
    readonly card_sctn_nameOnCard_tb:Locator;
    readonly card_sctn_cardNo_tb:Locator;
    readonly card_sctn_expirationDate_tb:Locator;
    readonly card_sctn_securityCode_tb:Locator;
    readonly card_sctn_billingAddress_sctn_hdr:Locator;
    readonly card_sctn_billingAddress_sctn_address_tb:Locator;
    readonly card_sctn_billingAddress_sctn_suiteOrUnit_tb:Locator;
    readonly card_sctn_billingAddress_sctn_city_tb:Locator;
    readonly card_sctn_billingAddress_sctn_countryOrRegion_tb:Locator;
    readonly card_sctn_billingAddress_sctn_stateOrProvince_tb:Locator;
    readonly card_sctn_billingAddress_sctn_postalCode_tb:Locator;
    readonly submitPayment_btn:Locator;

    constructor(page:Page) {
        super(page);
        this.paymentMethod_sctn_hdr = page.locator("//span[text()='Payment Method']");
        this.paymentMethod_sctn_tab_list = page.locator("div.paySelect");
        this.ach_sctn_hdr= page.locator("//span[text()='Bank Details']");
        this.ach_sctn_accountHolderName_tb=page.locator("input#accountHolderName");
        this.ach_sctn_bankRountingNumber_tb=page.locator("input#verifyBankRoutingNumberInput");
        this.ach_sctn_bankName_tb=page.locator("input#bankName");
        this.ach_sctn_bankAccountNumber_tb = page.locator("input#bankAccountNumberInput");
        this.ach_sctn_verifyBankAccountNumber_tb = page.locator("input#verifyBankAccountNumberInput");
        this.card_sctn_hdr =page.locator("//span[text()='Card Details']");
        this.card_sctn_nameOnCard_tb=page.locator("input#cardAccountHolder");
        this.card_sctn_cardNo_tb=page.locator("input#cardNumber");
        this.card_sctn_expirationDate_tb=page.locator("input#validThrough");
        this.card_sctn_securityCode_tb=page.locator("input#cardCvv");
        this.card_sctn_billingAddress_sctn_hdr=page.locator("//span[text()='Billing Address']");
        this.card_sctn_billingAddress_sctn_address_tb=page.locator("input#streetName");
        this.card_sctn_billingAddress_sctn_suiteOrUnit_tb=page.locator("input#streetNumber");
        this.card_sctn_billingAddress_sctn_city_tb=page.locator("input#city");
        this.card_sctn_billingAddress_sctn_countryOrRegion_tb=page.locator("select#selectCountry");
        this.card_sctn_billingAddress_sctn_stateOrProvince_tb=page.locator("select#selectState");
        this.card_sctn_billingAddress_sctn_postalCode_tb=page.locator("input#postalCode");
        this.submitPayment_btn=page.locator("#payButtonAmount");
    }

    async getIndexOfPaymentMethodTab(tab:string) {
        let index = -1;
        const count = await this.paymentMethod_sctn_tab_list.count();
        for (let i = 0; i < count; i++) {
            if (await this.paymentMethod_sctn_tab_list.nth(i).textContent() === tab) {
                index = i;
                break;
            }
        }
        return index;
    }

    async isPaymentMethodTabPresent(tab:string) {
        const index:number = await this.getIndexOfPaymentMethodTab(tab);
        return index>=0 ? true:false; 
    }

    async clickOnPaymentMethodTab(tab:string) {
        const index:number = await this.getIndexOfPaymentMethodTab(tab);
        if (index>=0) {
            if (!await this.isPaymentMethodTabSelected(tab)) 
                await this.commonUtils.click(this.paymentMethod_sctn_tab_list.nth(index));
        };
    }

    async isPaymentMethodTabSelected(tab:string) {
        const index:number = await this.getIndexOfPaymentMethodTab(tab);
        if (index>=0) {
            let value = await this.paymentMethod_sctn_tab_list.nth(index).getAttribute('class');
            return value?.includes('select');
        }
        else return false;
    }


    //ACH
    async fillAccountHolderName(accountHolderName:string) {
        await this.commonUtils.fill(this.ach_sctn_accountHolderName_tb, accountHolderName);
    }

    async fillBankRountingNumber(bankRountingNumber:string) {
        await this.commonUtils.fill(this.ach_sctn_bankRountingNumber_tb, bankRountingNumber);
    }

    async fillBankAccountNumber(bankAccountNumber:string) {
        await this.commonUtils.fill(this.ach_sctn_bankAccountNumber_tb, bankAccountNumber);
    }

    async fillVerifyBankAccountNumber(bankAccountNumber:string) {
        await this.commonUtils.fill(this.ach_sctn_verifyBankAccountNumber_tb, bankAccountNumber);
    }

    //Card
    async fillNameOnCard(nameOnCard:string) {
        await this.commonUtils.fill(this.card_sctn_nameOnCard_tb, nameOnCard);
    }

    async fillCardNo(cardNo:string) {
        await this.commonUtils.fill(this.card_sctn_cardNo_tb, cardNo);
    }

    async fillSecurityCode(securityCode:string) {
        await this.commonUtils.fill(this.card_sctn_securityCode_tb, securityCode);
    }

    async fillExpirationDate(expirationDate:string) {
        await this.commonUtils.fill(this.card_sctn_expirationDate_tb, expirationDate);
    }

    async fillAddress(address:string) {
        await this.commonUtils.fill(this.card_sctn_billingAddress_sctn_address_tb, address);
    }

    async fillCity(city:string) {
        await this.commonUtils.fill(this.card_sctn_billingAddress_sctn_city_tb, city);
    }

    async fillPostalCode(city:string) {
        await this.commonUtils.fill(this.card_sctn_billingAddress_sctn_postalCode_tb, city);
    }

    async clickOnSubmitPayment() {
        await this.commonUtils.click(this.submitPayment_btn);
    }

    // public fillAchDetails(options:ACH = {}) {

    // }

}