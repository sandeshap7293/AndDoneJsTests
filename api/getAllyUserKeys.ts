import { BaseAPI, Header } from "./base.api";
import { Headers } from "./payloads/headers";

export class GetAllyUserKeys extends BaseAPI {

    static async getAllyUserKeys(
        pathParsms:{allyId:any, allyUserId:any}, 
        headers?: Header
    ) {
        this.setApiData("getAllyUserKeys");
        const defaultValue = {
            origin: this.getAdminPortalUrl(),
            authorization: this.getLoginToken()
        }
        return this.sendRequest(
            this.geApiMethod(),
            this.getBaseUrl() + this.getApiPath(),
            { pathParams:pathParsms, headers: Headers.getHeaders({ ...defaultValue, ...headers }) }
        );
    }


}
