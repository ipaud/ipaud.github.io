---
title: MATERIAL
summary: Instrumento de escritorio para hacer imagen en movimiento experimental a partir de vídeo, audio y cámara.
year: 2026
status: en-curso
order: -4
tags: [App, Diseño]
tools: [Electron, React, Three.js (WebGL2), FFmpeg]
cover: /projects/material/cover.jpg
links: []
---

## Qué es

Una app de Mac para diseño de imagen en movimiento. No es una galería de filtros: construyes un sistema, con una fuente, una técnica, un material que se repite y señales que lo mueven, y juegas con sus reglas.

## Cómo se usa

- Empiezas con un generador o arrastras un vídeo y un audio.
- Aplicas una técnica (mosaico, feedback, slit scan…) y mueves sus parámetros.
- Conectas señales a los parámetros: los graves a la escala, el movimiento de la imagen o un controlador MIDI.
- Guardas «looks», los lanzas a tempo en directo y exportas el resultado en vídeo.

## Cómo está hecho

Electron con React para la interfaz y WebGL2 para el render. El motor va aparte de la interfaz, así que mover un control no frena la imagen. La exportación renderiza cada fotograma en su tiempo exacto y lo pasa a FFmpeg, de modo que el vídeo final es igual a la vista previa.

## Dónde está ahora

Versión 0.8, con fuentes, técnicas, modulación, MIDI, modo directo y exportación. Solo funciona en Mac con Apple Silicon y el MIDI se ha probado con un dispositivo virtual.
