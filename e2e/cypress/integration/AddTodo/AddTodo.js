import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';

When('the user fills the todo input with the {string} term', (term) => {
    cy.get('input[data-id="addTodoNameInput"]').type(term);
});

Then(
    'the user should see the {string} item added to the todo list',
    (todoItem) => {
        cy.get('ul[data-id="todoList"]').contains(todoItem);
    },
);

And('the user clicks on the add button', () => {
    cy.get('button[data-id="addTodoSubmit"]').click();
});
