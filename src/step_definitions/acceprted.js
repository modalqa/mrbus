const { Then } = require('cucumber');
const acc = require('../page-objects/accepted');

Then('lender click Menu Accepted', async function () {
    await acc.accept.clickACC();
});

Then('lender set filter base on installment', async function () {
    await acc.accept.setFilter();
});