# PannaCottas Anto's — sitio web

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

`Inicio` · `Sobre nosotros` · `Postres` · `Menú` · `Booth`

- **Postres** — 7 tarjetas con foto real, precio y botón de pedido por WhatsApp.
- **Menú** — las 6 cartas de diseño. Se hace clic en cualquiera y se abre a pantalla completa,
  con flechas para pasar de una a otra (también funciona con ← → y Esc).
- **Booth** — el video del puesto más 3 fotos, todas ampliables.

## Notas de mantenimiento

- **Idiomas:** cada texto lleva `data-es` y `data-en`. Si agregas o cambias un texto, actualiza
  ambos atributos, no solo el contenido visible.
- **WhatsApp:** el número está en una sola línea del script, `var PHONE = "13465794833"`.
  Cada botón arma su propio mensaje con `data-msg-es` / `data-msg-en`.
- **Cambiar una foto:** reemplaza el archivo en `assets/` con el mismo nombre. Si el nombre cambia,
  actualiza también el `src` (y el `data-full` en las cartas del menú y las fotos del booth).
- **Fotos nuevas:** conviene bajarlas a ~1100 px de lado largo y calidad ~80 antes de subirlas,
  para que el sitio siga cargando rápido.
