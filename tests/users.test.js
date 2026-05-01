// Tests existentes — estado ANTES de implementar el spec 001
// Estos tests verifican el comportamiento actual (sin validación de email)
// Al implementar el spec 001, los tests de validación deben agregarse aquí

import request from 'supertest';
import app from '../src/app.js';

describe('GET /health', () => {
  it('devuelve 200 ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

describe('POST /users — comportamiento actual (sin validación de email)', () => {
  it('crea un usuario con name y email válidos → 201', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Juan', email: 'juan@example.com' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('Juan');
    expect(res.body.email).toBe('juan@example.com');
  });

  it('falla sin name → 400', async () => {
    const res = await request(app)
      .post('/users')
      .send({ email: 'juan@example.com' });
    expect(res.status).toBe(400);
  });

  // ⚠️  Estos tests FALLAN actualmente — son los que el spec 001 tiene que hacer pasar
  it.todo('falla con email inválido → 400 { error: "Email inválido" }');
  it.todo('falla sin email → 400 { error: "Email es requerido" }');
});

describe('GET /users', () => {
  it('devuelve lista de usuarios → 200', async () => {
    const res = await request(app).get('/users');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
