/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  
describe('Assertion',()=>{
it('visiting url',()=>{
        cy.visit("https://example.cypress.io/")
        cy.contains('get').click()
        cy.wait(2000)

        cy.get('#query-btn',{timeout: 6000})
        .should('contain','Button')
        .should('have.class','query-btn')
        .should('be.visible') 
        cy.wait(2000)

        cy.get('#query-btn').invoke('attr','id')
        .should('equal','query-btn')
        cy.wait(2000)

        cy.get('#query-btn',{timeout: 6000})
        .should('contain','Button')
        .and('have.class','query-btn')

        
        expect(true).to.be.true
let name ='Test'
expect(name).to.be.equal('Test')

//assert

assert.equal(4, 4, 'Not Equal')
assert.strictEqual(4, 4,'Not Stictly Equal')




})
})