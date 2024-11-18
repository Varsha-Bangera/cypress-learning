/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  

describe('Before and after',()=>{

    before(function(){
        cy.log("********This is setup block*********")

    })

    after(function(){
        cy.log("********This is tear down block*********")

    })

    beforeEach(function(){
        cy.log("********This is Login block*********")

    })

    afterEach(function(){
        cy.log("********This is Logout block*********")

    })

    it('searching',function(){
        cy.log("*******This is searching test***********")
    })

    it('Advanced searching',function(){
        cy.log("*******This is Advanced searching test***********")
    })
    
    it('Listing products',function(){
        cy.log("*******This is listing products test***********")
    })

})

// using beforeand after  function in login
describe('Use before and after in login',()=>{

    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').wait(4000)
      
      })
    after(()=>{
        cy.get("i[class='oxd-icon bi-caret-down-fill oxd-userdropdown-icon']").click()
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click()
        cy.url().should('include','login')
    })

    it('forgot password',()=>{
        cy.get("p[class='oxd-text oxd-text--p orangehrm-login-forgot-header']").click()
        cy.url().should('include','ResetCode')
    })

    it('verify Input box',()=>{
   
        cy.url().should('include','orangehrm')
        cy.get("input[placeholder='Username']").should('be.visible').should('be.enabled').type('Admin')
        cy.get("input[placeholder='Password']").should('be.visible').should('be.enabled').type('admin123')
        cy.get("button[type='submit']").click()

        cy.title().should('eq', 'OrangeHRM')

    })

    
    


})