import { slowCypressDown } from 'cypress-slow-down'
import 'cypress-slow-down/commands'
slowCypressDown(false)

describe('CSSLocator', () => { 
it('verify that this page link is right', () => 
    {                                                                               
        cy.visit("https://www.saucedemo.com/");  
        cy.xpath('//button[@aria-label="Decline"]').click();
        cy.url().should('nclude', 'Cliquify');

        cy.log('Visit the feature tab')
        cy.reload();
        cy.get('')


    }
)

})