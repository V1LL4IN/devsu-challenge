class InventoryPage {
  title() { return cy.get('.title'); }
  addToCartByName(name) {
    cy.contains(".inventory_item", name).find("button").click();
  }
  cartBadge() { return cy.get(".shopping_cart_badge"); }
  cartLink() { return cy.get(".shopping_cart_link"); }
}
export default new InventoryPage();