# Publicación en Vercel · 21 de octubre de 2026

Publicada y verificada la versión actual en `https://euroace-web.vercel.app`. Despliegue de producción: `dpl_GJGDBAgzsUHufG9aFkJKsh8kkT1K`; URL inmutable: `https://euroace-gfi09op1j-jaimes-projects-9f57f4da.vercel.app`.

La publicación incorpora la identidad oficial, la paleta del manual, el efecto combinado de flecha y destello y Atlas como única portada visible inicialmente. Las otras propuestas permanecen disponibles desde el control cerrado del footer. Se han comprobado la portada, las ocho páginas interiores y las tres alternativas en producción, todas con respuesta HTTP 200. También se han verificado los colores, el título del proyecto, el acceso a las alternativas y su visualización móvil, sin errores de ejecución en las comprobaciones realizadas.

# Propuestas secundarias y acceso desde el footer · 21 de octubre de 2026

Atlas, opción 01, permanece como portada principal y única propuesta visible inicialmente. Se retiran la barra fija de comparación y el selector superior de Original. Las propuestas Verde, Esencial y Original se conservan en sus rutas y se abren mediante el control «Ver otras propuestas» del footer. El control comienza cerrado, mantiene el idioma y permite volver a Atlas desde cualquiera de las alternativas. También está disponible en las páginas interiores.

La paleta del manual se extiende a las tres alternativas, conservando sus composiciones, fotografías, mapas y contenidos. Las portadas fotográficas mantienen texto blanco sobre una capa del azul oscuro oficial. Botones, hover turquesa, superficies, gráficos y bordes comparten los roles aprobados para Atlas. Original mantiene sus diagramas y su distribución, con las mismas variables de color. Las marcas institucionales permanecen intactas. Esta decisión sustituye la indicación anterior de conservar las paletas antiguas de las alternativas.

# Paleta definitiva de Atlas y efecto combinado · 21 de octubre de 2026

Esta decisión sustituye las comparaciones descritas a continuación. Atlas principal, su alias `/home-propuesta-1` y sus ocho páginas interiores utilizan únicamente la paleta del manual oficial. Se retiran los selectores de paleta y efectos y su implementación de prueba. Los antiguos parámetros `palette` y `effect` ya no cambian la presentación. Las propuestas Verde, Esencial y Original conservan sus estilos.

El azul oscuro `#040074` identifica títulos y acciones principales. Los botones llevan texto blanco y pasan a turquesa `#18BAA8` con texto blanco al hacer hover. El efecto elegido combina el desplazamiento de la flecha de 6 px y un destello que cruza una vez el botón. También responde al foco de teclado; los efectos de movimiento se desactivan con movimiento reducido. La cabecera mantiene la línea superior turquesa y prescinde del desplegable Síguenos en Atlas.

Los tonos suaves de turquesa, azul eléctrico `#1E00FF` y lima `#9BFF05` distinguen áreas y formatos de conocimiento. El blanco y los neutros derivados del gris oficial ordenan superficies, bordes y texto secundario. Filtros, calendario, noticias, publicaciones, Analytics y contacto comparten estos roles. Los colores se centralizan en `web/app/brand-tokens.css` y `web/components/manual-palette.css`; los estilos interiores y las composiciones de cabecera consumen estas variables. Los estados concretos de la interfaz son decisiones de diseño aprobadas, no instrucciones específicas del manual para la web.

«Potencial» se muestra completo en el mismo azul del título, sin colores por sílabas, en español, portugués e inglés. Se conservan el selector de cabeceras Editorial, Cartel y Conversación, sus animaciones, las tarjetas Bandas y Ventanas y los aros aprobados. Los logotipos oficiales, las marcas de los socios y los colores propios de las redes sociales permanecen intactos. Esta actualización se prepara y verifica en local, sin desplegarla en Vercel.

# Paleta del proyecto y efectos de botones · 21 de octubre de 2026

