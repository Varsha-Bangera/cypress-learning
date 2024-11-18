import { LoginPage } from "./Pages/login_page"; 

const loginPage = new LoginPage()


before (function(){
    cy.fixture('login.json').as('test_data')
})


// it('Read file using fixture', function(){

//     cy.fixture('example.json').then((data)=>{
//         cy.log(data.name)
//         cy.log(data.email)
//     })

//     cy.log(this.test_data.name)
//     cy.log(this.test_data.email)

// })

// fixtures used for login page
it('Using fixtures in login page', function () {
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
  cy.writeFile('demo.txt','learning cypress\n')
  cy.writeFile('demo.txt','automating the code',{flag:'a+'})

})