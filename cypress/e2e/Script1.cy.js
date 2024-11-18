

describe('My First Test', () => { //arrow fucntion

    it('positive test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.wait(2000)
        cy.title().should('eq', 'OrangeHRM')
        cy.wait(2000)
    })

    it('Negative test', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.wait(2000)
        cy.title().should('eq', 'OrangeHRM222')
      
    })
   

    it('cypress positive test', () => {
        // Visiting the specified URL
        cy.visit("https://example.cypress.io")

        // Asserting that the page title should be equal to the expected value
        cy.title().should('eq', 'Cypress.io: Kitchen Sink')
    })


    
})



// describe('My First Test', function() { // normal function
//     it('Does not do much!', function(){
//       expect(true).to.equal(true)
//     })
//   })