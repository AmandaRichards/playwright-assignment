import { Page } from 'playwright';
import {expect} from "@playwright/test";
import numberOfShiftsPage_content from "../content/numberOfShiftsPage_content";
import axeTest from "../accessibilityTestHelper";

class NumberOfShiftsPage {
    private readonly title: string;
    private readonly textbox: string;


    constructor() {
        this.title = `.govuk-label-wrapper`
        this.textbox = `#response`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await expect(page.locator(this.title)).toContainText(numberOfShiftsPage_content.pageTitle)
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.locator(this.textbox).fill("3");
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default NumberOfShiftsPage;
