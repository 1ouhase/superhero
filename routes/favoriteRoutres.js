const express = require('express');
const router = express.Router();

const favoriteController = require('../controllers/favoriteController');
const validation = require('')

router.post('/', validation, favoriteController.createFavorite);

router.get('/', favoriteController.getAllFavorites);

router.delete('/:id', favoriteController.deleteFavorite);

module.exports = router