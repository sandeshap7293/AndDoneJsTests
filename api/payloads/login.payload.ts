type Login = {
    userName?: string;
    password?: string;
}

export class LoginPL {

    static payload: Record<string, unknown>;

    static getPayload(options: Login = {}) {
        const simpleFields: (keyof Login)[] = [
            'userName',
            'password',
        ]
        for (const field of simpleFields) {
            if (options[field] !== undefined) {
                this.payload[field] = options[field];
            }
        }
    }

}