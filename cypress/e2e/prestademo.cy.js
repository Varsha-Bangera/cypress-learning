// //import { PrestologinPage } from "./Pages/Prestologin_page"; 

// //const PrestologinPage = new PrestologinPage()

// // it('visiting presto URL', () => {
// //     //cy.visit('https://demo.prestashop.com/#/en/front')
// //     //cy.wait(7000)

// //     // cy.get('[data-cy="submit"]') //class
// //     //     .should('have.class', 'btn btn-large')
// //     // cy.contains('Signup').click() 
// //     //cy.get('div[class="user-info"] Sign in').click()
// //     cy.get('#_mobile_user_info .user-info a').click();
// //     //cy.contains('Sign in')
// //     cy.get("//iframe[@id='framelive']").then(iframe => {
// //   iframe.find('#_mobile_user_info .user-info a').click();
// // });

// // })
// describe("test", () => {

//     it("visiting presto URL", () => {
//       cy.visit("https://demo.prestashop.com/#/en/front");
//       cy.wait(20000);
  
//       cy.get("#framelive").then(($iframe) => {
//         const iframeBody = $iframe.contents().find("body");
//         cy.get(iframeBody)
//           .find("a[title='Log in to your customer account']")
//           .eq(1)
//           .click();
//           cy.wait(10000)
//           cy.get(iframeBody).find('#content > div').eq(1).click();

//       });
      
//     });
    
//   });

  cypress.on('uncaught:exception',(err,runnable) =>{
    return false
})
///<reference types="Cypress" />


describe('Tab and Window',function(){


    beforeEach(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })


    it('Tab-invoke method',function(){
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('include','rahul')
        cy.title().should('eq','Rahul Shetty Academy')
    })
    
    it('Tab',function(){
        cy.get('#opentab').click()
    })


    it('Window-new window',function(){
      const url="http://www.qaclickacademy.com/"
       cy.window().then(win=>{
        const stub=cy.stub(win,'open').as('windowopen')
      })
      cy.get('#openwindow').click()
      cy.get('@windowopen').should('be.calledWith',url)
     cy.window().then(win=>{
        win.location.href=url
        cy.title().should('eq','QA Click Academy | Selenium,Jmeter,SoapUI,Appium,Database testing,QA Training Academy')
        cy.url().should('include','click')
      })
     
    })


    
})
