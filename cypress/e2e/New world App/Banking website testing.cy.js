import { slowCypressDown } from 'cypress-slow-down';
// // slows down each Cypress command by default (1 second)
slowCypressDown(1000);


/// <reference types="cypress" />


describe(' Test Suite for the new testing' , () => {    
    it('verify that this page is login or not', () => {                 
        // cy.clearCookies()                                                              
        cy.visit("http://localhost:3008/")   
        cy.log('Sign Up Page')
            cy.get('[href="/signup"]').click()
                cy.get('#firstName').type('Sam')
                cy.get('#lastName').type('marquee')
                cy.get('#username').type('Sm')
                cy.get('#password').type('12345')
                cy.get('#confirmPassword').type('12345')
                cy.get('[data-test="signup-submit"]').click()

        cy.log('Sign In Page')
                cy.get('#username').type('Sm')
                cy.get('#password').type('12345')
                cy.get('[name="remember"]').click()
                cy.get('[data-test="signin-submit"]').click()
                cy.get('[data-test="user-onboarding-next"]').click()


                cy.log('Opening Bank Account')
                cy.get('#bankaccount-bankName-input').type('HDFC Bank')
                cy.get('[placeholder="Routing Number"]').type('103100551')
                cy.get('#bankaccount-accountNumber-input').type('67676787878')
                cy.get('[data-test="bankaccount-submit"]').click()
                cy.get('[data-test="user-onboarding-next"]').click()

                cy.get('[data-test="sidenav-toggle"]').click()
                cy.get('[role="button"]').eq(1).click({ force: true })
                cy.get('[type="button"]').eq(9).dblclick({ force: true }).click({ force: true}) 
                cy.get('[role="button"]').eq(2).click({ force: true})
                cy.get('.MuiGrid-root.MuiGrid-item.css-13i4rnv-MuiGrid-root').eq(16)
                .trigger('mousedown', { which: 1 })      
                .trigger('mousemove', { clientX: 400 })  
                .trigger('mouseup'); 
                cy.get('[type="button"]').eq(1).click()
                cy.get('[role="button"]').eq(2).dblclick({ force: true}).click({ force: true})
                cy.go('back')
                cy.get('[href="/transaction/new"]').click()
                cy.get('.MuiAvatar-img.css-1pqm26d-MuiAvatar-img').eq(0).click({ force: true})
                cy.get('#amount').type('5000')
                cy.get('#transaction-create-description-input').type('I Have send you the payment please check and let me know')
                cy.get('[type="submit"]').eq(0).click()
                cy.get('[data-test="new-transaction-create-another-transaction"]').click()
                cy.get('.MuiAvatar-img.css-1pqm26d-MuiAvatar-img').eq(1).click({ force: true})
                cy.get('#amount').type('5000')
                cy.get('[name="description"]').eq(1).type('I Have send you the payment please check and let me know')
                cy.get('[data-test="transaction-create-submit-payment"]').click()
                cy.get('[href="/"]').eq(2).click()
                cy.get('[data-testid="NotificationsIcon"]').eq(0).click()
                cy.get('[data-test="drawer-icon"]').click()
                cy.get('[href="/"]').eq(1).click()
                cy.get('.MuiGrid-root.MuiGrid-item.css-13i4rnv-MuiGrid-root').eq(10).click({force: true})
                   
                cy.get('[data-testid="ThumbUpAltOutlinedIcon"]').click({force: true})                 
                cy.get('[placeholder="Write a comment..."]').type("Hello! This is a comment.{enter}")            
                cy.get('')



                // cy.get('[data-test="new-transaction-return-to-transactions"]').click()
                
                // cy.get('[role="button"]').eq(2).dblclick({ force: true})
                
        })
})    


                // cy.get('[data-test="transaction-list-filter-date-range-button"]').eq(0).click()
                
                // cy.get('[data-test="user-onboarding-next"]').click()
                // cy.log('Opening Bank Account')
                // cy.get('#bankaccount-bankName-input').type('HDFC Bank')
                // cy.get('[placeholder="Routing Number"]').type('103100551')
                // cy.get('#bankaccount-accountNumber-input').type('67676787878')
                // cy.get('[data-test="bankaccount-submit"]').click()
                // cy.get('[data-test="user-onboarding-next"]').click()
                // cy.get('[type="button"]').click()
                // // cy.get('[aria-label="September 2, 2025"]').click()
                // cy.get('[data-testid="CancelIcon"]').click()
                // cy.contains('span', 'Amount: $0 - $1,000').click()
                // cy.get('[data-test="user-onboarding-next]').click()
                //  cy.contains('button', 'Next').click()

        

        
    