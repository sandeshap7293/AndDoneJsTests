"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableFactory = void 0;
class VariableFactory {
    static getBaseUrl() {
        return this.apiBaseUrl;
    }
    static setBaseUrl(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }
    static getBaseUrl2() {
        return this.apiBaseUrl2;
    }
    static setBaseUrl2(apiBaseUrl2) {
        this.apiBaseUrl2 = apiBaseUrl2;
    }
    static getAdminPortalUrl() {
        return this.adminPortalUrl;
    }
    static setAdminPortalUrl(adminPortalUrl) {
        this.adminPortalUrl = adminPortalUrl;
    }
    static getAdminUsername() {
        return this.adminUsername;
    }
    static setAdminUsername(adminUsername) {
        this.adminUsername = adminUsername;
    }
    static getAdminPassword() {
        return this.adminPassword;
    }
    static setAdminPassword(adminPassword) {
        this.adminPassword = adminPassword;
    }
    static getMerchantPortalUrl() {
        return this.merchantPortalUrl;
    }
    static setMerchantPortalUrl(merchantPortalUrl) {
        this.merchantPortalUrl = merchantPortalUrl;
    }
    static getAllyPortalUrl() {
        return this.allyPortalUrl;
    }
    static setAllyPortalUrl(allyPortalUrl) {
        this.allyPortalUrl = allyPortalUrl;
    }
    static getAndDoneJsPortalUrl() {
        return this.andDoneJsPortalUrl;
    }
    static setAndDoneJsPortalUrl(andDoneJsPortalUrl) {
        this.andDoneJsPortalUrl = andDoneJsPortalUrl;
    }
    static geApiMethod() {
        return this.apiMethod;
    }
    static setApiMethod(apiMethod) {
        this.apiMethod = apiMethod;
    }
    static getApiPath() {
        return this.apiPath;
    }
    static setApiPath(apiPath) {
        this.apiPath = apiPath;
    }
    static getResponseCode() {
        return this.responseCode;
    }
    static setResponseCode(responseCode) {
        this.responseCode = responseCode;
    }
    static getResponseBody() {
        return this.responseBody;
    }
    static setResponseBody(responseBody) {
        this.responseBody = responseBody;
    }
    static geToken() {
        return this.token;
    }
    static setToken(token) {
        this.token = token;
    }
    static getAppKey() {
        return this.appKey;
    }
    static setAppKey(appKey) {
        this.appKey = appKey;
    }
    static getApiKey() {
        return this.apiKey;
    }
    static setApiKey(apiKey) {
        this.apiKey = apiKey;
    }
}
exports.VariableFactory = VariableFactory;
