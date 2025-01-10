Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });
  
import 'cypress-iframe'
describe('mouse operations', ()=>{

    it('MouseHover',()=>{
        cy.visit("https://demo.opencart.com/")

        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        .should('not.be.visible')

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
        .should('be.visible')
    })

    it('Right Click', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        //approach1
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu')
        cy.get('.context-menu-icon-copy').should('be.visible')

        //approach2
        //cy.get('.context-menu-one.btn.btn-neutral').rightclick()
        //cy.get('.context-menu-icon-copy').should('be.visible')
    })

    // it('Double Click',()=>
    // {
    //     cy.on('window:alert',(str)=>{
    //       expect(str).to.equal('You double clicked me.. Thank You..')
    //     })
    //     cy.visit("https://demo.guru99.com/test/simple_context_menu.html") 
    //     cy.contains('Double-Click Me To See Alert').dblclick()  
        
        
    // })

    it('Double Click', () => { 
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
        cy.frameLoaded('#iframeResult') //LOAD THE FRAME
        //aaproach-triger1
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!')
    
    
    })

    it('Drag and drop using plugin',()=>{
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').drag('#box106',{force: true})

    })

    it('Scrolling page',()=>{

        cy.visit("http://www.countries-ofthe-world.com/flags-of-the-world.html")

        //India flag
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible')

        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration:2000})
        cy.get(':nth-child(1) > tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible')

        cy.get('#footer').scrollIntoView();
    })



})