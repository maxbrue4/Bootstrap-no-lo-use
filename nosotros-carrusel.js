document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".nosotros_carrusel");
    const items = document.querySelectorAll(".carrusel-chicos");
    const btnZur = document.querySelector(".boton-zurdo");
    const btnDie = document.querySelector(".boton-diestro");
    const indicadoresContainer = document.querySelector(".punteo");

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

        // Mover carrusel e indicadores
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

    // Activar en todos los tamaños, incluyendo responsive
    btnZur.addEventListener("click", anterior);
    btnDie.addEventListener("click", siguiente);
});