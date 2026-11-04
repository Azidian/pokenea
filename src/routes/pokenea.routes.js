const express = require('express');
const router = express.Router();
const pokeneaController = require('../controllers/pokenea.controller');

router.get('/api/pokenea/:id', pokeneaController.getPokeneaJson);
router.get('/api/pokenea', pokeneaController.getPokeneaJson);
router.get('/pokenea/json/:id', pokeneaController.getPokeneaJson);
router.get('/pokenea/json', pokeneaController.getPokeneaJson);

router.get('/pokenea', pokeneaController.renderPokeneaView);
router.get('/pokenea/view', pokeneaController.renderPokeneaView);

router.get('/', pokeneaController.renderPokeneaView);

module.exports = router;
