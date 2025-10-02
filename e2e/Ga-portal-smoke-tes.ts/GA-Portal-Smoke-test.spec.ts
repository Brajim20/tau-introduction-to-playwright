import { test, expect } from '@playwright/test';

test.describe("GA  SMOKE Test", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 5000});
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Logs in without 2FA, handles disclaimers, and validates form', async ({ page }) => {
    
    // --- Initial validation
    await expect(page.locator('#lnkOtherSignIn')).toBeVisible();
    await page.locator('#lnkOtherSignIn').click();
    await expect(page.locator('#imgLogo')).toBeVisible();
  await expect(page.getByText('Powering Visionary Growth')).toBeVisible();

    

    // --- Log in
    await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
    await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
    await page.locator('[name="loginButton"]').first().click();

    // --- Disclaimer validation
    await expect(page.locator('.legalLabel')).toBeVisible();
    await expect(page.locator('[name="ctl00$mainContent$AgreeButton"]')).toBeVisible();
    await expect(page.locator('[name="ctl00$mainContent$DisagreeButton"]')).toBeVisible();

    // Decline disclaimer
   // await page.locator('[name="ctl00$mainContent$DisagreeButton"]').click();

    // Login again
    //await page.locator('#lnkOtherSignIn').click();
    //await page.locator('[name="txtUsername"]').fill('Brajim20@gmail.com');
    //await page.locator('[name="txtPassword"]').fill('P@ssw0rd!');
    //await page.locator('[name="loginButton"]').first().click();

    // Accept disclaimer
    await page.locator('[name="ctl00$mainContent$AgreeButton"]').click();

    // --- Welcome page validation
    await expect(page.locator('.welcome_title')).toBeVisible();
    await expect(page.locator('.welcome_letter > .content > :nth-child(1)')).toBeVisible();
    // Assert that the text is visible
await expect(page.getByText('Welcome To The General')).toBeVisible();

