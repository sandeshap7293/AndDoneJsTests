import { Locator } from "@playwright/test";

export class PlaywrightUtils {

    static async click(loc: Locator) {
        await loc.click();
    }

    static async fill(loc: Locator, value: string) {
        await loc.fill(value);
    }

    static async clear(loc: Locator) {
        await loc.clear();
    }

    static async waitForElementVisible(loc: Locator, timeout?: number) {
        try {
            await loc.waitFor({ state: 'visible', ...(timeout && { timeout }) });
        }
        catch (error) {
            //
        }
    }

    static async waitForElementHidden(loc: Locator, timeout?: number) {
        try {
            await loc.waitFor({ state: 'hidden', ...(timeout && { timeout }) });
        }
        catch (error) {
            //
        }
    }

    static async isVisible(loc: Locator): Promise<boolean> {
        return await loc.isVisible();
    }

    static async isDisable(loc: Locator): Promise<boolean> {
        return await loc.isDisabled();
    }

    static async getInnerText(loc: Locator): Promise<string> {
        return await loc.innerText();
    }

    static async isElementTextMatchInnerText(loc: Locator, expected: string): Promise<boolean> {
        return await this.getInnerText(loc) === expected;
    }

    static async isElementTextContainsInnerText(loc: Locator, expected: string): Promise<boolean> {
        return (await this.getInnerText(loc)).includes(expected);
    }

    static async getText(loc: Locator): Promise<string | null> {
        return await loc.textContent();
    }

    static async getEnteredValueFromTextbox(loc: Locator) {
        return await loc.inputValue();
    }

    static async isElementTextMatchText(loc: Locator, expected: string): Promise<boolean> {
        return await this.getText(loc) === expected;
    }

    static async isElementTextContainsText(loc: Locator, expected: any): Promise<boolean> {
        const actual = await this.getText(loc);
        if (typeof (actual) === "string") {
            return actual.includes(expected);
        }
        else {
            return false;
        }
    }

    static async getAllInnerText(loc_list: Locator): Promise<string[]> {
        return await loc_list.allInnerTexts();
    }

    static async getAllText(loc_list: Locator): Promise<string[]> {
        return await loc_list.allTextContents();
    }

    static async getAttributeValue(loc: Locator, attributeName: string): Promise<string | null> {
        return await loc.getAttribute(attributeName);
    }

    static async isAttributeValueContains(loc: Locator, attributeName: string, expectedValue: string): Promise<boolean | undefined> {
        const attributeValue = await this.getAttributeValue(loc, attributeName);
        return attributeValue?.includes(expectedValue);
    }

    static async getIndexOfExpected(loc_list: Locator, expected: string): Promise<number> {
        let index = -1;
        const count = await loc_list.count();
        for (let i = 0; i < count; i++) {
            if (await this.getInnerText(loc_list.nth(i)) === expected) {
                index = i;
                break;
            }
        }
        return index;
    }

    static async getColumnValuesElementsFromTable(tbl_loc: Locator, tbl_hdr_list: Locator, tbl_vlu: string, columnName: string): Promise<Locator> {
        const index = await this.getIndexOfExpected(tbl_hdr_list, columnName) + 1;
        return tbl_loc.locator(tbl_vlu + "[" + index + "]");
    }


}