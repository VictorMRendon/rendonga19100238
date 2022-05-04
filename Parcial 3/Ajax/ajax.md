<center>

# AJAX

#### Documentación acerca de AJAX
___
![s](https://www.nesabamedia.com/wp-content/uploads/2019/11/Fungsi-AJAX.png)

</center>

___
<center> 

## **Descripción** </center>

****

*¿Qué es asíncrono?*
Es un suceso que se encuentra completamente aislado y sin continuación o correspondencia en el tiempo con otro suceso, sea o no similar.

*¿Qué es la programación asíncrona?*
En un lenguaje de programación asíncrono como JavaScript, las tareas pueden ejecutarse secuencialmente, esto significa que podemos indicar que algunas tareas se pasen a segundo plano y esperen a su turno para ser reanudadas y ejecutadas.

Esta característica del lenguaje existe para mejorar el rendimiento del mismo, porque nos permite aprovechar al máximo las capacidades del equipo en el que se está ejecutando nuestro código.

Por lo general las tareas que se esperan sean más tardadas, o que necesiten esperar respuesta de algún otro elemento del sistema, son candidatas a ser delegadas a este proceso de espera y ejecución.

___
<center> 

## **Definición** </center>

****

*¿Qué es AJAX?*
Acrónimo de **Asynchronous JavaScript And XML** o **JavaScript asíncrono y XML**, es una técnica que nos permite comunicarnos con otros servicios para obtener/añadir/modificar/borrar información de manera asíncrona (a continuación de ser cargada la web). Nos abre la puerta a una cantidad ilimitada de información por parte de otros servicios (estadísticas, bases de datos, cálculos…) que bien tratada enriquecerán la navegación con estructuras nuevas de HTML o elementos que mejoran la experiencia.

El sistema generalmente comprende:

- HTML/XHTML para el lenguaje principal y CSS para la presentación.
- El Modelo de objetos del documento (DOM) para datos de visualización dinámicos y su interacción.
- XML para el intercambio de datos y XSLT para su manipulación. Muchos desarrolladores han comenzado a reemplazarlo por JSON porque es más similar a JavaScript en su forma.
- El objeto XMLHttpRequest para la comunicación asíncrona.
- El lenguaje de programación JavaScript para unir todas estas tecnologías.

___
<center> 

## **Funcionamiento** </center>

****

![s](https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2019/05/que-es-ajax-diagrama.jpg)

*¿Cómo funciona?*
1. El navegador crea una llamada de JavaScript que luego activará XMLHttpRequest.
2. En segundo plano, el navegador web crea una solicitud HTTP al servidor. 
3. El servidor recibe, recupera y envía los datos al navegador web.
4. El navegador web recibe los datos solicitados que aparecerán directamente en la página. No se necesita recargar.


___
<center> 

## **Comandos** </center>

****

Cuando gestionamos información, independientemente del lenguaje o base de datos, disponemos 4 acciones básicas elementales.

1. Crear (Create).
2. Leer (Read).
3. Actualizar (Update).
4. Borrar (Delete).

Cuando realizamos peticiones AJAX disponemos del mismo sistema aunque usamos verbos para comunicarnos con el servidor.

1. GET: Leer.
2. POST: Crear.
3. PUT: Actualizar.
4. DELETE: Borrar.
5. O también llamados métodos (*Methods*).


___
<center> 

## **Sintaxis** </center>

****

Para usar AJAX, hemos de emplear el objeto XMLHttpRequest para lanzar una petición HTTP al servidor con el método 
**open(getPost, recurso, esAsync)**

Donde:
- *getPost:* cadena con el valor GET o POST dependiendo del protocolo deseado
- *recurso:* URI del recurso que se solicita
- *esAsync:* booleano donde true indica que la petición en asíncrona

Posteriormente se recibe la respuesta mediante la propiedad responseText.
___
<center> 

#### **Información personal** </center>

****
- **Materia:** *Programación Web*
- **Nombre:** *Víctor Manuel Rendón García*
- **No.Control:** *19100238*
- **Parcial:** *3*
- **Tarea:** *Investigación sobre Ajax*
- **Fecha de entrega:** *03/05/2022*