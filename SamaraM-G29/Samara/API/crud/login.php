<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require("../base/conexion.php");

$conexion = conexion ();

$_username = $_GET['username'];
$_contrasena = $_GET['contrasena'];

$resultado = mysqli_query($conexion, "SELECT * FROM clientes WHERE username = $_username AND contrasena = $_contrasena");
var_dump($resultado); exit;
class Result{}

$response = new Result();
$response -> resultado = 'OK';
$response -> mensaje = 'Ingreso autorizado';

header('Content-Type: application/json');
echo json_encode($response);

?>