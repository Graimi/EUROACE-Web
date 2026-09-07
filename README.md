# Observatorio EUROACE · Web institucional

Tres propuestas de la página de inicio del Observatorio de Cooperación Transfronteriza EUROACE. Código preparado para un repositorio de GitHub; no se ha configurado un repositorio remoto ni publicado el sitio.

## Comparar las propuestas

El selector superior permite cambiar entre tres homes completas. No son páginas interiores del sitio definitivo.

| Ruta | Propuesta | Dirección visual |
| --- | --- | --- |
| `/` | 01 · Conexión territorial | Propuesta original: territorio, conexiones y acentos turquesa. |
| `/propuesta-2` | 02 · Atlas editorial | Titulares serif, composición editorial, territorios tipográficos y áreas numeradas. |
| `/propuesta-3` | 03 · Ventana de datos | Cabecera compacta, entrada por áreas, cifras y biblioteca en listado. |

Las tres incluyen ES/PT, menú móvil, los mismos logotipos oficiales y contenido provisional identificado. La propuesta original se conserva; únicamente se añade el selector de comparación compartido. Eliminar ese selector del layout al elegir la propuesta definitiva.

## Desarrollo

Requiere Node.js 22.13 o superior y npm. La aplicación está en `web/`.

```sh
cd web
npm ci
npm run dev
```

Abre la dirección local que muestre el servidor.

```sh
npm run lint
npx tsc --noEmit
npm run build
```

Stack: React, TypeScript, Vinext/Vite, Tailwind y componentes Base UI/Shadcn. El scaffold procede de Sites. No requiere claves, base de datos ni conexión a Notion/Drive para ejecutarse. El build del scaffold genera un servidor compatible con Cloudflare Workers; no es una exportación para GitHub Pages.

## Estructura

- `web/app/page.tsx`: home y navegación por secciones.
- `web/lib/content.ts`: contenidos ES/PT separados del diseño.
- `web/app/globals.css`: identidad visual, estilos y adaptaciones responsive.
- `web/app/layout.tsx`: metadatos. Indexación desactivada durante la fase conceptual.
- `web/components/alternative-home.tsx`: alternativas editorial y de datos, con estructura específica por propuesta y secciones compartidas.
- `web/app/proposals.css`: estilos de las alternativas, aislados con clases propias, y selector de comparación.
- `web/components/proposal-switcher.tsx`: navegación entre propuestas con estado de página actual.
- `web/public/logo-euroace.jpg`: logotipo original sin modificar.
- `REFERENCIAS.md`: enlaces privados de trabajo a Notion y Google Drive. No se incluyen estos enlaces en la web pública.
- `.github/workflows/ci.yml`: validación de tipos, lint y build en GitHub Actions.

El lint revisa el código del proyecto; los componentes y el hook incluidos por el scaffold se conservan sin cambios y quedan fuera del lint. TypeScript comprueba también sus tipos. Dependencias fijadas con lockfile y auditadas tras actualizar los paquetes afectados del scaffold.

## Alcance y estado editorial

- Solo home, sin páginas interiores, formularios ni dashboard funcional.
- Selector ES/PT funcional; traducción portuguesa preliminar pendiente de revisión editorial.
- Menú móvil con control por teclado, Escape y estados ARIA.
- Las cifras 2 países, 3 regiones y 4 socios proceden del brief. Los gráficos son ficticios y están identificados como demostración.
- Publicaciones, noticias, eventos y contacto indican disponibilidad futura; no hay enlaces ficticios a documentos.
- El recurso territorial es un esquema de conexiones, no cartografía.
- Se utiliza `Logo Int_Obs_lateral_min.jpg` del directorio oficial de Drive. No se recorta, recolorea ni recrea. Su resolución original es 512 × 75; conviene obtener SVG o mayor resolución antes de la publicación final.
- Los logotipos de los cuatro socios se han extraído sin modificaciones del documento oficial `Folio con logos_May_JuntaNegra_letra 14.docx` de Drive. La propuesta no afirma cumplimiento normativo definitivo: validar el manual POCTEP y la composición final antes de publicar.

## GitHub

El repositorio Git local se entrega con rama `main`. Para conectarlo a un repositorio vacío creado en GitHub:

```sh
git remote add origin <URL_DEL_REPOSITORIO>
git push -u origin main
```

No contiene credenciales. Los logotipos oficiales conservan sus derechos y condiciones de uso; no se les aplica una licencia de código abierto por defecto.
