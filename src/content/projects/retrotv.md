---
title: RetroTV
summary: Una tele de tubo de los 90, en pequeño. Enciendes, sintonizas y entras en un canal que ya estaba emitiendo.
year: 2026
status: en-curso
order: 6
tags: [Hardware, Impresión 3D]
tools: ["ESP32-S3 (Freenove 2,8″)", PlatformIO, FFmpeg, Impresión 3D]
cover: /projects/retrotv/cover.jpg
video: /projects/retrotv/intro.mp4
gallery:
  - src: /projects/retrotv/v10-despiece.jpg
    caption: La tele90 v10, sin botones. El frontal y el cuerpo cierran con ocho imanes.
  - src: /projects/retrotv/teletexto.gif
    caption: El teletexto, con lo que echa cada canal y lo que viene después.
  - src: /projects/retrotv/mandos.jpg
    caption: El mando es una web en el móvil, con cuatro diseños de época.
links:
  - label: Código en GitHub
    url: https://github.com/ipaud/RetroTV
---

## Qué es

Una tele en miniatura con pantalla de 2,8″. Cada canal es una programación en bucle que sigue la hora real: al sintonizar entras a mitad de capítulo, con la estática y el destello de una tele de los 90. Si cambias y vuelves luego, el canal ha seguido avanzando.

## Cómo se usa

- **Zapear**: con las teclas, con el mando del móvil (`retrotv.local`, sin app ni nube) o con tres palmadas para encender y apagar.
- **El teletexto** enseña la guía real: qué echa cada canal, cuánto le queda y qué viene después.
- **Los vídeos** salen de una microSD. Una app de Mac convierte una carpeta de capítulos en un canal nuevo, y un servidor en casa puede mandar más canales por Wi-Fi.

## Cómo está hecho

El firmware está escrito en C++ para una placa Freenove ESP32-S3: vídeo de 320 × 240 a 20 fps con el sonido sincronizado, leído por delante de la tarjeta. La carcasa es un diseño propio en dos versiones: la v9, con cuatro teclas, y la v10, lisa, con un solo LED y cierre de imanes. Lleva una batería dentro, así que es portátil.

## Dónde está ahora

El firmware funciona en la placa: canales, zapeo, mando, teletexto, batería y palmadas. Falta la foto de la tele montada de verdad, probar el primer arranque sin Wi-Fi con un móvil y medir cuánto dura la batería. Encenderla diciendo «Hey Retro» está en pruebas.
