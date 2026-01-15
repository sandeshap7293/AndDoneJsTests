import { Headers } from "../api/payloads/headers";
import { ReadAndStoreTestData } from "./readAndStoreTestData";

export class ApiHeaders extends ReadAndStoreTestData {

    static getApiHeders(options?: { origin?: any; contentType?: any; authorization?: any; appKey?: any; apiKey?: any; xVersion?: any; }) {
        this.setHeaders(new Headers());
        if (options?.origin) this.getHeaders().setOrigin(options.origin);
        if (options?.contentType) this.getHeaders().setContentType(options.contentType);
        if (options?.authorization) this.getHeaders().setAuthorization(options.authorization);
        if (options?.appKey) this.getHeaders().setAppKey(options.appKey);
        if (options?.apiKey) this.getHeaders().setApiKey(options.apiKey);
        if (options?.xVersion) this.getHeaders().setXVersion(options.xVersion);
        return this.getHeaders().getHeaders();
    }



}