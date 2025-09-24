const Joi = require('joi');

/**
 * Schema de validación para una mascota
 * Basado en la especificación Swagger de PetStore
 */
const petSchema = Joi.object({
  id: Joi.number().integer().required(),
  category: Joi.object({
    id: Joi.number().integer(),
    name: Joi.string()
  }).optional(),
  name: Joi.string().required(),
  photoUrls: Joi.array().items(Joi.string()).required(),
  tags: Joi.array().items(
    Joi.object({
      id: Joi.number().integer(),
      name: Joi.string()
    })
  ).optional(),
  status: Joi.string().valid('available', 'pending', 'sold').required()
});

/**
 * Schema para respuesta de API genérica
 */
const apiResponseSchema = Joi.object({
  code: Joi.number().integer(),
  type: Joi.string(),
  message: Joi.string()
});

/**
 * Función helper para validar schemas
 */
function validateSchema(data, schema) {
  const { error, value } = schema.validate(data, { 
    abortEarly: false,  // Mostrar todos los errores, no solo el primero
    allowUnknown: false // No permitir campos no especificados
  });
  
  if (error) {
    const errorMessages = error.details.map(detail => detail.message);
    throw new Error(`Schema validation failed:\n${errorMessages.join('\n')}`);
  }
  
  return value;
}

module.exports = {
  petSchema,
  apiResponseSchema,
  validateSchema
};