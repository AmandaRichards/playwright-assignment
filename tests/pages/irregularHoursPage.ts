import { Page } from 'playwright';
import {expect} from "@playwright/test";
import irregularHoursPage_content from "../content/irregularHoursPage_content";
import axeTest from "../accessibilityTestHelper";

class IrregularHoursPage {
    private readonly title: string;
    private readonly text: string;
    private readonly radioYes: string;
    private readonly radioNo: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.text = `.gem-c-hint`
        this.radioYes = `label[for="response-0"]`
        this.radioNo = `label[for="response-1"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(irregularHoursPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(irregularHoursPage_content.hintDiv),
            expect(page.locator(this.radioYes)).toContainText(irregularHoursPage_content.radioYes),
            expect(page.locator(this.radioNo)).toContainText(irregularHoursPage_content.radioNo)
        ]);
       await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click('label[for="response-0"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default IrregularHoursPage;
