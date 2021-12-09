<?php

global $enlace;

function conexion(){

    $enlace = mysqli_connect('localhost', 'root', '', 'baseusuario');

    if(!$enlace){
        echo "Error: No se puede conectar a la base de datos";
        exit;
    }

    return $enlace;
}
?>