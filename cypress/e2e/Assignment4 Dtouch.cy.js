/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

  describe("Dtouch",()=>{

    beforeEach(function(){
        cy.visit("https://dtouch.in/")
    })


    it("Home page",()=>{
        // Home tab
       cy.get("div[class='tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex'] li:nth-child(1) a:nth-child(1)")
       .should('have.text','Home')
       .click({force: true})
       cy.url().should('eq','https://dtouch.in/index.php')

       //Home page
       cy.get('.about__content > .section__title > .sub-title').should('have.text','Get More About Us')
       cy.get('.about__content > .section__title > .title').should("contain",'- CEO Note')
       cy.get('.faq__img').should('be.visible')

       cy.get('.about__content > :nth-child(3)')
       .should('contain','At DesiCrew, we are committed to empowering individuals like you to reach new heights of success, knowledge, and fulfillment.')
       cy.wait(2000)
       cy.get('.info2').scrollIntoView({duration:500})
       cy.get('.info4')
       .should('have.class',"banner__student info4 aos-init aos-animate")

       cy.get('.main-img').should('be.visible')
       cy.get('.banner__btn-two > .btn')
       .should('have.text','Courses ')
       .click()
       cy.url().should('include','courses')     
    })

    it("Login",()=>{
        cy.get(".header-btn.login-btn > a").should('have.text','Log in')
        .click({force: true})
        cy.url().should('include','login')

        cy.get('#username').type('varsha@qaoncloud.com')
        cy.get('#pswd').type('Var123')
        cy.get('#loginbtn').click()
        cy.get('.alert.alert-danger').should('contain.text', "Username and password doesn't match")


        cy.reload()
        cy.get('#username').type('varsha@qaoncloud.com')
        cy.get('#pswd').type('Varsha@123')
        cy.get('#loginbtn').click()
        cy.url().should('eq','https://dtouch.in/user/index.php')
        
    })
  })