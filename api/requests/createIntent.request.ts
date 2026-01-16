
import { ApiUtils } from "../../utils/apiUtils";
import { Headers } from "../payloads/headers";

export class CreateIntentRequest extends ApiUtils {

    static async createIntent(payload: Record<string, unknown>, 
        options?: { origin?:unknown, appKey?:unknown, apiKey?:unknown, xVersion?:unknown }) {
        this.setApiData("createIntent");
        const reqOptions: any = {};
        if (options?.origin) reqOptions.origin = options.origin;
        else reqOptions.origin = this.getAndDoneJsPortalUrl();
        if (options?.appKey) reqOptions.appKey = options.appKey;
        else reqOptions.origin = this.getAppKey();
        if (options?.apiKey) reqOptions.apiKey = options.apiKey;
        else reqOptions.origin = this.getApiKey();
        if (options?.xVersion) reqOptions.xVersion = options.xVersion;
        else reqOptions.xVersion = "2.0";
        let headerData: Record<string, unknown> = Headers.getHeaders({contentType:'application/json', ...reqOptions })
        await this.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headerData, body: payload });
    }

}