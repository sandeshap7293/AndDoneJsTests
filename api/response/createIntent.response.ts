import { BaseAPI } from "../base.api";

export class CreateIntentResponse extends BaseAPI {

    static async getPaymentIntentId() {
        return await this.getResponseValue('paymentToken');
    }

}