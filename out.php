<?php
session_start();
unset($_SESSION['id_user']);
unset($_SESSION['nickname']);
session_destroy();
header('Location: /');