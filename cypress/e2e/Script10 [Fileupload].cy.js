describe('File Upload Test',()=>{
    it('file uplaod test',()=>{
        cy.visit("https://fineuploader.com/demos.html")
        const image = 'image.jpg';
        cy.get('[name="qqfile"]').attachFile(image)
    })
})