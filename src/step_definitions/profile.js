const { When, Then } = require('cucumber');
const profile = require('../page-objects/profile');

When('lender click Menu profile', async function () {
    await profile.me.clickProfile();
});

Then('lender can see company information', async function () {
    await testController.expect(profile.getMe()).contains('Company Information');
});