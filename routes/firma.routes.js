// routes.js
const express = require('express');
const router = express.Router();
const { obtenerDatos, estampadoFirma } = require('../controllers/firma.controller');

router.get('/datos', obtenerDatos);
router.get('/estampadoFirma', estampadoFirma);

module.exports = router;