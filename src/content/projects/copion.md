---
title: COPION
summary: Historial del portapapeles para Mac. Guarda todo lo que copias y te deja recuperarlo desde la barra de menús.
year: 2026
status: terminado
order: -5
tags: [App]
tools: [Swift, SwiftUI, AppKit, Ollama]
cover: /projects/copion/cover.svg
links: []
---

## Qué es

Una app nativa de Mac que vive en la barra de menús y recuerda todo lo que copias: textos, enlaces, archivos e imágenes. Todo se queda en tu ordenador.

## Cómo se usa

- Abres el panel desde cualquier app con un atajo de teclado.
- Escribes para buscar, aunque no pongas las tildes, y con Enter lo vuelves a copiar.
- Fijas lo que usas a menudo y borras lo que no quieres guardar.
- Si tienes Ollama instalado, puede resumir, traducir o corregir un texto sin salir del Mac.

## Cómo está hecho

Swift, sin dependencias externas. Ignora lo que copian los gestores de contraseñas, así que eso nunca se guarda. La búsqueda por significado usa un modelo de embeddings local, y si no está instalado vuelve a la búsqueda normal.

## Dónde está ahora

La versión 1.1 hace todo lo anterior. El atajo está pensado para el teclado español, con la tecla Ñ.
