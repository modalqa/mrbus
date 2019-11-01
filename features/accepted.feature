Feature: Modakrakyat Institutional Lender - Accepted Loan
  As Lender I Want To Login To Modalrakyat Business & can access Accepted Loan page

  Scenario: Accepted Loan
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
        And lender click Menu Accepted
        And lender set filter base on installment


    