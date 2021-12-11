<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header("Access-Control-Allow-Methods: POST");

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $json = file_get_contents('php://input');
    $params = json_decode($json);
    require("../base/conexion.php");

$conexion = conexion ();

mysqli_query($conexion, "INSERT INTO clientes (nombre, username, cedula, email, contrasena) VALUES ('$params->nombre', '$params->username', '$params->cedula','$params->email','$params->contrasena')");

class Result{}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Se registró con éxito el usuario';

header('Content-Type: application/json');

echo json_encode($response);
}

?>