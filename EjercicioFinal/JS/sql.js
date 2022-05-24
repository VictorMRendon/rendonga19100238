$('#btnSQL').ready(function(){

    document.getElementById("btnSQL").addEventListener("click",function(){
        //let parid=prompt("Teclee el ID a consultar");

        //$.post('conexion.php','json');

       // let promesa = fetch('conexion.php');
        //promesa.then(function(respuesta){ console.log(respuesta); console.log(respuesta.json() ); });

        let parid=prompt("Teclee el ID a consultar");

        $.post('PHP/conexion.php',{par1:parid},function(data){
          refrescar(data);
          },'json');

    });
    function refrescar(consulta) {
        console.log(consulta);
                 $('#nom').val(consulta.Nombres);
                $('#ape').val(consulta.Apellidos);  
                $('#curp').val(consulta.CURP);
                $('#FechanNaciM').val(consulta.FechaNaci);
                $('#sexo').val(consulta.Genero);
                $('#dire').val(consulta.Direccion);
                $('#tel').val(consulta.Telefono);
                $('#pais').val(consulta.Pais);
                $('#estado').val(consulta.Estado);
                $('#ciudad').val(consulta.Ciudad);
  }

   
});