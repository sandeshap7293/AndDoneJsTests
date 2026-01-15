
export class Headers {

    private contentType:any;
    private origin:any;
    private xVersion:any;
    private authroization:any;
    private appKey:any;
    private apiKey:any;
    private headers: Record<string, any> = {};

    getContentType() {
        return this.contentType;
    }

    setContentType(contentType:any) {
        this.contentType = contentType;
    }

    getOrigin() {
        return this.origin;
    }

    setOrigin(origin:any) {
        this.origin = origin;
    }

    getXVersion() {
        return this.xVersion;
    }

    setXVersion(xVersion:any) {
        this.xVersion = xVersion;
    }

    getAuthorization() {
        return this.authroization;
    }

    setAuthorization(authroization:any) {
        this.authroization = authroization;
    }

    getAppKey() {
        return this.appKey;
    }

    setAppKey(appKey:any) {
        this.appKey = appKey;
    }

    getApiKey() {
        return this.apiKey;
    }

    setApiKey(apiKey:any) {
        this.apiKey = apiKey;
    }

    getHeaders(): Record<string, any> {
        if (this.getContentType() != undefined) this.headers['Content-Type'] = this.getContentType();
        if (this.getOrigin() != undefined) this.headers['Origin'] = this.getOrigin();
        if (this.getAuthorization() != undefined) this.headers['Authorization'] = 'Bearer '+this.getAuthorization();
        if (this.getXVersion() != undefined) this.headers['x-version'] = this.getXVersion();
        if (this.getApiKey() != undefined) this.headers['x-api-key'] = this.getApiKey();
        if (this.getAppKey() != undefined) this.headers['x-app-key'] = this.getAppKey();
        return this.headers;
    }

}