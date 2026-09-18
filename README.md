# Panna Cottas Anto's — sitio web

> Rediseñado en septiembre 2026 según el concepto de rebranding de PYRAXIS.
> El sitio anterior está respaldado en `../_backups/index-prerebranding-20260903.html`.
>
> **17/09/2026** — precios actualizados con las cartas nuevas y sección nueva de
> *Eventos y Celebraciones*. Versión anterior en `../_backups/index-preprecios-20260917.html`.

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
│  └─ hero-pannacotta.jpg     Foto principal de la portada (hero)
├─ menu/                       Cartas del menú a tamaño completo (se abren al hacer clic)
│  └─ thumbs/                  Miniaturas ligeras para la grilla
├─ eventos/                    Bandejas de mini postres + foto de la mesa dulce
└─ booth/                      Fotos del puesto + video (con su imagen de portada)
```

## Secciones

`Inicio` · `La historia` · `Postres` · `Eventos` · `El wobble` · `Menú` · `Booth`

- **Postres** — 7 tarjetas con foto real, precio y botón de pedido por WhatsApp, más una
  tarjeta final de "arma tu caja" que enlaza a la sección de Eventos.
- **Eventos** — bandejas de 12 unidades para mesas dulces: 6 tarjetas (mini panna cottas,
  mini cakes, mini cremas, mini flanes, mini cake pops y mini cookies) con precio por bandeja
  y pedido por WhatsApp. Todas las fotos se amplían al hacer clic.
- **El wobble** — "Miércoles de Wobble", el ritual de marca. Lleva el video del puesto en
  formato reel y enlaza a Instagram.
- **Menú** — las 6 cartas de diseño, en rejilla de 3. Se hace clic en cualquiera y se abre a
  pantalla completa, con flechas para pasar de una a otra (también funciona con ← → y Esc).
  Si la última fila queda con una sola carta, se centra sola (regla
  `.menu-tile:last-child:nth-child(3n+1)`); no hace falta tocar nada al añadir o quitar cartas.
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
- **Precios:** viven en tres sitios y hay que cambiarlos en los tres a la vez — la tarjeta de
  la sección Postres (`<span class="from">`), el pie de foto de la carta del menú
  (`data-cap-es` / `data-cap-en`) y la propia imagen de la carta en `assets/menu/`.
- **Precios vigentes (17/09/2026):** panna cotta $5 · mini tres leches $5 · cookies $4 (13
  sabores) · cake pops $3 c/u, 6 por $16, 12 por $30, 24 por $56 · flan $3 · fresas y durazno
  con crema $3. Bandejas de 12 para eventos: mini panna cottas $36 · mini cakes $36 ·
  mini cremas $24 · mini flanes $24 · mini cake pops $24 · mini cookies $18.
- **Pendiente:** `assets/marca/og.jpg` (la imagen que se ve al compartir el link) sigue siendo
  la del diseño anterior. Hay que rehacerla con el lockup nuevo, 1200×630.
- **Promociones:** el "Compra 5 y llévate 1 gratis" se retiró el 17/09/2026. En su lugar, las
  píldoras de la cabecera de Postres y de Menú son enlaces a WhatsApp que dicen "Promociones
  disponibles" y abren el chat preguntando cuáles hay vigentes. Así la promo se cambia sin
  tocar la web. Si vuelve a haber una promo fija, va en esas dos píldoras.
- **Carta de Mini Cakes retirada:** llevaba impreso el "BUY 5 GET 1 Free!", así que se sacó de
  la rejilla del menú. Los cuatro sabores de tres leches y el precio de $5 siguen visibles en
  la carta del menú general. Los archivos siguen versionados en `assets/menu/mini-cakes.jpg` y
  `assets/menu/thumbs/mini-cakes.jpg`: para reponerla basta con volver a añadir su
  `<button class="menu-tile">` (hay un comentario en el HTML, justo encima de `.menu-grid`).
