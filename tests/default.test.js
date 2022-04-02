const request = require('supertest');
const app = require('../index.js');

describe('Testing for the GET /api endpoint', () => {
  test('should return a json object with the keys {status, message, endpoints}', async () => {
    const { body } = await request(app).get('/api');
    expect(body).toHaveProperty('status');
    expect(body).toHaveProperty('message');
    expect(body).toHaveProperty('endpoints');
  });
  test('response.status should equal 200', async () => {
    const { body } = await request(app).get('/api');
    expect(body.status).toBe(200);
  });
  test('response.message should equal "Welcome to the pokemon-api-v3"', async () => {
    const { body } = await request(app).get('/api');
    expect(body.message).toBe('Welcome to the pokemon-api-v3');
  });
  test('response.endpoints should equal []', async () => {
    const { body } = await request(app).get('/api');
    expect(body.endpoints).toEqual(['GET /api/pokemon']);
  });
});

describe('Testing for the ALL /* endpoint', () => {
  test('should return a json object with the keys {status, message, default}', async () => {
    const { body } = await request(app).get('/invalid');
    expect(body).toHaveProperty('status');
    expect(body).toHaveProperty('message');
    expect(body).toHaveProperty('default');
  });
  test('response.status should equal 440', async () => {
    const { body } = await request(app).get('/invalid');
    expect(body.status).toBe(404);
  });
  test('response.message should equal "Not Found"', async () => {
    const { body } = await request(app).get('/invalid');
    expect(body.message).toBe('Not Found');
  });
  test('response.endpoints should equal "/api"', async () => {
    const { body } = await request(app).get('/invalid');
    expect(body.default).toBe('/api');
  });
});
