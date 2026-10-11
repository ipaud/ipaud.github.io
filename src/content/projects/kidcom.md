---
title: KIDCOM
summary: Un buzón de voz para niños, sin pantalla. Los abuelos mandan un audio por Telegram, se enciende una luz y el niño lo escucha con un botón.
year: 2026
status: prototipo
order: 3
tags: [Hardware]
tools: [Raspberry Pi Zero WH, Python, Telegram, FFmpeg]
cover: /projects/kidcom/cover.svg
links: []
---

## Qué es

Una caja de mensajes de voz para que un niño hable con su familia sin móvil, sin tablet, sin pantalla y sin cuenta de Telegram. Los abuelos graban una nota de voz en su Telegram de siempre y en casa se enciende una luz azul.

## Cómo se usa

- **Escuchar**: una pulsación reproduce la nota que ha llegado.
- **Hablar**: mantienes el otro botón, hablas y sueltas. La respuesta llega a la familia como nota de voz.
- Solo pueden mandar mensajes los adultos autorizados. Para conectarla al Wi-Fi se mantienen los dos botones: la caja abre su propia red y se configura desde el móvil en menos de cinco minutos.

## Cómo está hecho

Una Raspberry Pi Zero WH con dos botones, un LED y un altavoz, y un programa en Python que habla con Telegram y convierte el audio con FFmpeg. Los mensajes van en cola: si se cae la red, la respuesta se envía cuando vuelve, y una sola vez.

## Dónde está ahora

Funciona de punta a punta en la placa real: llega una nota, se escucha y la respuesta aparece en el móvil. Faltan la carcasa y ajustar el sonido dentro de ella antes de probarla con una familia.
