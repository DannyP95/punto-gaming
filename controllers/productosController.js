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
    },

    nuevo:(req, res) => {
        res.render('crearProducto', { productos });
    },

    crear:(req, res) =>{
       const {nombre, marca, descripcion, precio} = req.body;
       const imagen = req.file ? req.file.filename : null;
       const nuevoProduct = {
        id: productos.length + 1,
        nombre,
        marca,
        descripcion,
        precio,
        imagen
       };

       try{
        productos.push(nuevoProduct);
        fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
        res.redirect("/")
       }
       catch(err){
        console.log("Error al guardar el producto")
        console.error(err)
        res.status(500).send("Error de servidor")
       }
    },

    actualizar: (req, res) =>{
          const id = req.params.id;
          const {nombre, marca, descripcion, precio} = req.body;
        const imagen = req.file ? req.file.filename : null;

        const productoIndex = productos.findIndex(prod => prod.id == id);
        if(productoIndex !== -1){
            productos[productoIndex] = {id: Number(id), nombre, marca, descripcion, precio, imagen};
            try{
                fs.writeFileSync(productosFilePath, JSON.stringify(productos, null, " "));
                res.redirect("/")
            }
            catch(err){
            console.log("Error al editar el producto")
            console.error(err)
            res.status(500).send("Error de servidor")
            }
        } else{
            res.status(400).send("Producto no encontrado")
        }
    }


}


module.exports = { productosController };

