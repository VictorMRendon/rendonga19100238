<center>

# Eventos en Javascript

#### Captura y Propagación
___
![s](https://www.javascripttutorial.net/wp-content/uploads/2020/02/JavaScript-DOM-Level-2-Event.png)

</center>

___

<center> 

## Bubbling (Propagación)
#### **Descripción** </center>

****

El evento ***bubbling*** se propaga comenzando desde el elemento en que fue invocado hasta el elemento más lejano o hasta el que esté en la parte superior de la jerarquía que tenga la página web. 

![s](https://www.javascripttutorial.net/wp-content/uploads/2020/02/JavaScript-event-bubbling.png)

En otras palabras, primero se ejecutan las instrucciones donde se invoca el elemento, después las etiquetas o instrucciones que estén en el elemento superior inmediato, continuando hasta llegar al elemento que encabece la página web.

****
<center> 

## Capturing (Captura)
#### **Descripción** </center>

****

El evento ***capturing*** es lo inverso al evento ***bubbling***, ya que empezará a mostrar el elemento que encabeza la página web, continuando con el segundo y así sucesivamente hasta llegar al elemento en donde fué invocado el evento.

![s](https://www.javascripttutorial.net/wp-content/uploads/2020/02/JavaScript-event-capturing.png)

****
<center> 


## **Sintaxis** </center>

****

######addEventListener(type, listener, useCapture)

- **type:** Se especifica el tipo de evento.
- **listener:** Establecemos la función que se ejecutará.
- **userCapture:** Valor booleano. El valor booleano indica la fase del evento. De forma predeterminada, useCapture es **false**. Significa que está en la fase _bubbling_; por el contrario, si useCapture es **true**, estaremos trabajando con la fase _capturing_.
  
  ![s](https://raw.githubusercontent.com/VictorMRendon/rendonga19100238/master/Parcial2/LayoutGrid/img/cod.png)

  
___
<center> 

#### **Información personal** </center>

****
- **Materia:** *Programación Web*
- **Nombre:** *Víctor Manuel Rendón García*
- **No.Control:** *19100238*
- **Parcial:** *2*
- **Tarea:** *Eventos JS*
- **Fecha de entrega:** *02/04/2022*