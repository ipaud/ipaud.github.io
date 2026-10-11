import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md en src/content/projects.
// El nombre del archivo es la URL: echo.md -> /proyectos/echo/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),              // una línea, se ve en la portada
    year: z.number(),
    status: z.enum(['en-curso', 'prototipo', 'terminado', 'pausado']),
    tags: z.array(z.string()).default([]),   // sirven para los filtros de la portada
    tools: z.array(z.string()).default([]),
    cover: z.string(),                // ruta dentro de /public
    video: z.string().optional(),     // clip corto .mp4/.webm, se reproduce al pasar el ratón
    gallery: z
      .array(z.object({ src: z.string(), caption: z.string().optional() }))
      .default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(0),     // mayor = sale antes
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
