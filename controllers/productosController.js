const {obtenerProductos} = require ('../database/productos.json');

function mostrarProductos(req, res){
    const todos = obtenerProductos();
    res.render('index', {productos: todos});
}

module.exports = {mostrarProductos};