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

      // expect.arrayContaining([
      //   expect.objectContaining({ pokedex: 1, name: 'Bulbasaur' }),
      //   expect.objectContaining({ pokedex: 4, name: 'Charmander' }),
      //   expect.objectContaining({ pokedex: 7, name: 'Squirtle' }),
      // ]),
    });
  });
});
