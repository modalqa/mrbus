const { Then } = require('cucumber');
const loan = require('../page-objects/opportunities');

Then('lender click Menu Opportunities', async function (){
    await loan.opportunities.clickLoan();
});

Then('lender click tab Rejected', async function () {
    await loan.opportunities.clickReject();
});

Then('lender click tab Expired', async function () {
    await loan.opportunities.clickExpired();
});

Then('lender set filter base on repayment', async function () {
    await loan.opportunities.setFilter();
});
