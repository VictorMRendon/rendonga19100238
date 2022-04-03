var pais = document.getElementById("spais");
var estado = document.getElementById("sestado");
var ciudad = document.getElementById("sciudad");

var paises = ['México','USA'];
var estados = ['Tamaulipas','Texas']
var ciudades = ['Nuevo Laredo','Reynosa','Tampico', 'Houston', 'Laredo', 'McAllen']

function mostrarLugares( arreglo, mostrarEn ){ 
    var itemsView = '<opction selected disables> Escoja una opción... </opction>';

    for(var i=0; i<arreglo.length; i++){
        itemsView += '<opction value="' + arreglo[i] +'"> ' + arreglo[i] +' </opction>';
        itemsView
    }

    mostrarEn.innerHTML = itemsView;
}

var op = '<opction selected disables> Escoja una opción... </opction>';
pais=insertAdjacentElement("beforebegin", op);
//mostrarLugares(paises, pais);