La comparación «Actual / Manual oficial» se extiende a Sobre el proyecto. Aplica la misma paleta a su contenido, tarjetas Ventanas, financiación, navegación, footer y las tres cabeceras animadas: Editorial, Cartel y Conversación. El modo Actual conserva sus colores previos; el modo Manual usa los mismos roles y estados de botones que Inicio. Las marcas institucionales y los vectores oficiales mantienen sus colores originales. Las demás páginas interiores y portadas conservan su diseño.

Los selectores de Inicio y Sobre el proyecto comparten implementación y conservan la elección de paleta al navegar entre ambas páginas y cambiar de idioma. El parámetro `palette=current|manual` selecciona la paleta. El parámetro opcional `effect=arrow|sweep|lift|shine` conserva la prueba de interacción; al omitirlo se usa «Solo color».

El control Botones permite previsualizar cuatro alternativas antes de aplicarlas: Flecha desplaza la flecha 6 px; Barrido introduce el color lateralmente; Relieve eleva el botón 3 px con sombra suave; Destello desplaza un reflejo. La selección afecta a los botones principales de la página y se puede restablecer con «Solo color». Las animaciones se desactivan al solicitar movimiento reducido y no sustituyen el comportamiento táctil de los enlaces.

Los recursos compartidos se organizan en `web/lib/design-review.ts`, `web/components/palette-review.tsx`, `manual-palette.css`, `button-effects-review.tsx` y `button-effects.css`. El atributo `data-site-palette` limita el tema al contenedor que lo solicita, y `data-button-effect` selecciona el efecto sin volver a montar las animaciones de cabecera. La implementación se prepara para revisión local, sin desplegar una nueva versión en Vercel.

# Comparación de paleta en Inicio · 21 de octubre de 2026

Por petición del usuario se aplica una propuesta cromática del manual a la home Atlas. El selector «Actual / Manual oficial», visible también durante el desplazamiento, alterna las paletas sobre la misma composición. La propuesta del manual aparece inicialmente. El parámetro `palette=current` permite abrir directamente la versión anterior; `palette=manual` abre la nueva. El cambio conserva la escena animada y el estado de la página. La elección se mantiene en los enlaces de idioma de la home.

La propuesta toma las funciones de las páginas 25 y 26 del manual: turquesa principal `#18BAA8`, azul oscuro `#040074` para profundidad y contraste, azul `#1E00FF` en recursos de conocimiento, lima `#9BFF05` como acento de activación y blanco con neutros derivados del gris `#B8B8B8` para información y espacio. Tras revisar el primer resultado, el botón principal, Analytics y el contacto del footer utilizan azul oscuro con texto blanco. La prueba posterior de hover utiliza turquesa oficial `#18BAA8` con texto blanco, compartida entre los tres botones. Se conserva como comparación visual solicitada por el usuario; el contraste de blanco con ese turquesa es menor que con el azul oscuro. En la opción Manual oficial se retira el botón Síguenos y su panel de la cabecera, conservando únicamente la línea superior turquesa de 3 px. Se reduce el margen interior de la cabecera a 16 px por lado vertical, y 12 px en móvil, para retirar el espacio que reservaba la pestaña. La opción Actual conserva su botón y panel. El lima queda reservado a detalles de activación, fondos temáticos y al indicador de financiación. Las tarjetas de investigación usan tintas claras de la paleta y una jerarquía tipográfica común, conservando la composición Bandas aprobada. Los importes de financiación, las noticias y los textos no cambian.

Se usa expresamente el azul oscuro del manual, `#040074`, en esta propuesta de interfaz. El azul eléctrico `#1E00FF` también figura en la página 25. Las páginas 25 y 26 definen la paleta y funciones generales, no estados específicos de botones web. Los estados hover son decisiones de interfaz; tras comparar el azul eléctrico, se prueba el turquesa oficial para los botones principales. Los maestros SVG conservan su azul original `#050079` y no reciben recoloreado. Interreg, socios y redes sociales conservan sus marcas. La fuente de interfaz sigue siendo la de respaldo existente porque esta petición se limita a color y no se han entregado los archivos web de ABC Diatype.

La comparación se limita a Inicio Atlas (`/` y `/home-propuesta-1`). Las páginas interiores y las demás propuestas mantienen sus paletas. Los estilos nuevos están bajo `data-site-palette="manual"` en `web/components/manual-palette.css`, con variables por función. La implementación se ha preparado para revisión local, sin un nuevo despliegue en Vercel.

