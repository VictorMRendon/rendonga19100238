<center>

# Flexbox

#### Propiedades del Felxbox
___
![s](https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2017/03/flexbox-cssgrid.png?fit=666%2C370&quality=100&strip=all&ssl=1)

</center>

___
<center> 

## **Descripción** </center>

****
Es un conjunto de propiedades y valores que van a permitir personalizar a un alto nivel de detalle la disposición de los elementos dentro de un contenedor (y  por tanto de la página web). No solo se trata de colocar los elementos en una fila sino también de alinearlos y distribuir los espacios entre los elementos y sus tamaños dentro del bloque contenedor.

Flex es un valor de display que puede modificarse luego con diferentes propiedades de estilo para crear el layout que necesitemos.

Se creó para mejorar la forma en la que se hace diseño responsive, evitando así el uso de float, escribiendo menos código y facilitando el posicionamiento de elementos, incluso no teniendo noción del tamaño de éstos. Básicamente la idea de Flexbox es poder alterar el ancho, alto y posicionamiento de elementos de la mejor manera con el espacio del que disponemos.

___
<center> 

## **Elementos** </center>
****
![s](https://creatuweb.espaciolatino.com/imgs/flex-elementos.jpg)

La estructura de Flexbox se compone de:

- El **Contenedor-Flex** es nuestro contenedor _padre_, y es él quién va a contener a todos los elementos hijos a los cuáles queremos posicionar.
- El **Elemento-Flex** es nuestro elemento _hijo_, el cual utilizará todo el espacio disponible para ubicarse de acuerdo a las propiedades a las cuales este sometido junto a los demas Elementos-Flex contenidos.

Cada diseño flex esta compuesto por dos ejes: 

- ***Principal*** que define el posicionamiento horizontal de los Elementos-Flex. 
- ***Secundario*** que define el posicionamiento vertical de los Elementos-Flex.

El Contendor-Flex contiene direcciones que definen el origen y el fin del flujo de Elementos-Flex:

- ***Main-start*** / ***main-end***: Los flex ítems se insertan en el contenedor empezando por el lado start, dirigiéndose hacia el lado end.
- ***Cross-start*** / ***cross-end***: Líneas flex se llenan con ítems y se agregan al contenedor, comenzando desde el lado cross start del flex container hacia el lado cross end.
- ***Cross size*** / ***Main size***: El ancho o alto de un flex ítem, dependiendo de lo que haya en la dimensión transversal, es el cross size del ítem. La propiedad cross size puede ser el ancho o el alto del ítem, lo que se encuentre en la transversal.
 

___
<center> 

## **Propiedades para el padre** </center>

****

#### Dirección de los ejes
|Propiedad  |Valores |Funcionamiento |
|-----------|--------|---------------|
|flex-direction|  row / row-reverse /column / column-reverse|Cambia la orientación del eje principal.   
|flex-wrap|nowrap / wrap / wrap-reverse|Evita o permite el desbordamiento (multilínea).   |

###### Descrición de los valores
|Propiedad  |Valores |Funcionamiento |
|-----------|--------|---------------|
|flex-direction|row|1.- Establece la dirección del eje principal en horizontal.|
|           |row-reverse|2.- Establece la dirección del eje principal en horizontal (invertido).|
|           |column|3.- 	Establece la dirección del eje principal en vertical.|
|           |column-reverse|4.- Establece la dirección del eje principal en vertical (invertido).|
|flex-wrap|nowrap|1.- Establece los ítems en una sola línea (no permite que se desborde el contenedor).|
|           |wrap|2.- Establece los ítems en modo multilínea (permite que se desborde el contenedor).|
|           |wrap-reverse|3.- Establece los ítems en modo multilínea, pero en dirección inversa.|

#### Alineación
|Propiedad  |Valores |Funcionamiento |
|-----------|--------|---------------|
|justify-content|flex-start / flex-end / center / space-between / space-around / space-evenly|Da direccionamiento a los elementos hijos en el eje principal (u horizontal).|
|align-content|flex-start / flex-end / center / space-between / space-around / space-evenly / stretch|Ajusta las líneas dentro de un contenedor flex cuando hay espacio extra en el eje transversal (o vertical).|
|align-items|flex-start / flex-end / center / stretch / baseline|Permite distribuir los elementos en un eje, pero esta vez en el eje vertical.|
|align-self|auto / flex-start / flex-end / center / stretch / baseline|Especifica la alineación del elemento seleccionado dentro del FlexBox.|

###### Descrición de los valores
|Propiedad  |Valores |Funcionamiento |
|-----------|--------|---------------|
|justify-content|flex-start|1.- 	Agrupa los ítems al principio del eje principal.|
|           |flex-end|2.- Agrupa los ítems al final del eje principal.|
|           |center|3.- Agrupa los ítems al centro del eje principal.|
|           |space-between|4.- Distribuye los ítems dejando el máximo espacio para separarlos.|
|           |space-around|5.- Distribuye los ítems dejando el mismo espacio alrededor de ellos (izq/dcha).|
|           |space-evenly|6.- Distribuye los ítems dejando el mismo espacio (solapado) a izquierda y derecha.|
|align-content|flex-start|1.- Agrupa los ítems al principio del eje principal.|
|           |flex-end|2.- Agrupa los ítems al final del eje principal.|
|           |center|3.-Agrupa los ítems al centro del eje principal|
|           |space-between|4.- Distribuye los ítems desde el inicio hasta el final.|
|           |space-around|5.- Distribuye los ítems dejando el mismo espacio a los lados de cada uno.|
|           |stretch|6.- Estira los ítems para ocupar de forma equitativa todo el espacio.|
|align-items|flex-start|1.- Alinea los ítems al principio del eje secundario.|
||flex-end|2.- Alinea los ítems al final del eje secundario.|
||center|3.- Alinea los ítems al centro del eje secundario.|
||stretch|4.- Alinea los ítems estirándolos de modo que cubran desde el inicio hasta el final del contenedor.
||baseline|5.- Alinea los ítems en el contenedor según la base del contenido de los ítems del contenedor.|
|align-self|flex-start|1.- Alinea los ítems al principio del contenedor.|
||flex-end|2.- Alinea los ítems al final del contenedor.|
||center|3.- Alinea los ítems al centro del contenedor.|
||stretch|4.- Alinea los ítems estirándolos al tamaño del contenedor.|
||baseline	|5.- Alinea los ítems en el contenedor según la base de los ítems.|
||auto|6.- Hereda el valor de align-items del padre (si no se ha definido, es stretch).|

___
<center> 

## **Propiedades para los hijos** </center>

****

|Propiedad  |Valores |Funcionamiento |
|-----------|--------|---------------|
|flex-grow|0 / número|Número que indica el factor de crecimiento del ítem respecto al resto.|
|flex-shrink|1 / número|Número que indica el factor de decrecimiento del ítem respecto al resto.|
|flex-basis|size / número|Tamaño base de los ítems antes de aplicar variación.|
|order|0 / número|Número (peso) que indica el orden de aparición de los ítems.|

___
<center> 

#### **Información personal** </center>

****
- **Materia:** *Programación Web*
- **Nombre:** *Víctor Manuel Rendón García*
- **No.Control:** *19100238*
- **Parcial:** *2*
- **Tarea 1:** *FlexBox*
- **Fecha de entrega:** *14/03/2022*