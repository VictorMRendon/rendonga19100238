<center>

# Box Model


## Modelo de caja
___
![s](https://www.creatuwebnicaragua.com/wp-content/uploads/2015/08/modelo-de-caja.gif)

</center>

      
___
<center> 

#### Descripción </center>

****
Un *modelo de caja* es un sistema que tiene el navegador para interpretar las distintas partes de un elemento HTML. Dicho modelo condiciona el diseño de todas las páginas web, ya que logra representar todos los elementos de una página en cajas rectangulares. Gracias al CSS, se pueden modificar todas sus características. 
______
 <center> 
 
#### Propiedades </center>

****
- ***Margin (Márgen):*** Es la parte exterior del elemento, encargada de separarlo de las demás cajas.

  
- ***Border (Borde):***  Línea que encierra completamente el contenido y su relleno.
- ***Padding (Relleno):*** Es el márgen interno del elemento, espacio existente entre el *contenido* y el *borde*.
    - También se pueden modificar cada uno de sus lados:
      *padding-top*, *padding-right*, *padding-bottom* y *padding-left*.

- ***Content (Contenido):*** Es el contenido HTML del elemento (una imagen, un párrafo, una lista de elementos, un link, una tabla, etc.)
- ***Background:*** Asigna un color de fondo a la caja. 
    - background-image: Asigna una imagen de fondo a la caja mediante el valor *url*.

______
 <center> 
 
#### Dimensiones </center>
****
Para asignarle un tamaño de los elementos HTML de la página web, es necesario modificar sus propiedades:
- ***width (ancho).***
- ***height (alto).***

El valor que tienen por defecto al momento de crear el elemento es *auto*, con el cual el navegador se encargará de darle un tamaño correcto en base a la posición donde se encuentre dicho elemento.

El tamaño por defecto (automático) dependerá del tipo que sea el elemento.

Se pueden establecer rangos máximos a estas propiedades:
- *max-width: 100px*
- *min-width: 0px*
- *max-height: 10px*
- *min-height: 1px*

_____
 <center> 
 
#### Zonas </center>
****
Para referenciar una zona en específico de algún elemento, se utilizan los siguientes conceptos:
- ***Top:*** Parte superior.
- ***Left:*** Lado izquierdo.
- ***Right:*** Lado derecho.
- ***Bottom:*** Parte inferior.
- ***Center:*** Parte central.
  
![s](https://lenguajecss.com/css/modelo-de-cajas/que-es/positions.png)


_____
 <center> 
 
#### Posicionamiento </center>
****
Gracias al CSS es posible posicionar a voluntad cualquier elemento en una zona en específico de la página web. 

Existen 5 modelos para posicionar una caja:

- *Estático (Predefinido):* Por defecto, cada nuevo bloque creado aparecerá debajo del anterior, a menos que se especifique de otra manera.
  
- *Relativo:* Se desplaza el bloque de su posición original hacia la que se defina. 

![s](https://uniwebsidad.com/static/libros/imagenes/css/f0504.gif)

- *Absoluto:* Establece de forma exacta la posición de una caja, provocando que el resto de elementos se mueva de su lugar original o exista una vista empalmada de los mismos.
  
![s](https://uniwebsidad.com/static/libros/imagenes/css/f0516.gif)

- *Fijo:* Vuelve inamovible una caja, ésta mantendrá siempre la misma posición en la página, sin tomar en cuenta los demás elementos o la zona que esté viendo el usuario.

![s](https://www.todo-argentina.net/cursos/css/imagenes/pagina39.jpg)

  
- *Flotante:* Desplaza todas las cajas hacia el final de la línea en que se encuentren, ya sea a la derecha o izquierda.
  
![s](https://www.arkaitzgarro.com/css2/images/cap05/posicionamiento-float-03.png)

______
 <center> 
 
### **Fuentes de información** </center>

****
- [Fuente 1](https://www.diegocmartin.com/modelo-de-cajas-y-posicionamiento-css/)
- [Fuente 2](https://uniwebsidad.com/libros/css/capitulo-5/posicionamiento)
- [Fuente 3](https://lenguajecss.com/css/modelo-de-cajas/que-es/)
- [Fuente 4](https://www.laurachuburu.com.ar/tutoriales/modelo-de-caja.php#:~:text=Definici%C3%B3n,de%20l%C3%ADnea%20o%20de%20bloque.)
- [Fuente 5](https://uniwebsidad.com/libros/css/capitulo-4) 
- [Fuente 6](https://devcode.la/tutoriales/modelo-caja-css/)

___
<center> 

#### Información personal </center>

****
- **Materia:** *Programación Web*
- **Nombre:** *Víctor Manuel Rendón García*
- **No.Control:** *19100238*
- **Parcial:** *1*
- **Tarea 1:** *Modelo de Caja*
- **Fecha de entrega:** *08/02/2022*