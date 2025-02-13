import { Page } from 'playwright';
import {expect} from "@playwright/test";
import employmentStartDatePage_content from "../content/employmentStartDatePage_content";
import axeTest from "../accessibilityTestHelper";

class EmploymentStartDatePage {
    private readonly title: string;
    private readonly day: string;
    private readonly month: string;
    private readonly year: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.day = `label[for="response-0"]`
        this.month = `label[for="response-1"]`
        this.year = `label[for="response-2"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await expect(page.locator(this.title)).toContainText(employmentStartDatePage_content.pageTitle);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
            await page.locator(this.day).fill("5");
            await page.locator(this.month).fill("1");
            await page.locator(this.year).fill("2024");
            await page.getByRole("button", { name: "Continue" }).click();
        }
}

export default EmploymentStartDatePage;