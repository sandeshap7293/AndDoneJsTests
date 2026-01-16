type Login = {
    userName?: string;
    password?: string;
};
export declare class LoginPL {
    static payload: Record<string, unknown>;
    static getPayload(options?: Login): void;
}
export {};
