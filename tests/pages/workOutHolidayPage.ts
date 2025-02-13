import { Page } from 'playwright';
import {expect} from "@playwright/test";
import workOutHolidayPage_content from "../content/workOutHolidayPage_content";
import axeTest from "../accessibilityTestHelper";

class WorkOutHolidayPage {
    private readonly title: string;
    private readonly shiftsTitle: string;
    private readonly radio1: string;
    private readonly radio2: string;
    private readonly radio3: string;
    private readonly radio4: string;

    constructor() {
        this.title = `.govuk-fieldset__heading`
        this.shiftsTitle = `.govuk-fieldset__heading`
        this.radio1 = `label[for="response-0"]`
        this.radio2 = `label[for="response-1"]`
        this.radio3 = `label[for="response-2"]`
        this.radio4 = `label[for="response-3"]`
    }

    async checkPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toHaveText(workOutHolidayPage_content.pageTitle),
            expect(page.locator(this.radio1)).toContainText(workOutHolidayPage_content.radio1),
            expect(page.locator(this.radio2)).toContainText(workOutHolidayPage_content.radio2),
            expect(page.locator(this.radio3)).toContainText(workOutHolidayPage_content.radio3),
            expect(page.locator(this.radio4)).toContainText(workOutHolidayPage_content.radio4),
        ]);
        await axeTest(page);
    }
  async checkShiftsPageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.shiftsTitle)).toHaveText(workOutHolidayPage_content.pageTitleShifts),
            expect(page.locator(this.radio1)).toContainText(workOutHolidayPage_content.radio1),
            expect(page.locator(this.radio2)).toContainText(workOutHolidayPage_content.radio2),
            expect(page.locator(this.radio3)).toContainText(workOutHolidayPage_content.radio3),
            expect(page.locator(this.radio4)).toContainText(workOutHolidayPage_content.radio4),
        ]);
        await axeTest(page);
    }

    async continueOn(page: Page): Promise<void> {
        await page.click('label[for="response-0"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }

    async continueOnPartialYear(page: Page): Promise<void> {
        await page.click('label[for="response-3"]');
        await page.getByRole("button", { name: "Continue" }).click();
    }
}

export default WorkOutHolidayPage;