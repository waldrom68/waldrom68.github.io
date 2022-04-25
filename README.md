# waldrom68.github.io  / waldrom68@gmail.com

## POR EL MOMENTO ES UN HTML PLANO, PERO EL OBJETIVO FINAL ES QUE SU MAQUETADO SURJA DESDE EL SISTEMA DE PLANTILLAS DE DJANGO-PYTHON, USANDO LOS DATOS DE UNA DB DE MySQL ##

# Pagina Web desarrollada con puro CSS3, JS #

## Primer proyecto que subo ##
Es un html que pretende presentar mi CV personal con un menú dinámico cuenta con las siguientes funcionalidades:

    1. Versión RESUMEN o COMPLETA
    2. Modo Dark / Light
    3. Modo responsivo
    4. Menú con funcionalidad al touch

En su código se presenta las siguientes caracteristicas:

    1. ICOS que son SVG incrustados en el codigo del HTML.
    2. Sistema dark-Light utilizando <meta name="prefers-color-scheme" content="">.
    3. Se utilizan 2 tipos de fonts, uno vinculado a fonts.googleapis.com (@import url...)y otro descargados al proyecto (@font-face...).
    4. Se utilizan variables de CSS en :root para facilitar mantenimiento.
    5. Se han adaptado 2 codigos de terceros: gráfico de tortas (codepen,   mejorado funcionalidad) y la barra menu (w3s, sólo para ahorrar tiempo)

# Pendientes #
    0. Reemplazar los Lorem por información.
    1. Separar el código CSS y JS del HTML.
    2. Se integre al proyecto padre CV-Generate de Python-Django.
    3. Limpiar y ordenar código.
    4. Agregar el patrón de diseño Singleton.
    5. Quitar eventos escritos directamente en el codigo HTML, y cargar los eventos desde JS tras la carga de la página.
    6. Autoeliminar <scrip> que pierden funcionalidad tras la lectura del html.








