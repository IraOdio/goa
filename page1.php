<?php include 'backend/prolog2.php' ?>
<?php if ($_POST['log_in']) {
    $login = $_POST['login'];
    $pass = $_POST['password'];
    $res = $APPLICATION->query('SELECT COUNT(?) FROM account where login = ?',['login',$login]);
    if ($res[0]["COUNT('login')"] == "1"){
        $check =$APPLICATION->query("SELECT password,id_user FROM account where login = ?",[$login]);
        if(md5($pass)==$check[0]['password']){
            $_SESSION['id_user'] = $check[0]['id_user'];
            $nickname = $APPLICATION->query('SELECT nickname FROM user where id = ?',[$check[0]['id_user']]);
            $_SESSION['nickname'] = $nickname[0]['nickname'];
            header('Location: /');
        } else {
            echo 'Неверно введен логин или пароль.';
        }
    } else {
        echo 'Неверно введен логин или пароль.';
    }
    unset($_POST['log_in']);
} ?>
<?php if($_POST['reg-in']){
    $login = $_POST['login'];
    $pass = $_POST['password'];
    $nickname = $_POST['nickname'];
    $pass = md5($pass);
    // Добавляем запись в таблицу аккаунт
    $sql = "INSERT INTO account (login,password) values (?,?)";
    $result = $APPLICATION->execute($sql,[$login,$pass]);
    // Получаем из таблицы аккакнт последнюю добавленную запись
    $last_row_sql = "SELECT * FROM `account` ORDER BY id DESC LIMIT 1";
    $last_id = $APPLICATION->query($last_row_sql);
    // Получаем id последней добавленной записи
    $last_id = $last_id[0]['id'];
    $sql2 = "INSERT INTO user (id_account,nickname) values (?,?)";
    // Добавляем id последней добавленной записи account в таблицу user
    $APPLICATION->execute($sql2,[$last_id,$nickname]);
    // Получаем id последней добавленной записи в user
    $last_row_sql2 = "SELECT * FROM `user` ORDER BY id DESC LIMIT 1";
    $last_id2 = $APPLICATION->query($last_row_sql2);
    $last_id2 = $last_id2[0]['id'];
    // Делаем апдейт в таблице аккаунт для обновления поля id_user последней добавленной записи
    $sql3 = "UPDATE account SET id_user = ? WHERE id =  ?";
    $APPLICATION->execute($sql3,[$last_id2,$last_id]);
    header('Location: /page1.php?reg=true');
} ?>
<?php include 'template/header.php' ?>
<div class="content ">
    <?php if($_GET['reg']): ?>
    <div class="row">
        <div class="col-12 justify-center">
            <div class="alert-text">
                Вы успешно зарегистрировались, теперь можете авторизироваться.
            </div>
        </div>
    </div>
    <?php endif; ?>
    <div class="row">
        <div class="col-100 justify-center" style="margin: 1em 0;">
            <form class="form form-black" action="" method="post">
                <div class="form-Title">Авторизация</div>
                <div class="input-in">
                    Логин: <input type="text" name="login"/>
                </div>
                <div class="input-in">
                    Пароль: <input type="password" name="password"/>
                </div>
                <input class="input-submit" type="submit" value="Войти" name="log_in"/>
            </form>
        </div>
        <div class="col-100 justify-center" style="margin: 1em 0;">
            <form class="form form-black" action="" method="post">
                <div class="form-Title">Регистрация</div>
                <div class="input-in">
                    Никнейм (не больше 10-ти символов): <input type="text" name="nickname" maxlength="10"/>
                </div>
                <div class="input-in">
                    Логин: <input type="text" name="login"/>
                </div>
                <div class="input-in">
                    Пароль: <input type="password" name="password"/>
                </div>
                <input class="input-submit" type="submit" value="Зарегистрироваться" name="reg-in"/>
            </form>
        </div>
    </div>
</div>
<?php include 'backend/epilog.php' ?>
