import { ApiHeaders } from "../../helpers/apiHaders";
import { ApiUtils } from "../../utils/apiUtils";

export class CreateIntentRequest extends ApiHeaders {

    static async createIntent(payload: Record<string, any>, options?: { origin?:any, appKey?:any, apiKey?:any, xVersion?:any }) {
        this.setApiData("createIntent");
        let headerData: Record<string, any> = {};
        const reqOptions: any = {};
        if (options?.origin) reqOptions.origin = options.origin;
        else reqOptions.origin = this.getAndDoneJsPortalUrl();
        if (options?.appKey) reqOptions.appKey = options.appKey;
        else reqOptions.origin = this.getAppKey();
        if (options?.apiKey) reqOptions.apiKey = options.apiKey;
        else reqOptions.origin = this.getApiKey();
        if (options?.xVersion) reqOptions.xVersion = options.xVersion;
        else reqOptions.xVersion = "2.0";
        headerData = this.getApiHeders({contentType:'application/json', ...reqOptions })
        await ApiUtils.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headerData, body: payload });
    }

}