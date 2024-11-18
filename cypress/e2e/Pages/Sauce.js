export let LoginPage = {
    UserName: () =>cy.get("input[id='user-name']"),
    Password: () => cy.get('#password'),
    LoginButton: () => cy.get('input[id="login-button"]'),
    ErrorMessage: () => cy.get('[data-test="error"]'),
    Name:()=> cy.get('#first-name'),
    Lastname: ()=> cy.get('#last-name'),
    Zip:()=> cy.get('#postal-code'),
    ContinueButton: ()=> cy.get('#continue'),
  };

// export let CommonPage = {
//     MainBurgerButton: () => cy.get('.bm-burger-button button'),
//     InventoryItems: () => cy.get('.inventory_list .inventory_item'),
//     CartListItems: () => cy.get('.cart_list .cart_item'),
//     ShoppingCartBadge: () => cy.get('#shopping_cart_container .shopping_cart_badge'),
//   };

