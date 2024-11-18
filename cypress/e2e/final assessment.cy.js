
/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  
  describe('Form Submission Tests', () => {
    // Load fixture data before tests

    beforeEach(() => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment');
      cy.fixture('form.json').as('data');
    });

    

    it('Submits the form with positive data', function () {
        // Access fixture data using 'this.data'
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type(this.data.name);
        cy.get('#txt-password').type(this.data.password);
        cy.get('#btn-login').click();
        cy.url().should('include',"#appointment")
       
      });
  
    it('Fails to submit the form with negative data', function () {
      // Access fixture data using 'this.data'
      cy.get('#btn-make-appointment').click();
      cy.get('#txt-username').type(this.data.name1);
      cy.get('#txt-password').type(this.data.password1);
      cy.get('#btn-login').click();
      cy.get('.text-danger').should('be.visible')
      .should('have.text','Login failed! Please ensure the username and password are valid.')
      
    });
  
    
  });
  