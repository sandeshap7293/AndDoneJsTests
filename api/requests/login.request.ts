import { Headers } from "../payloads/headers";
import { BaseAPI, Header } from "../base.api";

export class LoginRequest extends BaseAPI {

    static async login(payload: Record<string, any>, 
        headers: Header={
            origin:this.getAdminPortalUrl(), 
            contentType:'application/json'
        }) {
        this.setApiData("login");
        await this.sendRequest(
            this.geApiMethod(), 
            this.getBaseUrl() + this.getApiPath(), 
            { headers: Headers.getHeaders(headers), body: payload }
        );
    }


}