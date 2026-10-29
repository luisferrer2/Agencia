# ARAM — Página web comercial

React + TypeScript + Vite. Sin base de datos: todo el contenido vive en `src/config/`.

## Ejecutar
```bash
npm install
npm run dev        # desarrollo (http://localhost:5173)
npm run build      # genera la carpeta dist/
npm run preview    # sirve dist/ (http://localhost:4173)
```
`dist/` es una página estática: se puede abrir desde cualquier hosting o servidor estático.

## Dónde modificar cada cosa
| Qué | Archivo |
|---|---|
| Precios, promoción, servicios y condiciones | `src/config/pricing.ts` (números en `PRICES`) |
| Contactos de WhatsApp, logotipo, menú | `src/config/site.ts` |
| Clientes, portafolio y capturas de estadísticas | `src/config/clients.ts` |
| Textos, FAQ, proceso, programa de contabilidad | `src/config/content.ts` |
| Colores y estilos | variables `:root` en `src/styles.css` |

- **Nuevo trabajo publicitario:** copia la imagen a `public/images/portfolio/` y añade un objeto en `portfolio` (clientId, ancho y alto reales).
- **Nueva captura de estadísticas:** `public/images/analytics/` + objeto en `analytics`.
- **Capturas del programa de contabilidad:** `public/images/accounting/` + `accounting.screenshots` en `content.ts`.
- **Funciones del programa de contabilidad:** en `accounting.features`, cambia `confirmed: true` solo cuando verifiques cada función.
- **Logotipo:** reemplaza `public/images/brand/aram-icon.png` y `aram-logo-dark.jpg`.
