const { Selector } = require('testcafe');
require('dotenv').config();

const url = `${process.env.BASE_URL}/login?type=bypass_recaptcha`;

const emailInput = Selector('input[name="email"]');
const email = 'serly@mail16685.com';

const passwordInput = Selector('input[name="password"]');
const pass = 'morak123';

exports.navigateToThisPage = async function () {
    return testController.navigateTo(url);
};

exports.getPageTitle = function () {
    return Selector('.login_title').with({ boundTestRun: testController }).textContent;
};

exports.login = async function () {
    await testController
        .typeText(emailInput, email)
        .typeText(passwordInput, pass)
        .pressKey('enter');
};



