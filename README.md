# sdd-demo-meli

Demo de **Spec-Driven Development** con agentes IA en GitHub.

> Usado en la charla interna de Mercado Libre — "Specs + Agentes IA en GitHub"

---

## La idea en 3 líneas

1. El dev escribe un **spec** (qué necesita existir y por qué)
2. Un **agente IA** en GitHub lee el spec e implementa el código
3. El **repo manager** revisa que la implementación sea correcta

El dev deja de ser "el que tipea código". Pasa a ser "el que define con precisión qué tiene que existir".

---

## Estructura del repo

```
.github/
  copilot-instructions.md   ← las reglas que el agente debe respetar
specs/
  001-add-user-validation/
    spec.md                 ← el feature a implementar (lo escribe el dev)
src/
  app.js                    ← código base mínimo
  routes/users.js
README.md
```

---

## Cómo funciona el flujo

```
Dev escribe spec.md
  → Abre GitHub Copilot Workspace con el spec como contexto
    → El agente implementa los cambios
      → Se abre un PR automáticamente
        → Repo manager revisa y mergea
```

---

## Las limitaciones (importantes)

- ❗ El agente falla con specs ambiguos o que tocan muchos archivos
- ❗ Specs mal escritos = código mal implementado: **garbage in, garbage out**
- ❗ El juicio técnico del equipo sigue siendo esencial — el agente no lo reemplaza
- ✅ Funciona bien en features pequeños y bien acotados

---

## Probar vos mismo

1. Cloná el repo
2. Abrí `specs/001-add-user-validation/spec.md`
3. Usá GitHub Copilot Workspace o cualquier agente (Copilot, Claude, Cursor) con el spec como prompt
4. Mirá qué genera — comparalo con lo que ya está en `src/`

---

**francomacri17** · Abril 2026
