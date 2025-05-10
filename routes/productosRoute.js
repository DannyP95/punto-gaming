const express = require('express')
const router = express.Router()
const {productosController} = require('../controllers/productosController')

router.get('/', productosController.mostrarProductos);

router.get('/:id', productosController.editar);

module.exports = router;

