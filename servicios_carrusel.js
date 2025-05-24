document.addEventListener("DOMContentLoaded", function () {
const carrusel = document.querySelector(".servicios_carrusel");
const items = document.querySelectorAll(".carrusel-p");
const btnLeft = document.querySelector(".boton-left");
const btnRigth = document.querySelector(".boton-rigth");
const indicadoresContainer = document.querySelector(".indi");

let currentIndex = 0;

function crearIndicadores() {
    for (let i = 0; i < items.length; i++) {
    const btn = document.createElement("button");
    btn.addEventListener("click", () => {
        currentIndex = i;
        updateCarrusel();
    });
    indicadoresContainer.appendChild(btn);
    }
    }

function updateIndicadores() {
    const botones = indicadoresContainer.querySelectorAll("button");
    botones.forEach((btn, i) => {
    btn.classList.toggle("activo", i === currentIndex);
    });
    }

function updateCarrusel() {
    carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateIndicadores();
    }

function siguiente() {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarrusel();
    }

function anterior() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarrusel();
}

crearIndicadores();
updateCarrusel();

btnLeft.addEventListener("click", anterior);
btnRigth.addEventListener("click", siguiente);
});