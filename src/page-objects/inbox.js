const { Selector } = require('testcafe');

exports.inbox = {
    async clickInbox () {
        await testController.click(Selector('.title').withText('Inbox'));
    }

};

exports.getInbox = function () {
    return Selector('h1').with({ boundTestRun: testController }).textContent;
};