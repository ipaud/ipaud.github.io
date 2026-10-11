---
title: Audreygotchi
summary: Una mascota virtual de bolsillo. Audrey es una gata de pixel art a la que hay que cuidar durante 55 días.
year: 2026
status: en-curso
order: 4
tags: [Hardware, Juego]
tools: ["ESP32-S3 (Freenove 2,8″)", MicroPython, Pixel art]
cover: /projects/audreygotchi/cover.jpg
gallery:
  - src: /projects/audreygotchi/baila.gif
    caption: Audrey bailando en la cocina, con los sprites del juego.
links: []
---

## Qué es

Una mascota virtual, como los Tamagotchi de antes, en una placa ESP32-S3 con pantalla de 2,8″. Audrey vive en un piso de pixel art: salón, cocina, baño y balcón. Tiene hambre, sueño y estrés, se puede poner enferma, y si la cuidas bien su ciclo dura 55 días.

## Cómo se juega

- **Tres botones**: izquierda, OK y derecha. Desde el menú le das de comer, la mimas o la curas. Si insistes demasiado, se estresa y te rechaza.
- **De noche** baja la luz de la pantalla y solo suenan los avisos importantes.
- **Un LED** respira cuando todo va bien, parpadea cuando te necesita y se apaga mientras duerme.

## Cómo está hecho

Está escrito en MicroPython. El núcleo del juego (reglas, simulación y partidas guardadas) no depende de la placa: se prueba en el ordenador y también ha funcionado en un Mac y en una Raspberry Pi Pico. La placa pone la pantalla a 25 fps, el sonido, la hora por Wi-Fi y una batería de 3000 mAh, y las actualizaciones le llegan firmadas.

## Dónde está ahora

Pantalla, arte, sonido, batería, partidas guardadas y reloj funcionan en la placa. Faltan los botones físicos: mientras tanto se juega con la tecla de la placa o desde el navegador.
