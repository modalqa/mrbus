const { When, Then } = require('cucumber');
const port = require('../page-objects/portfolio');

Then('lender click Menu Portfolio', async function () {
    await port.port.clickPortfolio();
});

When('lender click view one of loan', async function () {
    await port.port.clickView();
});

Then('lender can see tab Repayment', async function () {
    await testController.expect(port.getRepayment()).contains('Repayment');
});

Then('lender can click tab loan summary', async function () {
    await port.port.clickLoanSummary
});

When('lender click tab borrower information', async function () {
    await port.port.clickBorrower();
});

Then('lender can see detail perusahaan', async function () {
    await testController.expect(port.getDetailCompany()).contains('Detil Perusahaan');
});

Then('lender click payor information', async function () {
    await port.port.clickPayor();
});
