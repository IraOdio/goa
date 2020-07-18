<?php include 'backend/prolog2.php' ?>
<?php
$stat = $APPLICATION->query("SELECT * from stat");
?>
<?php include 'template/header.php' ?>
<div class="content tableRecordContent">
    <div class="tableRecord">
        <div class="tableRecord-Titles">
            <div class="tableRecord-Row">
                <div class="tableRecord-Col-NumberRow">
                    Номер записи
                </div>
                <div class="tableRecord-Col-Nickname">
                    Никнейм
                </div>
                <div class="tableRecord-Col-Maraphon">
                    Марафон
                </div>
                <div class="tableRecord-Col-Score">
                    Время
                </div>
                <div class="tableRecord-Col-date-at">
                    Дата / время
                </div>
            </div>
        </div>
        <div class="tableRecord-Results">
            <?php foreach ($stat as $item): ?>
            <div class="tableRecord-Row tableRecord-Row-Results">
                <div class="tableRecord-Col-NumberRow tRC-NumberRow-Text">
                    <?= $item['id'] ?>
                </div>
                <div class="tableRecord-Col-Nickname">
                    <a class="tableRecord-Col-Nickname-Link" href="/profile.php?us=<?=$item['id_user'] ?>"><?= $item['nickname'] ?></a>
                </div>
                <div class="tableRecord-Col-Maraphon tRC-Maraphon-Text">
                    <?= $item['maraphon'] ?>
                </div>
                <div class="tableRecord-Col-Score tRC-Score-Text">
                    <?= $item['score'] ?>
                </div>
                <div class="tableRecord-Col-date-at tRC-Date-Text">
                    <?= $item['date_at'] ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</div>
<?php include 'backend/epilog.php' ?>
