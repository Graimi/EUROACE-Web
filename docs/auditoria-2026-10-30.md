# Auditoría · EUROACE Web · 2026-10-30

Estándar aplicado: Estándar común v1.0. Solo diagnóstico: no se ha modificado código.

## Resumen ejecutivo
- Hay **7 semanas de trabajo sin commit**: el último commit es del 11-09-2026, y hay 21 ficheros modificados y **94 sin seguimiento**, entre ellos 9 de las 15 páginas. Hoy el repositorio en GitHub no refleja la web. Es el riesgo principal.
- **El CI fallará**: llama a `npm run build:vercel`, que no existe en `package.json`.
- El código compila: `tsc --noEmit` y `oxlint` pasan sin errores. No se han encontrado secretos en Git y los enlaces internos no están rotos.
- Hay **mucho código muerto y de propuestas**: unos 50 componentes sin usar, 6 rutas de propuesta, CSS duplicado en 10 hojas, 357 colores hex distintos y 3 dependencias sin uso.
- Falta casi todo el estándar: AGENTS.md, CLAUDE.md, docs/, specs/, tests, CHANGELOG, `.env.example`, robots, sitemap y 404. El README es un diario de cambios, no una guía de uso.

## Inventario
- **Stack:** React 19 + vinext (Next sobre Vite, beta) + Tailwind 4 + shadcn/base-ui + three.js. Despliegue en Vercel con Nitro. Node 22.
- **Scripts:** `dev`, `build`, `lint` (oxlint), `typecheck`, `format` (oxfmt). No hay `test` ni `check`.
- **Rutas (15):** `/` (Atlas), `/observatorio`, `/actividades`, `/nosotros`, `/publicaciones`, `/actualidad`, `/eventos`, `/analytics`, `/contacto` y las propuestas `/home-propuesta-{1,2,3,original}` y `/propuesta-{2,3}`.
- **Idiomas:** ES/PT/EN mediante `?lang=` leído en el cliente (`lib/site-language.ts`).
- **Tamaño:** unas 27 800 líneas en `app/`, `components/` y `lib/`. Unas 13 000 son CSS.
- **Variables de entorno:** solo `.env.local` con un token OIDC de Vercel. Está ignorado y no está en el historial.

## Hallazgos

| # | Nivel | Área | Hallazgo | Dónde |
|---|---|---|---|---|
| 1 | 🔴 | Git | Último commit del 11-09. 21 ficheros modificados y 94 sin seguimiento, incluidas las páginas `observatorio`, `actividades`, `nosotros`, `publicaciones`, `actualidad`, `eventos`, `analytics` y `contacto`, `brand-tokens.css` y unos 40 componentes. Si se pierde el disco, se pierde el trabajo. Vercel con Git desplegaría una versión antigua. | raíz |
| 2 | 🔴 | CI | `ci.yml` ejecuta `npm run build:vercel`, que no existe. Además duplica `tsc` en lugar de usar `npm run typecheck`. | `.github/workflows/ci.yml` |
| 3 | 🟠 | Git | `.gitignore` no excluye `.playwright-cli/` (unos 100 logs y capturas), `output/`, `tmp/` ni `*.patch`. Están en `.vercelignore`, pero no en Git, y ensucian `git status`. | `.gitignore` |
| 4 | 🟠 | Código muerto | 48 de los aproximadamente 55 componentes de `components/ui/` no se importan en ningún sitio (instalación completa de shadcn). También están sin usar `components/chrome-rings.tsx` y `components/home-review.tsx` (912 líneas, más `home-review.css` con 1 823). | `web/components/` |
| 5 | 🟠 | Rutas | `/propuesta-2` y `/propuesta-3` no se enlazan desde ningún sitio. `/home-propuesta-1` solo se enlaza desde `home-review.tsx`, que está muerto, y es un duplicado de `/` (las dos usan `variant={3}`). Hay que decidir qué propuestas siguen vivas. | `web/app/` |
| 6 | 🟠 | Dependencias | Sin uso: `date-fns` y `react-server-dom-webpack` (react-dom sí lo usa el framework). Probablemente también `cmdk`, `input-otp`, `react-day-picker`, `recharts`, `react-resizable-panels` y `embla`, que solo los usan los componentes ui muertos. Con `nitro` en `^3.0.x-beta` y `vinext` en beta, el build no es reproducible a largo plazo. | `web/package.json` |
| 7 | 🟠 | Estilos | Hay 10 hojas CSS con variables propias y 357 colores hex distintos. `layout.tsx` importa 6 hojas globales (globals, proposals, brand-tokens, brand, review, selected-design) en todas las páginas, incluido el CSS de propuestas y de revisión. No hay una única fuente de tokens, aunque `brand-tokens.css` existe. | `web/app/*.css`, `web/components/*.css` |
| 8 | 🟠 | Contenido | Los textos están repartidos en `content.ts`, `content-en.ts`, `essential-copy.ts`, `atlas-page-copy.ts` y `header-content.ts`, con estructuras distintas por idioma. Cuesta saber dónde se edita un texto. | `web/lib/` |
| 9 | 🟠 | SEO/i18n | El idioma va por `?lang=` y se aplica en el cliente: la URL es la misma para los 3 idiomas, el `<html lang>` se cambia tras hidratar y los `metadata` solo están en español. Cuando se abra a indexación, los buscadores verán solo ES. | `lib/site-language.ts`, `app/layout.tsx` |
| 10 | 🟠 | Calidad | No hay tests ni script `check`. La única verificación son scripts sueltos de Playwright en `assets-source/` (unos 40 `*-check.js`), fuera del proyecto y sin integrar en CI. | `assets-source/` |
| 11 | 🟢 | Rendimiento | `public/brand/rings-chrome.mp4` (5,4 MB), `home-proposals/evora.jpg` (2,1 MB) e `interreg-observatorio.svg` (670 KB). Hay que comprobar si se usan y optimizarlos (WebP o AVIF, SVG optimizado con svgo). | `web/public/` |
| 12 | 🟢 | Web pública | No hay `robots.txt`, `sitemap`, `not-found` (404) ni metas Open Graph. `robots: {index:false}` es correcto antes del lanzamiento, pero debe estar en la checklist del lanzamiento. | `web/app/` |
| 13 | 🟢 | Restos | `.wrangler/` (Cloudflare) y `.openai/hosting.json` siguen en `web/` después de migrar a Vercel. Hay 2 `.patch` sueltos en la raíz. | `web/`, raíz |
| 14 | 🟢 | Docs | README de 178 líneas en formato diario de decisiones de diseño; no explica cómo instalar ni ejecutar. `BRAND.md` y `REFERENCIAS.md` son útiles y hay que conservarlos. | raíz |
| ✅ | — | Seguridad | No hay secretos en el código ni en el historial. Los `target="_blank"` llevan `rel="noopener noreferrer"`. El único `dangerouslySetInnerHTML` es el de shadcn `chart.tsx`, que está muerto. Todas las `<img>` tienen `alt`. | — |
| ✅ | — | Enlaces | Ningún `href` interno apunta a una ruta inexistente. | — |
| ✅ | — | Tipos/lint | `tsc --noEmit` y `oxlint` terminan sin errores. | — |

