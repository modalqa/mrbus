const { Selector } = require('testcafe');

exports.getProfileTitle = function () {
    return Selector('.morak-title').with({ boundTestRun: testController }).textContent;
};

