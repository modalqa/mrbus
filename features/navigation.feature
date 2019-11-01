Feature: Modakrakyat Institutional Lender - Navigation
  As Lender I Want To Login To Modalrakyat Business & Check Link

  Scenario: Check lInk
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
    Then lender click Opportunities
        And click Accepted
        And click Portfolio
        And click Withdrawal
        And click Inbox
        And click Profile
    