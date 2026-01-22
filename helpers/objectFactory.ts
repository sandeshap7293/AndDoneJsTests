import { VariableFactory } from "./variableFactory";
import { commonUtils } from "@siddheshwar.anajekar/common-base";

export class ObjectFactory extends VariableFactory {
    static commonUtils: commonUtils;

    static getCommonUtils() {
        return this.commonUtils;
    }

    static setCommonUtils(commonUtils: commonUtils) {
        this.commonUtils = commonUtils;
    }
 
}