<?php


var_dump($_POST);

$userdata = [
    $_POST["firstname"],
    $_POST["lastname"],
    $_POST["username"],
    $_POST["email"],
    $_POST["gender"],
    $_POST["sexuality"],
    $_POST["hobby"]
];

$fp = fopen('users.csv', 'w');

fputcsv($fp, $userdata);