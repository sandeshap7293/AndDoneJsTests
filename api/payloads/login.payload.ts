import { BaseAPI, Login } from "../base.api";

export class LoginPayload extends BaseAPI {

    static payload: Record<string, unknown>;

    static getPayload(options: Login = {}) {
        this.payload = {};
        const simpleFields: (keyof Login)[] = [
            'userName',
            'password',
        ]
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.payload[field] = options[field];
            }
        }
        return this.payload;
    }

}