"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightUtils = void 0;
class PlaywrightUtils {
    static async click(loc) {
        await loc.click();
    }
    static async fill(loc, value) {
        await loc.fill(value);
    }
    static async clear(loc) {
        await loc.clear();
    }
    static async waitForElementVisible(loc, timeout) {
        try {
            await loc.waitFor({ state: 'visible', ...(timeout && { timeout }) });
        }
        catch (error) {
            //
        }
    }
    static async waitForElementHidden(loc, timeout) {
        try {
            await loc.waitFor({ state: 'hidden', ...(timeout && { timeout }) });
        }
        catch (error) {
            //
        }
    }
    static async isVisible(loc) {
        return await loc.isVisible();
    }
    static async isDisable(loc) {
        return await loc.isDisabled();
    }
    static async getInnerText(loc) {
        return await loc.innerText();
    }
    static async isElementTextMatchInnerText(loc, expected) {
        return await this.getInnerText(loc) === expected;
    }
    static async isElementTextContainsInnerText(loc, expected) {
        return (await this.getInnerText(loc)).includes(expected);
    }
    static async getText(loc) {
        return await loc.textContent();
    }
    static async getEnteredValueFromTextbox(loc) {
        return await loc.inputValue();
    }
    static async isElementTextMatchText(loc, expected) {
        return await this.getText(loc) === expected;
    }
    static async isElementTextContainsText(loc, expected) {
        const actual = await this.getText(loc);
        if (typeof (actual) === "string") {
            return actual.includes(expected);
        }
        else {
            return false;
        }
    }
    static async getAllInnerText(loc_list) {
        return await loc_list.allInnerTexts();
    }
    static async getAllText(loc_list) {
        return await loc_list.allTextContents();
    }
    static async getAttributeValue(loc, attributeName) {
        return await loc.getAttribute(attributeName);
    }
    static async isAttributeValueContains(loc, attributeName, expectedValue) {
        const attributeValue = await this.getAttributeValue(loc, attributeName);
        return attributeValue === null || attributeValue === void 0 ? void 0 : attributeValue.includes(expectedValue);
    }
    static async getIndexOfExpected(loc_list, expected) {
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
    static async getColumnValuesElementsFromTable(tbl_loc, tbl_hdr_list, tbl_vlu, columnName) {
        const index = await this.getIndexOfExpected(tbl_hdr_list, columnName) + 1;
        return tbl_loc.locator(tbl_vlu + "[" + index + "]");
    }
}
exports.PlaywrightUtils = PlaywrightUtils;
