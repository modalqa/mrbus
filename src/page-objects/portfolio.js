const { Selector } = require('testcafe');

exports.port = {
    async clickPortfolio () {
        await testController.click(Selector('.title').withText('Portfolio'));
    },

    async clickView () {
        await testController.click(Selector('button').withText('View'));
    },

    async clickLoanSummary () {
        await testController.click(Selector('#tab-second').withText('Loan Summary'));
    },

    async clickBorrower () {
        await testController.click(Selector('#tab-third'));
    },

    async clickPayor () {
        await testController.click(Selector('#tab-fourth'));
    }

};

exports.getRepayment = function () {
    return Selector('#tab-first').with({ boundTestRun: testController }).textContent;
};


exports.getDetailCompany = function () {
    return Selector('.box-card-header').with({ boundTestRun: testController }).textContent;
};

