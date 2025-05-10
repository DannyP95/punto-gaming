const express = require('express'); 
const app = express();
const path = require('path');

// const indexRuta = require('./routes/indexRoute');

app.set('view engine','ejs');//(Le decimos que app se va a setear con EJS, osea usar este motor de plantillas)
app.set('views', path.join(__dirname,'views')); // (Acá van a estar todas las vistas de mis páginas)

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})
