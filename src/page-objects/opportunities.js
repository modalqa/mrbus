const { Selector } = require('testcafe');

exports.opportunities = {
    async clickReject() {
        await testController.click(Selector('#tab-second'))
    },
    async clickExpired () {
        await testController.click(Selector('#tab-third'))
    },
    async setFilter () {
        await testController
        .click(Selector('.el-input__suffix-inner'))
        .click(Selector('span').withText('Lumpsum'))
    }, 
    async clickLoan () {
        await testController.click(Selector('.title').withText('Opportunities'))
    }
};


