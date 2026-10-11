---
title: Makatulu
summary: Web para grabar voces sobre un beat desde el navegador y entregar las pistas limpias al ingeniero de mezcla.
year: 2026
status: en-curso
order: -3
tags: [App]
tools: [Next.js, Web Audio, IndexedDB, Supabase]
cover: /projects/makatulu/cover.jpg
gallery:
  - src: /projects/makatulu/editor.jpg
    caption: El editor. El beat va arriba y debajo las pistas de voz listas para grabar.
links: []
---

## Qué es

Una cabina de grabación de voz en el navegador, pensada para rap y música urbana. No es otro programa de producción: no mezcla ni masteriza. Sirve para grabar bien y entregar.

## Cómo se usa

- Importas el beat y eliges el micro o la interfaz de audio.
- Grabas tomas en pistas de voz principal, dobles, adlibs y estribillo, con metrónomo y punch-in.
- Recortas y mueves las tomas sobre una cuadrícula musical.
- Con un clic, «Preparar para ingeniero» genera un ZIP con cada pista en WAV, el beat y unas notas.

## Cómo está hecho

Next.js y TypeScript. El audio se captura sin pérdidas, a 24 bits, y cada pista se exporta desde el segundo cero para que abra sincronizada en cualquier programa. Los proyectos se guardan en el navegador, y con cuenta se sincronizan en la nube.

## Dónde está ahora

La grabación, el editor y la exportación funcionan. Falta probarlo con interfaces de audio reales y pulir la primera vez que se usa. Safari va a medias y el móvil no está soportado.
