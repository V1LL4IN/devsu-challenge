import './commands';

// Configuración global para mejor debugging
Cypress.on('uncaught:exception', (err, runnable) => {
  // Evitamos que Cypress falle en excepciones no controladas de la API
  // Esto es útil cuando la API devuelve errores esperados
  return false;
});

// Hook global antes de cada test
beforeEach(() => {
  // Log del inicio del test para mejor trazabilidad en los reportes
  cy.log(`Starting test: ${Cypress.currentTest.title}`);
});

// Hook global después de cada test
afterEach(() => {
  // Log del resultado del test
  const testState = Cypress.currentTest.state;
  const emoji = testState === 'passed' ? 'OK' : 'NO OK';
  cy.log(`${emoji} Test ${testState}: ${Cypress.currentTest.title}`);
});