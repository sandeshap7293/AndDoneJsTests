import { test, expect, APIResponse } from '@playwright/test';
import { CreateIntentRequest } from '../api/requests/createIntent.request';
import { VariableFactory } from '../helpers/variableFactory';
import { ObjectFactory } from '../helpers/objectFactory';
import { CreateIntentPaylod } from '../api/payloads/createIntent.payload';
import { commonUtils, GenerationUtils } from '@siddheshwar.anajekar/common-base';
import { AssertionUtils } from '@siddheshwar.anajekar/common-base';
import {CreateIntentResponse} from '../api/response/createIntent.response';
import { ApiUtils } from '../utils/apiUtils';

test.beforeAll(async({})=>{
    VariableFactory.setEnvorimentData('qat');
})
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
test('Create Intent', async ({ page, request }) => {
    ApiUtils.setRequest(request);
    const payload = CreateIntentPaylod.getPaylodWithDefaultValues({additionalDetailsPreference:'1'});
    await ApiUtils.setResponse(await CreateIntentRequest.createIntent(
        payload, 
        {appKey: "KvoMzo8y", apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ="}
    ));
    AssertionUtils.verifyEquals(ApiUtils.getResponseCode(), 201, 'Create Intent');
    VariableFactory.setPaymentToken(await CreateIntentResponse.getPaymentIntentId());
    console.log("Payment Token:"+VariableFactory.getPaymentToken());

    const url = VariableFactory.getAndDoneJsPortalUrl()+"?token="+VariableFactory.getPaymentToken();
    console.log('URL:'+url);
    await page.goto(url, { waitUntil: "load" });  
})
