document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Ejemplo: scroll suave para anclas internas
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', href);
    });
  });

  // Actualiza el texto del resumen de emociones en la Home
  try {
    const pResumen = document.querySelector('#caracteristicas .grid-3 article:nth-child(3) p');
    if (pResumen) {
      pResumen.textContent = 'Comprueba aqui tu evolución emocional con tablas de resumen.';
    }
  } catch {}
});
