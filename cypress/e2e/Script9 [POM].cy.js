

import LoginPage from "./Pages/Script9_login"

describe("POM",function() {

    it("validate login test",function(){
        const lp= new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

    it('Login test', () => 
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        const ln=new LoginPage(); 
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();


    })

    it(' fixture', () => 
        {
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            
            cy.fixture('Orange').then((data) => {

            const ln=new LoginPage(); //(ln=object reference variable)
            ln.setUserName(data.user)
            ln.setPassword(data.pass1)
            ln.clickSubmit();
            ln.verifyLogin();

   

        })

    })
})