<?php

// qua mi arrivera una stringa di conseguenza salvo cosi

$json_string = file_get_contents('dischi.json');
$list = json_decode($json_string);

// verifico che esista in post  newDiscoTitle e poi lo aggiungo insiemi agli altri e aggiorno il file dei dischi 

if(isset($_POST['newDiscoTitle'])){
     $new_disco = [
       'title' => $_POST['newDiscoTitle'],
       'author' => $_POST['newDiscoAuthor'],
       'year' => $_POST['newDiscoYear'],
       'poster' => $_POST['newDiscoPoster'],
       'genre' => $_POST['newDiscoGenre'],
     ];
     
      $disco[] =  $new_disco;
      file_put_contents('dischi.json', json_encode($disco));
    }



// trasformo ilfile php come se fosse un file json
header('content-type: application/json');

echo json_encode($list);

?>