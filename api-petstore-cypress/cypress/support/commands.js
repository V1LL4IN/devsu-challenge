// Importamos los helpers de API
const PetApiHelper = require('./api/petApiHelpers');

// Comando personalizado para limpiar una mascota después de las pruebas
Cypress.Commands.add('cleanupPet', (petId) => {
  // Este comando no falla si la mascota no existe
  // Útil para limpieza al final de los tests
  cy.log(`Cleaning up pet with ID: ${petId}`);
  
  cy.request({
    method: 'DELETE',
    url: `/pet/${petId}`,
    failOnStatusCode: false
  }).then((response) => {
    if (response.status === 200) {
      cy.log(`Pet ${petId} deleted successfully`);
    } else if (response.status === 404) {
      cy.log(`Pet ${petId} not found (already deleted)`);
    }
  });
});

// Comando para loggear respuestas de forma más legible
Cypress.Commands.add('logResponse', (response, title = 'API Response') => {
  cy.log(`📋 ${title}`);
  cy.log(`Status: ${response.status}`);
  cy.log(`Duration: ${response.duration}ms`);
  
  // Solo mostramos el body si es exitoso y no es muy largo
  if (response.status >= 200 && response.status < 300) {
    const bodyStr = JSON.stringify(response.body);
    if (bodyStr.length < 500) {
      cy.log(`Body: ${bodyStr}`);
    } else {
      cy.log(`Body: [Large response - ${bodyStr.length} characters]`);
    }
  }
});

// Comando para validar el tiempo de respuesta
Cypress.Commands.add('validateResponseTime', (response, maxTime = 2000) => {
  expect(response.duration, `Response time should be less than ${maxTime}ms`).to.be.lessThan(maxTime);
});