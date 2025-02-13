import { Page } from 'playwright';
import {expect} from "@playwright/test";
import resultsPage_content from "../content/resultsPage_content";
import axeTest from "../accessibilityTestHelper";

class ResultsPage {
    private readonly title: string;
    private readonly text: string;

    constructor() {
        this.title = `.govuk-heading-xl`
        this.text = `.summary`
        this.journey1Text = '.gem-c-govspeak'
    }

    async checkJourney1PageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(resultsPage_content.pageTitle),
            expect(page.locator(this.journey1Text)).toContainText(resultsPage_content.divTextJourney1),
        ]);
        await axeTest(page);
    }

     async checkJourney2PageLoads(page: Page): Promise<void> {
        await Promise.all([
            expect(page.locator(this.title)).toContainText(resultsPage_content.pageTitle),
            expect(page.locator(this.text)).toContainText(resultsPage_content.divTextJourney2),
        ]);
        await axeTest(page);
    }
}

export default ResultsPage;