<?php
include 'autoload.php';
include 'libs/nf_pp.php';
use classes\db;
use classes\app;
$APPLICATION = db::getInstance();
$APP2 = app::getInstance();
session_start();
