/// <reference types="cypress" />

import { LoginPage } from "./Pages/login_page"; 

const loginPage = new LoginPage()


before (function(){
    cy.fixture('login.json').as('test_data')
})


    it('dolthub-iphone', function () {
      cy.visit('https://www.dolthub.com/signin')
      cy.url().should('include', 'signin')
      cy.viewport('iphone-x')
      
      loginPage.enterUsername(this.test_data.name)
      //cy.get("input[placeholder='username']").should('be.visible').type('varsha123')
      //cy.get("input[placeholder='password']").should('be.visible').type('Test@123')
      loginPage.enterPassword(this.test_data.password)
      loginPage.clickSignup()
      //cy.get(".Button_button__mradH.common_submit__dTZhu").click()
      cy.wait(5000)
      
  })