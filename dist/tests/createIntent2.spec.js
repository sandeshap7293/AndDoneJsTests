"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const variableFactory_1 = require("../helpers/variableFactory");
const common_base_1 = require("@siddheshwar.anajekar/common-base");
const apiUtils_1 = require("../utils/apiUtils");
const createIntent_1 = require("../api/createIntent");
const getMerchantListing_1 = require("../api/getMerchantListing");
const login_payload_1 = require("../api/payloads/login.payload");
const login_request_1 = require("../api/requests/login.request");
const login_response_1 = require("../api/response/login.response");
const getAllyUserKeys_1 = require("../api/getAllyUserKeys");
test_1.test.beforeAll(async ({}) => {
    variableFactory_1.VariableFactory.setEnvorimentData('qat');
});
(0, test_1.test)('Create Intent', async ({ page, request }) => {
    apiUtils_1.ApiUtils.setRequest(request);
    const allyUserName = "Zbook1201API";
    const allyPassword = "AutomationTest@123";
    const allyName = "Zbook1201";
    //ally login
    const allyLoginPay = login_payload_1.LoginPayload.getPayload({ userName: allyUserName, password: allyPassword });
    await apiUtils_1.ApiUtils.setResponse(await login_request_1.LoginRequest.login(allyLoginPay, { origin: variableFactory_1.VariableFactory.getAllyPortalUrl() }));
    common_base_1.AssertionUtils.verifyEquals(apiUtils_1.ApiUtils.getResponseCode(), 200, 'Ally Login');
    const allyId = await apiUtils_1.ApiUtils.getResponseValue('parentId');
    console.log('allyId:' + allyId);
    const allyUserId = await apiUtils_1.ApiUtils.getResponseValue('userId');
    console.log('allyUserId:' + allyUserId);
    //admin login
    const loginPay = login_payload_1.LoginPayload.getPayload({ userName: variableFactory_1.VariableFactory.getAdminUsername(), password: variableFactory_1.VariableFactory.getAdminPassword() });
    await apiUtils_1.ApiUtils.setResponse(await login_request_1.LoginRequest.login(loginPay, { origin: variableFactory_1.VariableFactory.getAdminPortalUrl() }));
    common_base_1.AssertionUtils.verifyEquals(apiUtils_1.ApiUtils.getResponseCode(), 200, 'Admin Login');
    variableFactory_1.VariableFactory.setLoginToken(await login_response_1.LoginResponse.getToken());
    //get merchant listing
    await apiUtils_1.ApiUtils.setResponse(await getMerchantListing_1.GetMerchantListing.getMerchantListing({ pageSize: 10, startRow: 0, allyName: allyName }, { authorization: variableFactory_1.VariableFactory.getLoginToken() }));
    common_base_1.AssertionUtils.verifyEquals(apiUtils_1.ApiUtils.getResponseCode(), 200, 'Get Merchant Listing');
    variableFactory_1.VariableFactory.setAppKey(await apiUtils_1.ApiUtils.getResponseValueFromArray('data', 'id', { isActive: true }));
    //get ally user keys
    await apiUtils_1.ApiUtils.setResponse(await getAllyUserKeys_1.GetAllyUserKeys.getAllyUserKeys({ allyId: allyId, allyUserId: allyUserId }));
    common_base_1.AssertionUtils.verifyEquals(apiUtils_1.ApiUtils.getResponseCode(), 200, 'Get Ally User Keys');
    variableFactory_1.VariableFactory.setApiKey(await apiUtils_1.ApiUtils.getResponseValueFromArray('', 'keyValue', { keyStatus: 1 }));
    //create intent
    await apiUtils_1.ApiUtils.setResponse(await createIntent_1.CreateIntent.createIntentWithDefaultValues({}));
    common_base_1.AssertionUtils.verifyEquals(apiUtils_1.ApiUtils.getResponseCode(), 201, 'Create Intent');
    variableFactory_1.VariableFactory.setPaymentToken(await createIntent_1.CreateIntent.getPaymentIntentId());
    console.log("Payment Token:" + variableFactory_1.VariableFactory.getPaymentToken());
    const url = variableFactory_1.VariableFactory.getAndDoneJsPortalUrl() + "?token=" + variableFactory_1.VariableFactory.getPaymentToken();
    console.log('URL:' + url);
    await page.goto(url, { waitUntil: "load" });
});
