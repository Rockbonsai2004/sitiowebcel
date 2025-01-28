const express = require('express');
const router = express.Router();
const perfilesController = require('../controllers/perfilesController');

router.get('/', perfilesController.getAllPerfiles);

module.exports = router;
