import { BaseAPI } from "../base.api";

export class LoginResponse extends BaseAPI {

    static async getToken() {
        return await this.getResponseValue('token');
    }

}