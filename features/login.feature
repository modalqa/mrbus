Feature: Modakrakyat Institutional Lender - Login
  As Lender I Want To Login To Modalrakyat Business

  Scenario: Login With Valid Username
    Given lender is at business login page
    When lender will see business login page
    When lender login as ACTIVE_LENDER
    Then lender will see business dashboard page
      And lender click sidebar menu and logout
      

