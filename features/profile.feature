Feature: Modakrakyat Institutional Lender - Profile
  As Lender I Want To Login To Modalrakyat Business & can access profile page

  Scenario: Login and access profile page
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
    When lender click Menu profile
    Then lender can see company information