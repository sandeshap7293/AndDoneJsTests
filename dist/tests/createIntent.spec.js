"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const createIntent_request_1 = require("../api/requests/createIntent.request");
const variableFactory_1 = require("../helpers/variableFactory");
const createIntent_payload_1 = require("../api/payloads/createIntent.payload");
const common_base_1 = require("@siddheshwar.anajekar/common-base");
const createIntent_response_1 = require("../api/response/createIntent.response");
const apiUtils_1 = require("../utils/apiUtils");
test_1.test.beforeAll(async ({}) => {
    variableFactory_1.VariableFactory.setEnvorimentData('qat');
});
// test.beforeEach(async({request})=>{
//     ApiUtils.setRequest(request);
//     const payload = CreateIntentPaylod.getPaylodWithDefaultValues({additionalDetailsPreference:'1'});
//     await ApiUtils.setResponse(await CreateIntentRequest.createIntent(
//         payload, 
//         {appKey: "KvoMzo8y", apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ="}
//     ));
//     const responseCode = ApiUtils.getResponseCode();
//     AssertionUtils.verifyEquals(responseCode, 201, 'Create Intent');
//     VariableFactory.setPaymentToken(await CreateIntentResponse.getPaymentIntentId());
//     console.log("Payment Token:"+VariableFactory.getPaymentToken());
// }) 
(0, test_1.test)('Create Intent', async ({ page, request }) => {
    apiUtils_1.ApiUtils.setRequest(request);
    const payload = createIntent_payload_1.CreateIntentPaylod.getPaylodWithDefaultValues({ additionalDetailsPreference: '1' });
    await apiUtils_1.ApiUtils.setResponse(await createIntent_request_1.CreateIntentRequest.createIntent(payload, { appKey: "KvoMzo8y", apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ=" }));
    common_base_1.AssertionUtils.verifyEquals(apiUtils_1.ApiUtils.getResponseCode(), 201, 'Create Intent');
    variableFactory_1.VariableFactory.setPaymentToken(await createIntent_response_1.CreateIntentResponse.getPaymentIntentId());
    console.log("Payment Token:" + variableFactory_1.VariableFactory.getPaymentToken());
    const url = variableFactory_1.VariableFactory.getAndDoneJsPortalUrl() + "?token=" + variableFactory_1.VariableFactory.getPaymentToken();
    console.log('URL:' + url);
    await page.goto(url, { waitUntil: "load" });
});
