"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAndStoreTestData = void 0;
const env_data_json_1 = __importDefault(require("../testData/env.data.json"));
const api_data_json_1 = __importDefault(require("../testData/api.data.json"));
const objectFactory_1 = require("./objectFactory");
class ReadAndStoreTestData extends objectFactory_1.ObjectFactory {
    static setEnvorimentData(env) {
        this.setBaseUrl(env_data_json_1.default[env].apiBaseUrl);
        this.setBaseUrl2(env_data_json_1.default[env].apiBaseUrl2);
        this.setAdminPortalUrl(env_data_json_1.default[env].adminPortal);
        this.setAdminUsername(env_data_json_1.default[env].adminUsername);
        this.setAdminPassword(env_data_json_1.default[env].adminPassword);
        this.setMerchantPortalUrl(env_data_json_1.default[env].merchantPortal);
        this.setAllyPortalUrl(env_data_json_1.default[env].allyPortal);
        this.setAndDoneJsPortalUrl(env_data_json_1.default[env].andDoneJsPortal);
    }
    static setApiData(apiName) {
        this.setApiMethod(api_data_json_1.default[apiName].method);
        this.setApiPath(api_data_json_1.default[apiName].path);
    }
}
exports.ReadAndStoreTestData = ReadAndStoreTestData;
