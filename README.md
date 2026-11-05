# Sen Tsuki — sitio web

Página estática del proyecto **Sen Tsuki** (medidor de quién golpea primero en karate), del equipo Los Raules para el dojo KenDoKan. No contiene código fuente del proyecto: solo la presentación (problema, solución, diagramas, historia, resultados y videos).

## Publicarla con GitHub Pages

1. Crea un repositorio público en GitHub y sube **todo el contenido de esta carpeta** (`index.html`, `assets/`, `.nojekyll`).
2. En el repositorio, entra a **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`. Guarda.
4. Espera uno o dos minutos. La página queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

Los diagramas, el gráfico y los estilos están incluidos en la propia página, sin servicios externos. Los únicos recursos externos son los dos videos de YouTube, que se cargan con el modo de privacidad ampliada (`youtube-nocookie.com`).

## Cómo editarla

- **Enlace de Instagram:** en `index.html`, busca `id="instagram"` y pega la URL entre las comillas de `data-url=""`. Mientras esté vacío, ese bloque no se muestra.
- **Videos:** están en `index.html`, en los `<iframe>` que apuntan a `youtube-nocookie.com/embed/`. El identificador es lo que va después de `youtu.be/`.
- **Fotos:** están en `assets/img/`. Si cambias una, mantén el nombre o actualiza la ruta en `index.html`.
- **Colores y tipografía:** `assets/css/style.css`, al inicio, en `:root`.

## Para verla en tu computador

Abre `index.html` con el navegador. Los títulos usan la fuente Oswald, que el navegador solo carga cuando la página se sirve por internet (por ejemplo, desde GitHub Pages). Abierta directamente desde el disco, los títulos usan una fuente de reemplazo, pero todo lo demás se ve igual.

## Licencia del contenido

Textos, diagramas y fotos propias: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.es). El logo de KenDoKan y las marcas de la universidad no están incluidos en esa licencia.

Se incluye la fuente **Oswald** (SIL Open Font License 1.1).
