import envData from "../testData/env.data.json";
type ENV = keyof typeof envData;
export class VariableFactory {

    private static apiBaseUrl:string;
    private static apiBaseUrl2:string;
    private static adminPortalUrl:string;
    private static adminUsername:string;
    private static adminPassword:string;
    private static merchantPortalUrl:string;
    private static allyPortalUrl:string;
    private static andDoneJsPortalUrl:string;
    
    private static apiMethod:string;
    private static apiPath:string;
    private static responseCode:number;
    private static responseBody:any;

    private static token:string
    private static appKey:string
    private static apiKey:string

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

    static geApiMethod() {
        return this.apiMethod;
    }

    static setApiMethod(apiMethod:string) {
        this.apiMethod = apiMethod;
    }

    static getApiPath() {
        return this.apiPath;
    }

    static setApiPath(apiPath:string) {
        this.apiPath = apiPath;
    }

    static getResponseCode() {
        return this.responseCode;
    }

    static setResponseCode(responseCode:number) {
        this.responseCode = responseCode;
    }

    public static getResponseBody() {
        return this.responseBody;
    }

    static setResponseBody(responseBody:string) {
        this.responseBody = responseBody;
    }

    static geToken() {
        return this.token;
    }

    static setToken(token:string) {
        this.token = token;
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