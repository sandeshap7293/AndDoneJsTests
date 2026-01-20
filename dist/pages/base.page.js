"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const objectFactory_1 = require("../helpers/objectFactory");
const common_base_1 = require("@siddheshwar.anajekar/common-base");
class BasePage extends objectFactory_1.ObjectFactory {
    constructor(page) {
        super();
        this.page = page;
        this.commonUtils = new common_base_1.commonUtils(page);
    }
}
exports.BasePage = BasePage;
