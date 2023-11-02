<?php


var_dump($_POST);

$userdata = [
    $_POST["firstname"],
    $_POST["lastname"],
    $_POST["age"],
    $_POST["hobby1"] ? "True" : "False" ,
    $_POST["hobby2"] ? "True" : "False" ,
    $_POST["hobby3"] ? "True" : "False" ,
    $_POST["hobby4"] ? "True" : "False" ,
    $_POST["hobby5"] ? "True" : "False" ,
    $_POST["hobby6"] ? "True" : "False" ,
    $_POST["hobby7"] ? "True" : "False" ,
    $_POST["hobby8"] ? "True" : "False" ,
    $_POST["hobby9"] ? "True" : "False" ,
    $_POST["hobby10"] ? "True" : "False" ,
    $_POST["gender"],
    $_POST["interest"],
    $_POST["username"],
    $_POST["password"]
];


$fp = fopen('MatchMaker Responses.csv', 'a');

stream_context_set_option($fp,'ftp', 'use_include_path', false);

fwrite($fp, "\n");

fputcsv($fp, $userdata);

fclose($fp);

header('Location: http://127.0.0.1:5500/index.html');