/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe('Using fixtures in multiple It blocks',()=>{

    before (function(){
        cy.fixture('login.json').as('data')
    })

it('fixtures demo 1',function() {
    cy.visit("https://admin-demo.nopcommerce.com/login?")

    cy.get("input[id='Email']").clear()
    cy.get("input[id='Email']").type(this.data.email)

    cy.get('input[type="password"]').clear()
    cy.get('input[type="password"]').type(this.data.pass)
    cy.get("button[type='submit']").click()
    cy.url().should('include','admin')

    })
})

describe('fixtures inside a IT block',()=>{

    it('demo2',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.wait(4000)

        cy.fixture('orange.json').then((data)=>{

            cy.url().should('include','orangehrm')
            cy.get("input[placeholder='Username']").type(data.user)
            cy.get("input[placeholder='Password']").type(data.pass1)
            cy.get("button[type='submit']").click()
            cy.title().should('eq', 'OrangeHRM')

            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',data.expected)
        }) 
    })


})


describe('data driven',()=>{

    it('demo',()=>{

        cy.fixture('orangehrm.json').then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            data.forEach((userdata)=>{
            cy.get("input[placeholder='Username']").type(userdata.user)
            cy.get("input[placeholder='Password']").type(userdata.pass1)
            cy.get("button[type='submit']").click()

            if(userdata.user==='Admin' && userdata.pass1=='admin123')
            {
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
            .should('have.text',userdata.expected)

            cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
            cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
            cy.url().should('include','login')

            }
            else{
                cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                .should('have.text',userdata.expected)
            }



            })
    })
})
})