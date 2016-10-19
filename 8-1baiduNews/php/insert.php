<?php 
header("Content-type:text/html;charset=utf-8");
require_once('mysql.php');
//print_r( ($_POST));exit();
$type =  $_POST['type'];
$title = $_POST['title'];
$imgSrc = $_POST['imgSrc'];
$author = $_POST['author'];
$createdAt = time();
$content = $_POST['content'];

$sql = "INSERT INTO news (`type`,`title`,`imgSrc`,`author`,`createdAt`,`content`) VALUES ( '$type','$title','$imgSrc','$author',$createdAt,'$content')";

if ($conn->query($sql) === TRUE) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>