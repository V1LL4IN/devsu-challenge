import loginPage from "../pages/LoginPage";
import inventoryPage from "../pages/InventoryPage";
import cartPage from "../pages/CartPage";
import checkoutPage from "../pages/CheckoutPage";
import checkoutCompletePage from "../pages/CheckoutCompletePage";

describe("SauceDemo - Flujo de compra E2E", () => {
  const products = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];

  beforeEach(() => {
    cy.fixture("user").as("user");
  });

  it("Autenticarse, agregar 2 productos, comprar y validar confirmación", function () {
    // Login
    loginPage.visit();
    loginPage.login(this.user.username, this.user.password);
    inventoryPage.title().should("have.text", "Products");

    // Agregar 2 productos
    products.forEach((p) => inventoryPage.addToCartByName(p));
    inventoryPage.cartBadge().should("have.text", "2");

    // Visualizar carrito
    inventoryPage.cartLink().click();
    cartPage.items().should("have.length", 2);

    // Checkout
    cartPage.checkoutBtn().click();
    checkoutPage.firstName().type(this.user.firstName);
    checkoutPage.lastName().type(this.user.lastName);
    checkoutPage.postalCode().type(this.user.postalCode);
    checkoutPage.continueBtn().click();

    // Resumen y finalizar
    checkoutPage.finishBtn().click();

    // Confirmación
    checkoutCompletePage
      .completeHeader()
      .should("have.text", "Thank you for your order!");
  });
});