<?php
require ("libreria.php");//using..
    
    $con = connection("partite");
    $id = $_POST["id"];
    $data = $_POST["data"];
    $ora = $_POST["ora"];
    $squadra = $_POST["squadra"];
    $casa_fuori = $_POST["casa_fuori"];
    $campo = $_POST["campo"];
    $home = $_POST["home"];
    $visitor = $_POST["visitor"];
    $note = $_POST["note"];
    $sql = "update matches set data = '$data',ora = '$ora', 
    squadra = '$squadra', 
    casa_fuori = '$casa_fuori',campo = '$campo', home = '$home', 
    visitor = '$visitor', note = '$note'";
    echo(json_encode(eseguiQuery($con,$sql)));
?>