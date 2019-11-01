const { Selector } = require('testcafe');

exports.sidebar = {
    async clickLogout() {
        await testController
            .click(Selector('.user-pic-div'))
            .click(Selector('.el-menu-item').withText('Logout'));
    }
};
