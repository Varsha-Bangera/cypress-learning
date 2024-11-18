/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  

describe('Dropdown',()=>{

it('dropdown with select',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('Italy')
        .should('have.value','Italy')
    })

it ('dropdown without select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
    })


it ('Auto suggest dropdown',()=>{
    cy.visit("https://www.wikipedia.org/")
    cy.wait(4000)

    cy.get(' #searchInput').type('Delhi')

    cy.get('.suggestion-title').contains('Delhi University').click()

})

it('Dynamic dropdown',()=>{
    cy.visit("https://www.google.com/")
    cy.get("textarea[class='gLFyf']").type('cypress automation')
    cy.wait(3000)

    cy.get('div.wM6W7d>span').should('have.length',13)

    cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
        if($el.text()== 'cypress automation tutorial')
        {
            cy.wrap($el).click()
        }
    })
    cy.get("textarea[class='gLFyf']").should('have.value','cypress automation tutorial')

})

})


describe('Radio Button and checkbox Test', () => {
    it ('Selecting a Radio Button', () => {
      
      cy.visit('https://demo.guru99.com/test/radio.html')
      
      // Ensure visibility of all radio buttons
     // cy.get("#option1").should('be.visible')
      //cy.get("#option2").should('be.visible')
      //cy.get("#option3").should('be.visible')
  
      // Clicking on the first radio button
      cy.get('input[value="Option 1"]').check().should('be.checked').wait(4000)
      cy.get('input[value="Option 2"]').should('be.visible').should('not.be.checked')
      cy.get('input[value="Option 3"]').should('be.visible').should('not.be.checked')
  
      // Clicking on the second radio button 
      cy.get('input[value="Option 2"]').check().should('be.checked').wait(4000)
      cy.get('input[value="Option 1"]').should('be.visible').should('not.be.checked')
      cy.get('input[value="Option 3"]').should('be.visible').should('not.be.checked')

      // Clicking on the third radio button 
      cy.get('input[value="Option 3"]').check().should('be.checked').wait(4000)
      cy.get('input[value="Option 1"]').should('be.visible').should('not.be.checked')
      cy.get('input[value="Option 2"]').should('be.visible').should('not.be.checked')
      }) 

    it('Selecting a checkbox', () => {
      
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get('input[value="checkbox1"]').check().should('be.checked').wait(2000)
        //unselect
        cy.get('input[value="checkbox1"]').uncheck().should('not.be.checked')
        

        //selecting all checkbox
        cy.get("input[type='checkbox']").check().should('be.checked').wait(4000)

        //unselect all checkbox
        cy.get("input[type='checkbox']").uncheck().should('not.be.checked').wait(2000)

        //select first check box
        cy.get("input[type='checkbox']").first().check().wait(2000)
        cy.get("input[type='checkbox']").last().check()
        })
 })
describe('UI Elements',()=>{

    it('verify Input box',()=>{
    //     cy.visit("https://demo.automationtesting.in/Register.html")
    //     cy.url().should('include','Register')
    //     cy.get("input[placeholder='First Name']").should('be.visible').should('be.enabled').type('varsha')
    //     cy.get("input[placeholder='Last Name']").should('be.visible').should('be.enabled').type('Bangera')

    //     cy.get("input[type='email']").should('be.visible').should('be.enabled').type('varshabangera20@gmail.com')
        
    //     cy.get("input[value='FeMale']").check().should('be.checked')
    //     cy.get("input[value='Male']").should('be.visible').should('not.be.checked')

    //     cy.get("#countries")
    //     .select('Italy')
    //     .should('have.value','Italy')

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(4000)
        cy.url().should('include','orangehrm')
        cy.get("input[placeholder='Username']").should('be.visible').should('be.enabled').type('Admin')
        cy.get("input[placeholder='Password']").should('be.visible').should('be.enabled').type('admin123')
        cy.get("button[type='submit']").click()

        cy.title().should('eq', 'OrangeHRM')

    })
    


})


