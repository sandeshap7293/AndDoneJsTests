import { ReadAndStoreTestData } from "../helpers/readAndStoreTestData";
export declare class ApiUtils extends ReadAndStoreTestData {
    static sendRequest(method: string | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', url: string, options?: {
        body?: Record<string, any>;
        headers?: Record<string, any>;
        queryParams?: Record<string, any>;
    }): Promise<any>;
    static getResponseValue(path: string, defaultValue?: any): any;
    static getResponseArray<T = any>(path: string): T[];
}
