// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />

Cypress.Commands.add("openSidebar", () => {
  cy.get('[type="button"]').eq(0).click();  // Example selector
//   cy.get('#sidebar').should('be.visible');   // Assert sidebar is open
}); 

Cypress.Commands.add("closeSidebar", () => {
  cy.get('[type="button"]').eq(1).click();   // Example selector
//   cy.get('#sidebar').should('not.be.visible'); // Assert sidebar is closed
});