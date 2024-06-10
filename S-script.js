document.addEventListener("DOMContentLoaded", function () {
    // Función para manejar la apertura y cierre de modales
    function setupModal(modalId, buttonId) {
        const modal = document.getElementById(modalId);
        const btn = document.getElementById(buttonId);
        const span = modal?.getElementsByClassName("close-btn")[0];

        // Asegurarse de que el modal esté oculto al cargar la página
        if (modal) {
            modal.style.display = "none";
        }

        // Evento para abrir el modal
        if (btn) {
            btn.onclick = function(event) {
                event.preventDefault(); // Prevenir comportamiento por defecto del enlace
                modal.style.display = "flex";
            }
        }

        // Evento para cerrar el modal al hacer clic en el botón de cierre
        if (span) {
            span.onclick = function() {
                modal.style.display = "none";
                visionMisionSection?.classList.add('visible-section');
            }
        }

        // Evento para cerrar el modal al hacer clic fuera de él
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
                visionMisionSection?.classList.add('visible-section');
            }
        }
    }

    // Configurar modales
    setupModal("contactModal", "contactBtn");
    setupModal("ubicacionModal", "ubicacionBtn");

    // Otros códigos existentes
    const galeria = document.getElementById("galeria01");
    const imagenes = document.querySelectorAll("#galeria01 img");
    const logo = document.querySelector('.logo'); // Referencia al logo
    const arrowH2 = document.getElementById('arrow-h2'); // Referencia a la flecha del h2
    const arrowParagraph = document.getElementById('arrow-paragraph'); // Referencia a la flecha del párrafo
    const arrowButton = document.getElementById('arrow-button'); // Referencia a la flecha del botón
    const highlight = document.querySelector('.highlight'); // Referencia al texto "Plantel No. 14"
    const h2 = document.querySelector('.hero h2'); // Referencia al h2
    const paragraph = document.querySelector('.hero p'); // Referencia al párrafo
    const ctaButton = document.querySelector('.cta-1-button'); // Referencia al botón "Conócenos"
    const arrowsLogo = document.querySelectorAll('#arrows-logo-top, #arrows-logo-bottom, #arrows-logo-left, #arrows-logo-right'); // Referencia a las flechas del logo
    const subtitulo = document.querySelector('.subtitulo'); // Referencia al h2 de la galería
    const menu = document.querySelector('nav.menu'); // Referencia al menú
    const visionMisionSection = document.getElementById('VisiónMisión'); // Referencia a la sección Visión-Misión
    const clockContainer = document.querySelector('.clock-container'); // Referencia al contenedor del reloj
    const leftButton = document.getElementById('leftButton'); // Referencia al botón izquierdo de Visión-Misión
    const rightButton = document.getElementById('rightButton'); // Referencia al botón derecho de Visión-Misión
    const contentContainer = document.querySelector('.content-container');
    const arrowCTA = document.getElementById('arrow-CTA');
    const scrollButton = document.getElementById('scrollButton');
    const ctaSection = document.getElementById('cta');
    let currentIndex = 0;

    // Restaurar el estado del menú si se regresa desde cualquier enlace externo o interno
    if (sessionStorage.getItem('menuVisible') === 'true') {
        menu.classList.remove('menu-hidden');
        menu.classList.add('menu-visible');
        sessionStorage.removeItem('menuVisible');
    }

    // Mostrar todos los elementos si el estado indica que deben ser visibles
    if (sessionStorage.getItem('showAllElements') === 'true') {
        document.querySelectorAll('.highlight, .hero h2, .hero p, .cta-1-button, .subtitulo, #galeria01, #arrow-h2, #arrow-paragraph, #arrow-button, .clock-container, .Visión-Misión, .cta-section').forEach(element => {
            element.classList.add('animate', 'visible', 'visible-section');
        });
        sessionStorage.removeItem('showAllElements');
    }

    // Verifica que los elementos existen antes de agregar eventos
    if (imagenes.length > 0) {
        imagenes.forEach(imagen => {
            imagen.addEventListener("mouseenter", function () {
                ampliarImagen(imagen);
            });
        });
    }

    if (galeria) {
        galeria.addEventListener("mouseleave", function () {
            const imagenAmpliada = document.querySelector("#galeria01 img.ampliada");
            if (imagenAmpliada && imagenAmpliada !== imagenes[3]) {
                ampliarImagen(imagenes[3]);
            }
        });

        
    // Función para ampliar la imagen cuando se le pasa el cursor
    function ampliarImagen(imagen) {
        // Eliminar clase "ampliada" de todas las imágenes
        imagenes.forEach(img => img.classList.remove("ampliada"));
        // Añadir clase "ampliada" a la imagen actual si no la tiene
        if (!imagen.classList.contains("ampliada")) {
            imagen.classList.add("ampliada");
        }
    }

    }

    if (arrowsLogo.length > 0) {
        arrowsLogo.forEach(arrow => arrow.classList.add('visible'));
    }

    if (logo) {
        logo.addEventListener('mouseenter', function () {
            setTimeout(() => {
                arrowH2?.classList.add('visible');
                h2?.classList.add('animate');
            }, 3000); // Retraso de 3 segundos

            setTimeout(() => {
                highlight?.classList.add('animate');
            }, 4000); // Retraso de 4 segundos

            setTimeout(() => {
                arrowParagraph?.classList.add('visible');
                paragraph?.classList.add('animate');
            }, 7000); // Retraso de 7 segundos

            setTimeout(() => {
                arrowButton?.classList.add('visible');
                ctaButton?.classList.add('animate');
            }, 8000); // Retraso de 8 segundos
        });

        logo.addEventListener('mouseenter', function () {
            setTimeout(() => {
                menu?.classList.remove('menu-hidden');
                menu?.classList.add('menu-visible');
            }, 100); // Retraso de 0.1 segundos
        });

        logo.addEventListener('mouseenter', function () {
            setTimeout(() => {
                clockContainer?.classList.add('visible'); // Mostrar el reloj con la misma animación
            }, 2000); // Ajusta el retraso según sea necesario
        });
    }

    // Evento para mostrar el h2 y la galería con retraso al hacer clic en el botón izquierdo
    if (leftButton) {
        leftButton.addEventListener('click', function () {
            setTimeout(() => {
                subtitulo?.classList.add('visible'); // Hacer visible el h2
            }, 100); // Retraso de 0.1 segundos después del subtítulo
            setTimeout(() => { // Hacer visible la galería 1 segundo después del subtítulo
                galeria?.classList.add('animate');
            }, 700); // Retraso de 0.7 segundos para el subtítulo
        });
    }

    // Configurar botones de navegación en Visión-Misión
    if (rightButton && leftButton && contentContainer) {
        rightButton.addEventListener('click', function () {
            const totalItems = contentContainer.children.length;
            currentIndex = (currentIndex + 1) % totalItems;
            contentContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateButtons();
        });

        leftButton.addEventListener('click', function () {
            const totalItems = contentContainer.children.length;
            currentIndex = (currentIndex - 1 + totalItems) % totalItems;
            contentContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateButtons();
        });

        // Evento para actualizar la visibilidad de los botones al mover el mouse sobre el contenedor
        contentContainer.addEventListener('mouseenter', function () {
            leftButton.style.opacity = '1';
        });

        contentContainer.addEventListener('mouseleave', function () {
            leftButton.style.opacity = '0';
        });

        // Asegurar que los botones no desaparezcan cuando el cursor esté sobre ellos
        rightButton.addEventListener('mouseenter', function () {
            rightButton.style.opacity = '1';
            leftButton.style.opacity = '1';
        });

        rightButton.addEventListener('mouseleave', function () {
            rightButton.style.opacity = '1';
            leftButton.style.opacity = '1';
        });

        leftButton.addEventListener('mouseenter', function () {
            rightButton.style.opacity = '1';
            leftButton.style.opacity = '1';
        });

        leftButton.addEventListener('mouseleave', function () {
            rightButton.style.opacity = '1';
            leftButton.style.opacity = '1';
        });

        function updateButtons() {
            if (currentIndex === 0) {
                leftButton.style.display = 'none';
                rightButton.style.display = 'block';
                rightButton.style.opacity = '1';
            } else {
                leftButton.style.display = 'block';
                rightButton.style.display = 'none';
            }
        }

        // Estado inicial
        leftButton.style.display = 'none';
        rightButton.style.display = 'block';
        rightButton.style.opacity = '1'; // Cambiado a 1 para que sea visible por defecto
        leftButton.style.opacity = '0';
    }

    // Funcionalidades adicionales para la sección de Visión y Misión

    // Verifica si el elemento está en la vista
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Evento para mostrar la sección CTA al hacer scroll
    window.addEventListener('scroll', function() {
        if (ctaSection && isInViewport(ctaSection)) {
            ctaSection.classList.add('visible');
        }
    });

    // Función para actualizar el reloj
    function updateClock() {
        const clockElement = document.getElementById('clock');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }

    // Actualizar el reloj cada segundo
    setInterval(updateClock, 1000);
    updateClock(); // Inicializa el reloj inmediatamente

    // Añadir evento para mostrar la flecha al hacer scroll
    if (arrowCTA) {
        window.addEventListener('scroll', function () {
            if (isInViewport(arrowCTA)) {
                arrowCTA.classList.add('visible');
            } else {
                arrowCTA.classList.remove('visible');
            }
        });
    }

    // Mostrar el botón de scroll cuando se carga la página y configurar el desplazamiento suave
    if (scrollButton) {
        setTimeout(() => {
            scrollButton.classList.add('visible');
        }, 1000); // Ajusta el tiempo de retraso según sea necesario

        // Evento para desplazar suavemente a la sección CTA al hacer clic en el botón
        scrollButton.addEventListener('click', function () {
            if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
