<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Игровой объект - Алгоритм</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
<div class="preloader">
    <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
    </div>
</div>
<header class="header">
    <div class="canvasInfo">
       <div class="row">
           <div class="col-5">
               <div class="thisInfo">
                   <div class="thisLabel">
                       Info:
                   </div>
                   <div id="thisInfoValue">???</div>
               </div>
               <div class="fpsValue">
                   Частота кадров:
                   <span id="label_fps"></span>
               </div>
           </div>
           <div class="col-5">
               <div class="spheresBlock">
                   <div class="sphere">
                       <img src="res/dom/greensphere.png" width="50px" class="sphereImg" alt="greensphere">
                       <div class="label"> -> <span id="greenSphereValue">0</span></div>
                   </div>
                   <div class="sphere">
                       <img src="res/dom/redsphere.png" width="50px" class="sphereImg" alt="redsphere">
                       <div class="label"> -> <span id="redSphereValue">0</span></div>
                   </div>
               </div>
           </div>
       </div>
    </div>
</header>
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
                    <button name="showscene" value="maraphon1" class="siGUI-Button" id="buttonMaraphon1">Марафон №1
                    </button>
                    <button name="showscene" value="maraphon2" class="siGUI-Button" id="buttonMaraphon1">Марафон №2
                    </button>
                </form>
            </div>
            <hr>
            <div class="container-siGUI" id="GUIFROMSCENE" data-positionX="-10" data-positionY="15" data-positionZ="5">
            </div>
            <hr>
            <div class="container-siGUI" id="INFOFROMSCENE">

            </div>
            <div class="container-siGUI" id="listVariables">

            </div>


        </div>
    </div>
    <div id="debug"></div>
</main>
<footer class="footer">

</footer>

<script src="libs/earcut.min.js"></script>
<script src="libs/babylon.js"></script>
<script src="libs/babylon.gui.min.js"></script>
<script src="libs/babylon.gridMaterial.min.js"></script>
<script src="index.js"></script>

</body>
</html>