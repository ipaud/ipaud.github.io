---
title: Curator
summary: Inbox personal de investigación. Le mandas cosas por Telegram sin ordenar y cada semana recibes un email que las conecta.
year: 2026
status: en-curso
order: -6
tags: [App]
tools: [Next.js, Supabase, pgvector, Telegram, OpenAI]
cover: /projects/curator/cover.jpg
links: []
---

## Qué es

Una herramienta para guardar cualquier cosa sin clasificarla: artículos, repos, vídeos, capturas, PDFs, notas. Lo importante pasa después de guardar: la IA interpreta cada cosa, la etiqueta, la relaciona con lo que ya tenías y te la vuelve a enseñar cuando viene a cuento.

## Cómo se usa

- Mandas enlaces, fotos o notas de voz a un bot de Telegram, o los pegas en la web.
- Buscas por palabra o por significado, y navegas por temas y por las conexiones entre ellos.
- Cada semana llega un email que resume en qué has estado investigando, citando lo que guardaste.

## Cómo está hecho

Next.js y Supabase, con búsqueda que combina texto y vectores. Lo que llega nunca se modifica; lo que la IA interpreta se puede rehacer. El resumen semanal solo da cifras calculadas en la base de datos: si el modelo inventa una cita, no se envía.

## Dónde está ahora

La captura, la memoria, la búsqueda y el resumen funcionan. Faltan una extensión de navegador y compartir desde el móvil.
