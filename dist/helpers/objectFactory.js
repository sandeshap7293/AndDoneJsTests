"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectFactory = void 0;
const variableFactory_1 = require("./variableFactory");
class ObjectFactory extends variableFactory_1.VariableFactory {
    static getCommonUtils() {
        return this.commonUtils;
    }
    static setCommonUtils(commonUtils) {
        this.commonUtils = commonUtils;
    }
}
exports.ObjectFactory = ObjectFactory;
