# Password Gen

## Descripción
Este pequeño proyecto está realizado con unas pocas líneas de código en HTML5 y Javascript.

Este proyecto es un generador de password aleatorios. Por sí solo no es gran cosa lo sé, pero esta pequeña porción de código la puedes implementar en muchas otros sistemas, para autentificar usuario o verificar cuentas por ejemplo, sé que este tipo de módulos ya vienen dados en otras librerías o sistemas, pero quiero aprender a programar para hacer este tipo de cosas, poder crear yo mismo el código, empezar por cosas simples como esta y quien sabe donde se puede llegar.



### Link de acceso
https://jgalvandesign.com/passGen/passGen.html



### Tecnologías
HTML5 con PUG, CSS con SASS, Javascript


### LICENCIA
MIT



## INSTALACIÓN
Puedes descargar los archivos desde Github directamente o clonar el repositorio.

URL de Descarga: https://github.com/Jgalvan7/passGen.git

Clonar erpositorio: $ git clone https://github.com/Jgalvan7/passGen.git



## CÓMO USAR
Para implementarlo en otro proyecto, simplemente debe agregar estas tres líneas de código al proyecto y guardar los archivos de CSS y JS en las carpetas correspondientes:



En el HEAD:

``<link rel="stylesheet" href="/css/styles.css">``

En el BODY:

``<section class="moduloPassGen">``

``<p class="moduloPassGen__gen" id="yourPass"></p>``

``<div class="moduloPassGen__bnt">``

``<input type="button" value="Generar password aleatoria" id="passGen">``

``</div>``

``</section>``

``<script src="./passGen.js"></script>``


## Actualizaciones y Parches
### Versión
2.0


### Fecha último Update
11/10/2022


### Notas del último parche 11/10/2022
En este update se ha corregido un typo que tenia el texto. 

Se ha agregado un botón para copiar las password generadas. 

Se ha modificado el código de JS para que en la parte del generador OTP la password sea solo numérica y de 6 dígitos.



### Notas del último parche 05/09/2022
En este update se ha modificado la estructura de carpetas para incluir los archivos para los preprocesadores SASS y PUG.

Se ha incluido una versión para generar una password aleatorio como si se tratara de un OTP.

Se han cambiado los archivos de CSS y se han incluido los estilos para la animación de OTP.

Se ha modificado el código JS en consecuensia de los cambios.



### Parche 07/10/2021
Este es el update inicial, con una versión estable del proyecto, en futuras actualizaciones se mejorara el código para hacerlo mas compacto.
