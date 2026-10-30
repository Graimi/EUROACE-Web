# Observatorio EUROACE · Web institucional

## Principal y propuestas · 14 de octubre de 2026

Atlas es la página principal en `/` y la propuesta 01. Verde queda como versión 02 y Esencial como versión 03. `/home-propuesta-1` es un acceso compatible a Atlas. El selector conserva la home original como propuesta 00 y mantiene el idioma.

| Ruta | Diseño |
| --- | --- |
| `/` | 01 · Atlas, principal |
| `/home-propuesta-2` | 02 · Verde |
| `/home-propuesta-3` | 03 · Esencial |
| `/home-propuesta-original` | 00 · Original, conservada como propuesta |

Se elimina Atlas abierto y su ruta `/home-propuesta-4`. Las tres versiones activas comparten la distribución elegida en Atlas: texto y mapa en dos columnas mientras caben, hero centrado al apilarse, áreas integradas dentro de la presentación, accesos, carrusel con fotos sobre las noticias a la izquierda y agenda a la derecha, financiación, socios transparentes y el footer compartido Deriva. Se conservan las paletas y mapas propios de Esencial y Verde. Las áreas de Inicio empiezan plegadas en todos los tamaños y se abren mediante hover, clic o teclado. Analytics permanece junto a los idiomas cuando aparece el menú hamburguesa.

Atlas retira los créditos de Évora y el aviso editorial del footer, junto con la fotografía que no utilizaba en pantalla. Esencial y Verde mantienen la fotografía de Évora y su atribución. Queda seleccionado Deriva como único footer de las tres versiones y las páginas interiores. Se retira el selector y las propuestas alternativas. Utiliza fondo blanco y tres aros recortados en la esquina superior derecha, con recorridos suaves e independientes. Los tres colores permanecen visibles durante todo el ciclo. La animación usa un SVG cuadrado, solo traslación y opacidad, sin perspectiva ni deformación en móvil o tablet, y respeta la preferencia de movimiento reducido. En tablet, la fila de financiación coloca el texto a la izquierda y la firma institucional a la derecha. En móvil se mantiene apilada.

El favicon utiliza los tres aros y sus colores originales, sin texto. Se sirve en SVG y en ICO con tamaños de 16, 32, 48 y 64 px; incluye PNG de 32 px e icono de 180 px para dispositivos Apple. En modo oscuro del navegador, las variantes SVG y PNG incorporan un fondo blanco de esquinas redondeadas para mantener visibles los tres colores. En modo claro se utiliza la variante transparente. La firma institucional de la página se conserva completa.

La home original se conserva en `web/components/original-home.tsx`. El componente de la principal y las otras dos propuestas es `web/components/home-essential.tsx`. Las páginas interiores se reconstruyen con la identidad de Atlas y dejan de utilizar las composiciones de la original. La cabecera compartida es `web/components/site-header.tsx`; muestra la sección activa, conserva el idioma y enlaza desde «Sobre el proyecto» a `/observatorio`. Se elimina el espacio blanco bajo el footer y «Síguenos» utiliza el diseño elegido «Color de marca», con los colores propios de Instagram y Facebook, y X en negro. Los enlaces proceden de la web oficial de la eurorregión y se identifican como perfiles de EUROACE.

## Páginas interiores de Atlas · 14 de octubre de 2026

Las ocho páginas utilizan `web/components/atlas-page.tsx`, con estilos en `atlas-page.css` y textos ES/PT/EN en `web/lib/atlas-page-copy.ts`. Cada apartado dispone de contenido y composición propios:

- `/observatorio`: propósito, territorio, áreas, públicos y financiación institucional.
- `/actividades`: investigación, transferencia, Analytics y coordinación; cinco estudios iniciales y actuaciones previstas de laboratorios y Campus EUROACE.
- `/nosotros`: cuatro socios, regiones, funciones y enlaces institucionales, con logos transparentes.
- `/publicaciones`: formatos previstos con búsqueda y filtro. Los documentos se identifican como «En preparación», sin enlaces de descarga inexistentes.
- `/actualidad`: cinco noticias directamente vinculadas al Observatorio, con imágenes, fechas, fuentes, búsqueda, filtro por fuente y orden cronológico. Se mantienen las tres iniciales y se añaden la participación en Sevilla, publicada por Ubinnovative el 28/09/2026, y la producción científica en la UBI, publicada el 01/07/2026. Se retiran las noticias de proyectos ajenos al Observatorio.
- `/eventos`: calendario navegable, próxima programación por confirmar y archivo de dos encuentros documentados, del 02/06/2026 y el 23/07/2026.
- `/analytics`: exploración interactiva por área y territorio, mapa con regiones destacadas y preguntas orientativas. La plataforma se identifica como «En desarrollo»; no se incluyen estadísticas ficticias.
- `/contacto`: orientación por tipo de público, instituciones, teléfono y correo de coordinación publicados en la ficha oficial POCTEP. La coordinación se presenta como Junta de Extremadura. El correo general del Observatorio permanece pendiente; las redes enlazadas pertenecen a la eurorregión.

