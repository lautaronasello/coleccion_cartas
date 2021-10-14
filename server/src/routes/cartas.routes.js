const express = require('express');
const router = express.Router();
const {
  getCards,
  postCards,
  getCardById,
  deleteCardById,
  updateCardById,
} = require('../controllers/cartas.controller');

router.get('/cards', getCards);

router.post('/cards', postCards);

router.get('/cards/:id', getCardById);

router.delete('/cards/:id', deleteCardById);

router.put('/cards/:id', updateCardById);

// router.update('/cards');

module.exports = router;
