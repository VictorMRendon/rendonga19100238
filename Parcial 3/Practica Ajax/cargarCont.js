function ajaxFunction() {

    // Creamos el objeto XMLHttpRequest para comunicarnos con el servidor
    //-------------------------------------------------------------------
    var ajaxRequest;
    ajaxRequest = new XMLHttpRequest();

    // Funcion para procesar la respuesta del servidor
    //-------------------------------------------------
    ajaxRequest.onreadystatechange = function() {
        if (ajaxRequest.readyState == 4) {
            document.getElementById("contenido").innerHTML = ajaxRequest.responseText;
        } else {
            document.getElementById("contenido").innerHTML = 'Cargando.....';
        }
    };

    ajaxRequest.open("GET","cargarPet.php",true);  //Configurar la solicitud
    ajaxRequest.send();                                  //Enviamos la solicitud
}