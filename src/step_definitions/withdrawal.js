const { When, Then } = require('cucumber');
const withdraw = require('../page-objects/withdrawal');

Then('lender click menu withdrawal', async function () {
    await withdraw.withdrawal.clickWithdrawal();
});

When('lender input amount and click submit', async function () {
    await withdraw.withdrawal.inputAmount();
});

Then('lender can click button confirm on popup confirmation', async function () {
    await withdraw.withdrawal.clickConfirm();
});



