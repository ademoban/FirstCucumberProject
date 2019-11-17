
@vehicles
Feature: Vehicles
  Background:
    Given user is on the landing page

  Scenario: Login as driver and navigate to the Vehicles
    When user logs in as a "driver"
    Then user navigates to "Fleet" and "Vehicles"
    And user verifies that "Cars" page name is displayed
    And user  verifies that default page number is 1

    @VYT
  Scenario: Access Vehicle page as admin
    When  user logs in as a "driver"
    Then user navigates to "Fleet" and "Vehicle Contracts"
    And user verifies that "All Vehicle Contract" page name is displayed

