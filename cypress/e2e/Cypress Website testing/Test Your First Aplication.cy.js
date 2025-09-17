// import { slowCypressDown } from 'cypress-slow-down';
// // // slows down each Cypress command by default (1 second)
// slowCypressDown(1000);


/// <reference types="cypress" />


describe(' Test Suite for the new testing' , () => {    
    it('verify that this page is login or not', () => {                 
        cy.clearCookies()                                                      
        cy.visit("https://learn.cypress.io/testing-your-first-application")    
        cy.url().should('include', '/testing-your-first-application')
        cy.title().should('include', 'Testing Your First Application')  
        cy.get('[data-test="next-lesson-button"]').click()
        cy.scrollTo('bottom')
        cy.scrollTo('top')
        cy.scrollTo('bottom')        

    it(' Verfiy the Footer Section have the Following Links', () => {
        cy.get('footer').eq(0).within

    })
    })
})