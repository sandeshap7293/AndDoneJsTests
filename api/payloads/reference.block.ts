
export class ReferenceBlock {

    private referenceType:any;
    private referenceKey:any;
    private referenceNumber:any;

    private block:Record<string, any> = {};

    getReferenceType() {
        return this.referenceType;
    }

    setReferenceType(referenceType: any) {
        this.referenceType = referenceType;
    }

    getReferenceKey() {
        return this.referenceKey;
    }

    setReferenceKey(referenceKey: any) {
        this.referenceKey = referenceKey;
    }

    getReferenceNumber() {
        return this.referenceNumber;
    }

    setReferenceNumber(referenceNumber: any) {
        this.referenceNumber = referenceNumber;
    }

    getBlock(): Record<string, any> {
        if (this.getReferenceType() != undefined) this.block['referenceType'] = this.getReferenceType();
        if (this.getReferenceKey() != undefined) this.block['referenceKey'] = this.getReferenceKey();
        if (this.getReferenceNumber() != undefined) this.block['referenceNumber'] = this.getReferenceNumber();
        return this.block;
    }


}