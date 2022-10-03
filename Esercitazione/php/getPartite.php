<?php
require ("libreria.php");//using..
    
    $con = connection("partite");
    $sql = "select * from matches";
    echo(json_encode(eseguiQuery($con,$sql)));
?>