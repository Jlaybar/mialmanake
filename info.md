# Guía de MiAlmanake

Bienvenido/a. Aquí encontrarás una explicación clara de qué hace cada sección de la web y cómo sacarle partido a tu día a día: Retos, Gráficas y Emociones.

## Índice

- [¿Qué es MiAlmanake?](#que-es-mialmanake)
- [Diario de Emociones](#diario-de-emociones)
- [Gráficas (Resumen de Emociones)](#graficas-resumen-de-emociones)
- [Diario de Retos](#diario-de-retos)
- [Privacidad y almacenamiento](#privacidad-y-almacenamiento)
- [Consejos de uso](#consejos-de-uso)
- [Preguntas frecuentes](#preguntas-frecuentes)
- [Contacto](#contacto)

---

<a id="que-es-mialmanake"></a>
## ¿Qué es MiAlmanake?

MiAlmanake es una web ligera que te ayuda a:

- Registrar cómo te sientes y el contexto de tu día.
- Ver tu evolución emocional con gráficos simples.
- Definir retos, marcar tu progreso y construir hábitos.

Todo funciona en tu navegador sin necesidad de cuentas ni servidores.

---

<a id="diario-de-emociones"></a>
## Diario de Emociones

Registra tus emociones día a día y añade contexto para descubrir patrones.

- Emociones y colores: elige la emoción predominante del día (Alegría, Miedo, Tristeza, Amor propio, Amor, Enfado). Cada emoción tiene un color para reconocerla rápido.
- Vínculos/Contexto (áreas de vida): indica el ámbito que más influyó (Familia, Trabajo, Amigos, Salud, etc.).
- Notas: escribe una breve reflexión si lo necesitas.
- Interfaz de calendario: navega por meses para ver y editar tus registros.

### Emociones y colores (referencia)

| Emoción | Color |
|---|---|
| Miedo | <span style="display:inline-block;width:14px;height:14px;background:#7e22ce;border-radius:3px;border:1px solid rgba(0,0,0,.15);"></span> Morado |
| Amor propio | <span style="display:inline-block;width:14px;height:14px;background:#22c55e;border-radius:3px;border:1px solid rgba(0,0,0,.15);"></span> Verde |
| Tristeza | <span style="display:inline-block;width:14px;height:14px;background:#3b82f6;border-radius:3px;border:1px solid rgba(0,0,0,.15);"></span> Azul |
| Amor | <span style="display:inline-block;width:14px;height:14px;background:#f97316;border-radius:3px;border:1px solid rgba(0,0,0,.15);"></span> Naranja |
| Enfado | <span style="display:inline-block;width:14px;height:14px;background:#ef4444;border-radius:3px;border:1px solid rgba(0,0,0,.15);"></span> Rojo |
| Alegría | <span style="display:inline-block;width:14px;height:14px;background:#eab308;border-radius:3px;border:1px solid rgba(0,0,0,.15);"></span> Amarillo |

> Nota: Estos colores se usan también en las gráficas para mantener coherencia visual.

### Vínculos / Áreas de vida (con emoji)

Usa los vínculos para dar contexto a tu emoción. En la app se muestran con estos iconos:

- 👪 Familia
- 💑 Pareja
- 🧑‍🤝‍🧑 Amigos
- 💼 Trabajo
- 🎓 Estudios
- 🎉 Ocio
- ❤️ Salud
- 💰 Dinero
- 🐶 Mascotas
- 🌳 Ambiente
- 🌈 Clima
- 🗞️ Actualidad
- ✝️ Creencias
- ❓ Desconocido
- 🔥 Sexo

> Nota: Los emojis coinciden con los usados en la página de Emociones para mantener consistencia visual.

---

<a id="graficas-resumen-de-emociones"></a>
## Gráficas (Resumen de Emociones)

Visualiza tu evolución y distribución emocional en distintos periodos.

- Filtros de tiempo: puedes ver todo, el año actual, últimos 90 días o definir un rango personalizado.
- Distribución por emoción: compara cuántos días predominó cada emoción.
- Por vínculos/áreas: observa en qué contextos se concentran tus estados.
- Detalle por días: repasa rápidamente los registros dentro del rango.

Origen de datos:

- Las gráficas leen tu información del Diario de Emociones (`moodCalendar.v1` en `localStorage`).
- Si borras esos datos, las gráficas quedarán vacías.

---

<a id="diario-de-retos"></a>
## Diario de Retos

Define objetivos concretos y marca tu progreso día a día.

- Retos y colores: cada reto obtiene un color para identificarlo fácilmente.
- Calendario mensual: marca cada día como logrado o no logrado.
- Resumen visual: iconos y estilos ayudan a ver tu consistencia (✔️ / ❌).
- Edición: puedes crear, renombrar o eliminar retos cuando lo necesites.

Uso rápido:

1. Entra en `retos.html` y crea un nuevo reto (por ejemplo, “Caminar 20 min”).
2. Cada día, abre el calendario y marca si lo cumpliste.
3. Revisa tu racha y ajusta metas según tu evolución.

Datos y guardado:

- Los retos se guardan en `localStorage` bajo la clave `retos.v1`.
- Todo queda en tu navegador (mismo dispositivo/navegador).

### Tooltips y métricas de progreso

- Botones de retos: al pasar el ratón sobre cada reto, verás un tooltip con su descripción y el porcentaje de éxito calculado dentro del rango de fechas del propio reto (inicio → fin). El porcentaje es: días “✔️ Éxito” dividido entre días totales del rango, redondeado.
- Medallas por categoría: en el bloque “Tus logros” hay tres botones con el total de retos por nivel. Al pasar el ratón, cada botón muestra en un tooltip la lista de retos que pertenecen a esa categoría.
- Umbrales de clasificación:
  - 🥇 Oro: porcentaje ≥ 100%
  - 🥈 Plata: porcentaje ≥ 75% y < 100%
  - 🥉 Bronce: porcentaje ≥ 50% y < 75%
- Días fuera de rango: en el calendario, los días que no pertenecen al rango del reto muestran el tooltip “Fuera de rango”. Los días marcados enseñan “Éxito” o “Fallo”.

### Medallas (emoticonos) y funcionamiento

- 🥇 Oro: retos con desempeño perfecto en su intervalo (todos los días marcados como logrados). Útil para hábitos muy consolidados.
- 🥈 Plata: retos con alta consistencia (al menos 3 de cada 4 días cumplidos). Señala un hábito fuerte con margen de mejora.
- 🥉 Bronce: retos a medio camino (cumplimiento al menos la mitad del tiempo). Buen punto de partida para iterar objetivos.

Sugerencias prácticas
- Ajusta el rango de fechas a metas realistas (por ejemplo, 21 días) para que el porcentaje y las medallas reflejen tu progreso real.
- Si cambias la definición de un reto, considera crear uno nuevo para no mezclar métricas.

---

<a id="privacidad-y-almacenamiento"></a>
## Privacidad y almacenamiento

- Local y sin cuentas: toda la información vive en tu navegador usando `localStorage`.
- Dispositivo/navegador: los datos no se sincronizan entre dispositivos automáticamente.
- Copias de seguridad manuales: puedes exportar/guardar tus datos manualmente (ver FAQ).

---

<a id="consejos-de-uso"></a>
## Consejos de uso

- Rutina diaria: registra tu emoción principal al final del día (2–3 minutos).
- Una emoción, una idea: sé consistente al elegir la emoción predominante, aunque sientas varias.
- Vínculos como pistas: usa los vínculos (Familia, Trabajo, etc.) para detectar patrones.
- Retos pequeños: define retos simples y medibles; valen más 10 días de constancia que 2 de esfuerzo extremo.
- Revisión semanal: revisa las gráficas los domingos y escribe 3 aprendizajes.

---

<a id="preguntas-frecuentes"></a>
## Preguntas frecuentes

¿Cómo exporto mis datos?  
Abre las Herramientas de desarrollador del navegador y en la consola ejecuta:

```js
// Emociones
copy(localStorage.getItem('moodCalendar.v1'))
// Retos
copy(localStorage.getItem('retos.v1'))
```

Esto copiará el JSON al portapapeles para guardarlo como respaldo. Para restaurar, pega el JSON con `localStorage.setItem('moodCalendar.v1', '<TU_JSON>')` (y lo mismo para `retos.v1`).

¿Puedo usarlo en varios dispositivos?  
Sí, pero los datos no se sincronizan automáticamente. Puedes exportar en un dispositivo e importar en otro.

¿Necesita internet?  
No para funcionar día a día. Solo el primer acceso a la web y las hojas de estilo/CDN. Una vez cargado, puedes seguir usándolo de forma local.

¿Mis datos son privados?  
Sí. Tus datos nunca salen de tu navegador salvo que los exportes manualmente.

---

<a id="contacto"></a>
## Contacto

¿Quieres más información o tienes alguna duda? Estaremos encantados de ayudarte.

- Teléfono: +34 644 58 45 25
- Llamada directa: [Llamar ahora](tel:+34644584525)

Gracias por usar MiAlmanake. Tu bienestar y progreso son nuestra prioridad.

