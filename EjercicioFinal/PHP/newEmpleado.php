<?php

    include("conexion.php");
    //$ID = $_POST['par0'];
    $Nombre=$_POST['var1'];
    $Apellidos=$_POST['var2'];
    $CURP=$_POST['var3'];
    $FechaNaci=$_POST['var4'];
    $Sexo=$_POST['var5'];
    $Direccion=$_POST['var6'];
    $Telefono=$_POST['var7'];
    $Pais=$_POST['var8'];
    $Estado=$_POST['var9'];
    $Ciudad=$_POST['var10'];

    try{
        $sql = "insert into empleados (Nombres, Apellidos, CURP, FechaNaci, Genero, Direccion, Telefono, Pais, Estado, Ciudad) 
                          values ('$Nombre','$Apellidos','$CURP','$FechaNaci','$Sexo','$Direccion','$Telefono','$Pais','$Estado','$Ciudad')";
        $consulta = $con -> prepare($sql);
        $consulta -> execute();
        $consulta->closeCursor();
      } 
      
      catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();                   
                              
    }
    
?>