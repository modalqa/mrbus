const { When, Then } = require('cucumber');
const inbox = require('../page-objects/inbox');

When('lender click menu inbox', async function () {
    await inbox.inbox.clickInbox();
});

Then('lender can see list inbox', async function () {
    await testController.expect(inbox.getInbox()).contains('Inbox');
});
