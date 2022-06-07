<?php

    include("conexion.php");
    $ID = $_POST        ['par01'];
    $Nombre=$_POST      ['par1'];
    $Apellidos=$_POST   ['par2'];
    $CURP=$_POST        ['par3'];
    $FechaNaci=$_POST   ['par4'];
    $Sexo=$_POST        ['par5'];
    $Direccion=$_POST   ['par6'];
    $Telefono=$_POST    ['par7'];
    $Pais=$_POST        ['par8'];
    $Estado=$_POST      ['par9'];
    $Ciudad=$_POST      ['par10'];

    echo $ID;
    try{
        $sql = "update empleados set Nombres = '$Nombre' , Apellidos='$Apellidos', CURP='$CURP', 
                                     FechaNaci = '$FechaNaci', Genero= '$Sexo', Direccion='$Direccion', 
                                     Telefono='$Telefono', Pais ='$Pais', Estado='$Estado', Ciudad='$Ciudad') 
                          where idEmpleado=".$ID;
        $consulta = $con -> prepare($sql);
        $consulta -> execute();
        $consulta->closeCursor();
      } 
      
      catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();                   
                              
    }
    
?><?php

include("conexion.php");
$ID = $_POST        ['par01'];
$Nombre=$_POST      ['par1'];
$Apellidos=$_POST   ['par2'];
$CURP=$_POST        ['par3'];
$FechaNaci=$_POST   ['par4'];
$Sexo=$_POST        ['par5'];
$Direccion=$_POST   ['par6'];
$Telefono=$_POST    ['par7'];
$Pais=$_POST        ['par8'];
$Estado=$_POST      ['par9'];
$Ciudad=$_POST      ['par10'];

try{
    $sql = "update empleados set Nombres='$Nombre', Apellidos='$Apellidos', CURP='$CURP', FechaNaci='$FechaNaci', Genero = '$Sexo', Direccion ='$Direccion', Telefono = '$Telefono', Pais = '$Pais', Estado = '$Estado', Ciudad='$Ciudad' 
                      where idEmpleado = ".$ID;
    $consulta = $con -> prepare($sql);
    $consulta -> execute();
    $consulta->closeCursor();
  } 
  
  catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();                   
                          
}

?>