import { Headers } from "../payloads/headers";
import { BaseAPI, Header } from "../base.api";

export class LoginRequest extends BaseAPI {

    static async login(payload: Record<string, any>, headers: Header) {
        this.setApiData("login");
        const defaultValue = {
            origin:this.getAdminPortalUrl(), 
            contentType:'application/json'
        }
        return await this.sendRequest(
            this.geApiMethod(), 
            this.getBaseUrl() + this.getApiPath(), 
            { headers: Headers.getHeaders({...defaultValue, ...headers}), body: payload }
        );
    }


}