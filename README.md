# Panna Cottas Anto's — sitio web

> Rediseñado en septiembre 2026 según el concepto de rebranding de PYRAXIS.
> El sitio anterior está respaldado en `../_backups/index-prerebranding-20260903.html`.

Sitio estático (HTML + CSS + JS, sin dependencias ni build). Se despliega tal cual en Vercel.

## Cómo subirlo a GitHub

Sube **todo el contenido de esta carpeta** a la raíz del repo, reemplazando el `index.html` que ya está allí:

```
index.html          ← reemplaza al actual
assets/             ← carpeta nueva (obligatoria)
```

> **Importante:** `index.html` y `assets/` van siempre juntos. Antes las fotos estaban incrustadas
> dentro del HTML en base64; ahora son archivos aparte. Si subes solo el `index.html`, el sitio
> se queda sin imágenes ni video.

### Opción A — desde la web de GitHub
1. Abre el repo → **Add file** → **Upload files**.
2. Arrastra `index.html` y la carpeta `assets/` completa.
3. **Commit changes**. Vercel redespliega solo en ~1 minuto.

### Opción B — desde la terminal
```bash
git add index.html assets && git commit -m "Fotos de productos, menú y booth + foto de Antonia completa" && git push
```

## Estructura

```
index.html
assets/
├─ antonia.jpg                 Foto de Antonia (completa, sin recortar)
├─ marca/
│  ├─ logo.jpg                 Logo del hero
│  ├─ badge.png                Ícono de marca (header, footer y favicon)
│  └─ og.jpg                   Imagen de vista previa al compartir el link (1200×630)
├─ productos/                  Fotos de las 7 tarjetas de postres
├─ menu/                       Cartas del menú a tamaño completo (se abren al hacer clic)
│  └─ thumbs/                  Miniaturas ligeras para la grilla
└─ booth/                      Fotos del puesto + video (con su imagen de portada)
```

## Secciones

`Inicio` · `La historia` · `Postres` · `El wobble` · `Menú` · `Booth`

- **Postres** — 7 tarjetas con foto real, precio y botón de pedido por WhatsApp, más una
  tarjeta final de "arma tu caja" para pedidos de eventos.
- **El wobble** — "Miércoles de Wobble", el ritual de marca. Lleva el video del puesto en
  formato reel y enlaza a Instagram.
- **Menú** — las 6 cartas de diseño, en rejilla de 3. Se hace clic en cualquiera y se abre a
  pantalla completa, con flechas para pasar de una a otra (también funciona con ← → y Esc).
- **Booth** — 4 fotos del puesto, todas ampliables.

## Sistema de marca

Todo el color vive en variables CSS al inicio del `<style>`. **No metas colores sueltos:**
usa la variable que corresponda.

| Variable | Hex | Uso |
|---|---|---|
| `--porcelana` | `#F7F2ED` | fondo principal (~46% de la página) |
| `--lavanda` | `#A187C4` | color madre: firma, mariposas, acentos |
| `--ciruela` | `#3E2E4F` | texto y bloques oscuros (reemplaza al negro) |
| `--almendra` | `#E8DCC8` | neutro cálido, bandas alternas |
| `--rosa` / `--pistacho` | `#E3AEC8` / `#A9C2A0` | guiños de postre, nunca fondo dominante |
| `--oro` | `#C0985A` | solo hilos finos y detalles |
| `--violeta` / `--violeta-ink` | `#B95AE6` / `#8A34B8` | acento digital: botones y enlaces |

> El violeta plano con texto blanco no pasa contraste AA, por eso los botones usan degradado
> de `--violeta` a `--violeta-ink`. Si lo cambias a plano, el texto tiene que ir en ciruela.

**Tipografías** (Google Fonts, ya enlazadas): Cormorant Garamond para titulares · Sacramento
**solo** para "Anto's" y palabras-emoción · Jost para todo lo funcional.

**Escritura del nombre:** siempre `Panna Cottas` (dos palabras) + `Anto's` con apóstrofo.
Nunca "PannaCottas" pegado ni "By Anto".

**Motivos:** la mariposa, el divisor de corazón, el patrón de puntos pastel y el *wobble*
(la animación suave del hero) están como símbolos SVG reutilizables al inicio del `<body>`;
se insertan con `<svg><use href="#i-bfly"/></svg>`.

## Notas de mantenimiento

- **Idiomas:** cada texto lleva `data-es` y `data-en`. Si agregas o cambias un texto, actualiza
  ambos atributos, no solo el contenido visible.
- **WhatsApp:** el número está en una sola línea del script, `var PHONE = "13465794833"`.
  Cada botón arma su propio mensaje con `data-msg-es` / `data-msg-en`.
- **Cambiar una foto:** reemplaza el archivo en `assets/` con el mismo nombre. Si el nombre cambia,
  actualiza también el `src` (y el `data-full` en las cartas del menú y las fotos del booth).
- **Fotos nuevas:** conviene bajarlas a ~1100 px de lado largo y calidad ~80 antes de subirlas,
  para que el sitio siga cargando rápido.
- **Pendiente:** `assets/marca/og.jpg` (la imagen que se ve al compartir el link) sigue siendo
  la del diseño anterior. Hay que rehacerla con el lockup nuevo, 1200×630.
