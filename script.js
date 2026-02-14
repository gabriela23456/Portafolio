// Datos de cada proyecto: imagen, descripción, enlaces y demo para interactuar
const PROJECTS = {
  therapy: {
    title: 'CenTI-R — Sistema de Terapia Psicológica',
    description: 'Plataforma integral para gestión de citas terap éuticas con autenticación por roles, pagos integrados y notificaciones automáticas por WhatsApp. Incluye panel administrativo completo y API REST.',
    features: [
      'Autenticación multi-rol (paciente, terapeuta, administrador)',
      'CRUD completo de citas, terapeutas y pacientes',
      'Sistema de pagos (tarjeta, efectivo, transferencia, PayPal)',
      'Notificaciones automáticas por WhatsApp',
      'Panel de administración avanzado',
      'API REST completamente documentada'
    ],
    imageUrl: 'images/terapia.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Sistema-de-Terapia-Psicologica-',
    demoUrl: ''
  },
  constancias: {
    title: 'Generador de Constancias',
    description: 'Sistema automatizado para generación masiva de constancias y documentos a partir de archivos Excel. Arquitectura separada en backend y frontend con componentes modulares reutilizables.',
    features: [
      'Carga de datos desde archivos Excel',
      'Generación automática de constancias en batch',
      'Frontend y backend completamente modulares',
      'Interfaz intuitiva y responsiva',
      'Validación de datos en tiempo real',
      'Exportación de resultados'
    ],
    imageUrl: 'images/constancias.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Sistema-Generador-de-Constancias',
    demoUrl: ''
  },
  escolar: {
    title: 'Sistema Escolar',
    description: 'Aplicación Java profesional desarrollada con Gradle para gestión integral de procesos educativos. Incluye arquitectura modular, patrones de diseño y mejores prácticas de desarrollo.',
    features: [
      'Backend robusto desarrollado en Java',
      'Sistema de build con Gradle',
      'Arquitectura modular y escalable',
      'Patrones de diseño implementados',
      'Código limpio y mantenible',
      'Documentación técnica completa'
    ],
    imageUrl: 'images/escolar.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Sistema-Escolar',
    demoUrl: ''
  },
  sanluis: {
    title: 'Cliente F San Luis — Ferretería',
    description: 'Sistema CRUD empresarial para administración completa de una ferretería. Desarrollado con Spring Framework, incluye autenticación segura y base de datos relacional.',
    features: [
      'CRUD completo para gestión del negocio',
      'Spring Security para autenticación y autorización',
      'Spring JPA para persistencia de datos',
      'Integración con MySQL',
      'Interfaz administrativo intuitivo',
      'Validaciones y manejo de errores robusto'
    ],
    imageUrl: 'images/sanluis.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Cliente-F-San-Luis',
    demoUrl: ''
  }
};

// Abrir modal y mostrar imagen o iframe del sistema (para interactuar)
function openProjectModal(projectId) {
  const data = PROJECTS[projectId];
  if (!data) return;

  const modal = document.getElementById('projectModal');
  document.getElementById('projectModalLabel').textContent = data.title;
  document.getElementById('projectModalDesc').textContent = data.description;

  const featuresEl = document.getElementById('projectModalFeatures');
  featuresEl.innerHTML = data.features.map(f => `
    <div class="feature">
      <i class="fas fa-check-circle"></i>
      <span>${f}</span>
    </div>
  `).join('');

  const repoBtn = document.getElementById('projectModalRepo');
  repoBtn.href = data.repoUrl;

  const imageEl = document.getElementById('projectModalImage');
  const iframeEl = document.getElementById('projectModalIframe');
  const demoBtn = document.getElementById('projectModalDemo');

  // Ocultar todo primero
  imageEl.classList.add('d-none');
  imageEl.removeAttribute('src');
  iframeEl.classList.add('d-none');
  iframeEl.removeAttribute('src');
  demoBtn.classList.add('d-none');

  if (data.demoUrl) {
    // Hay demo: mostrar iframe para que puedan interactuar con el sistema
    iframeEl.src = data.demoUrl;
    iframeEl.classList.remove('d-none');
    demoBtn.href = data.demoUrl;
    demoBtn.classList.remove('d-none');
  } else {
    // Sin demo: mostrar imagen del proyecto (primero local, si falla la de respaldo)
    imageEl.src = data.imageUrl;
    imageEl.alt = data.title;
    imageEl.onerror = function () { 
      this.onerror = null; 
      this.src = data.fallbackImageUrl || ''; 
    };
    imageEl.classList.remove('d-none');
  }

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

// Al cerrar el modal, vaciar el iframe para dejar de cargar la página
document.getElementById('projectModal').addEventListener('hidden.bs.modal', function () {
  document.getElementById('projectModalIframe').removeAttribute('src');
});

// Event listeners para tarjetas de proyectos
document.querySelectorAll('.project-card-interactive').forEach(card => {
  card.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    const id = this.getAttribute('data-project');
    if (id) openProjectModal(id);
  });
  card.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const id = this.getAttribute('data-project');
      if (id) openProjectModal(id);
    }
  });
});

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Efecto de navbar al hacer scroll
const navbar = document.querySelector('.navbar-custom');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Animación al hacer scroll - Intersection Observer
const observerOptions = { 
  threshold: 0.1, 
  rootMargin: '0px 0px -60px 0px' 
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observar elementos animados
document.querySelectorAll('.section, .hero, .project-card, .skill-category, .contact-card').forEach(el => {
  el.classList.add('section-animate');
  observer.observe(el);
});

// Suavizar scroll al hacer clic en botones CTA
document.addEventListener('DOMContentLoaded', function() {
  // Animación adicional: cambiar color de enlaces activos en navbar
  const links = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
});
