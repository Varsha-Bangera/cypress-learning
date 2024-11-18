/// <reference types="cypress"/>

describe('table',()=>{

    it('first table',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        //check value presence anywhere in the table
        cy.get('table[name="BookTable"]').contains('td','Learn Selenium').should('be.visible')
        cy.wait(2000)

        //check value presence in specific row and column
        cy.get('body > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')
        
        // verify book name using author amod
        cy.get('table[name=BookTable] tbody> tr td:nth-child(2)').each(($e1,index,$list)=> {
            const text=$e1.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name=BookTable] tbody> tr td:nth-child(1)').eq(index).then(function(bname)
                {
                const bookname= bname.text()
                expect(bookname).to.equal("Master In Java")

                })
            }


        })


    })

    it('second table',()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("table[id='productTable'] tbody> tr td:nth-child(3)").each(($e,index,$list)=> {
            const text=$e.text()
            if(text.includes("$5.99"))
            {
                cy.get("table[id='productTable'] tbody> tr td:nth-child(2)").eq(index).then(function(pname)
                {
                    const productname=pname.text()
                    expect(productname).to.equal("Product 3")
                })
            }

        })

    })



})