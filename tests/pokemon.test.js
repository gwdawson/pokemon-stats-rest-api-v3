const request = require('supertest');
const database = require('../database/connection.js');
const seed = require('../database/seed.js');
const app = require('../app/index');

beforeEach(() => seed());
afterAll(() => database.end());

describe('Testing for the GET /api/pokemon endpoint', () => {
  test('should return a json object with the keys {status, message}', async () => {
    const { body } = await request(app).get('/api/pokemon');
    expect(body).toHaveProperty('status');
    expect(body).toHaveProperty('message');
  });
  test('response.status should equal 200', async () => {
    const { body } = await request(app).get('/api/pokemon');
    expect(body.status).toBe(200);
  });
  test('response.message should equal { pokemon }', async () => {
    const { body } = await request(app).get('/api/pokemon');
    expect(body.message).toHaveProperty('pokemon');
    expect(body.message).toEqual({
      pokemon: expect.arrayContaining([
        expect.objectContaining({
          pokedex: expect.any(Number),
          name: expect.any(String),
          type: expect.any(Array),
          abilities: expect.any(Array),
          stats: expect.any(Array),
        }),
      ]),
    });
  });
});

describe('Testing for the GET /api/pokemon/:pokedex endpoint', () => {
  test('should return a json object with the keys {status, message}', async () => {
    const { body } = await request(app).get('/api/pokemon');
    expect(body).toHaveProperty('status');
    expect(body).toHaveProperty('message');
  });
  test('response.status should equal 200', async () => {
    const { body } = await request(app).get('/api/pokemon');
    expect(body.status).toBe(200);
  });
  test('response.message should equal { pokemon }', async () => {
    const { body } = await request(app).get('/api/pokemon/6');
    console.log(body.message);
    expect(body.message).toEqual({
      pokemon: expect.objectContaining({
        pokedex: 6,
        name: 'Charizard',
        type: ['Fire'],
        abilities: ['Blaze', 'Solar Power'],
        stats: ['HP 78', 'Attack 84', 'Defense 78', 'SAttack 109', 'SDefense 85', 'Speed 100', 'Total 534'],
      }),
    });
  });
});