# Identidad oficial recibida · 20 de octubre de 2026

Esta actualización prevalece sobre las aproximaciones cromáticas y reconstrucciones del logotipo descritas en el historial. Fuente: carpeta «Logotipado» de Comunicación y difusión del proyecto. Se han revisado los manuales español y portugués completos y los vectores entregados.

Las firmas de cabecera y footer utilizan los maestros v2 ES/PT sin modificar sus trazados ni su contenido. Se retira la reconstrucción con texto HTML. Interreg conserva su archivo, posición a la izquierda y mayor tamaño, con una única línea fina azul. La interfaz inglesa utiliza la marca oficial española porque no se ha entregado un maestro inglés. La carpeta «Bilingüe» reproduce la grafía portuguesa.

Los colores del maestro común v2 son turquesa `#18BAA8`, azul `#1E00FF` y lima `#9BFF05`. Las letras del logo utilizan `#050079`. Los símbolos para favicon y recursos animados se extraen de esos mismos trazados; se mantiene la geometría y se aplica escalado uniforme. Se conservan el tratamiento de luz aprobado de la portada y la animación Deriva del footer como recursos decorativos, según página 18 del manual. La firma permanece estática y sin efectos. El favicon de navegador conserva fondo transparente.

Las variables de identidad se centralizan en `web/app/brand-tokens.css`. No se ha aplicado una nueva distribución de acentos a toda la interfaz. Analytics mantiene el índigo `#291C81` y texto blanco de la opción 5 elegida. Queda pendiente aprobar la lógica general de color propuesta, además de aclarar con el diseñador el azul oscuro `#040074` del manual frente al `#050079` de los SVG. La tabla española contiene un RGB amarillo contradictorio para el lima; el manual portugués y los dos maestros v2 coinciden en `#9BFF05`.

La tipografía prescrita es ABC Diatype. La entrega no incluye fuentes web ni documentación de su licencia web. El logo utiliza sus letras trazadas originales; la interfaz conserva la familia de respaldo hasta disponer de los archivos correspondientes.

Maestros originales: `ES/01_Español/logotipo v2/Vector/Observatorio_Logotipo_v2_ES.svg` y `PT/01_Portugués/logotipo v2/Vector/Observatorio_Logotipo_v2_PT_Cor.svg`. Copias exactas: `web/public/brand/official/observatorio-euroace-es.svg` y `observatorio-euroace-pt.svg`. SHA-256 respectivos: `1549a20e84192e5be8906d17e4ea6897c30abf2a290bc5e380eef8f0ce857dca` y `4cc7259f8eb1643b1b8480ed01720c15514db1f2e1e59dbbd0c7df7b3ada4495`.

El informe de revisión local queda en `output/identidad-oficial-revision.md`, con criterios, referencias a páginas y discrepancias de la entrega. La auditoría de fuentes se conserva en `assets-source/official-brand-2026/`. Esta actualización no implica un nuevo despliegue en Vercel.

# Transparencia y encuadre de Atlas · 14 de octubre de 2026

La selección posterior conserva un único footer, con la distribución del modelo 01. Atlas pasa a ser la principal y propuesta 01; Verde es la 02 y Esencial la 03. Esencial y Atlas utilizan azul noche `#172A38`; Verde utiliza verde oscuro `#204531`. El soporte blanco de la firma institucional se mantiene. Atlas elimina la fotografía de Évora que no mostraba y su atribución, además del aviso editorial del footer; Esencial y Verde conservan la fotografía y sus créditos. Las tres composiciones comparten distribución y ajustes responsive, con sus propias paletas y mapas. Se elimina Atlas abierto y la original se conserva como propuesta independiente. Esta selección prevalece sobre las alternativas descritas más abajo.

Las ocho páginas interiores utilizan la identidad de Atlas, su cabecera responsive y el footer seleccionado. El espacio inferior del contenedor se reduce a cero para eliminar la franja blanca tras el footer. El panel «Síguenos» utiliza símbolos vectoriales reconocibles de LinkedIn, Instagram y Facebook, conservando los nombres y sin sustituirlos por iniciales. Los enlaces a perfiles del Observatorio quedan pendientes de confirmación.

