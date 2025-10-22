import { test, expect } from '@playwright/test';

test.describe("GA admin test for bug admin not working", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://ga-irm.qa-portal-investorflow.com/SAML2/Login.aspx' , { timeout: 500000});
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('GA admin test for bug admin not working', async ({ page }) => {
    test.setTimeout(1200000);

    //validate idp button is showing 
await expect(page.getByRole('button', { name: 'Microsoft Microsoft' })).toBeVisible();
await expect(page.getByTestId('txtUsername')).toBeVisible();
await expect(page.getByTestId('txtPassword')).toBeVisible();
await expect(page.getByTestId('btnLogin')).toBeVisible();
    //log in 
   await page.getByTestId('txtUsername').fill('Brajim20@gmail.com');
    await page.getByTestId('txtPassword').fill('P@ssw0rd!');
    await page.getByTestId('btnLogin').first().click();

    // log out 
await page.getByTestId('UserLogoutLink').click();

    // 2 try 
 //validate idp button is showing 
await expect(page.getByRole('button', { name: 'Microsoft Microsoft' })).toBeVisible();
await expect(page.getByTestId('txtUsername')).toBeVisible();
await expect(page.getByTestId('txtPassword')).toBeVisible();
await expect(page.getByTestId('btnLogin')).toBeVisible();
    //log in 
   await page.getByTestId('txtUsername').fill('Brajim20@gmail.com');
    await page.getByTestId('txtPassword').fill('P@ssw0rd!');
    await page.getByTestId('btnLogin').first().click();

    // log out 
await page.getByTestId('UserLogoutLink').click();



    //3rd try

 //validate idp button is showing 
await expect(page.getByRole('button', { name: 'Microsoft Microsoft' })).toBeVisible();
await expect(page.getByTestId('txtUsername')).toBeVisible();
await expect(page.getByTestId('txtPassword')).toBeVisible();
await expect(page.getByTestId('btnLogin')).toBeVisible();
    //log in 
   await page.getByTestId('txtUsername').fill('Brajim20@gmail.com');
    await page.getByTestId('txtPassword').fill('P@ssw0rd!');
    await page.getByTestId('btnLogin').first().click();

    // log out 
await page.getByTestId('UserLogoutLink').click();

    //4try 
 //validate idp button is showing 
await expect(page.getByRole('button', { name: 'Microsoft Microsoft' })).toBeVisible();
await expect(page.getByTestId('txtUsername')).toBeVisible();
await expect(page.getByTestId('txtPassword')).toBeVisible();
await expect(page.getByTestId('btnLogin')).toBeVisible();
    //log in 
   await page.getByTestId('txtUsername').fill('Brajim20@gmail.com');
    await page.getByTestId('txtPassword').fill('P@ssw0rd!');
    await page.getByTestId('btnLogin').first().click();

    // log out 
await page.getByTestId('UserLogoutLink').click();

    //5try

 //validate idp button is showing 
await expect(page.getByRole('button', { name: 'Microsoft Microsoft' })).toBeVisible();
await expect(page.getByTestId('txtUsername')).toBeVisible();
await expect(page.getByTestId('txtPassword')).toBeVisible();
await expect(page.getByTestId('btnLogin')).toBeVisible();
    //log in 
   await page.getByTestId('txtUsername').fill('Brajim20@gmail.com');
    await page.getByTestId('txtPassword').fill('P@ssw0rd!');
    await page.getByTestId('btnLogin').first().click();

    // log out 
await page.getByTestId('UserLogoutLink').click();


// log test done 
console.log('Automation done'); 


     });
      });