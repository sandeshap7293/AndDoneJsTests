import { BaseAPI } from "../base.api";


export class CreateIntentResponse extends BaseAPI {

    static getPaymentIntentId() {
        return this.getResponseValue('paymentToken');
    }

}