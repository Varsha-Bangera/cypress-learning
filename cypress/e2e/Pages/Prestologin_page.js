// //export class PrestologinPage{

//     username_textbox = '.field-email'eq(2)
//     password_textbox = '.PasswordInput_passInput__VW0S_ > :nth-child(1) > .FormInput_container__bYDqB > .FormInput_input__fMPWe'
//     signin = '[data-cy="signin-with-email-button"]'
    

//     enterUsername(username){
//         cy.get(this.username_textbox).type(username)

//     }

//     enterPassword(password){
//         cy.get(this.password_textbox).type(password)

//     }
//     clearUsername(){
//         cy.get(this.username_textbox).clear()
        
//     }

//     clearPassword(){
//         cy.get(this.password_textbox).clear()
        
//     }

//     clickSignup(){
        
//         cy.get(this.signup).should('be.visible').click()

//     }
   
// }