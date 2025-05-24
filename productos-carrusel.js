document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".productos_carrusel");
    const productos = document.querySelectorAll(".caja-productos");
    const btnIzq = document.querySelector(".boton-izq");
    const btnDer = document.querySelector(".boton-der");
    const indicadoresContainer = document.querySelector(".punteado");

    const productosPorSlide = 3;
    const totalSlides = Math.ceil(productos.length / productosPorSlide);
    let currentSlide = 0;

    function crearIndicadores() {
        for (let i = 0; i < totalSlides; i++) {
            const btn = document.createElement("button");
            btn.addEventListener("click", () => {
                currentSlide = i;
                updateCarrusel();
            });
            indicadoresContainer.appendChild(btn);
        }
    }

    function updateIndicadores() {
        const botones = indicadoresContainer.querySelectorAll("button");
        botones.forEach((btn, i) => {
            btn.classList.toggle("activo", i === currentSlide);
        });
    }

    function updateCarrusel() {
        carrusel.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicadores();
    }

    function siguiente() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarrusel();
    }

    function anterior() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarrusel();
    }

    crearIndicadores();
    updateCarrusel();

    btnIzq.addEventListener("click", anterior);
    btnDer.addEventListener("click", siguiente);
});