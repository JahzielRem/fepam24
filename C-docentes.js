document.getElementById('back-link').addEventListener('click', function () {
    sessionStorage.setItem('menuVisible', 'true');
});

let currentProfileIndex = 0;
const profiles = document.querySelectorAll('.profile');
const nextProfileButton = document.getElementById('next-profile');
const prevProfileButton = document.getElementById('prev-profile');
const body = document.body;
const container = document.querySelector('.Contenedor');

const colors = [
    'bg-color-1',
    'bg-color-2',
    'bg-color-3',
];

function updateBackground(index) {
    body.className = colors[index];
    container.className = `Contenedor ${colors[index]}`;
}

// Nueva función para actualizar el fondo con efecto de fade
function updateBackgroundWithFade(index) {
    body.style.transition = 'background-color 0.5s ease-in-out';
    container.style.transition = 'background-color 0.5s ease-in-out';

    setTimeout(() => {
        body.className = colors[index];
        container.className = `Contenedor ${colors[index]}`;
    }, 100); // Pequeño retraso para que se vea la transición
}

function updateArrows() {
    if (currentProfileIndex === 0) {
        prevProfileButton.style.display = 'none';
    } else {
        prevProfileButton.style.display = 'block';
    }

    if (currentProfileIndex === profiles.length - 1) {
        nextProfileButton.style.display = 'none';
    } else {
        nextProfileButton.style.display = 'block';
    }
}

nextProfileButton.addEventListener('click', () => {
    profiles[currentProfileIndex].style.opacity = '0';
    profiles[currentProfileIndex].style.transform = 'translateX(-100%)';
    setTimeout(() => {
        profiles[currentProfileIndex].style.display = 'none';
        currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
        profiles[currentProfileIndex].style.display = 'flex';
        setTimeout(() => {
            profiles[currentProfileIndex].style.opacity = '1';
            profiles[currentProfileIndex].style.transform = 'translateX(0)';
        }, 20);
        updateArrows();
        updateBackgroundWithFade(currentProfileIndex); // Usar la nueva función
    }, 500);
});

prevProfileButton.addEventListener('click', () => {
    profiles[currentProfileIndex].style.opacity = '0';
    profiles[currentProfileIndex].style.transform = 'translateX(100%)';
    setTimeout(() => {
        profiles[currentProfileIndex].style.display = 'none';
        currentProfileIndex = (currentProfileIndex - 1 + profiles.length) % profiles.length;
        profiles[currentProfileIndex].style.display = 'flex';
        setTimeout(() => {
            profiles[currentProfileIndex].style.opacity = '1';
            profiles[currentProfileIndex].style.transform = 'translateX(0)';
        }, 20);
        updateArrows();
        updateBackgroundWithFade(currentProfileIndex); // Usar la nueva función
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    updateArrows();
    updateBackgroundWithFade(currentProfileIndex); // Usar la nueva función

     // Animación en sucesión, excluyendo el contenedor de perfiles
 const elementsToAnimate = document.querySelectorAll('.header-content, .titulo');
 elementsToAnimate.forEach((element, index) => {
     element.classList.add('animate');
     setTimeout(() => {
         element.classList.add('fade-in');
     }, index * 300); // Retraso en milisegundos entre cada elemento (0.3 segundos en este caso)
 });

 // Animación para el contenedor de perfiles
 const profileContainer = document.querySelector('.profile-container');
 profileContainer.classList.add('animate');
 setTimeout(() => {
     profileContainer.classList.add('fade-in');
 }, elementsToAnimate.length * 300); // Animar el contenedor de perfiles después de los demás elementos

 // Configuración del Intersection Observer para el footer
 const footer = document.querySelector('.footer');
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('fade-in');
             observer.unobserve(entry.target);
         }
     });
 }, { threshold: 0.1 });

 footer.classList.add('animate');
 observer.observe(footer);
});

// Funcionalidad para las ventanas modales
function setupModal(modalId, buttonId) {
    const modal = document.getElementById(modalId);
    const btn = document.getElementById(buttonId);
    const span = modal.getElementsByClassName("close-btn")[0];

    // Asegurarse de que el modal esté oculto al cargar la página
    modal.style.display = "none";

    // Evento para abrir el modal
    btn.onclick = function(event) {
        event.preventDefault(); // Prevenir comportamiento por defecto del enlace
        modal.style.display = "flex";
    }

    // Evento para cerrar el modal al hacer clic en el botón de cierre
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Evento para cerrar el modal al hacer clic fuera de él
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// Configurar modales
setupModal("contactModal", "contactBtn");
setupModal("ubicacionModal", "ubicacionBtn");

// Añadir funcionalidad para el desplazamiento suave al botón "Volver al Inicio"
document.getElementById('top').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
