"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = void 0;
const base_api_1 = require("../base.api");
class LoginResponse extends base_api_1.BaseAPI {
    static async getToken() {
        return await this.getResponseValue('token');
    }
}
exports.LoginResponse = LoginResponse;
