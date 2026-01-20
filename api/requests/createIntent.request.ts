import { BaseAPI, Header } from "../base.api";
import { Headers } from "../payloads/headers";

export class CreateIntentRequest extends BaseAPI {

    static async createIntent(payload: Record<string, unknown>, headers:Header) {
        this.setApiData("createIntent");
        const defaultValue = {
            origin:this.getAndDoneJsPortalUrl(), 
            appKey:this.getAppKey(), 
            apiKey:this.getApiKey, 
            xVersion:'2.0', 
            contentType:'application/json'
        }
        return await this.sendRequest(
            this.geApiMethod(), 
            this.getBaseUrl() + this.getApiPath(), 
            {headers: Headers.getHeaders({...defaultValue, ...headers}), body: payload}
         );
    }

}