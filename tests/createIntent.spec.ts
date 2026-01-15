import { test, expect } from '@playwright/test';
import { CreateIntentPL } from '../api/payloads/createIntent.payload';
import { ReferenceBlock } from '../api/payloads/reference.block';
import { CustomerBlock } from '../api/payloads/customer.block';
import { ReadAndStoreTestData } from '../helpers/readAndStoreTestData';
import { CreateIntentRequest } from '../api/requests/createIntent.request';
import { VariableFactory } from '../helpers/vaiarbleFactory';
import { ApiHeaders } from '../helpers/apiHaders';
import { ObjectFactory } from '../helpers/objectFactory';

test('Create Intent', async ({ page, request }) => {

    ReadAndStoreTestData.setEnvorimentData('qat');
    ObjectFactory.setRequest(request);

    let createIntentPL:CreateIntentPL = new CreateIntentPL();
    createIntentPL.setAmount(100);
    createIntentPL.setPaymentTypes(["ACH"])
    createIntentPL.setTitle("PL1111111111111111111111");
    createIntentPL.setPaymentDescription("paymentDescription");
    createIntentPL.setShortDescription("shortDescription");
    createIntentPL.setInvoiceNumber("ANDDONEONLY");
    createIntentPL.setExpiresIn("3000");
    createIntentPL.setSaveForFuture(false);
    createIntentPL.setEnablePremiumFinance(false);
    createIntentPL.setAdditionalDetailsPreference("1");
    createIntentPL.setSelectedCustomerFields("First Name,Last Name,Email,Phone Number");
    // let refrence1: ReferenceBlock = new ReferenceBlock();
    // refrence1.setReferenceType("1");
    // refrence1.setReferenceNumber("ABC222")

    // let refrence2: ReferenceBlock = new ReferenceBlock();
    // refrence2.setReferenceType("2");
    // refrence2.setReferenceKey("");
    // refrence2.setReferenceNumber("JDH9289");

    // let customer1: CustomerBlock = new CustomerBlock();
    // customer1.setFirstName("John");
    // customer1.setLastName("Wick");
    // customer1.setEmail("sandesh.lahoti@aurionpro.com");
    // customer1.setPhone("8738978989");

    // console.log(refrence1.getBlock());
    // console.log(refrence2.getBlock());
    // console.log(customer1.getBlock());
    // createIntentPL.setReferences(refrence1, refrence2);
    // createIntentPL.setCustomers(customer1);
    console.log(createIntentPL.getPayload());
    await CreateIntentRequest.createIntent(createIntentPL.getPayload(), {appKey: "KvoMzo8y", apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ=", origin: VariableFactory.getAndDoneJsPortalUrl(), xVersion:"2.1"});

})
