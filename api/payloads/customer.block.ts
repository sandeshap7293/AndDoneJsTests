
export class CustomerBlock {

    private firstName:any;
    private lastName:any;
    private email:any;
    private phone:any;

    private block:Record<string, any> = {};

    getFirstName() {
        return this.firstName;
    }

    setFirstName(firstName: any) {
        this.firstName = firstName;
    }

    getLastName() {
        return this.lastName;
    }

    setLastName(lastName: any) {
        this.lastName = lastName;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: any) {
        this.email = email;
    }

    getPhone() {
        return this.phone;
    }

    setPhone(phone: any) {
        this.phone = phone;
    }

    getBlock(): Record<string, any> {
        if (this.getFirstName() != undefined) this.block['FirstName'] = this.getFirstName();
        if (this.getLastName() != undefined) this.block['LastName'] = this.getLastName();
        if (this.getEmail() != undefined) this.block['Email'] = this.getEmail();
        if (this.getPhone() != undefined) this.block['Phone'] = this.getPhone();
        return this.block;
    }

}