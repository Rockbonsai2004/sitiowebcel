const express = require('express');
const router = express.Router();
const multasController = require('../controllers/multasController');

router.get('/', multasController.getAllMultas);
router.post('/pagar', multasController.pagarMulta);

module.exports = router;
