import { test} from '@playwright/test';
import { VariableFactory } from '../helpers/variableFactory';
import { AssertionUtils } from '@siddheshwar.anajekar/common-base';
import { ApiUtils } from '../utils/apiUtils';
import { CreateIntent } from '../api/createIntent';
import { GetMerchantListing } from '../api/getMerchantListing';
import { LoginPayload } from '../api/payloads/login.payload';
import { LoginRequest } from '../api/requests/login.request';
import { LoginResponse } from '../api/response/login.response';
import { GetAllyUserKeys } from '../api/getAllyUserKeys';

test.beforeAll(async({})=>{
    VariableFactory.setEnvorimentData('qat');
})

test('Create Intent', async ({ page, request }) => {
    ApiUtils.setRequest(request);
    const allyUserName = "Zbook1201API";
    const allyPassword = "AutomationTest@123";
    const allyName = "Zbook1201";

    //ally login
    const allyLoginPay = LoginPayload.getPayload({userName:allyUserName, password:allyPassword});
    await ApiUtils.setResponse(await LoginRequest.login(allyLoginPay, {origin:VariableFactory.getAllyPortalUrl()}));
    AssertionUtils.verifyEquals(ApiUtils.getResponseCode(), 200, 'Ally Login');
    const allyId = await  ApiUtils.getResponseValue('parentId');
    console.log('allyId:'+allyId);
    const allyUserId =await ApiUtils.getResponseValue('userId');
    console.log('allyUserId:'+allyUserId);

    //admin login
    const loginPay = LoginPayload.getPayload({userName:VariableFactory.getAdminUsername(), password:VariableFactory.getAdminPassword()});
    await ApiUtils.setResponse(await LoginRequest.login(loginPay, {origin:VariableFactory.getAdminPortalUrl()}));
    AssertionUtils.verifyEquals(ApiUtils.getResponseCode(), 200, 'Admin Login');
    VariableFactory.setLoginToken(await LoginResponse.getToken());
    
    //get merchant listing
    await ApiUtils.setResponse(await GetMerchantListing.getMerchantListing({pageSize:10, startRow:0, allyName:allyName},{authorization:VariableFactory.getLoginToken()}));
    AssertionUtils.verifyEquals(ApiUtils.getResponseCode(), 200, 'Get Merchant Listing');
    VariableFactory.setAppKey(await ApiUtils.getResponseValueFromArray('data', 'id', {isActive:true}));
    
    //get ally user keys
    await ApiUtils.setResponse(await GetAllyUserKeys.getAllyUserKeys({allyId:allyId, allyUserId: allyUserId}));
    AssertionUtils.verifyEquals(ApiUtils.getResponseCode(), 200, 'Get Ally User Keys');
    VariableFactory.setApiKey(await ApiUtils.getResponseValueFromArray('', 'keyValue', {keyStatus:1}));
    
    //create intent
    await ApiUtils.setResponse(await CreateIntent.createIntentWithDefaultValues({}));
    AssertionUtils.verifyEquals(ApiUtils.getResponseCode(), 201, 'Create Intent');
    VariableFactory.setPaymentToken(await CreateIntent.getPaymentIntentId());
    console.log("Payment Token:"+VariableFactory.getPaymentToken());
    

    const url = VariableFactory.getAndDoneJsPortalUrl()+"?token="+VariableFactory.getPaymentToken();
    console.log('URL:'+url);
    await page.goto(url, { waitUntil: "load" });  
})
