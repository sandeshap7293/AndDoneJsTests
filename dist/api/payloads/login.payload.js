"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPayload = void 0;
const base_api_1 = require("../base.api");
class LoginPayload extends base_api_1.BaseAPI {
    static getPayload(options = {}) {
        this.payload = {};
        const simpleFields = [
            'userName',
            'password',
        ];
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.payload[field] = options[field];
            }
        }
        return this.payload;
    }
}
exports.LoginPayload = LoginPayload;
