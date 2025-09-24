const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://petstore.swagger.io/v2',
    // Deshabilitamos video para APIs (no hay UI que grabar)
    video: false,
    screenshotOnRunFailure: false,
    // Configuración del reporter para generar reportes HTML profesionales
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
      charts: true
    },
    // Configuración específica para pruebas de API
    requestTimeout: 10000,
    responseTimeout: 10000,
    // Variables de entorno para el test
    env: {
      apiVersion: 'v2',
      defaultTimeout: 5000
    },
    setupNodeEvents(on, config) {
      // Aquí podríamos agregar plugins personalizados si fuera necesario
      return config;
    }
  }
});