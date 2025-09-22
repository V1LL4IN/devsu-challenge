class CheckoutPage {
  firstName() { return cy.get('[data-test="firstName"]'); }
  lastName() { return cy.get('[data-test="lastName"]'); }
  postalCode() { return cy.get('[data-test="postalCode"]'); }
  continueBtn() { return cy.get('[data-test="continue"]'); }
  finishBtn() { return cy.get('[data-test="finish"]'); }
}
export default new CheckoutPage();