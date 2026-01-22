import { Locator } from "@playwright/test";
export declare class PlaywrightUtils {
    static click(loc: Locator): Promise<void>;
    static fill(loc: Locator, value: string): Promise<void>;
    static clear(loc: Locator): Promise<void>;
    static waitForElementVisible(loc: Locator, timeout?: number): Promise<void>;
    static waitForElementHidden(loc: Locator, timeout?: number): Promise<void>;
    static isVisible(loc: Locator): Promise<boolean>;
    static isDisable(loc: Locator): Promise<boolean>;
    static getInnerText(loc: Locator): Promise<string>;
    static isElementTextMatchInnerText(loc: Locator, expected: string): Promise<boolean>;
    static isElementTextContainsInnerText(loc: Locator, expected: string): Promise<boolean>;
    static getText(loc: Locator): Promise<string | null>;
    static getEnteredValueFromTextbox(loc: Locator): Promise<string>;
    static isElementTextMatchText(loc: Locator, expected: string): Promise<boolean>;
    static isElementTextContainsText(loc: Locator, expected: any): Promise<boolean>;
    static getAllInnerText(loc_list: Locator): Promise<string[]>;
    static getAllText(loc_list: Locator): Promise<string[]>;
    static getAttributeValue(loc: Locator, attributeName: string): Promise<string | null>;
    static isAttributeValueContains(loc: Locator, attributeName: string, expectedValue: string): Promise<boolean | undefined>;
    static getIndexOfExpected(loc_list: Locator, expected: string): Promise<number>;
    static getColumnValuesElementsFromTable(tbl_loc: Locator, tbl_hdr_list: Locator, tbl_vlu: string, columnName: string): Promise<Locator>;
}