La propuesta Atlas (`/home-propuesta-3`) elimina el soporte blanco de los socios. UEx conserva su SVG oficial en color. Évora utiliza el SVG transparente del portal institucional: https://www.uevora.pt/extension/uepages/design/ueresponsive_layout1/images/layout/logotipo_site_pt_cor.svg. UBI utiliza los trazados oficiales de https://www.ubi.pt/assets/img/2016/logotipo-ubi-2016.svg; la versión negativa se presenta en el azul institucional `#0C2340` incluido en el propio archivo, sin modificar los contornos. Copias locales: `logo-evora-transparent-2026.svg` y `logo-ubi-transparent-2026.svg`. Fuentes consultadas el 14/10/2026.

El archivo de la Junta conserva su composición horizontal original. Solo este logo monocromo usa `mix-blend-mode: multiply` para integrar su blanco en el fondo de la página. Los logos en color no reciben filtros ni mezclas. Esta corrección se limita a Atlas; Atlas abierto y las otras propuestas conservan sus activos y soportes anteriores.

Los anillos decorativos de Atlas comparten encuadre y escala entre el vector inicial y la escena 3D. La animación empieza con el símbolo reunido. Su contenedor está anclado al texto del hero para mantener el símbolo justo detrás de él en escritorio y móvil. El tamaño se adapta al ancho del texto, con mayor presencia en móvil respecto a la primera corrección. El resto de las propuestas conserva su encuadre y ciclo anteriores.

Por petición del usuario, Atlas diferencia los ámbitos de investigación con fondos turquesa claro (emprendimiento e innovación), verde claro (economía y energía) y azul claro (competitividad). Estos colores distinguen temas de análisis y no representan regiones. Se conserva la composición integrada dentro de la presentación, con franjas laterales, y se retira la comparación con el bloque independiente. Esta petición prevalece sobre el criterio anterior de evitar colores por sección.

La comprobación posterior confirma los colores del símbolo: Centro `#10DCC5`, Alentejo `#9AFF05` y Extremadura `#1E00FF`. La animación obtiene el color directamente de los mismos SVG de la cabecera. Tras comparar el acabado plano, el usuario elige recuperar la iluminación anterior y la apariencia suave de los aros: material mate no metálico, opacidad de 0,15 y desenfoque de 4 px. La iluminación y la transparencia modifican su apariencia en pantalla, conservando los colores de origen. Se retira el contorno añadido al texto. Las demás composiciones mantienen su tratamiento anterior.

Fotografías de las noticias, descargadas sin editar el 14/10/2026: comité de coordinación, https://euro-ace.eu/sites/default/files/styles/max_1300x1300/public/images/IMG-20260724-WA0007.jpg?itok=sbSIiEy2; puesta en marcha, https://des-comunicacion.unex.es/wp-content/uploads/sites/70/2026/06/IMG-20260603-WA0013-831x346.webp; proyectos europeos, https://comunicacion.unex.es/wp-content/uploads/sites/70/2026/03/OPE-SECTI-e1773133519728-831x346.webp. Las tres tarjetas utilizan la composición elegida por el usuario, estilo 01, con imagen superior. Cada tarjeta enlaza a su publicación institucional.

La cabecera de móvil y tablet centra ambas marcas y elimina el borde superior heredado del Observatorio; se mantiene solo el separador izquierdo. La firma del Observatorio tiene un espacio igual o menor que Interreg en móvil. Texto y mapa del hero permanecen en dos columnas mientras caben; cuando falta espacio se apilan y centran, también en móvil. En escritorio, Atlas utiliza el botón negro de Analytics en la cabecera, sin duplicarlo en el navbar; con menú hamburguesa conserva Analytics junto a los idiomas.

