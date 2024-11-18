describe('Drag and drop test',()=>{

    it('drag and drop',()=>{
        
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('li[id="menu-fried-chicken"]').drag('ul[id="plate-items"] li')

    })
})