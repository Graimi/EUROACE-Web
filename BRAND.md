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

