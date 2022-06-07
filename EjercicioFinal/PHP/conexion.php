<?php

$iduser=$_POST['par1'];

$host ='localhost'; 
$database = 'v19100238';
$username='root';
$password='';
$port='3306';

try {
    $con = new PDO("mysql:host=$host;dbname=$database;port=$port",$username,$password);
    //echo "Conectado";
} catch(PDOException $e) {
    echo "Error de conexion a la base de datos";
    echo $e->getMessage();
    exit();
}

//$con->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

try {
//$consultaSql = "select * from empleado where idcliente=".$iduser;

$consultaSql = "select * from empleados where idEmpleado=".$iduser;
$consulta = $con -> prepare($consultaSql);
$consulta -> execute();
$resultado = $consulta->fetch(PDO::FETCH_ASSOC);
$consulta->closeCursor();

} catch(PDOException $e) {
    echo "Error de consulta a la base de datos";
    echo $e->getMessage();
}

echo json_encode($resultado);
?>