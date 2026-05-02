# Cómo replicar la demo

Estas instrucciones son para después de la charla — para que puedas probar el flujo vos mismo.

---

## Lo que vas a hacer

Implementar la validación de email en `POST /users` usando un agente IA, siguiendo el spec que ya está escrito.

**Estado actual del repo**: el endpoint acepta cualquier email — incluso inválidos. Hay 2 tests marcados como `todo` que están esperando ser implementados.

---

## Opción A — GitHub Copilot Workspace (recomendado)

1. Ir a https://githubnext.com/projects/copilot-workspace
2. Conectar este repo
3. Como "task", pegar el contenido de `specs/001-add-user-validation/spec.md`
4. Dejar que el agente proponga los cambios
5. Revisar el diff — verificar que tiene sentido
6. Abrir el PR

---

## Opción B — Cualquier agente (Copilot Chat, Claude, Cursor)

1. Clonar el repo: `git clone https://github.com/francomacri17/sdd-demo-meli`
2. Instalar deps: `npm install`
3. Abrir el agente de tu preferencia
4. Darle este contexto:
   ```
   Tengo un repo Node.js + Express. 
   Leé las reglas en .github/copilot-instructions.md
   Implementá el feature descrito en specs/001-add-user-validation/spec.md
   Los tests están en tests/users.test.js — los 2 "todo" tienen que pasar.
   ```
5. Revisar los cambios propuestos
6. Correr `npm test` para verificar

---

## Cómo saber que funcionó

```bash
npm test
```

Resultado esperado:
```
✓ devuelve 200 ok
✓ crea un usuario con name y email válidos → 201
✓ falla sin name → 400
✓ falla con email inválido → 400 { error: "Email inválido" }   ← este era todo
✓ falla sin email → 400 { error: "Email es requerido" }        ← este era todo
✓ devuelve lista de usuarios → 200

Tests: 6 passed
```

---

## Lo que te va a enseñar este ejercicio

- **Si el spec era claro**, el agente va a implementar algo que pasa los tests sin que tengas que corregirlo
- **Si el spec era ambiguo**, el agente va a hacer algo que compila pero que no es exactamente lo que querías
- La diferencia entre los dos casos no está en el agente — está en cómo está escrito el spec

---

**Preguntas o comentarios**: franco.macri@mercadolibre.com
