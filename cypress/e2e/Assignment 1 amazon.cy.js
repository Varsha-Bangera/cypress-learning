describe('Login spec', () => {

    beforeEach(function(){
        cy.visit('https://amazon.in');

    })

    
    //for wrong user name with correct password
    it('Negative testcase 1', () => {
      //visits amazon website
      //cy.visit('https://amazon.in');
  
      //login your account
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').click().type("8248339107");
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').click().type("Varsha@123");
      cy.get('#signInSubmit').click();
      cy.wait(2000);
      //Adding a assertion for incorrect password
      cy.get('div.a-box.a-alert.a-alert-error.auth-server-side-message-box.a-spacing-base').should('be.visible')
    })
  
    //for correct username but wrong password
    it('Negative testcase 2', () => {
      //cy.visit('https://amazon.in');
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').click().type("8618842693");
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').click().type("123");
      cy.get('#signInSubmit').click();
      cy.wait(2000);
    })
  
    //for correct username and correct password(successfull login)
    it('Positive testcase', () => {
      //cy.visit('https://amazon.in');
      cy.get('#nav-link-accountList-nav-line-1').click();
      cy.get('#ap_email').click().type("8618842693");
      cy.get('.a-button-inner > #continue').click();
      cy.get('#ap_password').click().type("Varsha@123");
      cy.get('#signInSubmit').click();
      cy.wait(2000);
    })

    it("searching a product and checking the relevant options", ()=>{
        cy.get('#twotabsearchtextbox').click().type("perfumes");
        cy.get('#nav-search-submit-button').click();

        // Use cy.contains() to check if the element contains the text "perfume"
        cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] h2[class='a-size-mini a-spacing-none a-color-base s-line-clamp-3']")
        .contains('Perfume')
        .then((element) => {
        // Check if the element containing "perfume" exists
        if (element.length > 0) {
            // Element containing "perfume" found
            cy.log('The element contains the text "perfume"');
        } else {
            // Element containing "perfume" not found
            cy.log('The element does not contain the text "perfume"');
        }
        });

      })   
    
  })