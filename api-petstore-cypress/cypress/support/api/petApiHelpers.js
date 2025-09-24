class PetApiHelper {
  /**
   * Crea una nueva mascota en la tienda
   * @param {Object} petData - Datos de la mascota
   * @returns {Cypress.Chainable} Respuesta de la API
   */
  static createPet(petData) {
    return cy.request({
      method: 'POST',
      url: '/pet',
      body: petData,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      failOnStatusCode: false // Permitimos manejar errores manualmente para validaciones
    });
  }

  /**
   * Obtiene una mascota por ID
   * @param {number} petId - ID de la mascota
   * @returns {Cypress.Chainable} Respuesta de la API
   */
  static getPetById(petId) {
    return cy.request({
      method: 'GET',
      url: `/pet/${petId}`,
      headers: {
        'Accept': 'application/json'
      },
      failOnStatusCode: false
    });
  }

  /**
   * Busca mascotas por estado
   * @param {string} status - Estado de la mascota (available, pending, sold)
   * @returns {Cypress.Chainable} Respuesta de la API
   */
  static getPetsByStatus(status) {
    return cy.request({
      method: 'GET',
      url: '/pet/findByStatus',
      qs: { status }, // Query string parameter
      headers: {
        'Accept': 'application/json'
      },
      failOnStatusCode: false
    });
  }

  /**
   * Actualiza una mascota existente
   * @param {Object} petData - Datos actualizados de la mascota
   * @returns {Cypress.Chainable} Respuesta de la API
   */
  static updatePet(petData) {
    return cy.request({
      method: 'PUT',
      url: '/pet',
      body: petData,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      failOnStatusCode: false
    });
  }

  /**
   * Elimina una mascota por ID
   * @param {number} petId - ID de la mascota a eliminar
   * @returns {Cypress.Chainable} Respuesta de la API
   */
  static deletePet(petId) {
    return cy.request({
      method: 'DELETE',
      url: `/pet/${petId}`,
      headers: {
        'Accept': 'application/json'
      },
      failOnStatusCode: false
    });
  }

  /**
   * Genera datos de prueba para una mascota
   * @param {Object} overrides - Campos a sobrescribir en los datos por defecto
   * @returns {Object} Objeto con datos de mascota
   */
  static generatePetData(overrides = {}) {
    const timestamp = Date.now();
    const defaultData = {
      id: Math.floor(Math.random() * 1000000) + timestamp,
      category: {
        id: 1,
        name: "Dogs"
      },
      name: `TestPet_${timestamp}`,
      photoUrls: [
        "https://example.com/photo1.jpg",
        "https://example.com/photo2.jpg"
      ],
      tags: [
        {
          id: 1,
          name: "friendly"
        },
        {
          id: 2,
          name: "vaccinated"
        }
      ],
      status: "available"
    };

    return { ...defaultData, ...overrides };
  }

  /**
   * Valida que la respuesta contenga los campos esperados
   * @param {Object} actualPet - Mascota recibida de la API
   * @param {Object} expectedPet - Mascota esperada
   */
  static validatePetResponse(actualPet, expectedPet) {
    // Validación de campos principales
    expect(actualPet.id).to.equal(expectedPet.id, 'Pet ID should match');
    expect(actualPet.name).to.equal(expectedPet.name, 'Pet name should match');
    expect(actualPet.status).to.equal(expectedPet.status, 'Pet status should match');
    
    // Validación de estructura
    expect(actualPet).to.have.property('photoUrls').that.is.an('array');
    
    if (expectedPet.category) {
      expect(actualPet.category).to.deep.equal(expectedPet.category, 'Category should match');
    }
    
    if (expectedPet.tags) {
      expect(actualPet.tags).to.deep.equal(expectedPet.tags, 'Tags should match');
    }
  }
}

module.exports = PetApiHelper;