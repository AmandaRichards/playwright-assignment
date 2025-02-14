import {test} from "@playwright/test";
import LandingPage from "./pages/landingPage";
import IrregularHoursPage from './pages/irregularHoursPage.ts';
import LeaveYearStartPage from './pages/leaveYearStartPage.ts';
import EntitlementBasedOnPage from './pages/entitlementBasedOnPage.ts'
import WorkOutHolidayPage from './pages/workOutHolidayPage.ts'
import EmploymentStartDatePage from './pages/employmentStartDatePage.ts'
import EmploymentEndDatePage from './pages/employmentEndDatePage.ts'
import ShiftHoursPage from './pages/shiftHoursPage.ts'
import NumberOfShiftsPage from './pages/numberOfShiftsPage.ts'
import DaysInShiftPatternPage from './pages/daysInShiftPatternPage.ts'
import ResultsPage from './pages/resultsPage.ts'

test(`Holiday Entitlement for a full leave year with annualised hours and other options`, async ({ page }): Promise<void> => {
       const landingPage: LandingPage = new LandingPage();
       await landingPage.checkPageLoads(page);
       await landingPage.continueOn(page);
       const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
       await irregularHoursPage.checkPageLoads(page);
       await irregularHoursPage.continueOn(page);
       const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage();
       await leaveYearStartPage.checkPageLoads(page);
       await leaveYearStartPage.continueOn(page);
       const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
       await entitlementBasedOnPage.checkPageLoads(page);
       await entitlementBasedOnPage.continueOn(page);
       const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
       await workOutHolidayPage.checkPageLoads(page);
       await workOutHolidayPage.continueOn(page);
       const resultsPage: ResultsPage = new ResultsPage();
       await resultsPage.checkJourney1PageLoads(page);
});

test(`Holiday Entitlement for someone starting and leaving part way through a leave year with shifts and other options`, async ({ page }): Promise<void> => {
      const landingPage: LandingPage = new LandingPage();
      await landingPage.checkPageLoads(page);
      await landingPage.continueOn(page);
      const irregularHoursPage: IrregularHoursPage = new IrregularHoursPage();
      await irregularHoursPage.checkPageLoads(page);
      await irregularHoursPage.continueOn(page);
      const leaveYearStartPage: LeaveYearStartPage = new LeaveYearStartPage();
      await leaveYearStartPage.checkPageLoads(page);
      await leaveYearStartPage.continueOn(page);
      const entitlementBasedOnPage: EntitlementBasedOnPage = new EntitlementBasedOnPage();
      await entitlementBasedOnPage.checkPageLoads(page);
      await entitlementBasedOnPage.continueOnShifts(page);
      const workOutHolidayPage: WorkOutHolidayPage = new WorkOutHolidayPage();
      await workOutHolidayPage.checkShiftsPageLoads(page);
      await workOutHolidayPage.continueOnPartialYear(page);
      const employmentStartDatePage: EmploymentStartDatePage = new EmploymentStartDatePage();
      await employmentStartDatePage.checkPageLoads(page);
      await employmentStartDatePage.continueOn(page);
      const employmentEndDatePage: EmploymentEndDatePage = new EmploymentEndDatePage();
      await employmentEndDatePage.checkPageLoads(page);
      await employmentEndDatePage.continueOn(page);
      const shiftHoursPage: ShiftHoursPage = new ShiftHoursPage();
      await shiftHoursPage.checkPageLoads(page);
      await shiftHoursPage.continueOn(page);
      const numberOfShiftsPage: NumberOfShiftsPage = new NumberOfShiftsPage();
      await numberOfShiftsPage.checkPageLoads(page);
      await numberOfShiftsPage.continueOn(page);
      const daysInShiftPatternPage: DaysInShiftPatternPage = new DaysInShiftPatternPage();
      await daysInShiftPatternPage.checkPageLoads(page);
      await daysInShiftPatternPage.continueOn(page);
      const resultsPage: ResultsPage = new ResultsPage();
      await resultsPage.checkJourney2PageLoads(page);
});
