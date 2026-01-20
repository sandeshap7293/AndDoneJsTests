"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Headers = void 0;
const base_api_1 = require("../base.api");
class Headers extends base_api_1.BaseAPI {
    static getHeaders(options = {}) {
        this.headers = {};
        if (options.origin)
            this.headers['Origin'] = options.origin;
        if (options.contentType)
            this.headers['Content-Type'] = options.contentType;
        if (options.authorization)
            this.headers['Authorization'] = options.authorization;
        if (options.xVersion)
            this.headers['x-version'] = options.xVersion;
        if (options.apiKey)
            this.headers['x-api-key'] = options.apiKey;
        if (options.appKey)
            this.headers['x-app-key'] = options.appKey;
        return this.headers;
    }
}
exports.Headers = Headers;
