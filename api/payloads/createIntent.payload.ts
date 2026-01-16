type Customer = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}; 

type Reference = {
  referenceType?: string;
  referenceKey?: string;
  referenceNumber?: string;
};

type Split = {
  virtualAccount?: string;
  amount?: number | string;
  reference?: string;
  chargeIndicator?: string;
};

type CreateIntentOptions = {
  amount?: number | string;
  paymentTypes?: string[];
  title?: string;
  paymentDescription?: string;
  shortDescription?: string;
  expiresIn?: string;
  invoiceNumber?: string;
  additionalDetailsPreference?: string;
  selectedCustomerFields?: string;
  customers?: Customer[];
  saveForFuture?: boolean | string;
  enablePremiumFinance?: boolean | string;
  references?: Reference[];
  suppressTechnologyFee?: boolean | string;
  overrideTechnologyFee?: number | string;
  splits?: Split[];
};

export class CreateIntentPL {
    static payload: Record<string, unknown>;

  static buildPayload(options: CreateIntentOptions = {}) {
    this.payload = {};
    const simpleFields: (keyof CreateIntentOptions)[] = [
      'amount',
      'title',
      'paymentDescription',
      'shortDescription',
      'expiresIn',
      'invoiceNumber',
      'saveForFuture',
      'enablePremiumFinance',
      'suppressTechnologyFee',
      'overrideTechnologyFee',
      'additionalDetailsPreference',
      'selectedCustomerFields'
    ];

    for (const field of simpleFields) {
      if (options[field] !== undefined) {
        this.payload[field] = options[field];
      }
    }
    if (options.paymentTypes?.length) {
      this.payload.intent = {
        paymentTypes: options.paymentTypes
      };
    }
    if (options.customers?.length) {
      this.payload.customers = options.customers
        .map(c => ({
          ...(c.firstName && { firstName: c.firstName }),
          ...(c.lastName && { lastName: c.lastName }),
          ...(c.email && { email: c.email }),
          ...(c.phone && { phone: c.phone }),
        }))
        .filter(c => Object.keys(c).length > 0);
    }
    if (options.references?.length) {
      this.payload.referenceDataList = options.references
        .map(r => ({
          ...(r.referenceType && { referenceType: r.referenceType }),
          ...(r.referenceKey && { referenceKey: r.referenceKey }),
          ...(r.referenceNumber && { referenceNumber: r.referenceNumber }),
        }))
        .filter(r => Object.keys(r).length > 0);
    }
    if (options.splits?.length) {
      this.payload.splits = options.splits
        .map(s => ({
          ...(s.virtualAccount && { virtualAccount: s.virtualAccount }),
          ...(s.amount && { amount: s.amount }),
          ...(s.reference && { reference: s.reference }),
          ...(s.chargeIndicator && { chargeIndicator: s.chargeIndicator }),
        }))
        .filter(s => Object.keys(s).length > 0);
    }

    return this.payload;
  }
}
