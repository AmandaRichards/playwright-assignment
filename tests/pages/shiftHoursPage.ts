import { Page } from 'playwright';
import {expect} from "@playwright/test";
import shiftHoursPage_content from "../content/shiftHoursPage_content";
import axeTest from "../accessibilityTestHelper";

class ShiftHoursPage {
    private readonly title: string;
    private readonly textbox: string;


    constructor() {
        this.title = `.govuk-label-wrapper`
        this.textbox = `#response`

    }

    async checkPageLoads(page: Page): Promise<void> {
        await expect(page.locator(this.title)).toContainText(shiftHoursPage_content.pageTitle);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.textbox).fill("8");
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default ShiftHoursPage;
