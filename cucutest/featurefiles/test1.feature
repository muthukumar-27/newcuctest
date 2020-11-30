Feature: This is to test cucmber
Background: This is background class
Given thisi is back test
@positive
Scenario: Cucumber testing
Given users is on google.com
When usesr enters serach term
|ar1|ar2|
|123|goole|
And Users hits enter
Then User see the resulst
 @negative
Scenario: Cucumber testing
Given users is on google.com
When usesr enters serach term
|ar1|ar2|
|hello|goole|
And Users hits enter
Then User see the resulst