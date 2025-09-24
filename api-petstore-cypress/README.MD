# 🐾 PetStore API Testing Suite

Automatización de pruebas de API REST para PetStore usando Cypress con validación de schemas, reportes detallados y CI/CD.

## 📋 Descripción

Este proyecto implementa una suite completa de pruebas automatizadas para la API de PetStore (Swagger), cubriendo operaciones CRUD completas con un enfoque en calidad, mantenibilidad y mejores prácticas de la industria.

## ✨ Características principales

- **Testing completo de API REST** con Cypress
- **Validación de schemas** usando Joi para garantizar integridad de datos
- **Page Object Pattern adaptado** para APIs (Helper Pattern)
- **Reportes HTML detallados** con Mochawesome
- **CI/CD** con GitHub Actions
- **Gestión de datos de prueba** con fixtures
- **Logging detallado** para debugging eficiente
- **Manejo de errores robusto** y casos edge

## 🚀 Instalación

### Prerrequisitos
- Node.js 18+ (recomendado 20+)
- npm o yarn
- Git

### Pasos de instalación

```bash
# Clonar el repositorio
git clone https://github.com/[tu-usuario]/api-petstore-cypress.git
cd api-petstore-cypress

# Instalar dependencias
npm ci
```

## 🧪 Ejecución de pruebas

### Modo headless (recomendado para CI)
```bash
npm test
```
Este comando ejecuta todas las pruebas y genera reportes automáticamente.

### Modo interactivo (debugging)
```bash
npm run open
```
Útil para desarrollo y debugging visual de las pruebas.

### Modo headed (ver ejecución en navegador)
```bash
npm run test:headed
```

## 📊 Reportes

Los reportes se generan automáticamente después de cada ejecución:

- **Ubicación**: `cypress/reports/html/index.html`
- **Formato**: HTML interactivo con gráficos y detalles
- **Contenido**: 
  - Resumen de ejecución
  - Tiempo de respuesta por endpoint
  - Detalles de cada prueba
  - Logs de debugging

Para ver el reporte, abre el archivo HTML en cualquier navegador:
```bash
open cypress/reports/html/index.html  # macOS
start cypress/reports/html/index.html # Windows
```

## 🏗️ Estructura del proyecto

```
api-petstore-cypress/
├── cypress/
│   ├── e2e/
│   │   └── api/
│   │       └── petstore-crud.cy.js    # Suite principal de pruebas
│   ├── fixtures/
│   │   └── petData.json               # Datos de prueba
│   ├── schemas/
│   │   └── petSchemas.js              # Validaciones de schema con Joi
│   ├── support/
│   │   ├── api/
│   │   │   └── petApiHelpers.js       # Funciones auxiliares para API
│   │   ├── commands.js                # Comandos personalizados Cypress
│   │   └── e2e.js                     # Configuración global
│   └── reports/                       # Reportes generados (ignorado en git)
├── .github/
│   └── workflows/
│       └── ci.yml                     # Pipeline de CI/CD
├── cypress.config.js                  # Configuración de Cypress
├── package.json                       # Dependencias y scripts
├── README.md                          # Este archivo
└── conclusiones.txt                   # Análisis y hallazgos

```

## 📝 Casos de prueba implementados

### Flujo principal (requerido)
1. **Crear mascota**: POST /pet con validación completa de respuesta
2. **Consultar por ID**: GET /pet/{id} con manejo de casos exitosos y erróneos
3. **Actualizar datos**: PUT /pet actualizando nombre y estado
4. **Buscar por estado**: GET /pet/findByStatus validando filtros

### Pruebas adicionales (valor agregado)
- Validación de schemas en todas las respuestas
- Prueba de límites en campos (nombres largos)
- Múltiples actualizaciones consecutivas
- Manejo de IDs inexistentes
- Verificación de persistencia de datos
- Validación de tiempos de respuesta

## 🔄 CI/CD

El proyecto incluye un pipeline de GitHub Actions que:
1. Ejecuta las pruebas en cada push/PR
2. Genera reportes de ejecución
3. Almacena artifacts (reportes HTML)
4. Notifica resultados

Ver estado: ![CI Status](https://github.com/[tu-usuario]/api-petstore-cypress/actions/workflows/ci.yml/badge.svg)

## 🛠️ Tecnologías utilizadas

- **Cypress 13.7.0**: Framework de testing
- **Joi**: Validación de schemas
- **Mochawesome**: Generación de reportes
- **GitHub Actions**: CI/CD
- **JavaScript ES6+**: Lenguaje de programación

## 📈 Métricas de calidad

- **Cobertura**: 100% de endpoints especificados
- **Tiempo promedio de respuesta**: < 500ms
- **Tasa de éxito**: 100% en ambiente estable
- **Mantenibilidad**: Código modular con helpers reutilizables

## 🔍 Debugging

Para debugging detallado:

1. Usa el modo interactivo: `npm run open`
2. Revisa los logs en consola durante la ejecución
3. Los comandos personalizados incluyen logging adicional
4. Cada test imprime información de contexto

## 🤝 Contribución

Este es un proyecto de evaluación técnica, pero se siguen las mejores prácticas:

1. Fork del repositorio
2. Crear feature branch (`git checkout -b feature/NuevaCaracteristica`)
3. Commit cambios (`git commit -m 'Add: nueva característica'`)
4. Push al branch (`git push origin feature/NuevaCaracteristica`)
5. Abrir Pull Request

## 📜 Licencia

Proyecto de evaluación técnica - Uso educativo


## 🎯 Próximos pasos sugeridos

- Implementar pruebas de carga con Artillery o K6
- Agregar pruebas de seguridad (OWASP API Top 10)
- Implementar contract testing con Pact
- Agregar mutación de datos para pruebas de caos
- Integración con herramientas de monitoreo (Datadog, New Relic)