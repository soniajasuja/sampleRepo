Feature: As an application admin, I want to validte the user details of user through its id. 

@get
Scenario: Validate that I should be able to Get an employee details using its ID.

Given I make a request to GET an employee's email though its id
Then I should get the email as "janet.weaver@reqres.in"
And the status as 200