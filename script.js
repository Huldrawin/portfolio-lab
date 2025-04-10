// Efecto de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Cerrar el menú móvil después de hacer clic
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

// Menú móvil
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('active');
    navToggle.textContent = isExpanded ? '☰' : '✖'; // Cambia el ícono
});

// Año dinámico en el footer
document.querySelector('footer p:first-child').textContent = `© ${new Date().getFullYear()} Evelyn Ayala. Hecho con ❤️ por mí.`;