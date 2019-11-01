const { Selector } = require('testcafe');

exports.navigation = {
    async clickOpportunities() {
        await testController

            .click(Selector('.title').withText('Opportunities'))
            .click(Selector('.el-icon-back'));
    },
    async clickAccepted () {
        await testController
            .click(Selector('.title').withText('Accepted'))
            .click(Selector('.el-icon-back'));
    },
    async clickPortfolio () {
        await testController
        .click(Selector('.title').withText('Portfolio'))
        .click(Selector('.el-icon-back'));
    },
    async clickWithdrawal () {
        await testController
        .click(Selector('.title').withText('Withdrawal'))
        .click(Selector('.el-icon-back'));
    },
    async clickInbox () {
        await testController
        .click(Selector('.title').withText('Inbox'))
        .click(Selector('.el-icon-back'));
    },
    async clickProfile () {
        await testController
        .click(Selector('.title').withText('Profile'))
        .click(Selector('.el-icon-back'));
    }
 };