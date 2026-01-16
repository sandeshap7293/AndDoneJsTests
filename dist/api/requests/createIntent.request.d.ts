import { ApiUtils } from "../../utils/apiUtils";
export declare class CreateIntentRequest extends ApiUtils {
    static createIntent(payload: Record<string, unknown>, options?: {
        origin?: unknown;
        appKey?: unknown;
        apiKey?: unknown;
        xVersion?: unknown;
    }): Promise<void>;
}
