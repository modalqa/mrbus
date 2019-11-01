Feature: Modakrakyat Institutional Lender - Portfolio
  As Lender I Want To Login To Modalrakyat Business & can access Portfolio page

  Scenario: Portfolio
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
        And lender click Menu Portfolio
    When lender click view one of loan
    Then lender can see tab Repayment
        And lender can click tab loan summary
    When lender click tab borrower information
    Then lender can see detail perusahaan
        And lender click payor information
  


    