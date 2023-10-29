<?php


var_dump($_POST);

$userdata = [
    $_POST["firstname"],
    $_POST["lastname"],
    $_POST["username"],
    $_POST["email"],
    $_POST["gender"],
    $_POST["interest"],
    json_encode($_POST["hobbies"])
];

$fp = fopen('MatchMaker Responses.csv', 'a');

fputcsv($fp, $userdata);