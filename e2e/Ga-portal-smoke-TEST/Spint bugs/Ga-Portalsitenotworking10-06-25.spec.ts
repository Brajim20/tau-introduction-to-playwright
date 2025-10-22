import { test, expect } from '@playwright/test';

test.describe("GA Broken page portal 5 tries", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Logs in without 2FA, handles disclaimers, and validates form', async ({ page }) => {
    test.setTimeout(1200000);
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

// acept the disclaimer 

await page.getByTestId('mainContent_AgreeButton').click();

// log out 
await page.getByTestId('tertiaryNavButton').click();
await page.getByRole('button', { name: 'Logout' }).click();


// second try 
await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
  test.setTimeout(1200000);
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

// acept the disclaimer 

await page.getByTestId('mainContent_AgreeButton').click();

// log out 
await page.getByTestId('tertiaryNavButton').click();
await page.getByRole('button', { name: 'Logout' }).click();

    // 3rd try 
await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
  test.setTimeout(1200000);
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

// acept the disclaimer 

await page.getByTestId('mainContent_AgreeButton').click();

// log out 
await page.getByTestId('tertiaryNavButton').click();
await page.getByRole('button', { name: 'Logout' }).click();

//4th try 
await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
  test.setTimeout(1200000);
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

// acept the disclaimer 

await page.getByTestId('mainContent_AgreeButton').click();

// log out 
await page.getByTestId('tertiaryNavButton').click();
await page.getByRole('button', { name: 'Logout' }).click();

// 5th try 
await page.goto('https://ga.qa-portal-investorflow.com/SAML2/Login.aspx?source=idp' , { timeout: 500000});
  test.setTimeout(1200000);
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

// acept the disclaimer 

await page.getByTestId('mainContent_AgreeButton').click();

// log out 
await page.getByTestId('tertiaryNavButton').click();
await page.getByRole('button', { name: 'Logout' }).click();


// log test done 
console.log('Automation done'); 


  });
  });


