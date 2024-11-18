// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//cypress commands for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click()
})
// Cypress.Commands.add("clickLink", (linkText) => {
//     cy.contains('a', linkText).click();
//   });

// //over write contains()
// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {})=>{
//     //detemine if a filter was passed
//     if (typeof text === 'object'){
//         options = text
//         text = filter
//         filter = undefined
//     }
//     options.matchCase = false
//     return originalFn(subject, filter, text, options)

// })
import "cypress-file-upload";
import '@4tw/cypress-drag-drop'

//Custom command for login
 Cypress.Commands.add("loginapp",(email, password)=>{
    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get("button[class='button-1 login-button']").click()

 })

 require('cypress-downloadfile/lib/downloadFileCommand')


 Cypress.Commands.add('getIframe', (iframe)=>{
    return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible').then(cy.wrap)


 })

 Cypress.Commands.add("parseXlsx", (inputFile)=>{
   return cy.task('parseXlsx', {filePath: inputFile})
 })
 
Cypress.Commands.add("read",({file, sheet}) => {
   const buf = fs.readFileSync(file);
   const workbook = XLSX.read(buf, { type: 'buffer' });
   const rows = XLSX.utils.sheet_to_json (workbook.Sheets [sheet]);
   return rows
})



