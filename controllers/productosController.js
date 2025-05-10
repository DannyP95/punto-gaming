const productos = require('../database/productos.json');

function mostrarProductos(req, res) {
    res.render('productos', { productos });
}

module.exports = { mostrarProductos };

