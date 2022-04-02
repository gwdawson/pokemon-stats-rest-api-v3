# pokemon-api-v3

```
pokemon-api-v3 is a RESTful api created as a solo project to increase my knowledge of Express.js.
```

```
TODO
- Fix workflow run-tests (fails test, no db setup)
```

## Project Status

`in progress`

## Tools and Technologies

```
• express
• node-postgres
• jest
• supertest
```

## Setup

```sh
git clone https://github.com/gwdawson/pokemon-api-v3.git
cd pokemon-api-v3
echo 'PGDATABASE=pokemon_api_v3' > ./database/.env.development
echo 'PGDATABASE=pokemon_api_v3_test' > ./database/.env.test
npm install
npm run database:setup
npm run database:seed
npm test
```

## Usage

How does one go about using it?

## Acknowledgements

This project was inspired by [PokéAPI](https://pokeapi.co/)

## Contact

[Linkedin](https://www.linkedin.com/in/gwdawson/)
