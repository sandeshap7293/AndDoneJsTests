import { CustomerBlock } from "../../api/payloads/customer.block";
import { ReferenceBlock } from "../../api/payloads/reference.block";
import { CreateIntentRequest } from "../../api/requests/createIntent.request";

export class CreateIntentOperation extends CreateIntentRequest {

    static amount: number;
    static title: string;
    static paymentDescription:string;
    static shortDescription:string;
    static expiresIn:string
    static invoiceNumber:string;
    static additionalDetailsPerfernce:string;
    static selectedCustomerFields:string;
    static saveForFurture:boolean;
    static enablePremiumFinance:boolean;
    static references: ReferenceBlock[];
    static customers: CustomerBlock[];

    static setCreateIntentDetails(options?: { amount?: number, 
        paymentTypes?:string[], 
        title?: string, 
        paymentDescription?:string, 
        shortDescription?:string, 
        expiresIn?:string, 
        invoiceNumber?: string, 
        additionalDetails?:{preference?:string, 
            selectedCustomerFields?:string, 
            customers?:CustomerBlock[]}, 
        // selectedCustomerFields?:string, 
        saveForFuture?:boolean, 
        enablePremiumFinance?:boolean, 
        references?:ReferenceBlock[]
        // customers?:CustomerBlock[]
    }) {
        this.amount = options?.amount ?? 100;
        this.title = options?.title ?? "PL1111111111111111";
        this.paymentDescription = options?.paymentDescription ?? "paymentDescription";
        this.shortDescription = options?.shortDescription ?? "shortDescription";
        this.expiresIn = options?.expiresIn ?? "3000";
        this.invoiceNumber = options?.invoiceNumber ?? "AnddOneOnly";
        this.additionalDetailsPerfernce = options?.additionalDetails?.preference ?? "1";
        this.selectedCustomerFields = options?.additionalDetails?.selectedCustomerFields ?? "First Name,Last Name,Email,Phone Number";
    }

}