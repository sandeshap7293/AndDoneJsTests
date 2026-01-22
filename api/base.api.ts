import { ApiUtils } from "../utils/apiUtils";

export type Header = {
    origin?: string;
    contentType?: string;
    authorization?: string;
    appKey?: string;
    apiKey?: string;
    xVersion?: string;
}

export type Customer = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
};

export type Reference = {
  referenceType?: string;
  referenceKey?: string;
  referenceNumber?: string;
};

export type Split = {
  virtualAccount?: string;
  amount?: number | string;
  reference?: string;
  chargeIndicator?: string;
};

export type Login = {
    userName?: string;
    password?: string;
}

export class BaseAPI extends ApiUtils {

  

}