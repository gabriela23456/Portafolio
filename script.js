// Datos de cada proyecto: imagen, descripción, enlaces y demo para interactuar
const PROJECTS = {
  therapy: {
    title: 'CenTI-R — Sistema de Terapia Psicológica',
    description: 'Sistema web para la gestión de citas de terapia psicológica. Incluye login y registro de pacientes, agendamiento y cancelación de citas, panel de administración y API REST. Desarrollado con PHP (backend) y Astro (frontend), base de datos SQLite o MySQL y diseño responsivo con identidad CenTI-R.',
    features: [
      'Autenticación y roles (paciente, terapeuta, admin)',
      'CRUD de citas y listado de terapeutas',
      'Pagos (tarjeta, efectivo, transferencia, PayPal)',
      'Recordatorios por WhatsApp (Twilio)'
    ],
    imageUrl: 'images/terapia.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Sistema-de-Terapia-Psicologica-',
    demoUrl: ''
  },
  constancias: {
    title: 'Generador de Constancias',
    description: 'Sistema que genera constancias de forma masiva mediante la carga de archivos Excel. Arquitectura separada en backend y frontend (TypeScript, HTML, SCSS). Automatiza la emisión de documentos y reduce tiempos de entrega.',
    features: [
      'Carga de datos desde Excel',
      'Generación de constancias automática',
      'Frontend y backend modulares (promette-front / promette-back)'
    ],
    imageUrl: 'images/constancias.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Sistema-Generador-de-Constancias',
    demoUrl: ''
  },
  escolar: {
    title: 'Sistema Escolar',
    description: 'Aplicación desarrollada en Java con Gradle para la gestión de procesos en el ámbito educativo. Proyecto con arquitectura modular y buenas prácticas de desarrollo.',
    features: [
      'Backend en Java',
      'Estructura con Gradle',
      'Código organizado y mantenible'
    ],
    imageUrl: 'images/escolar.jpg',
    fallbackImageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
    repoUrl: 'https://github.com/gabriela23456/Sistema-Escolar',
    demoUrl: ''
  },
  sanluis: {
    title: 'Cliente F San Luis — Ferretería',
    description: 'Sistema gestor con operaciones CRUD para la administración de una ferretería. Desarrollado con Java Spring: Spring JPA, Spring Security y conexión a MySQL.',
    features: [
      'CRUD completo para gestión del negocio',
      'Spring Security para autenticación',
      'Spring JPA y driver MySQL'
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
  featuresEl.innerHTML = data.features.map(f => `<li>${f}</li>`).join('');

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
    imageEl.onerror = function () { this.onerror = null; this.src = data.fallbackImageUrl || ''; };
    imageEl.classList.remove('d-none');
  }

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

// Al cerrar el modal, vaciar el iframe para dejar de cargar la página
document.getElementById('projectModal').addEventListener('hidden.bs.modal', function () {
  document.getElementById('projectModalIframe').removeAttribute('src');
});

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

// Animación al hacer scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.section, .hero, .project-card').forEach(el => {
  el.classList.add('section-animate');
  observer.observe(el);
});
