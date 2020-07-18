<?php
include 'backend/prolog2.php';
$nickname = $_POST['nickname'];
$score = $_POST['score'];
$maraphon = $_POST['maraphon'];
$idUser = $_SESSION['id_user'];
//$str = '/' . $nickname . '/' .$score . '/' .$idUser. '/'.getdate();
$sql = "INSERT INTO stat (id_user,nickname,maraphon,score,date_at) values (?,?,?,?,?)";
$res = $APPLICATION->execute($sql,[$idUser,$nickname,$maraphon,$score,date('Y-m-d H:i:s')]);
$sql2 = "SELECT * FROM `stat` ORDER BY id DESC LIMIT 1";
$number = $APPLICATION->query($sql2);
echo 'Ваш результат успешно добавлен под номером - '.$number[0]['id'];
