import { test, expect } from '@playwright/test';
// import { CreateIntentPL } from '../api/payloads/createIntent.payload';
import { ReferenceBlock } from '../api/payloads/reference.block';
import { CustomerBlock } from '../api/payloads/customer.block';
import { ReadAndStoreTestData } from '../helpers/readAndStoreTestData';
import { CreateIntentRequest } from '../api/requests/createIntent.request';
import { VariableFactory } from '../helpers/vaiarbleFactory';
import { ApiHeaders } from '../helpers/apiHaders';
import { ObjectFactory } from '../helpers/objectFactory';
import { CreateIntentPL } from '../api/payloads/createIntent.payload';

test('Create Intent', async ({ page, request }) => {

    ReadAndStoreTestData.setEnvorimentData('qat');
    ObjectFactory.setRequest(request);
    const payload = CreateIntentPL.buildPayload({
        title: "PL1111111111111111111114",
        amount: 1000,
        paymentTypes: ["ACH","CreditCard"],
        // paymentDescription:"paymentDescription",
        // shortDescription:"shortDescription",
        expiresIn:"3000",
        saveForFuture:false,
        additionalDetailsPreference:"1",
        selectedCustomerFields:"First Name,Last Name,Email,Phone Number",
        // customers: [
        //     {}
        // ],
        splits: [
            { virtualAccount: "VA123", amount: 500 },{ virtualAccount: "VA123", amount: "500" }
        ]
    });
    console.log(payload)

    console.log(payload.amount);

    await CreateIntentRequest.createIntent(payload, {appKey: "KvoMzo8y", apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ=", origin: VariableFactory.getAndDoneJsPortalUrl(), xVersion:"2.1"});
    expect(VariableFactory.getResponseCode()).toEqual(201);
    const paymentToken = VariableFactory.getResponseBody().paymentToken;

    
})
