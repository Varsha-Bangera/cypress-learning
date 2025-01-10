import 'cypress-iframe'
describe('Handling frames',()=>{

    it('Aproach 1',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible').then(cy.wrap)

        iframe.clear().type("welcome {ctrl+a}")

        cy.get("[aria-label='Bold']").click()

    })

    it('Aproach 2- using custom command',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe('#mce_0_ifr').clear().type("welcome {ctrl+a}")
        cy.get("[aria-label='Bold']").click()

    })

    it('Aproach 3- using cypress iframe pluggin',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded('#mce_0_ifr') //load the frame
        cy.iframe('#mce_0_ifr').clear().type("welcome {ctrl+a}")
        cy.get("[aria-label='Bold']").click()
    })

})