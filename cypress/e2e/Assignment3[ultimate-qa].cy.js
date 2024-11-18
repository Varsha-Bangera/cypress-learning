/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

  describe('Ultimate-QA ', () => {

    beforeEach(function(){
        cy.visit('https://ultimateqa.com/consulting/')
      })

      it('Validating the consulting page link, ultimate-qa logo',()=>{
       
        cy.url().should('include', 'consulting')

        cy.get('.wp-image-218123').should('be.visible')
        .click()
        cy.url().should('eq','https://ultimateqa.com/')

      })

      it("Validating the menu bar tabs",()=>{
        cy.get('#menu-main-menu > #menu-item-218392 > a').should('have.text', 'Services' )
        .click()
        cy.url().should('eq','https://ultimateqa.com/consulting/')

        cy.get('#menu-main-menu > #menu-item-217940 > a').should('have.text', 'About' )
        .click()
        cy.url().should('eq','https://ultimateqa.com/about/')

        cy.get('#menu-main-menu > #menu-item-218226 > a').should('have.text', 'Blog' )
        .click()
        cy.url().should('eq','https://ultimateqa.com/blog/')
        
        cy.get('#menu-main-menu > #menu-item-218225 > [href="#"]').should('have.text', 'Education' )
        .click()
        cy.url().should('eq','https://ultimateqa.com/blog/#')

        cy.get('body > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)')
        cy.get("ul[id='menu-main-menu'] li[id='menu-item-217933'] a")
        .should('have.text','Free Courses')
        .click({force: true}).wait(5000)
        cy.url().should('eq','https://courses.ultimateqa.com/collections')
      })

      it("validating consulting page text-1",()=>{
    
        cy.title().should('eq',"Unparalleled Testing Consulting Services")
        cy.get("h1[class='et_pb_module_heading']") 
        .should('have.text',"World's Best Test Automation Solutions")

        cy.get('.et_pb_with_border > .et_pb_text_inner > p') // paragraph
        .should('have.text','Ultimate QA is your one-stop solution for all your automated software testing needs. We offer comprehensive consulting services for enterprises and top-notch training programs for individuals, ensuring success for both organizations and professionals in the world of software testing automation.')
       
        cy.get('.wp-image-218415').should('be.visible') // image

        cy.get('#menu-main-menu > #menu-item-217945 > a')// button 1
        .should('be.visible') 
        .should('have.text','I want a free DISCOVERY SESSION')
        cy.wait(2000)

        cy.get('.et_pb_column_0 > .et_pb_button_module_wrapper > .et_pb_button') // button 2
        .should('be.visible')
        .should('have.text', 'SCHEDULE A FREE DISCOVERY SESSION')
        .click({force: true})
      })

      it("validating consulting page text-2",()=>{
        cy.get('.et_pb_row_1 > .et_pb_column > .et_pb_heading > .et_pb_heading_container > .et_pb_module_heading').scrollIntoView({duration:2000})
        cy.get('.et_pb_row_1 > .et_pb_column > .et_pb_heading > .et_pb_heading_container > .et_pb_module_heading')
        .should('have.text','Our Professional Services')

        cy.get('.et_pb_row_1 > .et_pb_column > .et_pb_text > .et_pb_text_inner > :nth-child(1)')
        cy.get(':nth-child(2) > strong')
        .should('contain','We mitigate downtime!')

        //1st column
        cy.get('.et_pb_column_3 > .et_pb_with_border > .et_pb_blurb_content > .et_pb_main_blurb_image > .et_pb_image_wrap > .et-waypoint')
        cy.get('.et_pb_column_3 > .et_pb_with_border > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_module_header')
        .should('have.text','Automation Program Creation')
        cy.get('.et_pb_column_3 > .et_pb_with_border > .et_pb_blurb_content > .et_pb_blurb_container > .et_pb_blurb_description > p')
        .should('contain','proven to enhance software team efficiency and company profitability')



        })

    })