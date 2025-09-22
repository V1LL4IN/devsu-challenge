class LoginPage {
  visit() { cy.visit("/"); }
  username() { return cy.get('[data-test="username"]'); }
  password() { return cy.get('[data-test="password"]'); }
  loginBtn() { return cy.get('[data-test="login-button"]'); }
  login(user, pass) {
    this.username().type(user);
    this.password().type(pass, { log: false });
    this.loginBtn().click();
  }
}
export default new LoginPage();