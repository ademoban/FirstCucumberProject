@VYT24-93
Feature :As an authorized user I should be able to access Vehicle Contract page

Scenario Access Vehicle page as storemanager
Given user is on the landing page
When  user logs in as a "storemanager"
Then user navigates to "Fleet" and "Vehicle Contracts"
And user verifies that "All Vehicle Contract" page name is displayed

Scenario Access Vehicle page as admin
Given user is on the landing page
When  user logs in as a "admin"
Then user navigates to "Fleet" and "Vehicle Contracts"
And user verifies that "All Vehicle Contract" page name is displayed

Scenario Access Vehicle page as salesmanager
Given user is on the landing page
When  user logs in as a "salesmanager"
Then user navigates to "Fleet" and "Vehicle Contracts"
And user verifies that "All Vehicle Contract" page name is displayed


Scenario truck driver should not access Vehicle Access page
Given user is on the landing page
When user logs in as a "driver"
Then user navigates to "Fleet" and "Vehicle Contracts"
And user verifies that "You do not have permission to perform this action." page name is displayed