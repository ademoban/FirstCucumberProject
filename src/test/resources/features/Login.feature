Feature: As user I want to login under different roles


  Scenario: Login as a store manager
    Given user is on the landing page
    Then user logs in as a store manager
    And user verifies that "Dashboard" page name is displayed
    Then user quits

    Scenario: Verify warning message for invalid credentials
      Given user is on the landing page
      Then user logs in with "wrong" username and "wrong" password
      And user verfies "Invalid user name or password." warning message is displayed
      Then user quits