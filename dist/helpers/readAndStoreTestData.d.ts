import envData from "../testData/env.data.json";
import apiData from "../testData/api.data.json";
import { ObjectFactory } from "./objectFactory";
type ENV = keyof typeof envData;
type ApiName = keyof typeof apiData;
export declare class ReadAndStoreTestData extends ObjectFactory {
    static setEnvorimentData(env: ENV): void;
    static setApiData(apiName: ApiName): void;
}
export {};
