const express = require('express');
const router = express.Router();

const superHeroController = require('../controllers/superheroController');

router.get('/', superHeroController.getAllSuperhero);

router.get('/:id', superHeroController.getSuperheroById);

module.exports = router;