El contenido se apoya en el proyecto final facilitado por el usuario, especialmente páginas 18, 21 y 26–33, y en las publicaciones institucionales citadas más abajo. La ficha POCTEP se consulta de nuevo el 14/10/2026 y confirma presupuesto, fechas y el contacto de Ana Atanet Alía. Las preguntas de Analytics son una adaptación editorial del alcance de las áreas, no indicadores aprobados. Esta revisión está disponible localmente.

## Comparación de cabeceras · 15 de octubre de 2026

Las ocho páginas interiores conservan las propuestas 03 Editorial, 05 Cartel y 06 Conversación, disponibles en un selector que muestra una única cabecera adaptada al contenido de cada página. Se retiran la cabecera actual de aros de Sobre el proyecto y Ventana al territorio de Contacto; todas las páginas interiores ofrecen las mismas tres opciones. Inicio mantiene su cabecera. Los números originales se conservan para facilitar la elección. Los nombres y la selección están en `web/lib/header-styles.ts`; la composición de revisión está en `web/components/page-header-review.tsx`. Los botones del selector permiten cambiar de propuesta sin apilar las cabeceras. Se conserva el acceso directo al contenido y un único titular principal en cada página. Las variantes comparten la paleta Editorial: índigo, turquesa y blanco. Editorial, Cartel y Conversación utilizan un fondo transparente, conservando los colores de sus ilustraciones. Los titulares y las introducciones se revisan en ES/PT/EN para explicar la función de cada página; se mantienen los ámbitos aprobados y el estado previsto de publicaciones y Analytics. Los textos de las composiciones están en `web/lib/header-content.ts`.

Editorial alterna la portada índigo con una tarjeta turquesa que pasa al primer plano, cambia su forma y muestra un segundo mensaje propio de la sección. Editorial y Conversación mantienen además un balanceo continuo moderado, con recorridos de hasta 16 px y pequeñas rotaciones, entre los cambios de capa, para hacer visible desde el principio que son composiciones animadas. Cartel mueve únicamente su círculo decorativo, con un recorrido de hasta 30 px; el icono, los temas y los puntos del calendario permanecen quietos. Conversación alterna la pregunta y la respuesta en primer plano. El control «Pausar propuestas» congela estas animaciones; la preferencia de movimiento reducido presenta una composición estática. La cabecera de Inicio conserva su comportamiento.

Nosotros se presenta como «Cuatro instituciones. Un proyecto común» y nombra los cuatro socios en Editorial, Cartel y Conversación: Junta de Extremadura, UEx, UÉvora y UBI. Las universidades se abrevian en las ilustraciones para conservar la legibilidad; sus nombres completos permanecen en la introducción y en las fichas. Actualidad utiliza el mensaje general «Así avanza el Observatorio», sin limitar la cabecera al encuentro de Sevilla.

Queda seleccionado el titular con «potencial» dividido por sílabas y colores del logo, sin selector. Las publicaciones reúnen los formatos en cuatro categorías: informes, barómetros, infografías y artículos científicos. Se elimina «Papers» como etiqueta separada para evitar el solapamiento; esto no elimina documentos publicados ni altera el contenido del proyecto.

## Tarjetas de investigación · 15 de octubre de 2026

Inicio utiliza el diseño elegido Bandas en «Qué vamos a analizar». Sobre el proyecto utiliza Ventanas en sus tres áreas de investigación. Se retiran los selectores de comparación de tarjetas. Ambas composiciones conservan los colores y contenidos aprobados, empiezan plegadas y se abren con hover, clic, toque o teclado. En tablet y móvil se apilan para mantener los títulos legibles. El contenido cerrado se oculta a las tecnologías de apoyo y se respeta la preferencia de movimiento reducido. La implementación compartida está en `web/components/research-card-proposals.tsx` y su CSS.

## Historial de revisión de Atlas y Atlas abierto · 14 de octubre de 2026

La reorganización anterior prevalece sobre las comparaciones y rutas descritas en este historial.

