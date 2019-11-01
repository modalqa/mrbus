const { Then } = require('cucumber');
const DashboardPage = require('../page-objects/dashboard');
const Layout = require('../page-objects/layout');


Then('lender will see business dashboard page', async () => {
    await testController.expect(DashboardPage.getProfileTitle()).contains('Quick Access');
});

Then('lender click sidebar menu and logout', async () => {
    await Layout.sidebar.clickLogout();
});

