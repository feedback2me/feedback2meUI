import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('the user is on the homepage', () => {
    cy.visit('http://localhost:9000');
});
