/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');
const { v4: uuidv4 } = require('uuid');

const agent = session(app);
const dog = {
  ID: uuidv4(),
  Nombre: 'Pug',
  Altura: '98-69',
  Peso: '50-80',
  Anos_de_vida: 'demaciados',
  Imagen: 'https://reygif.com/media/7/deadpool-no-esta-tan-impresionado-92105.gif',
  razaId: '1'

};

describe('routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs/all', () => {
    it('should get 200', () =>
      agent.get('/dogs/all').expect(200)
    );
  });
  describe('GET /razas/all', () => {
    it('should get 200', () =>
      agent.get('/razas/all').expect(200)
    );
  });
  describe('GET /temperaments/all', () => {
    it('should get 200', () =>
      agent.get('/temperaments/all').expect(200)
    );
  });
});
