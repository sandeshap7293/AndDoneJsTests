import { BaseAPI, Header } from "../base.api";
export declare class CreateIntentRequest extends BaseAPI {
    static createIntent(payload: Record<string, unknown>, headers: Header): Promise<import("playwright-core").APIResponse>;
}
