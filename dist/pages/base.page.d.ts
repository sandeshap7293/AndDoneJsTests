import { Page } from "@playwright/test";
import { ObjectFactory } from "../helpers/objectFactory";
import { commonUtils } from "@siddheshwar.anajekar/common-base";
export declare class BasePage extends ObjectFactory {
    readonly page: Page;
    readonly commonUtils: commonUtils;
    constructor(page: Page);
}
