import envData from "../testData/env.data.json";

type ENV = keyof typeof envData;

export class VariableFactory {

    static apiLogs: boolean = true;

    private static apiBaseUrl:string;
    private static apiBaseUrl2:string;
    private static adminPortalUrl:string;
    private static adminUsername:string;
    private static adminPassword:string;
    private static merchantPortalUrl:string;
    private static allyPortalUrl:string;
    private static andDoneJsPortalUrl:string;
    
    private static loginToken:string
    private static appKey:string
    private static apiKey:string
    private static paymentToken:string;

    static getBaseUrl() {
        return this.apiBaseUrl;
    }

    static setBaseUrl(apiBaseUrl:string) {
        this.apiBaseUrl = apiBaseUrl;
    }

    static getBaseUrl2() {
        return this.apiBaseUrl2;
    }

    static setBaseUrl2(apiBaseUrl2:string) {
        this.apiBaseUrl2 = apiBaseUrl2;
    }

    static getAdminPortalUrl() {
        return this.adminPortalUrl;
    }

    static setAdminPortalUrl(adminPortalUrl:string) {
        this.adminPortalUrl = adminPortalUrl;
    }

    static getAdminUsername() {
        return this.adminUsername;
    }

    static setAdminUsername(adminUsername:string) {
        this.adminUsername = adminUsername;
    }

    static getAdminPassword() {
        return this.adminPassword;
    }

    static setAdminPassword(adminPassword:string) {
        this.adminPassword = adminPassword;
    }

    static getMerchantPortalUrl() {
        return this.merchantPortalUrl;
    }

    static setMerchantPortalUrl(merchantPortalUrl:string) {
        this.merchantPortalUrl = merchantPortalUrl;
    }

    static getAllyPortalUrl() {
        return this.allyPortalUrl;
    }

    static setAllyPortalUrl(allyPortalUrl:string) {
        this.allyPortalUrl = allyPortalUrl;
    }

    static getAndDoneJsPortalUrl() {
        return this.andDoneJsPortalUrl;
    }

    static setAndDoneJsPortalUrl(andDoneJsPortalUrl:string) {
        this.andDoneJsPortalUrl = andDoneJsPortalUrl;
    }

    static getLoginToken() {
        return this.loginToken;
    }

    static setLoginToken(loginToken:string) {
        this.loginToken = loginToken;
    }

    static getAppKey() {
        return this.appKey;
    }

    static setAppKey(appKey:string) {
        this.appKey = appKey;
    }

    static getApiKey() {
        return this.apiKey;
    }

    static setApiKey(apiKey:string) {
        this.apiKey = apiKey;
    }

    static getPaymentToken() {
        return this.paymentToken;
    }

    static setPaymentToken(paymentToken:string) {
        this.paymentToken = paymentToken;
    }

    static setEnvorimentData(env:ENV) {
        console.log("Setting ENv");
        this.setBaseUrl(envData[env].apiBaseUrl);
        this.setBaseUrl2(envData[env].apiBaseUrl2);
        this.setAdminPortalUrl(envData[env].adminPortal);
        this.setAdminUsername(envData[env].adminUsername);
        this.setAdminPassword(envData[env].adminPassword);
        this.setMerchantPortalUrl(envData[env].merchantPortal);
        this.setAllyPortalUrl(envData[env].allyPortal);
        this.setAndDoneJsPortalUrl(envData[env].andDoneJsPortal);
    }

       

}