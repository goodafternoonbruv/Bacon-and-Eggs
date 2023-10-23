<?php


var_dump($_POST);

$userdata = [
    $_POST["firstname"],
    $_POST["lastname"],
    $_POST["username"],
    $_POST["email"],
    $_POST["gender"],
    $_POST["sexuality"],
    json_encode($_POST["hobbies"])
];

$fp = fopen('users.csv', 'a');

fputcsv($fp, $userdata);