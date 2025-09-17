
describe(' Test Suite for the new testing' , () => 
{     
    it('verify that this page link is right', () => 
    {                 
        cy.clearCookies()                             
        cy.reload()                                 
        cy.visit("https://www.saucedemo.com/")  
        cy.url().should('include', 'saucedemo.com');                                  
        cy.title().should('eq', 'Swag Labs')   
            cy.log('Enter the username as the email')                            
            cy.get('[placeholder="Username"]').type('standard_user')
            cy.get('[placeholder="Password"]').type('secret_sauce')              
            cy.get('.submit-button.btn_action').click()  
    
            cy.get(".btn.btn_primary.btn_small.btn_inventory").eq(0).click()
            cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
            cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()               
            cy.get(".shopping_cart_badge").first().click()      
            cy.get('[data-test="remove-sauce-labs-backpack"]').click()                             
            cy.get(".btn.btn_secondary.back.btn_medium").click()     
            cy.get('.product_sort_container').as('sortDropdown')     
            cy.get('@sortDropdown').select('Name (Z to A)')         
            cy.get('@sortDropdown').select('Price (low to high)')  
            cy.get('@sortDropdown').select('Price (high to low)')  
            cy.get('@sortDropdown').select('Name (A to Z)')        
            cy.openSidebar()                                                                          
            cy.get('#reset_sidebar_link').click()              
            cy.closeSidebar()                                    
            // cy.get("#remove-sauce-labs-backpack").click()       
            // cy.get("#add-to-cart-sauce-labs-bike-light").click() 

           
            for (let i = 1; i <= 3; i++) 
            {
                cy.scrollTo('bottom');
                cy.wait(1000);
                cy.scrollTo('top');
                cy.wait(1000);
                cy.scrollTo('bottom');
            }
            cy.get('[data-test="social-twitter"]')
            .should('have.attr', 'href', 'https://twitter.com/saucelabs')
            cy.get('[data-test="social-facebook"]')
            .should('have.attr', 'href', 'https://www.facebook.com/saucelabs')
            cy.get('[data-test="social-linkedin"]')
            .should('have.attr', 'href', 'https://www.linkedin.com/company/sauce-labs/')
            cy.contains(' Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy') 
            cy.get('.bm-burger-button').click()
            cy.get('#logout_sidebar_link').click()       
            cy.url().should('eq', 'https://www.saucedemo.com/')
            cy.get('[placeholder="Username"]').should('be.visible')
            
            
            
    }  
)        
            
    }
)