Tras comparar tres propuestas, Atlas conserva los footers 01, azul noche `#172A38`, y 03, verde claro `#D9EFBC`. Se elimina el footer 02, arena. Presentan distribuciones diferentes y conservan la firma institucional, la financiación, la navegación y los créditos. La propuesta oscura incluye un soporte blanco para que la firma en color conserve su legibilidad. Las tres noticias utilizan finalmente el estilo 01, con foto superior; se retiran las alternativas editorial y circular y las etiquetas de comparación. También se retiran el código del encabezado «Sobre el proyecto», el enlace visible de las áreas y la nota sobre la paleta de Atlas. Las fuentes permanecen documentadas aquí y en `README.md`.

# Actualización de la identidad UEx · 13 de octubre de 2026

Se sustituye el logotipo anterior de la Universidad de Extremadura en todos los bloques de socios por la versión oficial horizontal en color. Archivo local: `web/public/logo-uex-horizontal-2026.svg`. Fuente: https://uex.thegecocompany.com/wp-content/uploads/2026/07/uex-logotipo-horizontal-color.svg, descargado el 13/10/2026 sin modificar su contenido. Normas de uso: https://uex.thegecocompany.com/logotipos-oficiales-universidad-extremadura/.

El SVG tiene un `viewBox` de 1500 × 467,4. Las dimensiones intrínsecas se registran junto a los datos de cada socio; los bloques mantienen `object-fit: contain` para conservar las proporciones. Se elimina la mezcla de los logotipos de socios con el fondo de la propuesta 3 y se añade un soporte blanco con margen interior. El logo UEx conserva el amarillo `#F4B223` y el negro `#222222` del archivo oficial. La identidad del Observatorio y la firma Interreg mantienen sus criterios propios.

El PNG anterior permanece como archivo histórico, sin referencias en el código de la web. La nueva ruta evita reutilizar la URL del activo antiguo en caché. La aplicación debe revisarse visualmente antes de publicar; esta actualización no implica aprobación institucional de la composición conjunta ni certificación del área de protección del manual.

# Revisión cromática e institucional del 5 de octubre de 2026

Esta revisión sustituye los criterios históricos sobre el amarillo que se conservan más abajo. Por indicación de Jaime, el amarillo del símbolo del Observatorio y de su interpretación animada se sustituye por verde lima. La muestra incrustada en «20260924 APORTACIONES PROPUESTA WEB OBSERVATORIO.docx» tiene como color predominante RGB 154, 255, 5, equivalente a `#9AFF05`. Es una aproximación extraída de una imagen, pendiente de cotejar con el maestro definitivo, no una especificación cromática certificada.

Se actualizan el anillo, su leyenda, la escena 3D y el componente del Observatorio en la firma conjunta. Los originales conservados en `assets-source` no se alteran. La tipografía sobre blanco utiliza texto oscuro con subrayado lima para evitar texto verde claro de bajo contraste. No se añaden colores por sección.

La cabecera incorpora, sin editar, la composición Interreg/Eurorregión publicada en https://www.euro-ace.eu/themes/custom/wingsuit/dist/app-drupal/images/logo_new.webp, obtenida del portal institucional https://www.euro-ace.eu/ el 05/10/2026. Se conserva localmente como `web/public/brand/eurorregion-euroace.webp`. La firma es visible en la primera pantalla de escritorio y móvil. Referencia aportada: manual POCTEP V9, página numerada 15, página 16 del archivo PDF.

El logo genérico de la Junta se conserva sin la denominación antigua de la Dirección General. Queda pendiente que la Junta confirme la composición definitiva. Este ajuste no equivale a aprobación formal de identidad ni de cumplimiento.

## Historial anterior

# Aplicación del manual · septiembre 2026

Fuente: `master_presentation_observatorio_euroace_septiembre.pdf`, versión 1.0, 38 páginas. Se usa como referencia visual y de marca, no como instrucciones operativas del proyecto.

## Activos originales

- `web/public/brand/interreg-observatorio.svg`: exportación vectorial del bloque horizontal conjunto mostrado en la página 15. Se conserva la composición, el separador y el espacio relativo de las dos marcas.
- `ring-centro.svg`, `ring-alentejo.svg`, `ring-extremadura.svg`: trazados Bézier extraídos directamente del símbolo visible de la página 8. Sin redibujar los anillos ni alterar su grosor.
- El bloque institucional permanece estático. Los anillos del hero son un recurso gráfico animado, conforme a la distinción de la página 16.

