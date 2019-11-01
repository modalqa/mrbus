const { Selector } = require('testcafe');

const amountInput = Selector('input[name="amount"]');
const amount = '100000';

exports.withdrawal = {
    async clickWithdrawal() {
        await testController.click(Selector('.title').withText('Withdrawal'));
    },
    async inputAmount () {
        await testController
            .typeText(amountInput,amount)
            .click(Selector('button').withText('Submit'));
    },
    async clickConfirm () {
        await testController.click(Selector('button').withText('Confirm'));
    },
    async clickTransaction () {
        await testController.click(Selector('#tab-second'))
    },
    async setMonth () {
        await testController
            .click(Selector('.el-input__suffix-inner'))
            .click(Selector('span').withText('Monthly'))
    }
};


exports.getHistory = function () {
    return Selector('.row-top').with({ boundTestRun: testController }).textContent;
};