import { slowCypressDown } from 'cypress-slow-down';
// // slows down each Cypress command by default (1 second)
slowCypressDown(1000);


/// <reference types="cypress" />


describe(' Test Suite for the new testing' , () => {    
    it('verify that this page is login or not', () => {                 
        cy.clearCookies()                                                      
        cy.visit("https://www.coverlaunch.com/sign-in")                                    
                cy.contains('button','Agent').click()
                cy.get('[type="checkbox"]').click()
                cy.get('#email').clear().type('himanshu.garg@fonixtech.io')

        cy.log('Navigating to Agent Login Page')

                cy.get('[type="submit"]').click()
                cy.get('[fill-rule="evenodd"]').click()
                // cy.contains('button','Create a Report').click()
                // for (let i = 0; i <= 3; i++) {
                //      cy.scrollTo('bottom');
                //     // cy.wait(1000);
                //      cy.scrollTo('top');
                //     // cy.wait(1000);
                //      cy.scrollTo('bottom');
                // }    
                cy.get('.lucide.lucide-menu').click()
                cy.contains('Campaign Management').click()
                cy.get('.lucide.lucide-menu').click()
                cy.go('back')  
                cy.contains('span', 'Lead Management').click()
                cy.get('.lucide.lucide-database').click()
                cy.contains('span', 'Call Logs').click()
                cy.contains('span','Appointments').click()
                // cy.go('back')
                cy.get('.lucide.lucide-menu').click()
                cy.contains('span','Task').click()
                // cy.go('back')
                cy.get('.lucide.lucide-menu').click()
                cy.contains('span', 'AI Assistant').click()
                cy.get('.lucide.lucide-menu').click()
                cy.contains('span','Notifications').click()
                cy.get('.lucide.lucide-menu').click()
                cy.get('[type="button"]').eq(2).click()
                cy.get('[type="button"]').eq(3).click()
                cy.get('[fill-rule="evenodd"]').click()

        
        
        cy.log('Navigating to Agency Login Page')

                cy.contains('button','Agency').click()
                cy.get('[type="checkbox"]').click()
                cy.get('[type="submit"]').click()
                cy.get('[fill-rule="evenodd"]').click()
                cy.get('.lucide.lucide-menu').click()
                cy.contains('span', 'Dashboard').click()
                cy.get('.lucide.lucide-menu').click()
                cy.contains('span', 'Agent Management').click()
                cy.get('.lucide.lucide-menu').click()
                cy.contains('span', 'Campaign Management').click()
                cy.get('.lucide.lucide-menu').click()       
                cy.get('[type="button"]').eq(1).click()
                // cy.get('.lucide.lucide-menu').click()
                cy.contains('span', 'Lead Details').click()
                cy.contains('span', 'Call Logs').click()
                cy.contains('span','Appointments').click()
                cy.get('.lucide.lucide-menu').click()
                cy.contains('button','Logout').click()
                cy.get('[fill-rule="evenodd"]').click()

        cy.log('Navigating to Affilated Login Page')

                cy.contains('button','Affilated').click()
                cy.get('[type="checkbox"]').click()
                cy.get('[type="submit"]').click()       
                cy.get('[fill-rule="evenodd"]').click()
                cy.get('.lucide.lucide-menu').click()
                cy.contains('button','Logout').click()
                cy.get('[fill-rule="evenodd"]').click()    
    })
})
