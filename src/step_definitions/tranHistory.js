const { When, Then } = require('cucumber');
const withdraw = require('../page-objects/withdrawal');

Then('lender click menu Withdrawal in home', async function () {
    await withdraw.withdrawal.clickWithdrawal();
});

When('lender click tab transaction History', async function () {
    await withdraw.withdrawal.clickTransaction();
});

When('lender set month', async function () {
    await withdraw.withdrawal.setMonth();
});

Then('lender can see list transaction', async function () {
    await testController.expect(withdraw.getHistory()).contains('01 Nov 2019');
});