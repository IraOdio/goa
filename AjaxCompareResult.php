<?php
include 'backend/prolog2.php';
$userId = $_POST['us'];
$stat = $APPLICATION->query("select * from stat where id_user = ?",[$userId]);
foreach ($stat as $item):
?>
<div class="PC-Result-Row">
    <div class="PC-Result-Maraphon">
        <?= $item['maraphon'] ?>
    </div>
    <div class="PC-Result-Score">
        <?= $item['score'] ?>
    </div>
    <div class="PC-Result-Date">
        <?= $item['date_at'] ?>
    </div>
</div>
<?php endforeach; ?>

