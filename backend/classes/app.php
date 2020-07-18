<?php
namespace classes;

class app
{
    protected static $instance;
    protected function __construct()
    {

    }
    public static function getInstance(){
        if(self::$instance===null){
            self::$instance = new self;
        }
        return self::$instance;
    }
    public function getURL(){
        $url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        $url = explode('?', $url);
        $url = $url[0];
        $url = explode('/',$url);
        $url = $url[count($url)-1];
        return $url;
    }
    public function getURLsParametrs(){
        $url = $_SERVER['REQUEST_URI'];
        return $url;
    }
}