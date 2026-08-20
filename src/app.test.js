const request = require('supertest');
const app = require('./app');

describe('Pruebas Unitarias de la Aplicación Web', () => {
  it('GET / debe responder con HTML status 200 y mensaje Hola Mundo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Hola Mundo desde DevOps CI/CD!');
  });

  it('GET / con Accept: application/json debe responder con JSON', async () => {
    const res = await request(app).get('/').set('Accept', 'application/json');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hola Mundo desde DevOps CI/CD!');
    expect(res.body).toHaveProperty('status', 'success');
  });

  it('GET /health debe responder con status 200 y status UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
    expect(res.body).toHaveProperty('timestamp');
  });
});
