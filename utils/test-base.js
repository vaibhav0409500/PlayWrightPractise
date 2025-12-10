
const base = require('@playwright/test');


exports.customtest = base.test.extend(
{
testDataForOrder :    {
    username : "vaibhav0409@gmail.com",
    password : "Abc@1234",
    productName:"ADIDAS ORIGINAL"
    
    }

}

)

