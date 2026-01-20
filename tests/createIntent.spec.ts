import { test, expect, APIResponse } from "@playwright/test";
import { ReadAndStoreTestData } from "../helpers/readAndStoreTestData";
import { CreateIntentRequest } from "../api/requests/createIntent.request";
import { VariableFactory } from "../helpers/variableFactory";
import { ObjectFactory } from "../helpers/objectFactory";
import { CreateIntentPaylod } from "../api/payloads/createIntent.payload";
import {
  commonUtils,
  GenerationUtils,
} from "@siddheshwar.anajekar/common-base";
import { AssertionUtils } from "@siddheshwar.anajekar/common-base";
import { CreateIntentResponse } from "../api/response/createIntent.response";
import { ApiUtils } from "../utils/apiUtils";

test("Create Intent", async ({ page, request }) => {
  const commonU: commonUtils = new commonUtils(page);
  AssertionUtils.softVerifyTrue(true);
  VariableFactory.setEnvorimentData("qat");

  // console.log("VariableFactory instance:", VariableFactory);
  ObjectFactory.setRequest(request);
  const payload = CreateIntentPaylod.getPaylodWithDefaultValues({
    additionalDetailsPreference: "1",
  });
  console.log(payload);
  console.log("Anddone JS:[]" + VariableFactory.getAndDoneJsPortalUrl());

  const response: APIResponse = await CreateIntentRequest.createIntent(
    payload,
    {
      appKey: "KvoMzo8y",
      apiKey: "H8cX7qZssVi3Gck+4cuuucuft0oUCMCKZHvxPe+OxLQ=",
    },
  );
  const responseCode = response.status();
  VariableFactory.setResponseCode(responseCode);
  console.log("responsebody:" + VariableFactory.getResponseBody());
  expect(responseCode).toEqual(201);
  const responseBody = await response.json();
  VariableFactory.setResponseBody(responseBody);
  console.log(responseBody.paymentToken);
  console.log("Payment Token" + CreateIntentResponse.getPaymentIntentId());
  console.log(ApiUtils.getResponseValue("intent.paymentTypes"));
});
