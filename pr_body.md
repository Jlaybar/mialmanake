## Resumen

- Añade “Mapa de TUS Emociones” (treemap) y otro treemap por Áreas de Vida con filtros de rango.
- KPIs ampliados y legibles (negro, tamaños mayores): Registros, Desde, Hasta, Emociones presentes.
- Navegación y estilos coherentes entre páginas; hovers y negritas en cabecera.
- Fondos: graficas con imagen fija gris; emociones con fondo dinámico por color (opcional con imágenes).

## Cambios Clave

- graficas.html
  - Dos treemaps (Emociones y Áreas de Vida) con Top 10/Todos y paletas (Fríos/Vivos/Pastel).
  - Filtros: Todo, Este año, Últimos 90 días, Personalizado (activo en blanco).
  - KPIs más grandes y en negro.
  - Fondo fijo `assets/images/fondo_gris.png`.
  - Cabecera: enlaces en negrita y hover amarillo.

- emociones.html
  - Fondo dinámico por color: intenta `assets/images/fondo_<color>.png` (verde, rojo, azul, naranja, morado, amarillo). Si no existe, mantiene el fondo actual.
  - Hover dinámico en cabecera según el color del mes; enlaces en negrita.

- index.html
  - Fondo de pantalla `assets/images/origami_01.png`.
  - Tarjetas con degradado azul (#40a9e8 → #007fcc).
  - Botones “Entrar” en amarillo (hover naranja, texto blanco); “Contacto” azul (hover naranja oscuro).
  - Menú en negrita; hover a #1c007a/amarillo donde aplica.

## Detalles Técnicos

- Datos desde localStorage `moodCalendar.v1`.
- Treemap con squarify simplificado (responsive), etiquetas por emoción/área y leyendas con conteos.
- Mantiene dependencias CDN actuales (Tailwind/React/ReactDOM/Babel); para uso offline conviene empaquetar local.

## Cómo Probar

1. Abrir `graficas.html` y probar filtros (Todo, Este año, Últimos 90 días, Personalizado).
2. Verificar ambos treemaps y las leyendas; pasar a Top 10/Todos y cambiar paletas.
3. En `emociones.html`, crear/editar datos para el mes y comprobar que:
   - Cambian los treemaps.
   - El hover de cabecera se colorea dinámicamente.
   - Si existen las imágenes `fondo_<color>.png`, se aplican como fondo.

## Capturas (opcional)

> Añadir capturas de graficas.html y emociones.html si se desea.

## Checklist

- [ ] Revisión visual en móvil y escritorio.
- [ ] Validar contraste/legibilidad con todos los fondos/hover.
- [ ] (Opcional) Sustituir CDNs por assets locales para uso offline.

## Meta

- Rama: `graficas` → `main`
- Archivos principales: `graficas.html`, `emociones.html`, `index.html`, `assets/images/*`

