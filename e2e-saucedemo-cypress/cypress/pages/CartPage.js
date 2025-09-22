class CartPage {
  items() { return cy.get(".cart_item"); }
  checkoutBtn() { return cy.get('[data-test="checkout"]'); }
}
export default new CartPage();