const {test,expect} =require('@playwright/test');


test('first Playwright test',async({browser})=>
{
    // chrome -- plugins/cookies
  const context= await browser.newContext();

  const page= await context.newPage();
       
 // await page.goto("http://www.rahulshettyacademy.com/practice-project");
  await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
  console.log(await page.title());
  await page.locator("#email").fill("abc@gmail.com");
  await page.locator("input[name='password']").fill("abc@gmail.com");



});




test('second Playwright test',async({page})=>
{
    // chrome -- plugins/cookies
 
       
  await page.goto("http://www.google.com");

    // get title asseration

    console.log(await page.title());
   // expect(page).toHaveTitle("Google");
      await expect(page).toHaveTitle("Google");

});


test('third Playwright test',async({browser})=>
{
    // chrome -- plugins/cookies
  const context= await browser.newContext();

  const page= await context.newPage();
       
 // await page.goto("http://www.rahulshettyacademy.com/practice-project");
  await page.goto("https://automationexercise.com/");
  console.log(await page.title());
  await page.locator("a[href='/products']").click();
  console.log(await page.locator("body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > p:nth-child(2)").textContent());
  console.log(await page.locator(".features_items").allTextContents());



});


test('fourth Playwright test',async({browser})=>
{
    // chrome -- plugins/cookies
  const context= await browser.newContext();

  const page= await context.newPage();
       
 
  await page.goto("https://testautomationpractice.blogspot.com/");

  const dropdown=page.locator("#country");
  await dropdown.selectOption("uk");
  await page.pause();
 



});


test('test5', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1763121312765&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('rahul shetty acahemey');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Drahul%2Bshetty%2Bacahemey%26sca_esv%3D4fc95be2d6bdf9cb%26source%3Dhp%26ei%3D_hcXaYHUF7rM1sQPwr7WgAk%26iflsig%3DAOw8s4IAAAAAaRcmDvy7Ef4nKKyP0Idqd1-9U7JlJzt-%26ved%3D0ahUKEwiBy_WOyvGQAxU6ppUCHUKfFZAQ4dUDCCI%26uact%3D5%26oq%3Drahul%2Bshetty%2Bacahemey%26gs_lp%3DEgdnd3Mtd2l6IhVyYWh1bCBzaGV0dHkgYWNhaGVtZXkyBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA0yBxAAGIAEGA1I6EJQsgRYpT1wAXgAkAEAmAHQAqAB1SGqAQgwLjEzLjYuMrgBA8gBAPgBAZgCFqACvyKoAgrCAgoQABgDGOoCGI8BwgIKEC4YAxjqAhiPAcICDhAuGIAEGLEDGNEDGMcBwgILEAAYgAQYsQMYgwHCAgUQLhiABMICCBAAGIAEGLEDwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBcICBRAAGIAEwgILEC4YgAQYsQMYgwHCAgsQABiABBixAxjJA8ICCxAAGIAEGJIDGIoFwgIIEC4YgAQYsQPCAggQABiABBiSA8ICCxAuGIAEGMcBGK8BwgIHECEYoAEYCsICBBAhGBWYAwXxBcICvM8FTp_JkgcIMS4xMy41LjOgB-zMAbIHCDAuMTMuNS4zuAe6IsIHBzEuMTEuMTDIB0A%26sclient%3Dgws-wiz%26sei%3DEhgXaaLWEq3lseMPn5TvqAo&q=EhAkBQIBMBXALBgEc1I6YjmqGJKw3MgGIjAbu1jgPLmgACtZZQ_Eof8K0qU0wCCJ331rMUNcLGvCW0p-hG1QHP8qZolQGkkGLK4yAVJaAUM');
  await page.locator('iframe[name="a-qk5cyvg8aq8f"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-qk5cyvg8aq8f"]').contentFrame().locator('[id="7"]').click();
  await page.locator('iframe[name="c-qk5cyvg8aq8f"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-qk5cyvg8aq8f"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-qk5cyvg8aq8f"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Rahul Shetty Academy:' }).click();
});


test('client app login', async ({ page }) => {
  const productName='ZARA COAT 3';
  const products =page.locator('.card-body');
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.locator('#userEmail').fill('vaibhav0409@gmail.com');
  await page.locator('#userPassword').fill('Abc@1234');
  await page.locator('#login').click();
  await page.waitForLoadState("networkidle");
  await page.locator(".card-body b").first().waitFor();
  const title=await page.locator(".card-body b").allTextContents();
  console.log(title);
  const count= await products.count();
  for(let i=0; i<count; ++i)

  {

     if ( products.nth(i).locator("b").textContent() === productName);

      {
            // add to cart
            products.nth(i).locator("text= Add To Cart").click();
            break;

      }
  }
  await page.locator("[routerlink*='cart']").click();
  await page.pause();
 // await page.locator(".btn.btn-custom[routerlink='/dashboard/cart']").click();
  await page.locator("div li").first().waitFor();
  await page.pause();
  const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  console.log(bool);
  await page.pause();
  expect(bool).toBeTruthy();

  await page.locator("li[class='totalRow'] button[type='button']").click();
  
});


