import { Page } from 'playwright';
import {expect} from "@playwright/test";
import leaveYearStartPage_content from "../content/leaveYearStartPage_content";
import axeTest from "../accessibilityTestHelper";

class LeaveYearStartPage {
    private readonly title: string;
    private readonly text: string;
    private readonly day: string;
    private readonly month: string;
    private readonly year: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.gem-c-hint`
        this.day = `label[for="response-0"]`
        this.month = `label[for="response-1"]`
        this.year = `label[for="response-2"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(leaveYearStartPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(leaveYearStartPage_content.hintDiv),
        ]);
       await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
            await page.locator(this.day).fill("5");
            await page.locator(this.month).fill("1");
            await page.locator(this.year).fill("2024");
            await page.getByRole("button", { name: "Continue" }).click();
            await page.waitForSelector('.govuk-fieldset__heading', { timeout: 10000 })
        }
}

export default LeaveYearStartPage;