Atlas (`/home-propuesta-3`) sitúa los anillos detrás del contenedor del texto, con tamaño proporcional a este y mayor presencia en móvil. Conserva el encuadre compartido entre la imagen inicial y la animación para evitar el cambio brusco de tamaño al cargar. Se recuperan la iluminación, la transparencia y el desenfoque originales. La animación sigue tomando sus colores de los mismos SVG que el logo. Los socios aparecen sin soportes blancos; Évora y UBI utilizan variantes vectoriales transparentes de sus fuentes institucionales. Los criterios y fuentes se documentan en `BRAND.md`.

En Atlas, «Qué vamos a analizar» queda integrado dentro de «Un proyecto, muchas conexiones», según la composición elegida por el usuario. Se retiran el selector de comparación, el bloque independiente y el enlace visible «Áreas y estudios anunciados». Los ámbitos tienen fondos turquesa, verde y azul. «Actualidad y agenda» utiliza dos tercios para un carrusel manual de noticias y un tercio para «Próxima cita». Se incluyen tres artículos institucionales, con fecha, fuente y enlace, y navegación mediante flechas, puntos o desplazamiento horizontal. En móvil aparece una noticia por página y la agenda se apila debajo. La etiqueta «Sobre el proyecto» omite el código y se retira la nota «Paleta original · nueva mirada al territorio».

Atlas abierto (`/home-propuesta-4`) conserva «Qué vamos a analizar» inmediatamente después del hero. Los nombres de las tres áreas se ajustan a las fuentes institucionales: emprendimiento e innovación, economía y energía, y competitividad. Se presentan temas generales de estudio, sin atribuir indicadores concretos ni resultados finalizados. Se conserva el bloque de financiación.

La UEx anuncia las tres áreas el 08/06/2026: https://des-comunicacion.unex.es/2026/06/08/arranca-el-observatorio-de-cooperacion-transfronteriza-de-la-euroace/. EUROACE concreta los cinco estudios el 28/07/2026: https://euro-ace.eu/noticias/los-socios-del-observatorio-euroace-se-reunen-en-el-comite-de-coordinacion. Los resúmenes son adaptaciones editoriales de estas fuentes; «desarrollo regional» recoge el objetivo general de la ficha POCTEP. Los contenidos están disponibles en ES/PT/EN. Esta revisión es local y no se ha publicado.

### Ajustes de móvil y tablet

Las cabeceras de Atlas y Atlas abierto muestran ambos logos centrados en una línea hasta 1100 px. El Observatorio mantiene únicamente el separador izquierdo y ocupa un espacio igual o menor al de Interreg en móvil. En Atlas, el botón negro de Analytics sustituye al verde de la cabecera de escritorio y se elimina del navbar. Al aparecer el menú hamburguesa, permanece en la línea de Menú e idiomas y se oculta el botón superior. Texto y mapa del hero mantienen dos columnas mientras caben dos bloques de 330 px y su separación; se apilan y centran cuando falta espacio, también en móvil. En móvil, hasta 700 px, las tres áreas empiezan plegadas y se pueden abrir con toque o teclado; en tablet y escritorio permanecen abiertas. Se retira el emoticono de «Spin-offs» por elección del usuario.

Las tres noticias de Atlas utilizan las fotos de sus fuentes institucionales y la composición elegida, estilo 01, con foto superior. Se retiran las otras composiciones y las etiquetas de comparación. Se mantienen los enlaces, las fechas y las fuentes de cada artículo.

Al final de Atlas, `#propuestas-footer` conserva dos footers completos para compararlos: 01, azul noche y distribución institucional en columnas; 03, verde claro, composición centrada y nombres de las tres regiones. Se elimina el footer 02. Cada propuesta mantiene la firma, la financiación, los enlaces de navegación y contacto, los créditos y el idioma seleccionado. Las demás versiones conservan sus footers anteriores.

La revisión de `PROYECTO OBSERVATORIO EUROACE FINAL.pdf`, páginas 18 y 21, confirma las tres áreas iniciales. Tras presentar las propuestas al usuario y recibir su elección, se amplían las descripciones de economía y energía (desarrollo sostenible, seguridad energética y estabilidad económica) y competitividad (productividad, ecosistemas empresariales y capital humano). Los subtemas conservan el alcance de los cinco estudios anunciados en julio. Las notas del 13/03/2026 se revisan como contexto de planificación, sin trasladar sus reuniones a la agenda futura.

## Actualización UEx del 13 de octubre de 2026

