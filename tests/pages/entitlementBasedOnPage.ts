import { Page } from 'playwright';
import {expect} from "@playwright/test";
import entitlementBasedOnPage_content from "../content/entitlementBasedOnPage_content";
import axeTest from "../accessibilityTestHelper";

class EntitlementBasedOnPage {
    private readonly title: string;
    private readonly text: string;
    private readonly radio1: string;
    private readonly radio2: string;
    private readonly radio3: string;
    private readonly radio4: string;
    private readonly radio5: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.govuk-hint`
        this.radio1 = `label[for="response-0"]`
        this.radio2 = `label[for="response-1"]`
        this.radio3 = `label[for="response-2"]`
        this.radio4 = `label[for="response-3"]`
        this.radio5 = `label[for="response-4"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(entitlementBasedOnPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(entitlementBasedOnPage_content.hintDiv),
            expect(page.locator(this.radio1)).toContainText(entitlementBasedOnPage_content.radio1),
            expect(page.locator(this.radio2)).toContainText(entitlementBasedOnPage_content.radio2),
            expect(page.locator(this.radio3)).toContainText(entitlementBasedOnPage_content.radio3),
            expect(page.locator(this.radio4)).toContainText(entitlementBasedOnPage_content.radio4),
            expect(page.locator(this.radio5)).toContainText(entitlementBasedOnPage_content.radio5),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click('label[for="response-2"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }

async continueOnShifts(page: Page): Promise<void> {
        await page.click('label[for="response-4"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default EntitlementBasedOnPage;