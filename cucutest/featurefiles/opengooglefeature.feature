Feature: This is to test the google search
Scenario: google search testing
Given User is on google.com
When User enter search term "hello"
And User hits enter 8
Then User should get the result 7.8
