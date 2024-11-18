import { LoginPage } from "./Pages/login_page"; 

const loginPage = new LoginPage()

// before (function(){
//     cy.fixture('login.json').as('test_data')
// })

    it('login to the site', () => {
        cy.visit('https://www.dolthub.com/signin')

        loginPage.enterUsername('varsha1')
        loginPage.enterPassword('Test@123')
        loginPage.clickSignup()
        cy.wait(5000)

        
        //loginPage.clearUsername()
        loginPage.enterUsername('varsha123')
        cy.wait(3000)

        loginPage.clearPassword()
        loginPage.enterPassword('Test@123')

        loginPage.clickSignup()
        cy.wait(5000)

        cy.url().should('include', 'profile').debug() // checking whether profile name is included in the url we are redirected
        
        loginPage.action()
        loginPage.signout()

        
        cy.wait(5000)
        loginPage.action() 
        loginPage.signin() 
    })

    it.skip('sign up', () => {
        cy.visit('https://www.dolthub.com/signin')
        loginPage.create_account() 
        loginPage.emailbutton() 

        loginPage.emailsignup('varsha6@gmail.com') 
        loginPage.usernamesignup('qatest1')
        loginPage.pass('V@ar123456')
        loginPage.emailbutton1()
    });

        // it('Read file using fixture', function(){

        // cy.fixture('example.json').then((data)=>{
        // cy.log(data.name)
        // cy.log(data.email)
        // })

        // cy.log(this.test_data.name)
        // cy.log(this.test_data.email)

        // })
    
    // fixtures used for login page
    it.skip('Using fixtures in login page', function () {
        cy.visit('https://www.dolthub.com/signin')
        
        loginPage.enterUsername(this.test_data.name)
        loginPage.enterPassword(this.test_data.password)
        loginPage.clickSignup()
        cy.wait(5000)
    
        
        loginPage.clearUsername()
        loginPage.enterUsername(this.test_data.name1)
        cy.wait(3000)
    
        loginPage.clearPassword()
        loginPage.enterPassword(this.test_data.password)
    
        loginPage.clickSignup()
        cy.wait(5000)
        
    })
    
    // reading files
    it('reading file using readFile', function(){
        cy.visit('https://www.dolthub.com/signin')
        
        cy.readFile('./cypress/fixtures/login.json').then((test_data)=>{
       
        loginPage.enterUsername(test_data.name1)
        cy.wait(3000)
        loginPage.enterPassword(test_data.password)
        loginPage.clickSignup()
    
        })
    
    })
    
    it('writing file', function(){
      cy.writeFile('demo.txt','learning cypress \n')
      cy.writeFile('demo.txt','automating the code',{flag:'a+'})
    
    })




   