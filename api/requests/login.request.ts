import { ApiUtils } from "../../utils/apiUtils";
import { Headers } from "../payloads/headers";
import { ReadAndStoreTestData } from "../../helpers/readAndStoreTestData";

export class LoginRequest extends ApiUtils {

    static async login(payload: Record<string, any>, options?: { origin?: string }) {
        this.setApiData("login");
        const reqOptions: any = {};
        if (options?.origin) reqOptions.origin = options.origin;
        else reqOptions.origin = this.getMerchantPortalUrl();
        let headerData: Record<string, unknown> = Headers.getHeaders({contentType:'application/json', ...reqOptions })
        await ApiUtils.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headerData, body: payload });
    }


}