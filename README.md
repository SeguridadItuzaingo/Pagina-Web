# Seguridad Ituzaingo - Sitio Web

Landing page estática para una empresa de monitoreo y seguridad.

## Ejecutar localmente

No requiere build. Podés levantarla con cualquier servidor estático.

### Opción rápida con Python

```bash
python3 -m http.server 8080
```

Luego abrí: `http://localhost:8080`

## Estructura

- `index.html`: estructura principal.
- `styles.css`: estilos globales y menú móvil.
- `main.js`: render dinámico y lógica del formulario.
- `animations.js`: animaciones GSAP + ScrollTrigger.
- `data.js`: contenido de servicios, ventajas y testimonios.

## Publicar en línea (GitHub Pages)

Este repo incluye workflow automático en `.github/workflows/deploy.yml`.

### Pasos

1. Subí este proyecto a un repositorio de GitHub.
2. En GitHub, entrá en **Settings → Pages**.
3. En **Build and deployment**, seleccioná **GitHub Actions**.
4. Hacé push a la rama `main`.
5. El workflow va a publicar automáticamente el sitio.

La URL quedará como:

`https://<tu-usuario>.github.io/<tu-repo>/`

## Personalización rápida

1. Reemplazá `assets/logo.svg` por tu logo (podés mantener el mismo nombre).
2. Cambiá teléfono y WhatsApp en `index.html` y `main.js`.
3. Editá servicios/testimonios en `data.js`.
4. Actualizá dirección y mapa embebido en la sección contacto.
