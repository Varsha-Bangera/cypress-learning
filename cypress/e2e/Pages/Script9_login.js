/// <reference types="cypress"/>

class LoginPage
{
    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login?")
    }

    fillEmail(value)
    {
        const field=cy.get('[id=Email]')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field=cy.get('[id=Password]')
        field.clear()
        field.type(value)
        return this
    }

    submit()
    {
        const button=cy.get('[type=submit')
        button.click()

    }

    setUserName(Username)
    {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Username);
        

    }
    setPassword(Password)
    {
        
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(Password);
    }

    clickSubmit()
    {
        
        cy.get("button[type='submit']").click();
    }
    verifyLogin()
    {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');

    }


}

export default LoginPage