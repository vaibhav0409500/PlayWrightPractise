// Author: Vaibhav Khare
// Example Playwright HTTP GET call
const { request } = require('@playwright/test');
const OrderHistoryPage = require('../pageobjects/OrdersHistoryPage');


// Create an object of OrderHistoryPage
const orderHistoryPage = new OrderHistoryPage();

// Load dataset from JSON (same approach as in ClientAppPO.spec.js)
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json")));
// Example: pick the first entry if it's an array
const testDataForOrder = Array.isArray(dataset) ? dataset[0] : dataset;
console.log('Loaded dataset:', dataset);
console.log('Using test data:', testDataForOrder);

(async () => {
  const apiContext = await request.newContext();
  const response = await apiContext.get('https://jsonplaceholder.typicode.com/posts/1');
  const data = await response.json();
  console.log(data);
  await apiContext.dispose();
})();