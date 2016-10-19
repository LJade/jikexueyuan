<?php 
header("Content-type:text/html;charset=utf-8");
require_once('mysql.php');
print_r( ($_POST));
$id = $_POST['id'];
$type =  $_POST['type'];
$title = $_POST['title'];
$imgSrc = $_POST['imgSrc'];
$author = $_POST['author'];
$updateAt = time();
$content = $_POST['content'];


$sql = "UPDATE `news` SET type='".$type."', title ='".$title."',imgSrc='".$imgSrc."',author='".$author."',updateAt='".$updateAt."',content='".$content."' WHERE id = $id";
echo $sql;
if ($conn->query($sql) === TRUE) {
    echo "更新成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

?>