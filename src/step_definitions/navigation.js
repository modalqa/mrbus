const { Then } = require('cucumber');
const menu = require('../page-objects/navigation');

Then('lender click Opportunities', async function () {
    await menu.navigation.clickOpportunities(); 
});

Then('click Accepted', async function () {
    await menu.navigation.clickAccepted();
});

Then('click Portfolio', async function () {
    await menu.navigation.clickPortfolio();
});

Then('click Withdrawal', async function () {
    await menu.navigation.clickWithdrawal();
});

Then('click Inbox', async function () {
    await menu.navigation.clickInbox();
});

Then('click Profile', async function () {
    await menu.navigation.clickProfile();
});