Todos los bloques de socios utilizan el nuevo logotipo horizontal oficial de la Universidad de Extremadura, servido como SVG local con una URL nueva. Se corrigen las dimensiones intrínsecas de los socios y se evita que los colores de sus logos se mezclen con el fondo de la propuesta 3. Fuente y criterios documentados en `BRAND.md`. Actualización pendiente de aprobación visual y publicación.

## Revisión de socios del 5 de octubre de 2026

La versión principal incluye ocho páginas interiores: `/observatorio`, `/actividades`, `/nosotros`, `/publicaciones`, `/actualidad`, `/eventos`, `/analytics` y `/contacto`. Cada una ofrece dos composiciones de revisión, Editorial y Tarjetas. El menú sitúa Analytics entre Eventos y Contacto. Las rutas `/propuesta-2` y `/propuesta-3` conservan las exploraciones previas de la home; su navegación enlaza con las páginas interiores actuales.

Se incorporan las tres áreas de la candidatura, cinco tipos de publicaciones, Actividades, presentación de socios con enlaces, ficha POCTEP y espacios de contacto y redes. La cabecera muestra el nombre completo y la firma Interreg/Eurorregión desde la primera pantalla. El amarillo del Observatorio pasa al verde lima de la muestra aportada; véase `BRAND.md`.

La web principal funciona en español, portugués e inglés. `?lang=es`, `?lang=pt` y `?lang=en` conservan el idioma entre páginas. Las traducciones son provisionales, con revisión PT ofrecida por UBI. No se ha publicado esta revisión ni enviado respuestas a los socios. Las tareas y los borradores de respuesta están registrados en Notion.

Pendientes: composición definitiva de la Junta, archivos maestros, validación editorial, contraste de modificaciones presupuestarias con Antonio, correo general y perfiles de redes. No hay formulario ni envío de mensajes activado. Analytics mantiene su demostración con datos ficticios.

Contenido institucional y nuevas secciones: `web/lib/project.ts` y `web/components/project-sections.tsx`. Traducción inglesa: `web/lib/content-en.ts`. Estilos de esta revisión: `web/app/review.css`.

El contenido de los apartados siguientes describe las propuestas y decisiones anteriores; esta revisión prevalece sobre las menciones antiguas a una web sin páginas interiores.


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
npm run typecheck
npm run build
```

Stack: React, TypeScript, Vinext/Vite, Nitro, Tailwind y componentes Base UI/Shadcn. No requiere claves, base de datos ni conexión a Notion/Drive para ejecutarse. El build genera con Nitro la salida para la plataforma detectada (Vercel en producción); no es una exportación estática para GitHub Pages.

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
- La primera home incorpora los anillos originales en movimiento, con pausa y versión estática para movimiento reducido. Es un recurso de identidad, no cartografía.
- La firma institucional y la paleta se han actualizado conforme al manual de septiembre. Véase `BRAND.md` para fuentes, criterios y discrepancias detectadas en el PDF.
- Los logotipos de los cuatro socios se han extraído sin modificaciones del documento oficial `Folio con logos_May_JuntaNegra_letra 14.docx` de Drive. La propuesta no afirma cumplimiento normativo definitivo: validar el manual POCTEP y la composición final antes de publicar.

## Despliegue en Vercel

El proyecto se despliega en Vercel con **Root Directory = `web`** (ajuste del proyecto en el panel de Vercel). La configuración de build vive en `web/vercel.json`: instala con `npm ci`, construye con `npm run build` y no usa preset de framework, porque Vinext no es Next.js. Nitro detecta Vercel automáticamente en CI y genera la salida en `.vercel/output`, que Vercel sirve sin más configuración.

Para reproducir el build de Vercel en local:

```sh
cd web
NITRO_PRESET=vercel npm run build      # PowerShell: $env:NITRO_PRESET="vercel"; npm run build
```

Reglas para no romper el despliegue:

- `npm ci` exige que `package-lock.json` esté sincronizado. Tras cambiar dependencias, ejecutar `npm install` y confirmar el lockfile en el mismo commit.
- Node fijado a `22.x` en `engines` para que Vercel y GitHub Actions usen la misma versión mayor.
- Los paquetes opcionales wasm (`@emnapi/*`) deben figurar en el lockfile aunque en Windows no se instalen; si `npm ci` falla en Vercel con "Missing … from lock file", regenerar el lockfile con `npm install --force` o en Linux.

## GitHub

El repositorio Git local se entrega con rama `main`. Para conectarlo a un repositorio vacío creado en GitHub:

```sh
git remote add origin <URL_DEL_REPOSITORIO>
git push -u origin main
```

No contiene credenciales. Los logotipos oficiales conservan sus derechos y condiciones de uso; no se les aplica una licencia de código abierto por defecto.
