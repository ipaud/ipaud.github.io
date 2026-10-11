// Todo lo que es "tuyo" y no es un proyecto se cambia aquí.
export const site = {
  name: 'Pau Ávila',
  title: 'Pau Ávila · Proyectos',
  intro:
    'Diseño y construyo objetos: electrónica, modelado en Blender e impresión 3D. Aquí van los proyectos, terminados o a medias.',
  github: 'https://github.com/ipaud',
  email: 'pavilaotero@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/ipaud' },
  ],
};

export const statusLabel: Record<string, string> = {
  'en-curso': 'En curso',
  prototipo: 'Prototipo',
  terminado: 'Terminado',
  pausado: 'Pausado',
};

// Antepone la ruta base (útil si publicas en una subcarpeta de GitHub Pages).
export const withBase = (path: string) =>
  path.startsWith('http')
    ? path
    : `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
