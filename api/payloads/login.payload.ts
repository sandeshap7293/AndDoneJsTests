
export class LoginPL {

    private userName: any;
    private password: any;
    private payload: Record<string, any> = {};

    getUserName() {
        return this.userName;
    }

    setUserName(userName: any) {
        this.userName = userName;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: any) {
        this.password = password;
    }

    getPayload(): Record<string, any> {
        if (this.getUserName() != undefined) this.payload['userName'] = this.getUserName();
        if (this.getPassword() != undefined) this.payload['password'] = this.getPassword();
        return this.payload;
    }

}