Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });


describe('custom commands',()=>{

    it("handling links",()=>{
        cy.visit("https://demo.nopcommerce.com/",{failOnStatusCode:false})

        //without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()
        
        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")

        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')


    })

    it("overwritting existing command",()=>{
        cy.visit("https://demo.nopcommerce.com/",{failOnStatusCode:false})

        //using custom command
        cy.clickLink("APPLE MACBOOK PRO 13-INCH")
        //cy.clickLink("Apple MacBook Pro 13-inch")
        //cy.contains("Apple MacBook Pro 13-inch").click()
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
        //cy.wait(5000)
        ////cy.get('a[href="/apple-macbook-pro-13-inch"]').eq(0).click()

    })

    it ("login commands",()=>{
        cy.visit("https://demo.nopcommerce.com/",{failOnStatusCode:false})

        cy.clickLink("Log in")
        cy.loginapp("varsha@qaoncloud.com","test@123")

        cy.get('.ico-account').should('have.text','My account');



    })
})