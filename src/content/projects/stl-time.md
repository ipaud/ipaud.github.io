---
title: STL Time
summary: App de Mac que te dice cuánto tardará un STL en imprimirse en una Flashforge Adventurer 5M Pro, sin abrir el slicer.
year: 2026
status: terminado
order: 0
tags: [App, Impresión 3D]
tools: [Electron, React, three.js, OrcaSlicer]
cover: /projects/stl-time/cover.jpg
links:
  - label: Descargar para Mac
    url: https://github.com/ipaud/stl-time/releases/tag/v0.2.0
  - label: Código en GitHub
    url: https://github.com/ipaud/stl-time
---

## Qué es

Una utilidad para quien imprime en 3D con una Adventurer 5M Pro. Sueltas un STL, ves el modelo y te da tres tiempos de impresión (rápido, estándar y calidad), con los gramos de filamento y lo que cuesta. No es un slicer: no hay nada que configurar.

## Cómo se usa

- Arrastras el STL a la ventana, al icono del Dock o lo abres desde el Finder.
- Ves sus medidas y si cabe en la cama de 220 × 220 × 220 mm.
- El precio de la bobina se cambia en los ajustes, y la app vive en la barra de menús.

## Cómo está hecho

Si tienes OrcaSlicer o Flash Studio instalado, la app lo usa por debajo con los perfiles oficiales de Flashforge y lee los tiempos del G-code. Si no, usa un estimador propio calibrado con cortes reales y avisa de que el tiempo es aproximado.

## Dónde está ahora

La versión 0.2 se puede descargar para Mac con Apple Silicon. Es así a propósito: una sola impresora, PLA y una pieza por bandeja.
