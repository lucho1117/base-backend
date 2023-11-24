// routes.js
const express = require('express');
const router = express.Router();
const { obtenerDatos } = require('../controllers/firma.controller');

router.get('/datos', obtenerDatos);

module.exports = router;