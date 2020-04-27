Feature: Add todo functionality
    Scenario: Using the add todo input
        Given the user is on the homepage
        When the user fills the todo input with the "JavaScript" term
        And the user clicks on the add button
        Then the user should see the "JavaScript" item added to the todo list