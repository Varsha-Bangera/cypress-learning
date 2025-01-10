/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

  describe('Screenshot',()=>{

    it("Capture ss and video",()=>{
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("homepage")
        cy.wait(5000)
        cy.get("img[title='Your Store']").screenshot('logo')
    })
        //Automatically captures screenhots on failure
        it("Automatically captures screenhots on failure",()=>{
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text',"Tablets")
    })
  })