---
title: PAINTLAB
summary: Asistente para pintar figuras y miniaturas con las pinturas que ya tienes en casa.
year: 2026
status: en-curso
order: -1
tags: [App]
tools: [Next.js, React, three.js, Supabase]
cover: /projects/paintlab/cover.jpg
gallery:
  - src: /projects/paintlab/mezclar.jpg
    caption: Para un color objetivo, propone mezclas con tus botes y cuánto se parecen.
links: []
---

## Qué es

Una app web que responde a una pregunta: tengo esta figura y estas pinturas, ¿cómo la pinto con lo que ya tengo? Parte de fotos de referencia y busca primero entre tus botes, luego en mezclas hechas con ellos, y solo al final te propone comprar.

## Cómo se usa

- Subes fotos de referencia y tocas cada parte para leer su color. Cada zona tiene sombra, base, luz y luz extrema.
- Apuntas tus pinturas a mano, desde el catálogo o con una foto de los botes.
- La app te da una receta ordenada, y el modo pintura la enseña con letra grande y sin que se apague la pantalla.

## Cómo está hecho

Next.js y TypeScript. El motor de color compara con CIEDE2000 y puntúa las mezclas por lo bien que se acercan y por lo fácil que es medirlas a ojo. Si subes el STL de la figura, lo analiza en segundo plano con three.js. Sin cuenta, todo se guarda en el navegador.

## Dónde está ahora

Funciona de punta a punta sin cuenta. Las mezclas son aproximadas y el catálogo es de demostración. Lo siguiente es un mapa de pintura sobre el modelo 3D.
