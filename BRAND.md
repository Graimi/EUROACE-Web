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

La primera propuesta sustituye el esquema territorial por los tres anillos originales. Ciclo de 20 segundos con posiciones de reposo, separación suave y superposición, inspirado en las páginas 3 y 26–27. Los anillos se trasladan sin deformarse ni cambiar de color y regresan a su disposición original. Centro permanece a la izquierda, Extremadura arriba a la derecha y Alentejo abajo a la derecha.

Control de pausa/reanudación ES/PT y estado estático cuando `prefers-reduced-motion: reduce` está activo. La leyenda territorial permanece fija, sin información esencial que dependa del movimiento.

## Alcance

Paleta y firma institucional actualizadas en las tres propuestas. Animación solo en la primera. La familia ABC Diatype se menciona en el PDF, pero no se han suministrado archivos web con licencia: no se ha extraído ni simulado esa fuente. Se mantienen las tipografías de las propuestas pendientes de esos activos.

Antes de publicar una identidad definitiva, reemplazar las exportaciones del manual por los archivos maestros del diseñador cuando estén disponibles y resolver las discrepancias de la versión WIP.
