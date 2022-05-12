$(document).ready(function(){
 
    $('#petJSON').click(function() {
        $.post('Registro.php',{},function(data){

              console.log(data);
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
          },'json');
    });

});