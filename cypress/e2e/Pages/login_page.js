export class LoginPage{

    username_textbox = "input[placeholder='username']"
    password_textbox = "input[placeholder='password']"
    signup = ".Button_button__mradH.common_submit__dTZhu"

    email_signup = '[data-cy="signup-email-form"] > :nth-child(1) > .FormInput_container__bYDqB > .FormInput_input__fMPWe'
    username_signup = ':nth-child(2) > .FormInput_container__bYDqB > .FormInput_input__fMPWe'
    pass1 = '[aria-describedby="popup-1"] > .FormInput_container__bYDqB > .FormInput_input__fMPWe'

    actionbutton = 'button[aria-label="mobile-navbar-menu-button"]'    
    sign_out = '[data-cy="sign-out-button-mobile"]'
    sign_in = ':nth-child(6) > a'
    account = '[data-cy="signin-create-account-button"]'
    sign_up_email = '[data-cy="signin-create-account-email"] > span'
    sign_in_email = '[data-cy="signup-with-email-button"]'


    enterUsername(username){
        cy.get(this.username_textbox).type(username)

    }

    enterPassword(password){
        cy.get(this.password_textbox).type(password)

    }
    clearUsername(){
        cy.get(this.username_textbox).clear()
        
    }

    clearPassword(){
        cy.get(this.password_textbox).clear()
        
    }

    clickSignup(){
        
        cy.get(this.signup).should('be.visible').click()

    }

    emailsignup(email){
        
        cy.get(this.email_signup).type(email)
    }
    usernamesignup(username){
        
        cy.get(this.username_signup).type(username)
    }
    pass(password){
        
        cy.get(this.pass1).type(password)
    }
    action(){

        cy.get(this.actionbutton).should('be.visible').click()
    }
    signout(){

        cy.get(this.sign_out).should('be.visible').click()
    }
    signin(){

        cy.get(this.sign_in).should('be.visible').click()
    }
    create_account(){

        cy.get(this.account).should('be.visible').click()
    }
    emailbutton(){

        cy.get(this.sign_up_email).should('be.visible').click()
    }
    emailbutton1(){

        cy.get(this.sign_in_email).should('be.visible').click()
    }
    
}