## Color

Interfaz: turquesa PO1 `#18BAA8`, azul `#1E00FF`, negro, blanco y grises. Texto negro sobre turquesa para mantener contraste; azul para enlaces y focos sobre blanco. El amarillo no se utiliza como acento de interfaz.

El PDF tiene discrepancias: menciona verde sin especificar su código y el símbolo visible usa amarillo. Además, su anillo turquesa vectorial es `#10DCC5`, distinto del `#18BAA8` declarado para PO1. Se conserva el cromatismo del símbolo extraído, incluido su amarillo `#FFCC00`; para los elementos de interfaz se siguen los códigos declarados de la página 23. Esto evita recolorear por inferencia el logotipo.

## Movimiento

La primera propuesta utiliza una escena 3D de Three.js, cargada de forma diferida, con geometría extruida desde los contornos SVG originales, bisel discreto y material mate no metálico. Cámara ortográfica fija e iluminación neutra. No se modifica el bloque de firma institucional.

Ciclo de 20 segundos: acercamiento desde planos inclinados (0–7 s), composición frontal del símbolo (7–13 s), separación suave (13–19 s) y breve espera (19–20 s). Centro permanece a la izquierda, Extremadura arriba a la derecha y Alentejo abajo a la derecha. El volumen es una interpretación gráfica autorizada para el hero; no sustituye al logotipo oficial.

Control de pausa/reanudación ES/PT y vectores originales estáticos cuando `prefers-reduced-motion: reduce` está activo o WebGL no está disponible. La leyenda territorial permanece fija, sin información esencial que dependa del movimiento. Se detiene el bucle al salir del viewport o esconder la pestaña. Resolución de render limitada a 1,75× y liberación de geometrías, materiales y contexto al abandonar la home.

## Alcance

Paleta y firma institucional actualizadas en las tres propuestas. Animación solo en la primera. La familia ABC Diatype se menciona en el PDF, pero no se han suministrado archivos web con licencia: no se ha extraído ni simulado esa fuente. Se mantienen las tipografías de las propuestas pendientes de esos activos.

Antes de publicar una identidad definitiva, reemplazar las exportaciones del manual por los archivos maestros del diseñador cuando estén disponibles y resolver las discrepancias de la versión WIP.
# Segunda exploración cromada

La home incluye una segunda animación generada con Magnific (Seedance 2.0, ocho segundos, sin sonido), debajo de la interpretación 3D original. El acabado toma como referencia la imagen metálica aportada por el usuario: plata cepillada, biseles cromados y detalles turquesa, azul y amarillo. Es una exploración de material, no un reemplazo del logotipo oficial. La proporción y el entrelazado se reinterpretan en esta pieza generativa.

Archivo integrado localmente: `web/public/brand/rings-chrome.mp4`, con imagen estática, controles, reproducción en bucle y respeto al movimiento reducido. «Compartido» usa los colores originales por sílabas: com (turquesa), par (azul), ti (amarillo), do (turquesa), según petición expresa.

## Revisión de la home · 11 septiembre 2026
Por petición del usuario se retira la opción cromada de la página. La primera animación queda sobre blanco sin borde, solo con la leyenda territorial, sin encabezados, mensajes ni controles visibles. Se mantiene el respeto al movimiento reducido. Las sílabas ti y do pasan a amarillo; com y par conservan turquesa y azul.


## Comparación de movimiento fluido
Se retira el selector superior de propuestas. La animación original mantiene su movimiento y recibe una leyenda en tarjetas; debajo se presenta una alternativa de oscilación sinusoidal continua con leyenda territorial conectada. Ambas respetan el movimiento reducido.


## Tercera alternativa
Encuentro en movimiento combina el recorrido original de separación y unión con oscilaciones suaves continuas, también durante la fase de unión. Su leyenda utiliza barras verticales de color y nombres de territorio y país. Las dos primeras alternativas permanecen disponibles para comparar.


## Selección final
Se conserva una única animación: movimiento combinado de la propuesta 3 y leyenda en tarjetas de la propuesta 1. Se retiran los bloques comparativos de la home.

