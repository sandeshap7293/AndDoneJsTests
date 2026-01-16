import { ReadAndStoreTestData } from "../helpers/readAndStoreTestData";

export class ApiUtils extends ReadAndStoreTestData {

    static async sendRequest(
        method: string |'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        url: string,
        options?: {
            body?: Record<string, any>;
            headers?: Record<string, any>;
            queryParams?: Record<string, any>;
        }
    ) {
        const reqOptions: any = {};
        if (options?.headers) {
            reqOptions.headers = options.headers;
        }
        if (options?.queryParams) {
            reqOptions.params = options.queryParams;
        }
        if (options?.body) {
            reqOptions.data = options.body;
        }
        console.log(method, url);
        if (reqOptions.headers) console.log('Headers:', JSON.stringify(reqOptions.headers, null, 2));
        if (reqOptions.data) console.log('Body:', JSON.stringify(reqOptions.data, null, 2));
        if (reqOptions.queryParams) console.log('Query Params:', JSON.stringify(reqOptions.params, null, 2));
        const response = await this.getRequest().fetch(url, {
            method,
            ...reqOptions
        });
        this.setResponse(response);
        this.setResponseCode(response.status());
        this.setResponseBody(await response.json());
        console.log('Status:', this.getResponseCode());
        console.log('Response:', this.getResponseBody());
    }


    static getResponseObjectValue(key:string) {
        try {
            return this.getResponseBody().key;
        } catch (error) {
            return "";        
        }
    }


}