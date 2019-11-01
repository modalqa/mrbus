Feature: Modakrakyat Institutional Lender - Inbox
  As Lender I Want To Login To Modalrakyat Business & can access inbox page

  Scenario: Inbox
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
    When lender click menu inbox
    Then lender can see list inbox