# Reglas del repositorio para agentes IA

Este archivo define las reglas que cualquier agente IA debe respetar al implementar código en este repositorio.

---

## Arquitectura

```
src/
  app.js          → entry point, monta rutas
  routes/         → definición de rutas Express
  services/       → lógica de negocio (nunca en las rutas)
  middlewares/    → validaciones, error handling
```

**Regla**: Las rutas no contienen lógica de negocio. Solo llaman a services.

---

## Stack

- Node.js + Express
- Sin base de datos (este es un demo — usar datos en memoria)
- Sin autenticación (fuera de scope del demo)

---

## Estilo de código

- ES Modules (`import/export`), no CommonJS
- Funciones nombradas, no arrow functions anónimas en exports
- Errores manejados con `try/catch` en cada route handler
- Respuestas de error: `{ error: "mensaje descriptivo" }`
- Respuestas exitosas: el objeto directamente, sin envelope

---

## Tests

- Un archivo de test por route: `tests/users.test.js`
- Usar `supertest` para tests de integración
- Cubrir: happy path + al menos un error path por endpoint

---

## Lo que NO hacer

- No instalar dependencias nuevas sin justificación en el spec
- No crear abstracciones innecesarias (clases base, factories, decorators)
- No implementar más de lo que pide el spec
- No modificar archivos fuera del scope definido en el spec
