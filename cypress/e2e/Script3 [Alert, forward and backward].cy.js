
define('Alerts',()=>{

    // Alert having some text and okay button
    it('Js alerts',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert')
        })

        // Alert window automatically closed by cypress
        cy.get("#result").should('have.text', 'You successfully clicked an alert')
        cy.wait(4000)

    })

    // Alert having some text with okay and cancel button
    it('Js confirm alert-ok',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            
        })

        //cypress automatically closed window by using ok button default
        cy.get("#result").should('have.text', 'You clicked: Ok')
        cy.wait(4000)

    })

    it('Js confirm alert-cancel',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
            
        })

        cy.on('window:confirm',()=>false)

        //cypress automatically closed window by using ok button default
        cy.get("#result").should('have.text', 'You clicked: Cancel')

        })

    //Alert with some text and textbox for user input along with ok
    it('Js prompt alert',()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()

        //cypress will automatically close the prompted alert. it will use ok by default
        
        //cy.on('window:prompt',()=>false)
            
        cy.get("#result").should('have.text', 'You entered: welcome')

         })


    it('Authenticated alert',()=>{

        //approch 1
        // cy.visit("https://the-internet.herokuapp.com/basic_auth", { auth:
    
        //                                                          {
        //                                                             username:"admin",  
        //                                                             password:"admin"
        //                                                          }
        //                                                         })
        // cy.get("div[class='example'] p").should('have.contain','Congratulations')

        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
        cy.get("div[class='example'] p").should('have.contain','Congratulations')


    })
})


// forward and backward
describe('Navigate back and forward', () => {

    it('Navigate back and forward', () => 
    {
        cy.visit("https://demo.nopcommerce.com/").wait(2000)
        cy.title().should('eq','nopCommerce demo store')// home page
        
        cy.get('.ico-register').contains('Reg').click().wait(2000)
        cy.title().should('eq','nopCommerce demo store. Register').wait(2000) // reg page
        
        cy.go('back')
        cy.title().should('eq','nopCommerce demo store').wait(2000)// home page
        
        cy.go('forward')
        cy.title().should('eq','nopCommerce demo store. Register').wait(2000) // reg page
        
        cy.go(-1)    //back-we can use numbers also to go and back
        cy.title().should('eq','nopCommerce demo store').wait(2000)// home page

        cy.go(1)//forward-we can use numbers also to go and back
        cy.title().should('eq','nopCommerce demo store. Register').wait(2000) // reg page
        cy.reload()


    })
})
