const express = require('express')
const router = express.Router()
const {mostrarProductos} = require('../controllers/productosController')

router.get('/', mostrarProductos);

module.exports = router;

