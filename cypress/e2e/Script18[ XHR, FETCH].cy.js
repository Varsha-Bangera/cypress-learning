Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });

describe("Intercept Network Request", () => {
    beforeEach(() => {
      cy.visit("https://qaboxletstestcypresspracticesite.netlify.app/intercept");
    });
  
    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR GET Request", () => {
      cy.intercept({
        method: "GET",
        pathname: "/users", // Add pathname property to match against
        }).as("users");
      //cy.route("/users?*").as("users");
  
      cy.get("#loadThreeUsersXHR").click();
      cy.wait("@users")
        // .its("status")
        // .should("be.eq", 200);
      cy.get("#xhrusers > tbody >tr").should("have.length", 3);
    });
  
    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR POST Request", () => {
        cy.intercept("POST", "/users").as("users");
  
      const user = {
        name: "Avi",
        email: "a.b@c.com",
      };
  
      cy.get("#xhrname").type(user.name);
      cy.get("#xhremail").type(user.email);
      cy.get("#xhrbtn").click();
  
      cy.wait("@users").then((xhr) => {
        expect(xhr.response.statusCode).to.eql(201)
        expect(xhr.response.body.name).to.eql(user.name);
        expect(xhr.response.body.email).to.eql(user.email);
      });
      cy.get("#xhrspan").should("contain.text", `${user.name} - ${user.email}`);
    });
  
    it("STUB - INTERCEPT VIA SERVER-ROUTE XHR GET Request", () => {
      cy.intercept("GET", "/users?*", { fixture: "users.json" }).as("users");
      cy.get("#loadThreeUsersXHR").click();
      cy.wait("@users");
      cy.get("#xhrusers > tbody >tr").should("have.length", 3);
    });
  
    it("SPY - Intercept FETCH GET Request - 3 Users", () => {
      // Intercept and SPY Network Request for THREE USERS
      cy.intercept({
        pathname: "/users",
        method: "GET",
        query: {
          _limit: "3",
        },
      }).as("users");
      cy.get("#loadThreeUsersFETCH").click();
  
      cy.wait("@users")
        .its("response.body")
        .should("have.length", 3);
  
      cy.get("#fetchusers > tbody >tr").should("have.length", 3);
    });
  
    it("STUB - Intercept FETCH GET Request - 3 Users", () => {
      // Intercept and Stub network request
      cy.intercept(
        {
          pathname: "/users",
          method: "GET",
          query: {
            _limit: "3",
          },
        },
        {
          fixture: "users.json",
        }
      ).as("users");
      cy.get("#loadThreeUsersFETCH").click();
      cy.wait("@users")
        .its("response.body")
        .should("have.length", 3);
  
      cy.get("#fetchusers > tbody >tr").should("have.length", 3);
    });
  
    it("SPY - Intercept FETCH GET Request - 5 Users", () => {
      // Intercept and SPY Network Request for FIVE USERS
      cy.intercept({
        pathname: "/users",
        query: {
          _limit: "5",
        },
      }).as("users");
  
      cy.get("#loadFiveUsersFETCH").click();
      cy.wait("@users")
        .its("response.body")
        .should("have.length", 5);
      cy.get("#fetchusers > tbody >tr").should("have.length", 5);
    });
  
    it("SPY - Intercept FETCH GET Request - Single User", () => {
        cy.intercept("/users/10").as("users");
        cy.get("#loadSpecificUserFETCH").click();
        cy.wait("@users", { timeout: 20000 }) // Increased timeout to 10 seconds
          .its("response.body.phone")
          .should("eq", "024-648-3804");
        cy.get("#fetchusers > tbody >tr").should("have.length", 1);
      });
      
    it("SPY - Intercept FETCH POST Request", () => {
      const user = {
        name: "Avi",
        email: "a.b@c.com",
      };
  
      cy.intercept({
        method: "POST",
        pathname: "/users",
      }).as("users");
  
      cy.get("#fetchname").type(user.name);
      cy.get("#fetchemail").type(user.email);
      cy.get("#fetchbtn").click();
      cy.wait("@users").then((obj) => {
        expect(obj.response.statusCode).to.eql(201);
        expect(obj.response.body.name).to.eql(user.name);
        expect(obj.response.body.email).to.eql(user.email);
      });
      cy.get("#fetchspan").should("contain.text", `${user.name} - ${user.email}`);
    });
  });