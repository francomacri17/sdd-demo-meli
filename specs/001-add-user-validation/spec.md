# Spec 001 — Validación de email en POST /users

## Qué y por qué

El endpoint `POST /users` actualmente acepta cualquier valor en el campo `email` — incluyendo strings vacíos, valores nulos, y formatos inválidos como `"no-es-un-email"`.

Esto genera registros con datos corruptos y errores difíciles de debuggear más adelante.

Necesitamos validar el email **antes** de crear el usuario, y devolver un error claro si el formato es inválido.

---

## Usuarios

- Cualquier cliente que consume la API `POST /users`
- El equipo que mantiene el backend (menos bugs para debuggear)

---

## User Stories

### US1 — Email inválido es rechazado
**Como** cliente de la API,
**quiero** recibir un error claro cuando envío un email inválido,
**para** poder corregirlo sin tener que adivinar qué salió mal.

**Given** que hago `POST /users` con `{ "name": "Juan", "email": "no-es-un-email" }`
**When** el servidor procesa el request
**Then** devuelve `400 Bad Request`
**And** el body es `{ "error": "Email inválido" }`
**And** no se crea ningún usuario

### US2 — Email vacío es rechazado
**Como** cliente de la API,
**quiero** que el campo email sea obligatorio,
**para** no crear usuarios sin email.

**Given** que hago `POST /users` con `{ "name": "Juan" }` (sin email)
**When** el servidor procesa el request
**Then** devuelve `400 Bad Request`
**And** el body es `{ "error": "Email es requerido" }`

### US3 — Email válido crea el usuario normalmente
**Como** cliente de la API,
**quiero** que un email válido siga funcionando igual que antes,
**para** que la validación no rompa el flujo existente.

**Given** que hago `POST /users` con `{ "name": "Juan", "email": "juan@example.com" }`
**When** el servidor procesa el request
**Then** devuelve `201 Created`
**And** el body contiene el usuario creado con el email enviado

---

## Fuera de scope

- Verificación de que el email existe realmente (eso requiere enviar un correo)
- Normalización del email (lowercase, trim) — puede ser una mejora futura
- Unicidad del email — spec separado

---

## Criterios de éxito

- `POST /users` con email inválido → 400 con mensaje claro
- `POST /users` sin email → 400 con mensaje claro
- `POST /users` con email válido → 201, comportamiento sin cambios
- Los tests pasan

---

## Notas para el agente

- La validación va en un middleware o directamente en la route — lo que sea más simple
- El regex de email puede ser básico: verificar que tiene `@` y un dominio — no necesita ser RFC 5322 compliant
- No instalar librerías de validación externas para esto
