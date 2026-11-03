# Sistema de color · Propuesta Claude

Base: la paleta del manual ya usada en Atlas (`web/app/brand-tokens.css`, `web/components/manual-palette.css`). No hay colores nuevos salvo un tono de texto derivado.

## Roles

| Rol | Color | Uso | No usar para |
| --- | --- | --- | --- |
| Tinta / acción | Azul oscuro `#040074` | Títulos, cuerpo, botones principales, tarjeta oscura (financiación) | Fondos grandes salvo bloques de énfasis |
| Acento principal | Turquesa `#18BAA8` | Hover de botones, subrayados, franja de énfasis, medidor de nav activa | Texto sobre blanco (contraste 2,4:1) |
| Acento de texto | Teal profundo `#0F6691` (mezcla 55 % turquesa + 45 % azul oscuro) | Etiquetas (kickers) | Fondos |
| Profundidad / iconos | Azul eléctrico `#1E00FF` | Iconos, punto de Extremadura, aro decorativo | Texto corrido y etiquetas |
| Activación | Lima `#9BFF05` | Medidor, cifra de cofinanciación, punto de Alentejo, aro decorativo | Texto sobre blanco |
| Superficies | Blanco, turquesa suave (`#F1FBFA`), neutros del gris `#B8B8B8` | Fondos, bordes, texto secundario | — |

Regiones del mapa (se repiten en socios): Centro = turquesa, Alentejo = lima, Extremadura = azul eléctrico.

Ritmo de fondos en portada: blanco → franja turquesa suave (intro) → blanco (ámbitos, accesos) → turquesa suave (noticias) → blanco (socios, footer).

## Contraste (WCAG 2.1)

| Combinación | Ratio | Estado |
| --- | --- | --- |
| Azul oscuro sobre blanco | 16,7 | AAA |
| Azul oscuro sobre turquesa (franja) | 6,9 | AA |
| Blanco sobre turquesa (hover con texto blanco) | 2,4 | Falla AA |
| Teal profundo sobre blanco | 6,3 | AA |
| Teal profundo sobre turquesa suave | 6,0 | AA |
| Azul eléctrico sobre blanco (kicker anterior) | 8,4 | AAA, pero chocaba visualmente |
| Gris de cuerpo sobre blanco / turquesa suave | 11,9 / 11,3 | AAA |
| Lima sobre azul oscuro | 13,3 | AAA |

Decisión: en hover turquesa, el texto pasa a azul oscuro (6,9). Es el único punto donde el esquema aprobado no cumple AA; la propuesta lo corrige solo en Claude 1 y 2.

## Auditoría de la web completa

Se midieron en local `/`, `/propuesta-claude-2` y las ocho páginas interiores (Sobre el proyecto, Actividades, Nosotros, Publicaciones, Actualidad, Eventos, Contacto, Analytics). Todas usan `data-site-palette="manual"`.

- Títulos, botones y enlaces: azul oscuro `#040074` en todas.
- Iconos de portada: azul eléctrico; en interiores, azul oscuro. Es la única diferencia entre portada e interiores.
- Etiquetas: azul eléctrico `#1E00FF` en todas las páginas actuales. La propuesta lo cambia a teal solo en las portadas Claude.

Para extender el teal a toda la web basta cambiar la regla `.hp-kicker` de `manual-palette.css` (hoy `var(--hm-blue)`) por el token de acento de texto. Es una línea y afecta a las nueve páginas por igual.

## Estado de implementación

- Home real (`/`): Claude 2, sin barra de revisión. Atlas anterior en `/home-propuesta-1`; Claude 1 en `/propuesta-claude` y Claude 2 con barra en `/propuesta-claude-2`.
- Sistema compartido en `web/components/site-system.css`, importado por la home (`.cl`) y las ocho interiores (`.ap`): escala de espaciado, dos radios (12 y 6 px), tarjeta única, etiqueta de región, teal en kickers y texto oscuro en hover turquesa.
- Interiores: franja turquesa con aros en «Sobre el proyecto», actividades en rejilla de tarjetas, tarjetas y controles con los mismos radios y bordes, etiquetas de región en los socios.
- Sin tocar: cabeceras interiores (selector Editorial/Cartel/Conversación), pendientes de decisión.
- Franja de introducción («Un proyecto, muchas conexiones» y «Conocer para cooperar»): variante «Suave» elegida entre cinco. Fondo turquesa al 14 % sobre blanco, texto azul oscuro, línea turquesa junto al párrafo. Variables `--band-*` en `site-system.css`.
- «Sigue explorando»: tarjeta azul oscura con aros, etiqueta lima y botón turquesa.
- Bloque «Sobre el proyecto» (financiación, bandera UE, objetivos, resultados y tarjeta de importes): un único componente, `web/components/project-funding.tsx`, usado solo en la página Sobre el proyecto (se retiró de la home). Sustituye a la franja de importes anterior de esa página.
