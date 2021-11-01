const express = require('express');
const routerCartas = express.Router();
const {
  getCards,
  postCards,
  getCardById,
  deleteCardById,
  updateCardById,
  getCardByName,
  getAllTeams,
  getRarities,
  getPositions,
  getSeries,
  getCardByIdNumber,
} = require('../controllers/cartas.controller');

routerCartas.get('/cards', getCards);

routerCartas.get('/cards/:name', getCardByName);

routerCartas.post('/cards', postCards);

routerCartas.get('/:id', getCardByIdNumber);

routerCartas.delete('/cards/:id', deleteCardById);

routerCartas.put('/cards/:id', updateCardById);

routerCartas.get('/teams/all', getAllTeams);

routerCartas.get('/rarities/all', getRarities);

routerCartas.get('/positions/all', getPositions);

routerCartas.get('/series/all', getSeries);

module.exports = routerCartas;
