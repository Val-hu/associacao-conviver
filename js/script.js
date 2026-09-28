import { setupVolunteerForm } from './form.js';
import { homeTemplate, volunteerTemplate } from './templates.js';

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const appContent = document.querySelector('#app-content');
let currentView = '';
let carouselTimer;

function renderView(hash = window.location.hash) {
    const view = hash === '#voluntariado' ? 'volunteer' : 'home';

    if (view !== currentView) {
        appContent.innerHTML = view === 'volunteer'
            ? volunteerTemplate()
            : homeTemplate();
        document.body.classList.toggle('pagina-voluntariado', view === 'volunteer');
        currentView = view;

        if (view === 'volunteer') {
            setupVolunteerForm(appContent);
            document.title = 'Voluntarie-se | Associação Conviver';
        } else {
            document.title = 'Associação Conviver | Acolher e desenvolver';
            setupCarousel();
        }
    }

    if (hash === '#inicio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (hash && hash !== '#voluntariado') {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
            requestAnimationFrame(() => target.scrollIntoView({ behavior: 'smooth' }));
        }
    }
}

function setupCarousel() {
    const images = document.querySelectorAll('.car-img img');
    let currentImage = 0;

    clearInterval(carouselTimer);
    if (images.length === 0) {
        return;
    }

    images[currentImage].classList.add('active');
    carouselTimer = setInterval(() => {
        images[currentImage].classList.remove('active');
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].classList.add('active');
    }, 3000);
}

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const menuAberto = navLinks.classList.toggle('is-open');
        menuToggle.classList.toggle('is-open', menuAberto);
        menuToggle.setAttribute('aria-expanded', menuAberto);
        menuToggle.setAttribute('aria-label', menuAberto ? 'Fechar menu' : 'Abrir menu');
    });
}

if (dropdownToggle) {
    dropdownToggle.addEventListener('click', () => {
        const dropdown = dropdownToggle.parentElement;
        const dropdownAberto = dropdown.classList.toggle('is-open');
        dropdownToggle.setAttribute('aria-expanded', dropdownAberto);
    });
}

document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || !appContent) {
        return;
    }

    event.preventDefault();
    const destination = link.getAttribute('href');
    if (window.location.hash !== destination) {
        history.pushState(null, '', destination);
    }

    if (navLinks?.classList.contains('is-open')) {
        navLinks.classList.remove('is-open');
        menuToggle?.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        menuToggle?.setAttribute('aria-label', 'Abrir menu');
    }

    renderView(destination);
});

window.addEventListener('popstate', () => renderView());
window.addEventListener('hashchange', () => renderView());
renderView();