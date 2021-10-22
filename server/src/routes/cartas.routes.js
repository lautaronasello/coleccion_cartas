const express = require('express');
const routerCartas = express.Router();
const {
  getCards,
  postCards,
  getCardById,
  deleteCardById,
  updateCardById,
  getCardByName,
  getTeams,
  getRarities,
  getPositions,
  getSeries,
} = require('../controllers/cartas.controller');

routerCartas.get('/cards', getCards);

routerCartas.get('/cards/:name', getCardByName);

routerCartas.post('/cards', postCards);

routerCartas.get('/cards/:id', getCardById);

routerCartas.delete('/cards/:id', deleteCardById);

routerCartas.put('/cards/:id', updateCardById);

routerCartas.get('/teams', getTeams);

routerCartas.get('/rarities', getRarities);

routerCartas.get('/positions', getPositions);

routerCartas.get('/series', getSeries);

module.exports = routerCartas;
