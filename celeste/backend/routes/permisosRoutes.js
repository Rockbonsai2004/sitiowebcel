const express = require('express');
const router = express.Router();
const permisosController = require('../controllers/permisosController');

router.post('/', permisosController.registrarPermiso);

module.exports = router;
