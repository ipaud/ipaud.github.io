---
title: BolaBol
summary: Una máquina de cápsulas que funciona con fichas, imprimible entera en 3D. Metes la ficha, giras la manivela y cae una bola.
year: 2026
status: prototipo
order: 5
tags: [Impresión 3D, Diseño]
tools: [Blender, Python, Flashforge Adventurer 5M Pro, PETG]
cover: /projects/bolabol/v4_duo.jpg
video: /projects/bolabol/despiece.mp4
gallery:
  - src: /projects/bolabol/blueprint-bb01.jpg
    caption: El plano de la BB-01, dibujado para explicar la máquina.
links:
  - label: Archivos en GitHub
    url: https://github.com/ipaud/bolabol
---

## Qué es

Una máquina de bolas, como las de gachapon, que se imprime entera en 3D. Metes una ficha impresa, giras la manivela y cae una cápsula de 50 mm. Caben diez. Hay dos versiones: la de una ficha (menta) y la de dos (azul cielo).

## Cómo funciona

Es puramente mecánica, sin sensores ni electrónica. Una rueda de fichas, un trinquete y un pestillo solo dejan que la manivela dé la vuelta entera si hay una ficha de 25 × 4 mm dentro. Antes de imprimir, validé el mecanismo con una simulación de unos 200 casos.

## Cómo está hecho

El modelo entero lo genera código Python dentro de Blender. Todas las medidas están en un solo archivo de parámetros, y de ahí salen los STL y 20 bandejas listas para una impresora de 220 × 220 mm. Casi todo es PETG, con ventanas de metacrilato y tornillería M3. También tiene marca propia: logo, paleta, colores y una mascota, Boli.

## Dónde está ahora

Los archivos están publicados con licencia CC BY-NC-SA 4.0. Antes de imprimir la máquina entera hay piezas de prueba (los engranajes y el mecanismo de la ficha) para comprobar que tu impresora da la medida.
