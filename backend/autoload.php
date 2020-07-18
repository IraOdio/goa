<?php

function myAutoLoader($className)
{
    require_once $className . '.php';
}

spl_autoload_register('myAutoLoader');
