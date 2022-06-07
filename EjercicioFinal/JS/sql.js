$(document).ready(function(){

    BloquearCampos(true);

    document.getElementById("btnBuscar").addEventListener("click",function(){
     
        swal("Ingresa el ID a consultar:", {
          content: "input",
        }).then((id) => {
          try {    
                $.post('PHP/conexion.php',{par1:id},function(data){      
                  refrescar(data);                
                },'json');
            } catch (exception) {
                  swal("Error", "Ha ocurrido un error", "error");
            }
        });

        
        // let parid=prompt("Teclee el ID a consultar");

        // $.post('PHP/conexion.php',{par1:parid},function(data){
        //   refrescar(data);
        //   },'json');

    });
    function refrescar(consulta) {
        console.log(consulta);
                $('#idn').val(consulta.idEmpleado);
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

  document.getElementById("btnNuevo").addEventListener("click",function(){
  
    
    //limpiarCampos();  
    try{

      if(!ValidarVacios()){
        if(!ValidarVacios()){
          var strID = document.getElementById("idn").value;
          var strNombre = document.getElementById("nom").value;
          var strApellidos = document.getElementById("ape").value;
          var strCurp = document.getElementById("curp").value;
          var strFecha = document.getElementById("FechanNaciM").value;
          var strDireccion = document.getElementById("dire").value;
          var strGenero = document.getElementById("sexo").value;
          var strTelefono = document.getElementById("tel").value;
          var strPais = document.getElementById("pais").value;
          var strEstado = document.getElementById("estado").value;
          var strCiudad = document.getElementById("ciudad").value;

          
          $.post('PHP/newEmpleado.php',{
                                        var1:strNombre,
                                        var2:strApellidos,
                                        var3:strCurp,
                                        var4:strFecha,
                                        var5:strDireccion,
                                        var6:strGenero,
                                        var7:strTelefono,
                                        var8:strPais,
                                        var9:strEstado,
                                        var10:strCiudad},function (data){
                                        
            },'json');

          swal("Registro completo", "Se agrego el registro correctamente", "success");
          BloquearCampos(true);
          limpiarCampos();
        }
        else {
          swal("Advertencia", "Favor de llenar los campos para continuar con el registro.", "warning");
        }
          
      }
      else {
        swal("Advertencia", "Favor de llenar los campos para continuar con el registro.", "warning");
      }
      

    }

    catch(exception){
      
      swal("Error", "Hubo un problema al capturar la información", "error");
    }
    
  });

  document.getElementById("btnMod").addEventListener("click",function(){

    if(ValidarVacios()){
      swal("Advertencia", "Favor de seleccionar un registro para modificar.", "warning");
      BloquearCampos(true);
    }
    else {

      if(document.getElementById("nom").disabled==true){
        BloquearCampos(false);

      }
      else{
        let strID = document.getElementById("idn").value;
      let strNombre = document.getElementById("nom").value;
      let strApellidos = document.getElementById("ape").value;
      let strCurp = document.getElementById("curp").value;
      let strFecha = document.getElementById("FechanNaciM").value;
      let strDireccion = document.getElementById("dire").value;
      let strGenero = document.getElementById("sexo").value;
      let strTelefono = document.getElementById("tel").value;
      let strPais = document.getElementById("pais").value;
      let strEstado = document.getElementById("estado").value;
      let strCiudad = document.getElementById("ciudad").value;
  
      
      $.post('PHP/editEmpleado.php',{ par01:strID,
                                      par1:strNombre,
                                      par2:strApellidos,
                                      par3:strCurp,
                                      par4:strFecha,
                                      par5:strGenero,
                                      par6:strDireccion,
                                      par7:strTelefono,
                                      par8:strPais,
                                      par9:strEstado,
                                      par10:strCiudad},function (data){
                                    
        },'json');
  
      swal("Operación completa", "Se modificó el registro correctamente", "success");
      BloquearCampos(true);

      }
      
      
    }

      
});

  document.getElementById("btnEliminar").addEventListener("click",function(){
  
    
    
    try{

      swal({
        title: "Confirmar Operación",
        text: "¿Desea eliminar el registro actual?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          var strID = document.getElementById("idn").value;          
          $.post('PHP/deleteEmpleado.php',{ var1:strID},function (data){ },'json');
          limpiarCampos();
          swal("Registro eliminado", "Operación excitosa.", "success");
          swal("Registro eliminado", "Operación excitosa.", "success");
        } else {
          swal("Se ha cancelado la operación.", "Operación cancelada","info");
        }
      });

      
    }

    catch(exception){
      
      swal("Error", "Hubo un problema al eliminar la información", "error");
    }
    
  });

  document.getElementById("btnLimpiar").addEventListener("click",function(){
      limpiarCampos();      
  });

  
  function limpiarCampos(){
    BloquearCampos(true);
    $('#idn').val("");
    $('#nom').val("");
    $('#ape').val("");  
    $('#curp').val("");
    $('#FechanNaciM').val("");
    $('#sexo').val("");
    $('#dire').val("");
    $('#tel').val("");
    $('#pais').val("");
    $('#estado').val("");
    $('#ciudad').val("");
    swal("Operación excitosa.", "Formulario listo para un nuevo registro.", "success");
  }





  function BloquearCampos(estado){
    document.getElementById("idn").disabled=true;
    document.getElementById("nom").disabled=estado;
    document.getElementById("ape").disabled=estado;
    document.getElementById("curp").disabled=estado;
    document.getElementById("FechanNaciM").disabled=estado;
    document.getElementById("sexo").disabled=estado;
    document.getElementById("dire").disabled=estado;
    document.getElementById("tel").disabled=estado;
    document.getElementById("pais").disabled=estado;
    document.getElementById("estado").disabled=estado;
    document.getElementById("ciudad").disabled=estado;

  }

  function ValidarVacios(){
    if(document.getElementById("nom").value == "" || document.getElementById("ape").value == "" ||
    document.getElementById("curp").value == "" || document.getElementById("FechanNaciM").value == "" ||
    document.getElementById("dire").value == "" || document.getElementById("sexo").value == "" ||
    document.getElementById("tel").value == "" || document.getElementById("pais").value == "" ||
    document.getElementById("estado").value == "" || document.getElementById("ciudad").value == ""){
      BloquearCampos(false);
      return true;
    }
    else { return false;}
  }
});