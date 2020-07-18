<?php include 'backend/prolog2.php' ?>
<?php
$userId = $_GET['us'];
$profile = $APPLICATION->query("SELECT * from user where id = ?",[$userId]);
$stat = $APPLICATION->query("Select * from stat where id_user = ?",[$userId]);
$compares = $APPLICATION->query("Select id, nickname from user");
?>
<?php include 'template/header.php' ?>
<div class="content ProfileContent">
<div class="ProfilePage">
    <div class="ProfileRow">
        <div class="ProfileInfo">
            <?php foreach ($profile as $item): ?>
            <div class="ProfileName">
                Имя: <?= $item['name'] ?>
            </div>
            <div class="ProfileNickname">
                Никнейм: <?= $item['nickname'] ?>
            </div>
            <div class="ProfileAge">
                Возраст: <?= $item['age'] ?>
            </div>
<!--            <div class="ProfileSelf">-->
<!--                О себе: --><?//= $item['self'] ?>
<!--            </div>-->
            <?php endforeach; ?>
        </div>
    </div>
    <div class="ProfileRow">
        <div class="ProfileStat">
            <div class="ProfileStatTitle">
                Последние марафоны
            </div>
            <div class="ProfileStatResultTitle">
                <div class="ProfileStatColumn ProfileStatColumn-Maraphon">
                    Название
                </div>
                <div class="ProfileStatColumn ProfileStatColumn-Score">
                    Время
                </div>
                <div class="ProfileStatColumn ProfileStatColumn-Date">
                    Дата
                </div>
            </div>
            <?php foreach ($stat as $item): ?>
                <div class="ProfileStatResult">
                    <div class="ProfileStatColumn ProfileStatColumn-Maraphon-value">
                        <?= $item['maraphon'] ?>
                    </div>
                    <div class="ProfileStatColumn ProfileStatColumn-Score-value">
                        <?= $item['score'] ?>
                    </div>
                    <div class="ProfileStatColumn ProfileStatColumn-Date-value">
                        <?= $item['date_at'] ?>
                    </div>
                </div>
            <?php endforeach; ?>

        </div>
    </div>
    <div class="ProfileRow">
        <div class="ProfileCompare">
            <div class="ProfileCompareTitle">
                Сравнение
            </div>
            <div class="ProfileCompare-Row">
                <div class="ProfileCompare-Col-3">
                    <div class="ProfileCompare-ListProfiles">
                        <div class="ListProfiles-Title">
                            Список участников:
                        </div>
                        <div class="ListProfiles-Result">
                            <?php foreach ($compares as $item): ?>
                            <button data-us="<?=$item['id'] ?>" onclick="onclickCompare(this)" class="ListProfiles-ButtonProfile"><?=$item['nickname'] ?></button>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="ProfileCompare-Col-7">
                    <div class="ListProfiles-Title">
                        Результат <div id="CompareNicknameResultJs" class="CompareNicknameResultJs"></div>
                    </div>
                    <div id="ProfileCompare-Result" class="ProfileCompare-Result">

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<?php include 'backend/epilog.php' ?>
