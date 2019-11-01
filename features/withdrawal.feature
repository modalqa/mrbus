Feature: Modakrakyat Institutional Lender - Withdrawal and check transaction history
  As Lender I Want To Login To Modalrakyat Business & can access Withdrawal page

  Scenario: Withdrawal
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
        And lender click menu withdrawal
    When lender input amount and click submit
    Then lender can click button confirm on popup confirmation

Scenario: Check History
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
        And lender click menu Withdrawal in home
    When lender click tab transaction History
    When lender set month
    Then lender can see list transaction
    