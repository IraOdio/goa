<?php include 'backend/prolog.php' ?>
<?php

?>  
p?=
<div id="whiteAlertHome" class="whiteAlert">
    ↑ <br>
    Добро пожаловать, вы посетили графическую обучающую систему по основам алгоритмизации. <br>
    Если вам необходима зарегистрироваться или же авторизироваться, обратите внимание на соответствующий навигационный пункт. <br>
    ← Если вас интересует обучение, воспользуйтесь кнопками слева. <br>
    <button id="buttonCloseThis">ОК</button>
</div>
<main class="main">
    <div id="thisPOST" data-showscene="<?=$_GET['showscene'] ?>"></div>
    <div class="flexRow RowRelative">
        <canvas id="index" width="700" height="500" class="index">
        </canvas>
        <div id="siGUI" class="open">
            <div class="containerOpenClose">
                <button id="OpenClose" >?</button>
            </div>
            <div class="container-siGUI">
                <button class="siGUI-Button" id="screenButton">Сделать скриншот</button>
                <form action="" method="GET">
                    <button name="showscene" value="start" class="siGUI-Button" id="buttonMaraphon1">Начальная сцена
                    </button>
                    <button name="showscene" value="maraphon1" class="siGUI-Button animateButton" id="buttonMaraphon1">Марафон №1
                    </button>
                    <button name="showscene" value="maraphon2" class="siGUI-Button animateButton" id="buttonMaraphon1">Марафон №2
                    </button>
<!--                    <button name="showscene" value="maraphonN" class="siGUI-Button" id="buttonMaraphon1">МарафонNNN-->
<!--                    </button>-->
                </form>
            </div>
            <hr>
            <div class="container-siGUI" id="GUIFROMSCENE" data-positionX="-10" data-positionY="15" data-positionZ="5">
                <button class="siGUI-Button" id="controlStageButton">Пройти дальше</button>
                <div id="controlStage-smsOkno" class="controlStage-smsOkno"></div>
            </div>
            <hr>
            <div class="container-siGUI" id="INFOFROMSCENE">
            </div>

        </div>
        <div id="siGUI-Down">
            <button id="siGUI-Down-ControlButton">↑</button>
            <div id="siGUI-Down-Text">
            </div>
        </div>
    </div>
    <div id="debug"></div>
</main>
<script src="libs/earcut.min.js"></script>
<script src="libs/babylon.js"></script>
<script src="libs/babylon.gui.min.js"></script>
<script src="libs/babylon.gridMaterial.min.js"></script>
<script src="index.js"></script>

<?php include 'backend/epilog.php' ?>
