import { BaseAPI, Header } from "../base.api";

export class Headers extends BaseAPI {

    static headers: Record<string, string>;

    static getHeaders(options: Header = {}) {
        this.headers = {};
        if (options.origin) this.headers['Origin'] = options.origin;
        if (options.contentType) this.headers['Content-Type'] = options.contentType;
        if (options.authorization) this.headers['Authorization'] = options.authorization;
        if (options.xVersion) this.headers['x-version'] = options.xVersion;
        if (options.apiKey) this.headers['x-api-key'] = options.apiKey;
        if (options.appKey) this.headers['x-app-key'] = options.appKey;
        return this.headers;
    }

}