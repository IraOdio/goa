<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Игровой объект - Алгоритм</title>
    <link rel="stylesheet" href="/index.css">
    <?php if ($APP2->getURL() != 'index.php' &&$APP2->getURL()!=""): ?>
        <link rel="stylesheet" href="template/style.css">
    <?php endif; ?>
</head>
<body class="<?php if($APP2->getURLsParametrs()=='/index.php'||$APP2->getURLsParametrs()=='/'): ?> firstVisitedBody <?endif;?> ">
<div class="preloader">
    <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
    </div>
</div>
<div id="hideInfo" data-ismaraphon="<?php if($_GET['showscene']) {echo $_GET['showscene'];} ?>" data-issession="<?php if($_SESSION['id_user']) {echo 'true';} else {echo 'false';} ?>"></div>
<?php if ($APP2->getURL() != 'index.php'&&$APP2->getURL()!=""): ?>
    <header class="header">
        <div class="row justify-evenly">
            <div class="col-25">
                <div class="nav black-border">
                    <a class="nav-link" href="/index.php">Главная</a>
                    <a class="nav-link" href="/raiting.php">Рейтинг</a>
<!--                    <a class="nav-link" href="/learn.php">Учебное пособие</a>-->
                    <?php if(!$_SESSION['id_user']): ?>
                    <a class="nav-link" href="/page1.php">Авторизация / Регистрация</a>
                    <?php endif; ?>
                </div>
            </div>
            <div class="col-4">
                <?php if($_SESSION['id_user']): ?>
                <div class="black-border">
                    <div class="userBlock">
                        Текущий пользователь: <a class="link link-User" href="/profile.php?us=<?=$_SESSION['id_user'] ?>"><?=$_SESSION['nickname'] ?></a>
                    </div>
                    <div class="outLog">
                        <form action="/out.php" method="post" class="form-out">
                            <input type="submit" value="Выйти">
                        </form>
                    </div>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </header>
<?php else: ?>
    <header class="header">
        <div class="canvasInfo">
              <div class="row row-nowrap">
                  <div class="col-67">
                      <div id="secundomer" class="thisInfo">
                          <div class="thisLabel">
                              Время:
                          </div>
                          <div id="thisInfoValue">00:00</div>
                      </div>
                      <div class="fpsValue">
                          Частота кадров:
                          <span id="label_fps"></span>
                      </div>
                  </div>

                  <div class="col-25 col-align-mid">
                      <div class="nav black-border">
                          <a class="nav-link" href="/index.php">Главная</a>
                          <a class="nav-link" href="/raiting.php">Рейтинг</a>
<!--                          <a class="nav-link" href="/learn.php">Учебное пособие</a>-->
                          <?php if(!$_SESSION['id_user']): ?>
                              <a class="nav-link animateButton2" href="/page1.php">Авторизация / регистрация</a>
                          <?php endif; ?>
                      </div>
                  </div>
                  <div class="col-25 col-align-mid">
                      <?php if($_SESSION['id_user']): ?>
                       <div class="black-border">
                           <div class="userBlock">
                               Текущий пользователь: <a class="link link-User" href="/profile.php?us=<?=$_SESSION['id_user'] ?>"><?=$_SESSION['nickname'] ?></a>
                           </div>
                           <div class="outLog">
                               <form action="/out.php" method="post" class="form-out">
                                   <input type="submit" value="Выйти">
                               </form>
                           </div>
                       </div>
                      <?php endif; ?>
                  </div>
              </div>
          </div>
    </header>
<?php endif; ?>
