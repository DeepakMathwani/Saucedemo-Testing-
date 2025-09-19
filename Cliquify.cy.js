import { slowCypressDown } from 'cypress-slow-down'
import 'cypress-slow-down/commands'
slowCypressDown(false)

describe('CSSLocator', () => { 

  before(() => {
    // Visit the site once before all tests
    cy.visit('https://www.cliquify.me');
  });

  beforeEach(() => {
    // Dismiss popup if exists (reusable)
    cy.get('body').then($body => {
      if ($body.find('button:contains("Decline")').length) {
        cy.contains('button', 'Decline').click();
      }
      if ($body.find('#interactive-close-button-container').length) {
        cy.get('#interactive-close-button-container').click();
      }
    });
  });

  it('Verify that all the links are working', () => 
    {
      cy.reload()
      cy.contains('button', 'Decline').click()
      cy.log("Test1 is started")  
      // cy.title().should('include', 'Cliquify | Employer Branding Platform & Employee Advocacy Software')
      for (let i = 0; i <= 3; i++) 
       {
          cy.scrollTo('bottom')
          cy.wait(1000);
          cy.scrollTo('top');
          cy.wait(1000);
          cy.scrollTo('bottom');
          cy.wait(1000);
          cy.scrollTo('top');
          cy.wait(1000);
       }



    }
  )

  it('Verify that it contains the text or not', () => 
    {
      cy.reload()
      cy.contains('h1', 'Elevate your', 'employer brand', 'effortlessly', ' with Ai ').should('be.visible')
    }
  )


  it('Scroll the Page from Up & Down ', () => 
   { 
    cy.log("Let's Visit the website and do the scrolling")  
    cy.contains('button', 'Decline').click()

      for (let i = 0; i <= 3; i++) 
       {
          cy.scrollTo('bottom')
          cy.wait(1000);
          cy.scrollTo('top');
          cy.wait(1000);
          cy.scrollTo('bottom');
          cy.wait(1000);
          cy.scrollTo('top');
          cy.wait(1000);
       }
  }
)
  
  it('Clicking on the Tab ', () => 
  {
    cy.reload()
    cy.contains('a', 'Features').click()
    cy.wait(2000)
    cy.url().should('include', '/features')
    cy.go("back")
  }
)  

  it('click on the customer service tab', () => 
  {
    cy.contains('button', 'Decline').click()
    cy.get('[href="/customer-stories"]').eq(0).click()
    cy.url().should('include','/customer-stories')
    cy.go('back')
    cy.wait(10000)
  } 
)

  it('click on the Resources Tab on the website', () => 
    {
      cy.log("Let's Visit to the resouces under tab")
      cy.contains("a", "Resources").click()
      cy.go("back")
    }
  )
  
  it("Click on the 'Get a Demo tab' on the website", () => 
    {
      cy.log("Let's Visit to the Get a Demo tab")
      cy.visit("https://www.cliquify.me/")
      cy.contains('button', 'Decline').click()
      cy.contains("a", "Get a demo").click().slowDown(1000)  
      cy.get('[href="/customer-stories"]').eq(3).scrollIntoView().should('be.visible').click();
      cy.go("back")
      cy.get('[href="/contact-us"]').eq(1).scrollIntoView().should('be.visible').click();
      cy.go("back")
      
    }
)

  it("Fill the form in the Demo Tab", () => 
    {
      cy.log("Let's Visit to the Get a Demo tab & Fill the form")
      cy.contains('button', 'Decline').click()
      cy.contains("a", "Get a demo").click().slowDown(1000)
      cy.get('[name="firstname"]').type("manav").slowDown(1000)
      cy.get('[name="lastname"]').type("Jain").slowDown(1000)
      cy.get('[name="jobtitle"]').type("Web Developer").slowDown(1000)
      cy.get('[placeholder="Enter your work e-mail"]').type("manav@gmail10p.com").slowDown(1000)
      cy.get('[type="checkbox"]').click().slowDown(1000)
      cy.get('[value="Submit"]').eq(0).click().slowDown(1000)
      cy.go("back")
    }
  )    

  it("Verify the social media links", () => 
  {
      cy.log("Let's Visit to the Get a Demo tab & Fill the form")
      cy.scrollTo('bottom')
      cy.wait(2000)
      cy.contains('button', 'Decline').click()
      cy.get('[href="https://twitter.com/cliquify"]').eq(0)
        .should('have.attr', 'href')
        .and('include', 'twitter.com')
      cy.get('[href="https://www.facebook.com/cliquify"]').eq(1)
        .should('have.attr', 'href')
        .and('include', 'facebook.com')
      cy.get('[href="https://www.linkedin.com/company/cliquify-inc/"]').eq(2)
        .should('have.attr', 'href')
        .and('include', 'linkedin.com')
      

  }
)


  

 
  }
) 
  



