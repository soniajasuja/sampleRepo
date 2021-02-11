Feature: Validate the login functionality of the sauce demo user

@validLogin
Scenario: As a user, I should be able to login to the Sauce demo site succesfully.

Given  I am on the Sauce Demo homepage
When I provide valid credentials
Then I should be able to login succesfully