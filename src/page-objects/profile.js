const { Selector } = require('testcafe');

exports.me = {
    async clickProfile () {
        await testController.click(Selector('.title').withText('Profile'));
    },
};

exports.getMe = function () {
    return Selector('.box-card-header').with({ boundTestRun: testController }).textContent;
};