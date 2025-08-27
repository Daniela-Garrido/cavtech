

// Lista de títulos a mostrar
const titulos = [
    "INSTALACIONES DE CONFIENZA EN ALGARROBO",
    "SERVICIOS PROFESIONALES CERTIFICADOS",
    "EXPERIENCIA Y GARANTÍA EN TODOS NUESTROS TRABAJOS",
    "CALIDAD Y COMPROMISO CON EL CLIENTE",
    "SOLUCIONES INTEGRALES PARA SU HOGAR"
];

let indiceActual = 0;
const elemento = document.getElementById('titulo1'); // Asegúrate de que coincida con tu HTML

// Verificar que el elemento existe
if (elemento) {
    // Función para cambiar el título
    function cambiarTitulo() {
        // Aplicar efecto de desvanecimiento
        elemento.style.opacity = 0;
        
        setTimeout(() => {
            // Cambiar el texto después de que el título se haya desvanecido
            indiceActual = (indiceActual + 1) % titulos.length;
            elemento.textContent = titulos[indiceActual];
            
            // Aplicar efecto de aparición
            elemento.style.opacity = 1;
        }, 500);
    }

    // Añadir transición CSS para suavizar el cambio
    elemento.style.transition = "opacity 0.5s ease-in-out";
    
    // Iniciar el cambio automático cada 3 segundos
    setInterval(cambiarTitulo, 2500);
} else {
    console.error("No se encontró el elemento con ID 'titulo1'");
}



// animacion de los contadores 
function animateCountersOnScroll() {
    const counters = document.querySelectorAll('.row.mt-5 h2');
    let animated = false;
    
    function checkScroll() {
        const statsSection = document.querySelector('.row.mt-5');
        if (!statsSection || animated) return;
        
        const rect = statsSection.getBoundingClientRect();
        const isVisible = (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) && 
            rect.bottom >= 0
        );
        
        if (isVisible) {
            animated = true;
            animateCounters();
            window.removeEventListener('scroll', checkScroll);
        }
    }
    
    // animateCounters
    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            let current = 0;
            const duration = 3000;
            const frameRate = 30;
            const totalFrames = Math.floor(duration / (1000 / frameRate));
            const increment = target / totalFrames;
            
            counter.textContent = '0';
            
            const updateCounter = () => {
                current += increment;
                
                if (current >= target) {
                    counter.textContent = target + '+';
                } else {
                    counter.textContent = Math.floor(current) + '+';
                    setTimeout(updateCounter, 1000 / frameRate);
                }
            };
            
            setTimeout(updateCounter, 1000 / frameRate);
        });
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Comprobar al cargar la página
}

document.addEventListener('DOMContentLoaded', animateCountersOnScroll);