//const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Webst Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "vaibhav0409@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Abc@1234");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
   expect(bool).toBeTruthy();
   await page.locator("text=Checkout").click();
 
  await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 
   await page.locator("button[routerlink*='myorders']").click();
   await page.locator("tbody").waitFor();
   const rows = await page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 })


 test('@Webst Client App login1', async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "vaibhav0409@gmail.com";
  const productName = 'ZARA COAT 3';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Abc@1234");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles); 
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
     if (await products.nth(i).locator("b").textContent() === productName) {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
     }
  }

  await page.locator("[routerlink*='cart']").click();
  //await page.pause();

  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();

 await page.getByPlaceholder('Select Country').pressSequentially("ind", { delay: 150 }) 
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
     const text = await dropdown.locator("button").nth(i).textContent();
     if (text === " India") {
        await dropdown.locator("button").nth(i).click();
        break;
     }
  }

  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");


  for (let i = 0; i < await rows.count(); ++i) {
     const rowOrderId = await rows.nth(i).locator("th").textContent();
     if (orderId.includes(rowOrderId)) {
        await rows.nth(i).locator("button").first().click();
        break;
     }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();

});




test('@Webst Client App login3', async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "anshika@gmail.com";
  const productName = 'ZARA COAT 3';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill("Iamking@000");
  await page.locator("[value='Login']").click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  const titles = await page.locator(".card-body b").allTextContents();
  console.log(titles); 
  const count = await products.count();
  for (let i = 0; i < count; ++i) {
     if (await products.nth(i).locator("b").textContent() === productName) {
        //add to cart
        await products.nth(i).locator("text= Add To Cart").click();
        break;
     }
  }

  await page.locator("[routerlink*='cart']").click();
  //await page.pause();

  await page.locator("div li").first().waitFor();
  const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
  expect(bool).toBeTruthy();
  await page.locator("text=Checkout").click();

  await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
  const dropdown = page.locator(".ta-results");
  await dropdown.waitFor();
  const optionsCount = await dropdown.locator("button").count();
  for (let i = 0; i < optionsCount; ++i) {
     const text = await dropdown.locator("button").nth(i).textContent();
     if (text === " India") {
        await dropdown.locator("button").nth(i).click();
        break;
     }
  }

  expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
  await page.locator(".action__submit").click();
  await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
  const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
  console.log(orderId);

  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");


  for (let i = 0; i < await rows.count(); ++i) {
     const rowOrderId = await rows.nth(i).locator("th").textContent();
     if (orderId.includes(rowOrderId)) {
        await rows.nth(i).locator("button").first().click();
        break;
     }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  expect(orderId.includes(orderIdDetails)).toBeTruthy();

});



test('@Webst Client App login4', async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "anshika@gmail.com";
  const productName = 'ZARA COAT 3';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
  await page.getByRole('button',{name:"Login"}).click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  
  await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
  .getByRole("button",{name:"Add to Cart"}).click();

  await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();

  //await page.pause();
  await page.locator("div li").first().waitFor();
  await expect(page.getByText("ZARA COAT 3")).toBeVisible();

  await page.getByRole("button",{name :"Checkout"}).click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");

  await page.getByRole("button",{name :"India"}).nth(1).click();
  await page.getByText("PLACE ORDER").click();

  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})


test('@Webst Client App login6', async ({ page }) => {
  //js file- Login js, DashboardPage
  const email = "anshika@gmail.com";
  const productName = 'ZARA COAT 3';
  const products = page.locator(".card-body");
  await page.goto("https://rahulshettyacademy.com/client");
  await page.getByPlaceholder("email@example.com").fill(email);
  await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
  await page.getByRole('button',{name:"Login"}).click();
  await page.waitForLoadState('networkidle');
  await page.locator(".card-body b").first().waitFor();
  
  await page.locator(".card-body").filter({hasText:"ZARA COAT 3"})
  .getByRole("button",{name:"Add to Cart"}).click();

  await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();

  //await page.pause();
  await page.locator("div li").first().waitFor();
  await expect(page.getByText("ZARA COAT 3")).toBeVisible();

  await page.getByRole("button",{name :"Checkout"}).click();

  await page.getByPlaceholder("Select Country").pressSequentially("ind");

  await page.getByRole("button",{name :"India"}).nth(1).click();
  await page.getByText("PLACE ORDER").click();

  await expect(page.getByText("Thankyou for the order.")).toBeVisible();
})

test("Calendar validations",async({page})=>
{
 
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
 
    const inputs =  page.locator('.react-date-picker__inputGroup__input')
 
    for(let i =0; i<expectedList.length;i++)
    {
        const value = await inputs.nth(i).inputValue();
        expect(value).toEqual(expectedList[i]);
 
    }
  })



  test('@QW Security test request intercept', async ({ page }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
 
 
 
 
 
 
 
 
})