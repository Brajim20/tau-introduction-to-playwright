import { test, expect } from '@playwright/test';

test.describe("GA  SMOKE Test", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Logs in without 2FA, handles disclaimers, and validates form', async ({ page }) => {
    test.setTimeout(60000);
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
    await expect(page.locator('#mainContent_LegacyLink')).toBeVisible();
 await page.locator('#mainContent_moreAnnoucementLink').click();

    // Alerts validate UI

    await expect(page.getByText('My Alerts').nth(2)).toBeVisible();
    await expect(page.getByRole('link', { name: 'Investments Alertas' })).toBeVisible();;
   await expect(page.getByText('view', { exact: true })).toBeVisible();
   await expect(page.getByTestId('mainContent_showallAnnouncement')).toBeVisible();
   await expect(page.getByTestId('mainContent_unreadAnnouncement')).toBeVisible();
 await expect(page.getByTestId('mainContent_accessedAnnouncement')).toBeVisible();
  await expect(page.getByText('Upcoming Events')).toBeVisible();
await expect(page.getByText('Current Tasks')).toBeVisible();



  // alerts page check functionality (the awaits are added to wait for the callback actions to complete)
   await page.getByTestId('mainContent_accessedAnnouncement').click();
   await page.waitForTimeout(500);
   await page.getByTestId('mainContent_showallAnnouncement').click();
await page.waitForTimeout(500);
   await page.getByTestId('mainContent_unreadAnnouncement').click();   
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
   await page.getByRole('link', { name: 'Show All (2)' }).click();
   await page.getByRole('link', { name: 'Unread (1)' }).click();

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
await expect(page.getByText('0 File (0KB) Selected')).toBeVisible(); 
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
//list view
await page.locator('#mainContent_DocumentViewerControl_panelCallback_rbtnViewBy_RB1_I_D').click();
///list view searchfunctionality
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').click();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').fill('lp testing prospect doc');
///wait for search results to load
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear();
//close the download popup
//download a document
await page.locator('#mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_DownloadSingleBtn_1Img').click();
await page.locator('#mainContent_DocumentViewerControl_panelCallback_txtSearchDocuments_I').clear();
//close the download popup
await expect(page.locator('#customTooltip')).toBeVisible();
//switch email me the document/
await expect(page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_EmailMeSingleBtn_1Img')).toBeVisible();
await page.getByTestId('mainContent_DocumentViewerControl_panelCallback_dgvDocument_cell1_16_EmailMeSingleBtn_1Img').click();
await page.getByRole('link', { name: 'Research & Insights' }).click();
await expect(page.getByText('News & Insights')).toBeVisible();
await expect(page.getByRole('link', { name: 'Filter' })).toBeVisible();
await expect(page.getByTestId('filteredAnnouncement')).toBeVisible();
await expect(page.getByTestId('filteredSpotlight')).toBeVisible();

//filter functionality
   await page.getByRole('link', { name: 'Filter' }).click();
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('Category selection is required. Select All Insights Research')).toBeVisible();
await expect(page.getByText('Date', { exact: true })).toBeVisible();
await expect(page.getByTestId('pdaterange_container').getByText('From')).toBeVisible();
//filter functionality
   await page.getByRole('link', { name: 'Filter' }).click();
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('Category selection is required. Select All Insights Research')).toBeVisible();
await expect(page.getByText('Date', { exact: true })).toBeVisible();
await expect(page.getByTestId('pdaterange_container').getByText('From')).toBeVisible();
await expect(page.getByTestId('maincontainer').getByText('To', { exact: true })).toBeVisible();
await expect(page.locator('#pdaterange_container div').nth(2)).toBeVisible();
await expect(page.getByRole('listitem').filter({ hasText: 'All Dates' }).getByRole('radio')).toBeVisible();
await expect(page.locator('#dd')).toBeVisible();
await expect(page.getByRole('link').filter({ hasText: /^$/ }).first()).toBeVisible();
await expect(page.getByRole('link', { name: 'Go', exact: true })).toBeVisible();
await page.getByRole('link', { name: 'Go', exact: true }).click();

  await page.waitForTimeout(1000);   


