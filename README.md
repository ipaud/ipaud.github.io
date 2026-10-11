# Web personal

Índice de proyectos hecho con [Astro](https://astro.build). Cada proyecto es un archivo de texto; el diseño no se toca para añadir cosas.

## Arrancar

Necesitas Node 22.12 o más reciente.

```bash
npm install
npm run dev      # abre http://localhost:4321
```

## Cambiar tus datos

Tu nombre, la frase de presentación, el email y los enlaces de la cabecera están en `src/data/site.ts`.

## Añadir un proyecto

1. Crea `src/content/projects/mi-proyecto.md`. El nombre del archivo será la URL: `/proyectos/mi-proyecto/`.
2. Mete las fotos y vídeos en `public/projects/mi-proyecto/`.
3. Copia la cabecera de `echo.md` y cambia los campos:

| Campo | Para qué sirve |
| --- | --- |
| `title` | Nombre del proyecto |
| `summary` | Una línea. Sale en la portada y arriba de la página |
| `year` | Año |
| `status` | `en-curso`, `prototipo`, `terminado` o `pausado`. Cambia el punto de color |
| `tags` | Etiquetas. Los filtros de la portada se crean solos a partir de ellas |
| `tools` | Herramientas y materiales |
| `cover` | Imagen de portada (4:3 queda mejor) |
| `video` | Opcional. Clip corto que se reproduce al pasar el ratón |
| `gallery` | Lista de fotos con su pie |
| `links` | Botones. Si la URL es de GitHub, sale con su icono |
| `order` | Número más alto = sale antes |
| `draft` | `true` para esconderlo mientras lo escribes |

Debajo de la cabecera escribes el texto en Markdown, con secciones `##` cortas.

## Vídeos

Clips de 5 a 10 segundos, sin sonido. Para que pesen poco, con [ffmpeg](https://ffmpeg.org):

```bash
ffmpeg -i original.mov -an -vf "scale=1200:-2,fps=30" -c:v libx264 -crf 28 -preset slow -movflags +faststart loop.mp4
```

## Publicar gratis en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub.
   - Si el repo se llama `TU-USUARIO.github.io`, la web queda en `https://TU-USUARIO.github.io`.
   - Si se llama de otra forma (por ejemplo `web-personal`), añade `base: '/web-personal'` en `astro.config.mjs`.
2. Cambia `site` en `astro.config.mjs` por tu URL.
3. En el repo: **Settings → Pages → Source: GitHub Actions**.
4. Cada `git push` a `main` vuelve a publicar la web.

También funciona tal cual en Netlify o Vercel: importas el repo y listo.
