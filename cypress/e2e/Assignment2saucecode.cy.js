/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
  // Handle the exception as needed
  console.error('Uncaught Exception:', err.message);
  // Return false to prevent the unhandled exception from failing the test
  return false;
});

import { LoginPage } from "./Pages/Sauce"; 

    describe('Saucedemo login', () => {

        beforeEach(function(){
            cy.visit('https://www.saucedemo.com/')
          })
      
          it('Valid Login', () => {
        
            LoginPage.UserName()
              .type('standard_user')
              .should('have.value', 'standard_user')
      
            LoginPage.Password()
              .type('secret_sauce')
              .should('have.value', 'secret_sauce')
      
            LoginPage.LoginButton().click()

          })

          it('Invalid login', () => {
           
            LoginPage.UserName()
              .type('standard_user')
              .should('have.value', 'standard_user')

            LoginPage.Password()
              .type('secret_sasas')
              .should('have.value', 'secret_sasas')
      
            LoginPage.LoginButton().click()
      
            LoginPage.ErrorMessage()
              .should('have.text', 'Epic sadface: Username and password do not match any user in this service')
      
           })   

        it('add product and calculation', () => {

          LoginPage.UserName().type('standard_user')
      
          LoginPage.Password().type('secret_sauce')
      
          LoginPage.LoginButton().click()
      
          // 1st product
          cy.get("a[id='item_4_title_link'] div[class='inventory_item_name ']").should('have.text','Sauce Labs Backpack')
          cy.get("div[class='inventory_list'] div:nth-child(1) div:nth-child(2) div:nth-child(2) div:nth-child(1)")
          .invoke('text')
          .then((text) => {
              const price1WithCurrency = text.trim(); // Get the text content and remove leading/trailing whitespace
              const price1 = parseFloat(price1WithCurrency.replace('$', '')); // Remove the "$" symbol from the price
              cy.log(price1, "price of the first product");
      
              // adding 1st product to cart
              cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible').click()
      
              // 2nd product
              cy.get("a[id='item_0_title_link'] div[class='inventory_item_name ']").should('have.text','Sauce Labs Bike Light')
              cy.get("div[id='inventory_container'] div:nth-child(2) div:nth-child(2) div:nth-child(2) div:nth-child(1)")
              .invoke('text')
              .then((text) => {
                  const price2WithCurrency = text.trim(); // Get the text content and remove leading/trailing whitespace
                  const price2 = parseFloat(price2WithCurrency.replace('$', '')); // Remove the "$" symbol from the price
                  cy.log(price2, "price of the second product");
      
                  // adding 2nd product to cart
                  cy.get("#add-to-cart-sauce-labs-bike-light").should('be.visible').click()
      
                  // Cart page
                  cy.get(".shopping_cart_link").click()
                  cy.url().should('include', 'cart')
                  cy.wait(2000)
      
                  // checkout button
                  cy.get("#checkout").click()
                  cy.url().should('include', 'checkout')
                  LoginPage.Name().type('Test')
                  LoginPage.Lastname().type('qa')
                  LoginPage.Zip().type('518798')
                  LoginPage.ContinueButton().click()
                  cy.url().should('include', 'checkout-step-two')
      
                  const priceNum = price1 + price2
                  cy.log(priceNum)
              });
          });
      });
      
    })
