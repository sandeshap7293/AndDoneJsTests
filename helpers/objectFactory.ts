import { APIRequestContext, APIResponse } from "@playwright/test";
import { VariableFactory } from "./variableFactory";
import { commonUtils } from "@siddheshwar.anajekar/common-base";

export class ObjectFactory extends VariableFactory {
  private static request: APIRequestContext;
  private static response: APIResponse;
  static commonUtils: commonUtils;

  static getRequest() {
    return this.request;
  }

  static setRequest(request: APIRequestContext) {
    this.request = request;
  }

  static getResponse() {
    return this.response;
  }

  static setResponse(response: APIResponse) {
    this.response = response;
  }

  static getCommonUtils() {
    return this.commonUtils;
  }

  static setCommonUtils(commonUtils: commonUtils) {
    this.commonUtils = commonUtils;
  }
}
