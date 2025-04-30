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