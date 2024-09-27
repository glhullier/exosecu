<?php
$action = $_GET['action'];

if ($action == 'read') {
    $data = file_get_contents('data.json');
    echo $data;
} elseif ($action == 'write') {
    $input = json_decode(file_get_contents('php://input'), true);
    file_put_contents('data.json', json_encode($input));
    echo json_encode($input);
}
?>