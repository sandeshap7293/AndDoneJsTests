import envData from "../testData/env.data.json"
import apiData from "../testData/api.data.json"
import { ObjectFactory } from "./objectFactory"
import { VariableFactory } from "./variableFactory";

type ENV = keyof typeof envData;
type ApiName = keyof typeof apiData;

export class ReadAndStoreTestData extends ObjectFactory {

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

    static setApiData(apiName:ApiName) {
        this.setApiMethod(apiData[apiName].method);
        this.setApiPath(apiData[apiName].path);
    }

}