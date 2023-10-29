<?php


var_dump($_POST);

$userdata = [
    $_POST["firstname"],
    $_POST["lastname"],
    $_POST["username"],
    $_POST["email"],
    $_POST["gender"],
    $_POST["interest"],
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
];

$fp = fopen('MatchMaker Responses.csv', 'a');

fputcsv($fp, $userdata);