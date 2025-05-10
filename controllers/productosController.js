const fs = require('fs');
const path = require('path');


const productosFilePath = path.join(__dirname, '../database/productos.json');
const productos = JSON.parse(fs.readFileSync(productosFilePath, 'utf-8'));

const productosController = {

    mostrarProductos: (req, res) => {
        res.render('productos', { productos });
    },
    
    editar: (req, res) => {
        const id = req.params.id;
        const producto = productos.find(prod => prod.id == id)
        res.render('editarProducto', {producto})
        console.log(producto);
    }
}


module.exports = { productosController };

