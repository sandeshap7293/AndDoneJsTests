"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIntentResponse = void 0;
const base_api_1 = require("../base.api");
class CreateIntentResponse extends base_api_1.BaseAPI {
    static async getPaymentIntentId() {
        return await this.getResponseValue('paymentToken');
    }
}
exports.CreateIntentResponse = CreateIntentResponse;
