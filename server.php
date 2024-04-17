<?php

// qua mi arrivera una stringa di conseguenza salvo cosi

$json_string = file_get_contents('dischi.json');
$list = json_decode($json_string);



// trasformo ilfile php come se fosse un file json
header('content-type: application/json');

echo json_encode($list);

?>