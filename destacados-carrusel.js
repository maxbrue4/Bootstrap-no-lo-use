document.addEventListener("DOMContentLoaded", function () {
    const carrusel = document.querySelector(".destacados_carrusel");
    const items = document.querySelectorAll(".carrusel-item");
    const btnIzq = document.querySelector(".boton-izquierdo");
    const btnDer = document.querySelector(".boton-derecho");
    const indicadoresContainer = document.querySelector(".indicadores");

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
        // Reiniciar todos los videos
        const videos = carrusel.querySelectorAll("video");
        videos.forEach(video => {
            video.pause();
            video.currentTime = 0;
        });

        // Mover carrusel e indicadores
        carrusel.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateIndicadores();

        // Reproducir automáticamente el video si hay uno en el item actual
        const videoActual = items[currentIndex].querySelector("video");
        if (videoActual) {
            videoActual.play();
        }
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
    btnIzq.addEventListener("click", anterior);
    btnDer.addEventListener("click", siguiente);
});