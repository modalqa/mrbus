const { Given, When, Then } = require('cucumber');
const LoginPage = require('../page-objects/login');


Given('lender is at business login page', async () => {
    await LoginPage.navigateToThisPage();
});

When('lender will see business login page', async () => {
    await testController.expect(LoginPage.getPageTitle()).contains('Business Dashboard');
});

When('lender login as ACTIVE_LENDER', async function (){
    await LoginPage.login();
});


