<?php

$registro['nom']  ='Victor Manuel' ;
$registro['ape'] = 'Rendon Garcia';
$registro['curp']       = 'REGV010105HTSNRCA0' ;
$registro['FechanNaciM'] = '05/01/2001';
$registro['sexo'] = 'Masculino';
$registro['dire']     = 'Palmera #5642, Col. El Nogal';
$registro['tel']     = '8671922323';
$registro['pais']       = 'Mexico';
$registro['estado']       = 'Tamaulipas';
$registro['ciudad']       = 'Nuevo Laredo';

$registroJson = json_encode($registro);
echo $registroJson;
?>