//
//
await expect(page.getByRole('link', { name: 'Documents' })).toBeVisible({ timeout: 60000 });
await page.getByRole('link', { name: 'Documents' }).click();
await expect(page.getByTestId('tabs-filter').locator('div').filter({ hasText: 'Products Products Choose from' }).first()).toBeVisible({ timeout: 60000 });
await expect(page.getByRole('link', { name: 'Products' })).toBeVisible({ timeout: 60000 });
await expect(page.getByRole('link', { name: 'Investments' })).toBeVisible({ timeout: 60000 });
await expect(page.getByRole('link', { name: 'Section/Category' })).toBeVisible(({ timeout: 10000 }));
await expect(page.getByTestId('tabs-filter').getByText('show')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('showall')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('accessed')).toBeVisible({timeout: 60000});
await expect(page.getByTestId('unread')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('bydate_button')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('search').locator('div').first()).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('searchInput')).toBeVisible({ timeout: 60000 });
await expect(page.getByText('show all unread Click for')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('mainContent_viewByLabel')).toBeVisible({ timeout: 60000 });
await expect(page.locator('label').filter({ hasText: 'Products' }).locator('span')).toBeVisible({ timeout: 60000 });
await expect(page.locator('label').filter({ hasText: 'Products' })).toBeVisible({ timeout: 60000 });
await expect(page.locator('label').filter({ hasText: 'Categories' }).locator('span')).toBeVisible({ timeout: 60000 });
await expect(page.getByText('Categories')).toBeVisible();
await expect(page.getByText('date title Investment Section')).toBeVisible();
await expect(page.getByTestId('selectAll')).toBeVisible();
await expect(page.getByText('date', { exact: true })).toBeVisible();
await expect(page.locator('span').filter({ hasText: 'date' }).nth(1)).toBeVisible({ timeout: 60000 });
await expect(page.getByText('title')).toBeVisible({ timeout: 60000 });
await expect(page.locator('span').filter({ hasText: 'title' })).toBeVisible({ timeout: 60000 });
await expect(page.locator('.tableHeaderInvestorLabel')).toBeVisible({ timeout: 60000 });
await expect(page.getByText('Investment', { exact: true })).toBeVisible({ timeout: 60000 });
await expect(page.locator('div').filter({ hasText: /^Section\/Category$/ })).toBeVisible({ timeout: 60000 });
await expect(page.locator('.tableHeaderAction')).toBeVisible({ timeout: 60000 });
await expect(page.getByText('Expand', { exact: true })).toBeVisible({ timeout: 60000 });
await expect(page.locator('i').nth(1)).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('fh_18').getByTestId('tableFundInfoSecondaryFilter_18')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('fh_18').getByRole('img')).toBeVisible({ timeout: 60000 });
await expect(page.getByTestId('fh_18').getByTestId('tableFundInfoSecondaryFilter_18')).toBeVisible({ timeout: 60000 });

// Show all 
 await expect(page.getByTestId('tabs-filter').getByText('show')).toBeVisible();
 await expect(page.getByTestId('showall')).toBeVisible()
// show unread 
await page.getByTestId('unread').click();
// show read 
await page.getByTestId('accessed').click();
// Show all
 await expect(page.getByTestId('tabs-filter').getByText('show')).toBeVisible();
 await expect(page.getByTestId('showall')).toBeVisible();
// show unread
await page.getByTestId('unread').click();

// show read
await page.getByTestId('unread').click();

// back to show all
await page.getByTestId('showall').click();

// select all product
await page.getByRole('link', { name: 'Products' }).click();

// validate product filter
 await expect(page.getByTestId('ft-id-4')).toBeVisible();

 // make the selection 
 await page.getByRole('link', { name: 'Select All' }).click();
 await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Remove All' }).click();
   await page.waitForTimeout(1000);
   await page.getByRole('link', { name: 'Select All' }).click();
 await page.waitForTimeout(1000);
 await page.getByTestId('filterFunds').getByRole('link', { name: 'Go' }).click();
 await page.waitForTimeout(2000);


 // make the selection for investor needs work

 await page.getByRole('link', { name: 'Select All' }).click();
  await page.getByRole('link', { name: 'Remove All' }).click();
   await page.getByRole('link', { name: 'Select All' }).click();
 await page.getByTestId('filterFunds').getByRole('link', { name: 'Go' }).click();

 //
    await expect(page.locator('#mainContent_messageDivID')).toContainText('Successfully Sent');

    // Logout flow
    await page.locator('#tertiaryNavButton').click();
    await page.locator('.tertiary-nav-dropdown-menu-options > :nth-child(3)').click();
});

function getByText(arg0: string): any {
  throw new Error('Function not implemented.');
}
});
