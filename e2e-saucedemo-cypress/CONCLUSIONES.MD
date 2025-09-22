Conclusiones – Prueba E2E (SauceDemo + Cypress)

Resumen
Implementé un flujo E2E de compra en https://www.saucedemo.com usando Cypress y el patrón Page Object. El caso cubre: login con standard_user, agregado de dos productos, revisión del carrito, checkout y la validación del mensaje final que dice “Thank you for your order!”. Lo que hice fue priorizar la estabilidad (selectores data-test, nada de waits fijos) y también lo que es la mantenibilidad (POM, fixtures, reporter Mochawesome, y pipeline en CI).

Las validaciones en cada paso
- Login: las credenciales correctas y llegada a la vista de inventario.
- Agregar productos: añado dos ítems por nombre y verifico badge del carrito en “2”.
- Carrito: compruebo que existan exactamente dos líneas antes de pasar a checkout.
- Checkout: completo datos desde fixtures y navego hasta resumen/pago.
- Confirmación: aserción estricta del mensaje “Thank you for your order!”.

Resultados y sensación de uso
- El flujo es rápido y estable. Cuando se corre el flujo, el tiempo total suele oscilar en ~3–6 s en local y ~8–15 s en CI (dependiendo de la red y del corredor).
- No observé comportamientos intermitentes: Cypress reintenta aserciones de forma automática y los elementos tienen atributos “data-test” muy confiables.
- La URL/base y los datos del usuario viven en un solo lugar (config + fixture), por lo tanto si se desea cambiar algún escenario es m´sa simple.

Decisiones de diseño y por qué
- Cypress: menor fricción de setup, videos automáticos y DX excelente para este tipo de desafío.
- Page Object Model: encapsula los selectores y también las acciones. En el caso de que cambie un botón o texto, solo modifico un archivo
- Reportes Mochawesome: al finalizar, se generan los archivos JSON y HTML consolidados para dejar evidencia clara en el zip y en la CI.

Estabilidad y flakiness
- Sin “falsos negativos” en ejecuciones consecutivas. El único punto sensible sería un cambio de copy en botones (“Add to cart”) o en el mensaje del final. Esto quedaría contenido en los Page Objects/aserciones.

Mantenibilidad y escalabilidad
- La estructura de carpetas de este proyecto separa las pruebas, páginas, fixtures y el soporte. Agregar nuevos casos (por ejemplo, remover productos, ordenar por precio, etc.) es un proceso que sería incremental.
- El flujo es fácilmente parametrizable (más/menos productos, distintos usuarios) moviendo datos al fixture o usando data-driven.
- Se puede habilitar tags por suite/critidad e incluso paralelizar en un servicio de nube (Cypress Cloud) para reducir tiempos.

Riesgos / Deuda técnica detectada
- Cambios de UI podrían romper aserciones textuales; mitigado con POM y selectores “data-test”.

Evidencia y reproducibilidad
- Entrego reporte HTML (Mochawesome), más videos y screenshots ante fallos.
- El README documenta instalación/ejecución en modo headless e interactivo.
- Pipeline de GitHub Actions sube artifacts de cada corrida para auditoría.

Conclusión personal
El objetivo de esta prueba era demostrar un flujo E2E confiable, claro y fácil de mantener. La combinación Cypress + POM + fixtures + reportes nos entrega eso: velocidad al momento de desarrollar, evidencias automáticas y código preparado para crecer. Como posbile mejora, priorizaría casos negativos (usuarios bloqueados o validaciones de formulario). 