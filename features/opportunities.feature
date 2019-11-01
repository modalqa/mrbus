Feature: Modakrakyat Institutional Lender - Opportunities
  As Lender I Want To Login To Modalrakyat Business & can access Opportunities page

  Scenario: Loan List
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
        And lender click Menu Opportunities
        And lender click tab Rejected
        And lender click tab Expired
        And lender set filter base on repayment


    