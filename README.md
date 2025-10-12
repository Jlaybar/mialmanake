# MiAlmanake — Estructura inicial web

Esta es una base mínima para comenzar una página web estática.

## Estructura

- `index.html`: página principal con cabecera, secciones y pie de página.
- `css/styles.css`: estilos base, variables y layout responsivo.
- `js/main.js`: utilidades JS (año dinámico y scroll suave).
- `assets/images/`: carpeta para imágenes (con `.gitkeep`).
- `.gitignore`: exclusiones comunes.

## Uso

- Abrir `index.html` en tu navegador.
- Opcional: levantar un servidor local.
  - Python 3: `python -m http.server 5173` y abrir `http://localhost:5173`.
  - Node (si tienes npx): `npx serve -l 5173`.

## Siguientes pasos sugeridos

- Agregar favicon e imágenes reales en `assets/images/`.
- Personalizar colores/branding en `css/styles.css`.
- Crear más secciones o páginas según tus necesidades.
- Configurar un workflow de despliegue (GitHub Pages, Vercel, Netlify).