// Links in the main navigation
await expect(page.getByRole('link', { name: 'Welcome' })).toBeVisible();
await expect(page.getByRole('link', { name: 'My Alerts' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Due Diligence' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Research & Insights' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Documents' })).toBeVisible();

  // Avatar image
await expect(page.locator('#AvatarImage')).toBeVisible();

// Tertiary navigation button
await expect(page.locator('#tertiaryNavButton')).toBeVisible();
//text elements
await expect(page.getByText('Alerts', { exact: true })).toBeVisible();
await expect(page.getByText('News')).toBeVisible();
await expect(page.getByText('Insights', { exact: true })).toBeVisible();
await expect(page.getByText('Contact Us Share Files')).toBeVisible();
// links
await expect(page.getByRole('link', { name: ' Legacy Portal' })).toBeVisible();
await expect(page.getByRole('link', { name: ' more' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Contact Us' })).toBeVisible();


// Text element
await expect(page.getByText('Admin')).toBeVisible();

    // Example navigation clicks
    scrollToTop: await page.evaluate(() => window.scrollTo(0, 0));
    await page.locator('#mainContent_LegacyLink').click();
 await page.locator('#mainContent_moreAnnoucementLink').click();

    // Alerts validate UI

    await expect(page.getByText('My Alerts').nth(2)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Investments Alertas' })).toBeVisible();;
   await expect(page.getByText('view', { exact: true })).toBeVisible();
   await expect(page.getByRole('link', { name: 'Unread (4)' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Read (51)' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Show All (55)' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'MARK ALL ALERTS AS READ' })).toBeVisible();
  await expect(page.getByText('Upcoming Events')).toBeVisible();

  // alerts page check functionality (the awaits are added to wait for the callback actions to complete)
   await page.getByRole('link', { name: 'Read (51)'}).click();
   await page.waitForTimeout(500);
   await page.getByRole('link', { name: 'Show All (55)'}).click();
await page.waitForTimeout(500);
   await page.getByRole('link', { name: 'Unread (4)' }).click();   
   await page.waitForTimeout(500);     
 await page.getByRole('link', { name: 'Investments Alertas'}).click();   
    await page.waitForTimeout(500);   

// investment alerts page validation
 await expect(page.getByText('Investments', { exact: true })).toBeVisible();
  await expect(page.locator('.dropdown-select')).toBeVisible();
await expect(page.getByRole('link', { name: 'MARK ALL ALERTS AS READ' })).toBeVisible();
  await expect(page.getByText('view', { exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Unread (1)' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Read (1)', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Show All (2)' })).toBeVisible();
await expect(page.getByText('Select an Investor to view')).toBeVisible();

///investment alerts page actions 
 await page.getByRole('link', { name: 'Read (1)', exact: true }).click();
   await page.waitForTimeout(500);
   await page.getByRole('link', { name: 'Show All (2)' }).click();
await page.waitForTimeout(200);
   await page.getByRole('link', { name: 'Unread (1)' }).click();   
   await page.waitForTimeout(500);     

    // Due Diligence
     await page.getByRole('link', { name: 'Due Diligence' }).click();
    await page.waitForTimeout(1000);
  await expect(page.getByText('AVG DOC WIDGET 2', { exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'AVG DOC WIDGET 2 is an' }).click();
  await page.waitForTimeout(1000);   

  //AVG Doc widget 2 page validation
  await expect(page.getByText('AVG DOC WIDGET 2 is an')).toBeVisible();
await expect(page.locator('#mainContent_vehicleDescription')).toBeVisible();
await expect(page.getByText('Indicate Interest').nth(1)).toBeVisible();
await expect(page.getByText('Show Interest')).toBeVisible();
await expect(page.getByRole('link', { name: 'Make Investment' })).toBeVisible();
await expect(page.getByText('Link to Subscription Documents Subscribe')).toBeVisible();
await expect(page.getByRole('link', { name: 'Subscribe' })).toBeVisible();
await expect(page.getByText('Key Diligence For Prospect AVG DOC WIDGET 2 View by: CategoriesList Show: All')).toBeVisible();
await expect(page.getByText('Key Diligence For Prospect')).toBeVisible();
await expect(page.getByText('View by:')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB0_I_D')).toBeVisible();
await expect(page.getByText('Categories', { exact: true })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB1_I_D')).toBeVisible();
await expect(page.getByText('List', { exact: true })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilterImg')).toBeVisible();
await expect(page.locator('span').filter({ hasText: 'Show: All' })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_btnFilter')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I')).toBeVisible();
await expect(page.getByRole('cell', { name: 'Search' })).toBeVisible();
await expect(page.getByText('Expand Categories')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_chkExpandToggle_S_D')).toBeVisible();
await expect(page.getByText('File (0KB) Selected')).toBeVisible(); 
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownload')).toBeVisible(); 
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownloadImg')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownload_CD span')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmailImg')).toBeVisible();
await expect(page.locator('span').filter({ hasText: /^Email$/ })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmail')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0_S_D')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_header7_imgViewOnlyIcon_7')).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_col8').getByRole('cell', { name: 'Title' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'Date', exact: true })).toBeVisible();
await expect(page.getByRole('img', { name: 'Descending' })).toBeVisible();
await expect(page.getByRole('cell', { name: 'U Capital Account Statement 4 Files', exact: true })).toBeVisible();
await expect(page.getByText('Capital Account Statement', { exact: true })).toBeVisible();
await expect(page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_gr0_11_lblGroupSummaryCount_0')).toBeVisible();

//list view
await page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB1_I_D').click();
await page.waitForTimeout(1000);
///list view searchfunctionality
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('lp testing prospect doc');
///wait for search results to load
await expect(page.getByRole('link', { name: 'lp testing prospect doc' })).toBeVisible();
//download a document
await page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_DownloadSingleBtn_1Img').click();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear();
//close the download popup
await expect(page.locator('#customTooltip')).toBeVisible();
await page.getByRole('img', { name: 'Close' }).nth(1).click();
//switch email me the document
await page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell4_16_EmailMeSingleBtn_4Img').click();
// close the email popup
await expect(page.locator('#customTooltip')).toBeVisible();

// show Read/Unread/alla documents
await page.locator('span').filter({ hasText: 'Show: All' }).click();
await page.waitForTimeout(500);
await page.locator('#mainContent_DocumentViewerControl_panelCallback_pcDocumentStatusFilter_btnUnread_CD span').click();
await page.waitForTimeout(500);
await page.locator('#mainContent_DocumentViewerControl_panelCallback_pcDocumentStatusFilter_btnAccessed_CD span').click();
await page.waitForTimeout(500);
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('test');
await page.waitForTimeout(500);

// download multiple documents
await page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_header0_chkSelectAll_0').check();
await page.waitForTimeout(200);
await page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiDownload').click();
await expect(page.locator('#customTooltip')).toBeVisible();

//email multiple documents
await page.locator('#mainContent_DocumentViewerControl_panelCallback_ASPxButtonMultiEmail').click();
await page.waitForTimeout(200);
await expect(page.locator('#customTooltip')).toBeVisible();

    //  Research & Insights page
   await page.getByRole('link', { name: 'Research & Insights' }).click();
 await expect(page.getByText('News & Insights')).toBeVisible();
await expect(page.getByText('Testing the RI BugSeptember 2025insight alert 25September')).toBeVisible();
await expect(page.getByText('Insight Spotlight spot')).toBeVisible();
await expect(page.getByRole('link', { name: 'Filter' })).toBeVisible();
await expect(page.locator('div').filter({ hasText: /^Testing the RI BugSeptember 2025$/ }).first()).toBeVisible();

//filter functionality
   await page.getByRole('link', { name: 'Filter' }).click();
    await page.waitForTimeout(1000);
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('Category selection is required. Select All Insights Research')).toBeVisible();
await expect(page.getByText('Date', { exact: true })).toBeVisible();
await expect(page.getByRole('listitem').filter({ hasText: 'From 10/02/2025 To 10/02/' }).getByRole('radio')).toBeVisible();
await expect(page.locator('#pdaterange_container').getByText('From')).toBeVisible();
await expect(page.locator('#maincontainer').getByText('To', { exact: true })).toBeVisible();
await expect(page.locator('#pdaterange_container div').nth(2)).toBeVisible();
await expect(page.getByRole('listitem').filter({ hasText: 'From 10/02/2025 To 10/02/' }).getByRole('radio')).toBeVisible();
await expect(page.getByRole('listitem').filter({ hasText: 'All Dates' }).getByRole('radio')).toBeVisible();
await expect(page.locator('#dd')).toBeVisible();
await expect(page.getByRole('link').filter({ hasText: /^$/ }).first()).toBeVisible();
await expect(page.getByRole('link', { name: 'Go', exact: true })).toBeVisible();
await page.getByRole('link', { name: 'Go', exact: true }).click();
await page.waitForTimeout(1000);
await page.getByRole('link', { name: 'Filter' }).click();
await page.waitForTimeout(200);

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

function getByText(arg0: string): any {
  throw new Error('Function not implemented.');
}
});
