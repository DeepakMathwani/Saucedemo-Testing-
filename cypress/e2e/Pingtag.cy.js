describe('CSSLocator', () => {
  it('verify title-positive', () => {
    cy.clearCookies() 
    cy.log("Test1 is started")
    cy.visit("https://pingtag.me/")
    cy.title().should('match', /pingtag.me/i)
    
    
    cy.log("Let's click on the How it works")
    cy.get('.space-x-8 > [href="/pages/features"]').first().click()
    cy.go("back")
    // cy.wait(1000)
    cy.get('.relative > .flex > .bg-white').click()
    cy.get('#email').type("ayush.mamoriya@fonixtech.io")
    cy.get('#password').type("Ayush@123")
    cy.get('#remember').click()
    cy.get('.justify-center > .px-4').click()
    cy.get(':nth-child(1) > .justify-between > .bg-gradient-to-r').click()
    cy.get('.flex-1 > :nth-child(1) > .w-full')      
      .clear()               
      .type('Amit Kumar')
    cy.get('.flex-1 > :nth-child(2) > .w-full')
     .clear() 
      .type('ayush.mamoriyaa@fonixtech.io')
    cy.contains('button', 'Save Changes').click();
    
    

   

   })
})