import { ApiUtils } from "../../utils/apiUtils";
import { Headers } from "../payloads/headers";
import { ReadAndStoreTestData } from "../../helpers/readAndStoreTestData";

export class LoginRequest extends ApiUtils {

    static async login(payload: Record<string, any>, options?: { headers?: Record<string, any> }) {
        this.setApiData("login");
        let headerData: Record<string, any> = {};
        if (options?.headers) {
            headerData = Headers;
        } else {
            this.setHeaders(new Headers());
            this.getHeaders().setContentType('application/json');
            this.getHeaders().setOrigin(this.getMerchantPortalUrl());
            headerData = this.getHeaders().getHeaders();
        }
        await ApiUtils.sendRequest(this.geApiMethod(), this.getBaseUrl() + this.getApiPath(), { headers: headerData, body: payload });
    }


}