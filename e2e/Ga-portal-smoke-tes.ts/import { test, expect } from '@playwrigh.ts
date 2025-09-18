import { test, expect } from '@playwright/test';

test.describe('PGIMRE SMOKE Test with 2FA Integration', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga.qa-portal-investorflow.com/', { timeout: 120000 });
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  test('Logs in with 2FA, handles disclaimers, and validates form', async ({ page }) => {
    
    // --- Initial validation
    await expect(page.locator('#lnkOtherSignIn')).toBeVisible();
    await page.locator('#lnkOtherSignIn').click();

    await expect(page.locator('#imgLogo')).toBeVisible();
    await expect(page.locator('img')).toBeVisible();
    await expect(page.locator('#Panel1')).toBeVisible();

    // --- Log in
    await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
    await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
    await page.locator('[name="loginButton"]').first().click();

    // --- Disclaimer validation
    await expect(page.locator('.legalLabel')).toBeVisible();
    await expect(page.locator('[name="ctl00$mainContent$AgreeButton"]')).toBeVisible();
    await expect(page.locator('[name="ctl00$mainContent$DisagreeButton"]')).toBeVisible();

    // Decline disclaimer
    await page.locator('[name="ctl00$mainContent$DisagreeButton"]').click();

    // Login again
    await page.locator('#lnkOtherSignIn').click();
    await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
    await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
    await page.locator('[name="loginButton"]').first().click();

    // Accept disclaimer
    await page.locator('[name="ctl00$mainContent$AgreeButton"]').click();

    // --- Welcome page validation
    await expect(page.locator('.welcome_title')).toBeVisible();
    await expect(page.locator('.welcome_letter > .content > :nth-child(1)')).toBeVisible();

    // Example navigation clicks
    await page.locator('#mainContent_LegacyLink').click();
    await page.locator('#mainContent_moreAnnoucementLink').click();

    // Alerts
    await page.locator('#mainContent_announcementsRepeater_alertID_2 > .alertbox-content > .btn-holder > .button').click();
    await page.locator('#mainContent_accessedAnnouncement').click();

    // Due Diligence
    await page.locator('.pnDueDiligence > .hoverBGColor').click();
    await expect(page.locator('#mainContent_DeferLoading_CurrentTasks_MyInvestmentOpportunitiesRepeater_myInvestmentOpportunityImage_2')).toBeVisible();

    // Documents page
    await page.locator('.pnDocuments > .hoverBGColor').click();
    await expect(page.locator('.filterPanel')).toBeVisible();

    // Upload a document
    await page.locator('[name="ctl00$mainContent$fileUpload"]').setInputFiles('tests/fixtures/adiligencedile.pdf');
    await page.locator('[name="ctl00$mainContent$BtnSubmitClient"]').click();

    // Contact Us
    await page.locator('ul.secondaryNav > :nth-child(1) > a').click();
    await page.locator('[name="ctl00$mainContent$Subject"]').fill('Hello Playwright');
    await page.locator('[name="ctl00$mainContent$Message"]').fill('Hello from Playwright');
    await page.locator('#buttonsubmit').click();
    await expect(page.locator('#mainContent_messageDivID')).toContainText('Successfully Sent');

    // Logout flow
    await page.locator('#tertiaryNavButton').click();
    await page.locator('.tertiary-nav-dropdown-menu-options > :nth-child(3)').click();
  });
});
