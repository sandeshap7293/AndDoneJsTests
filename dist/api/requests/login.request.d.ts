import { ApiUtils } from "../../utils/apiUtils";
export declare class LoginRequest extends ApiUtils {
    static login(payload: Record<string, any>, options?: {
        origin?: string;
    }): Promise<void>;
}
