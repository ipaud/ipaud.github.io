---
title: FONTOM
summary: Laboratorio de tipografía en el navegador. Dibujas letras en una rejilla y exportas fuentes, pósters y animaciones.
year: 2026
status: en-curso
order: -2
tags: [App, Diseño]
tools: [Next.js, React, opentype.js, Clipper2]
cover: /projects/fontom/cover.jpg
gallery:
  - src: /projects/fontom/editor.jpg
    caption: Cada letra es una rejilla de celdas. El estilo decide en qué se convierten.
  - src: /projects/fontom/compare.jpg
    caption: El mismo texto en varios estilos, sin redibujar ninguna letra.
links: []
---

## Qué es

Un editor de tipografía generativa. Cada letra guarda solo qué celdas de una rejilla están encendidas, y un estilo global decide en qué se convierten: píxeles, burbujas, formas líquidas o un módulo que dibujas tú.

## Cómo se usa

- Dibujas unas pocas letras en la rejilla y FONTOM propone el resto del alfabeto.
- Cambias de estilo con un preset o con los controles, y todo el alfabeto se redibuja a la vez.
- En el playground repites, giras y animas el texto con fotogramas clave.
- Exportas la fuente (OTF, WOFF2), SVG, PNG o vídeo MP4.

## Cómo está hecho

Next.js sin servidor: todo pasa en el navegador. Cada celda se convierte en un polígono, los vecinos se unen y cada esquina se redondea según el estilo. Las fuentes se escriben con opentype.js y el vídeo se codifica en el propio navegador.

## Dónde está ahora

Versión 0.4, con editor, composición y animación hechos. Faltan las fuentes variables. Funciona en pantallas de ordenador.
