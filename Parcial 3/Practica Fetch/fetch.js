

$('#btnFetch').ready(function(){

    document.getElementById("btnFetch").addEventListener("click",function(){

        let promesa = fetch('Registro.php');
        //promesa.then(function(respuesta){ console.log(respuesta); console.log(respuesta.json() ); });

       promesa.then( respuesta => respuesta.json() )
               .then(data => {

                $('#nom').val(data.nom);
                $('#ape').val(data.ape);
                $('#curp').val(data.curp);
                $('#FechanNaciM').val(data.FechanNaciM);
                $('#sexo').val(data.sexo);
                $('#dire').val(data.dire);
                $('#tel').val(data.tel);
                $('#pais').val(data.pais);
                $('#estado').val(data.estado);
                $('#ciudad').val(data.ciudad);
               } );
         //promesa.then( respuesta => respuesta.json() )
         //      .then(datos => console.log(datos) );
    });
   
});