<?php
namespace classes;

class db
{
    protected $pdo;
    protected $config;
    protected static $instance;
    public static $countSql = 0;
    public static $queries = [];
    protected function __construct()
    {
        try{
            $db = $this->config = require __DIR__.'/../config/db.php';
            $options =[
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
            ];
            $this->pdo=new \PDO($db['xz'],$db['user'],$db['password'],$options);
        } catch (\PDOException $e){
            print "Error!: " . $e->getMessage();
        }

    }
    public static function getInstance(){
        if(self::$instance===null){
            self::$instance = new self;
        }
        return self::$instance;
    }
    public function config_db(){
        return $this->config;
    }

    public function execute($sql,$params = []){
        // for INSERT, UPDATE , DELETE query
        self::$countSql++;
        self::$queries[]= $sql;
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($params);
    }
    public function query($sql,$params = []){
        // for SELECT query
        self::$countSql++;
        self::$queries[]= $sql;
        $stmt = $this->pdo->prepare($sql);
        $res= $stmt->execute($params);
        if($res !==false){
            return $stmt->fetchAll();
        }
        return [];
    }
    public function selectBy($table){
        $sql = "SELECT * FROM {$table}";
        return $this->query($sql);
    }
    public function selectByColumn($table,$column){
        $sql = "SELECT {$column} FROM {$table}";
        return $this->query($sql);
    }
    public function selectByWhere($table,$column,$param=[]){
        $sql = "SELECT * FROM {$table} WHERE {$column} = ?";
        return $this->query($sql,$param);
    }
    public function customSelectBy($table,$query,$params=[]){
        $sql = "SELECT * FROM {$table} {$query}";
        return $this->query($sql,$params);
    }
    public function insertBy($table,$params=[]){
        $columns = "";
        $placeholder = "";
        foreach ($params as $key => $value){
            $columns .= $key . ',';
            $placeholder .= ":{$key},";
        }
        $columns = substr($columns,0,-1);
        $placeholder = substr($placeholder,0,-1);
        $sql = "INSERT INTO {$table} ({$columns}) VALUES ({$placeholder})";
        return $this->execute($sql,$params);
    }
    public function updateBy($table,$column=[],$where=[]){
        $sql = "UPDATE {$table} SET {$column['column']} = :{$column['column']} WHERE {$where['column']} = :{$where['column']}";
        $params = [
            ":{$column['column']}" => $column['value'],
            ":{$where['column']}" => $where['valueIf']
        ];
        return $this->execute($sql,$params);
        //return $sql;
    }


}