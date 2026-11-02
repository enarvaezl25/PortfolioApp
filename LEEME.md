# Portfolio de Enoc Narváez

Sitio estático, sin dependencias. Solo necesita Node para generarse.

- `src/data.js`: todo el contenido (proyectos, textos, experiencia). Aquí se edita casi todo.
- `src/styles.css` y `src/main.js`: diseño e interacción.
- `public/`: imágenes de los proyectos, extraídas de los PDF de portafolio y descargadas de Behance (`img/behance`).
- `build.js`: genera `dist/`, que es lo que se publica.

## Generar

```bash
node build.js
```

## Publicar en Netlify

Opción rápida: arrastra la carpeta `dist` a https://app.netlify.com/drop

Opción con actualizaciones automáticas: sube `portfolio/` a un repositorio de GitHub y conéctalo en Netlify. `netlify.toml` ya indica el comando y la carpeta de publicación.

## Agregar un proyecto

Copia un bloque de `projects` en `src/data.js`, cambia `slug`, textos e imágenes, y vuelve a generar. Los tipos de bloque disponibles están en `blocks`, dentro de `build.js`.
