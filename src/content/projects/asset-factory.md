---
title: Asset Factory
summary: Herramienta para pedir, revisar y exportar sprites y fondos de pixel art mientras programas un juego.
year: 2026
status: prototipo
order: -7
tags: [App]
tools: [Python, Pillow, OpenAI Images, MCP]
cover: /projects/asset-factory/cover.jpg
gallery:
  - src: /projects/asset-factory/costura.jpg
    caption: El último fotograma sobre el primero, para ver si el bucle encaja.
links: []
---

## Qué es

Una herramienta local para los gráficos de un videojuego: sprites, animaciones, fondos, tiles e interfaz. Se usa desde la terminal o directamente desde Claude Code mientras programas el juego.

## Cómo se usa

- Pides un asset, por ejemplo «bandera animada, 24 × 16, 4 fotogramas», y ves el coste antes de gastar nada.
- Lo apruebas y se genera, o se anima a partir de una imagen ya aprobada.
- Lo revisas en una página con la animación, la costura del bucle y la escena.
- Lo exportas en PNG, atlas o como cabecera C lista para el firmware de una consola ESP32.

## Cómo está hecho

Python. Cada aprobación queda ligada a la petición exacta: si cambias algo, hay que volver a aprobar, y no hay reintentos que gasten de más. La exportación convierte las imágenes al formato de color de la pantalla y comprueba cuánta memoria ocupan.

## Dónde está ahora

El flujo completo funciona con imágenes de prueba dibujadas por código. Falta probar la generación real con IA.