## Ficheros del estándar que faltan
AGENTS.md · CLAUDE.md · docs/constitution.md · docs/architecture.md · docs/memory.md · docs/adr/ · specs/ · CHANGELOG.md · .env.example · .editorconfig · script `check` · tests · .claude/ (commands, settings) · robots/sitemap/404.

## Plan de migración por fases

**Fase 0 · Salvar el trabajo (urgente, unos 15 min)**
1. Añadir a `.gitignore`: `.playwright-cli/`, `output/`, `tmp/`, `*.patch`, `web/.wrangler/`.
2. Revisar `git status` y hacer commit del trabajo actual en una rama (`wip/atlas-octubre`) en uno o varios commits por bloques: páginas interiores, estilos y componentes, docs.
3. Push a GitHub.

**Fase A · Ficheros del estándar (sin tocar código)**
- AGENTS.md y CLAUDE.md adaptados (vinext, oxlint, ES/PT/EN, identidad de BRAND.md).
- `docs/architecture.md` con el mapa de las 15 rutas y qué componente y fichero de textos usa cada una.
- `docs/constitution.md`, `docs/memory.md`, CHANGELOG y `.env.example`.
- Pasar el contenido del README actual a `docs/memory.md` o a ADRs, y reescribir el README con el formato estándar.

**Fase B · Corregir 🔴**
- Arreglar `ci.yml`: quitar `build:vercel` o crear el script, y usar `npm run typecheck`.
- Añadir `"check": "npm run lint && npm run typecheck && npm run build"`.

**Fase C · Limpieza (cada punto en su commit, verificando con `check` y en el navegador)**
- **Decisión tuya primero:** qué propuestas se conservan (`/home-propuesta-*`, `/propuesta-*`, `original-home`).
- Borrar los componentes ui muertos y `home-review`/`chrome-rings`, y desinstalar las dependencias sin uso.
- Sacar del layout global el CSS de propuestas y revisión.

**Fase D · Refactors como specs SDD**
- Spec 001: tokens de marca únicos (consolidar las 10 hojas sobre `brand-tokens.css`).
- Spec 002: contenido i18n unificado (un solo modelo de textos por idioma).
- Spec 003: i18n con rutas (`/pt/...`, `/en/...`) y metadatos por idioma antes del lanzamiento.
- Spec 004: tests e2e mínimos con Playwright (migrar los `*-check.js` útiles) dentro de CI.
- Spec 005: preparación para producción (robots, sitemap, 404, OG, assets optimizados, `index: true`).

---
**¿Por qué fase empezamos?** Recomendación: Fase 0 hoy mismo.
