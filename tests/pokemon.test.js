const request = require('supertest');
const database = require('../database/connection.js');
const seed = require('../database/seed.js');
const app = require('../index.js');

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
        { pokemon_id: 1, pokemon_name: 'Bulbasaur' },
        { pokemon_id: 4, pokemon_name: 'Charmander' },
        { pokemon_id: 7, pokemon_name: 'Squirtle' },
      ]),
    });
  });
});
