import { test, expect } from '@playwright/test';
import { ReadAndStoreTestData } from '../helpers/readAndStoreTestData';
import { CreateIntentRequest } from '../api/requests/createIntent.request';
import { VariableFactory } from '../helpers/vaiarbleFactory';
import { ObjectFactory } from '../helpers/objectFactory';
import { CreateIntentPaylod } from '../api/payloads/createIntent.payload';
import { commonUtils, GenerationUtils } from '@siddheshwar.anajekar/common-base';
import { AssertionUtils } from '@siddheshwar.anajekar/common-base';

test('Create Intent', async ({ page, request }) => {
    const commonU:commonUtils = new commonUtils(page);
    AssertionUtils.softVerifyTrue(true);
    ReadAndStoreTestData.setEnvorimentData('qat');
    ObjectFactory.setRequest(request);
    const payload = CreateIntentPaylod.getPaylodWithDefaultValues();
    console.log(payload);
    console.log(CreateIntentPaylod.payload);


    // await CreateIntentRequest.createIntent(payload, {appKey: "KvoMzo8y", apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ=", origin: VariableFactory.getAndDoneJsPortalUrl()});
    // // expect(VariableFactory.getResponseCode()).toEqual(201);
    // const paymentToken = VariableFactory.getResponseBody().paymentToken;

    
})
