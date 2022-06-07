<?php

    include("conexion.php");
    $ID = $_POST['var1'];
    

    try{
        $sql = "delete from empleados where idEmpleado=".$ID;
        $consulta = $con -> prepare($sql);
        $consulta -> execute();
        $consulta->closeCursor();
      } 
      
      catch(PDOException $e) {
        echo "Error de consulta a la base de datos";
        echo $e->getMessage();                   
                              
    }
    
?>