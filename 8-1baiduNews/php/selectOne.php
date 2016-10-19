<?php 
header("Content-type:text/html;charset=utf-8");

require_once('mysql.php');

$newsId =  $_POST['newsID'];
	
$sql = "SELECT * FROM `news` WHERE `id` = $newsId";

$newsResult = $conn->query($sql);
$row = $newsResult->fetch_assoc();

echo json_encode($row);

?>