describe('testing',()=>{
    beforeEach (() => {

        cy.visit('https://example.cypress.io').wait(4000)
      
      })

    it('visiting the different tabs', ()=>{
        
        cy.get('.navbar-brand').click()
        cy.get('.dropdown-toggle').click()
        cy.get('#navbar > :nth-child(1) > :nth-child(2) > a').click()
        cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click()
        cy.get('.navbar-brand').click()
        cy.get('.home-list > :nth-child(3) > :nth-child(1)').click()
        cy.contains('type').click() 
       

    })
    it.only('checking the class, Assertion', ()=>{
        
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click().wait(4000)
        cy.get('[data-cy="submit"]') //class
        .should('have.class', 'btn btn-large')
        .should('have.lengthOf', 1) //checking no of class   Asertion
        expect('Submit').to.have.lengthOf(6) // checking the length of the  button name

        cy.get("div[class='container'] h1").should("have.text","Querying") // Asertion
    })
});