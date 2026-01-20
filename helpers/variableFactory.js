"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableFactory = void 0;
const env_data_json_1 = __importDefault(require("../testData/env.data.json"));
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
    static setEnvorimentData(env) {
        console.log("Setting ENv");
        this.setBaseUrl(env_data_json_1.default[env].apiBaseUrl);
        this.setBaseUrl2(env_data_json_1.default[env].apiBaseUrl2);
        this.setAdminPortalUrl(env_data_json_1.default[env].adminPortal);
        this.setAdminUsername(env_data_json_1.default[env].adminUsername);
        this.setAdminPassword(env_data_json_1.default[env].adminPassword);
        this.setMerchantPortalUrl(env_data_json_1.default[env].merchantPortal);
        this.setAllyPortalUrl(env_data_json_1.default[env].allyPortal);
        this.setAndDoneJsPortalUrl(env_data_json_1.default[env].andDoneJsPortal);
    }
}
exports.VariableFactory = VariableFactory;
