<?php 
header("Content-type:text/html;charset=utf-8");
require_once('mysql.php');

$sql = "SELECT * FROM `news`";
$result = $conn->query($sql);

?>

