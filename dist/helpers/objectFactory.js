"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFactory = void 0;
const vaiarbleFactory_1 = require("./vaiarbleFactory");
class ObjectFactory extends vaiarbleFactory_1.VariableFactory {
    static getRequest() {
        return this.request;
    }
    static setRequest(request) {
        this.request = request;
    }
    static getResponse() {
        return this.response;
    }
    static setResponse(response) {
        this.response = response;
    }
    static getCommonUtils() {
        return this.commonUtils;
    }
    static setCommonUtils(commonUtils) {
        this.commonUtils = commonUtils;
    }
}
exports.ObjectFactory = ObjectFactory;
