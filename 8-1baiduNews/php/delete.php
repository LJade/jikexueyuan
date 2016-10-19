<?php 
header("Content-type:text/html;charset=utf-8");
require_once('mysql.php');

$newsId =  $_POST['newsId'];

$sql = "DELETE FROM `news` WHERE `id` = $newsId";

$conn->query($sql);

?>