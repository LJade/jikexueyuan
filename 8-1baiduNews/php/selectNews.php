<?php 
header("Content-type:text/html;charset=utf-8");
require_once('mysql.php');
$newsType =  $_POST['newsType'];
switch ($newsType)
	{
	 	case "baijia":
	  		$type = '百家';
	  		break;
		case "yule":
			$type = "娱乐";
			break;    
		case "shehui":
		    $type = "社会";
		    break;
		case "junshi":
		    $type = "军事";
		    break; 
		default:
		    $type = "精选";
		    break;
	};

$sql = "SELECT * FROM `news` WHERE `type` = "."'$type'";
$result = $conn->query($sql);
$output = array();
  while($row = $result -> fetch_assoc()){
  	$output[]=$row;
  }; 

echo json_encode($output);
?>