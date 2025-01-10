let rowsLength;

// Run tests
describe('Data Driven Testing Using Excel File', () => {
    before(() => {
        cy.task('readXlsx', { file: 'cypress/fixtures/steps_in_orange_login_with_positive_var.csv', sheet: "steps_in_orange_login_with_posi" }).then((rows) => {
            rowsLength = rows.length;
            cy.writeFile("cypress/fixtures/xlsData.json", { rows })
        })

        cy.visit('https://www.dolthub.com/signin');
    });

    // Run test
    it('Data Driven: User', () => {
        cy.fixture('xlsData').then((data) => {
            for (let i = 0; i < rowsLength; i++) {
                //cy.get('.btn-link').click();
                cy.url().should('include', 'signin').then(() => {
                    //cy.get('input[formcontrolname="firstName"]').type(data.rows[i].firstName);
                    //cy.get('input[formcontrolname="lastName"]').type(data.rows[i].lastName);
                    cy.get("input[placeholder='username']").type(data.rows[i].username);
                    cy.get("input[placeholder='password']").type(data.rows[i].password);
                    cy.get(".Button_button__mradH.common_submit__dTZhu").click();
                    //cy.get('.alert').should('have.text', data.rows[i].message);
                });
            }
        });
    });
});