const { Selector } = require('testcafe');

exports.accept = {
    async clickACC () {
        await testController.click(Selector('.title').withText('Opportunities'))
    },

    async setFilter () {
        await testController
        .click(Selector('.el-input__suffix-inner'))
        .click(Selector('span').withText('Installment'))
    }, 
}