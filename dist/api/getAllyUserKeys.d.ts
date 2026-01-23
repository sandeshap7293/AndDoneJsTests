import { BaseAPI, Header } from "./base.api";
export declare class GetAllyUserKeys extends BaseAPI {
    static getAllyUserKeys(pathParsms: {
        allyId: any;
        allyUserId: any;
    }, headers?: Header): Promise<any>;
}
