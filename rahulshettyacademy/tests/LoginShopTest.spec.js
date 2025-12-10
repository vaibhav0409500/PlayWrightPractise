// Author: Vaibhav Khare
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pageobjects/LoginPage');
const DashboardPage = require('../../pageobjects/DashboardPage');


test('Login and verify iPhone X in shop', async ({ page }) => {
  // Page Object usage
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('rahulshettyacademy', 'learning');

  // Wait for navigation to shop page
  await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');

  // DashboardPage object for shop verification
  const dashboardPage = new DashboardPage(page);
  const productTitles = await dashboardPage.getProductTitles();
  expect(productTitles).toContain('iphone X');
});

// --- Page Object Example ---
// LoginPage.js
// class LoginPage {
//   constructor(page) { this.page = page; }
//   async goto() { await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/'); }
//   async login(username, password) {
//     await this.page.fill('#username', username);
//     await this.page.fill('#password', password);
//     await this.page.check("input[type='checkbox']");
//     await this.page.click('#signInBtn');
//   }
// }
// DashboardPage.js
// class DashboardPage {
//   constructor(page) { this.page = page; }
//   async getProductTitles() {
//     return await this.page.locator('.card-title').allTextContents();
//   }
// }
