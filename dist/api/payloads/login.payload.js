"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPL = void 0;
class LoginPL {
    static getPayload(options = {}) {
        const simpleFields = [
            'userName',
            'password',
        ];
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.payload[field] = options[field];
            }
        }
    }
}
exports.LoginPL = LoginPL;
