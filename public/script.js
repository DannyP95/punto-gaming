// const navBurguer = document.getElementById("abrirMenu");
// const menuNav = document.getElementById("menuNav");

// navBurguer.addEventListener("click", function() {
//     menuNav.classList.toggle("mostrar-menu");
// });

const navBurguer = document.getElementById("abrirMenu");
const menuNav = document.getElementById("menuNav");
const flecha = document.getElementById("flechaMenu");

navBurguer.addEventListener("click", function() {
    if (menuNav.classList.contains("mostrar-menu")) {
        menuNav.classList.remove("mostrar-menu");
        flecha.classList.remove("flecha-menu");
    } else {
        menuNav.classList.add("mostrar-menu");
        flecha.classList.add("flecha-menu")
    }
});

//IMAGEN DE CREAR NUEVO PRODUCTO:
// const imagenPrevia = document.getElementById('imagenPreviaCrear');
// if (imagenPrevia) {
//     imagenPrevia = req.body.imagen;
    
// }

const inputImagen = document.getElementById('imagen');
const contenedorPrevia = document.getElementById('imagenPreviaCrear');

inputImagen.addEventListener('change', function () {
    const archivo = this.files[0]; // obtiene el primer archivo seleccionado

    if (archivo) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            contenedorPrevia.innerHTML = `<img src="${reader.result}" class="imagen-previa-visualizada" alt="Vista previa" style="max-width: 100%; max-height: 200px;">`;
        });

        reader.readAsDataURL(archivo); // convierte el archivo en base64
    } else {
        contenedorPrevia.innerHTML = ''; // limpia la vista previa si no hay archivo
    }
});


// FUNCION DEL TEXTAREA DEL CREAR PRODUCTO

const textareaCrear = document.getElementById('descripcion');
textareaCrear.addEventListener('input', e => {
    textareaCrear.style.height = '24px';
    textareaCrear.style.height = textareaCrear.scrollHeight + 'px';
    console.log(textareaCrear.scrollHeight);    
})