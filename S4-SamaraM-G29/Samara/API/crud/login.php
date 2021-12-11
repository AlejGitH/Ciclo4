<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require("../base/conexion.php");

$conexion = conexion ();

$username = $_GET["username"];
$contrasena = $_GET["contrasena"];

$datos=mysqli_query($conexion, "SELECT username, contrasena FROM clientes WHERE username = '".$username."' AND contrasena = '".$contrasena."'");
$resultado = mysqli_affected_rows($conexion);

class Result{}

$response = new Result();
if($resultado >0){
    if($usuario=mysqli_fetch_assoc($datos)){
    $response -> resultado = 'OK';
    $response -> mensaje = 'Ingreso autorizado';
}
}else{
    $response -> resultado = 'NO';
    $response -> mensaje = 'Usuario no encontrado';
}


header('Content-Type: application/json');
echo json_encode($response);

?>