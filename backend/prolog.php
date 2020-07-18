<?php
include 'autoload.php';
include 'libs/nf_pp.php';
use classes\db;
use classes\app;
$APPLICATION = db::getInstance();
$APP2 = app::getInstance();
// region ЧИТАТЬ
// Пример запросов SELECT - ЧИТАТЬ - ВЫБРАТЬ
// Берет все данные из таблицы
// $selectBy = $APPLICATION->selectBy('table1');
// Берет нужные колонки или колонку из таблицы
// $selectByColumn = $APPLICATION->selectByColumn('table1','id');
// $selectByColumns = $APPLICATION->selectByColumn('table1','id,text');
// Берет данные из таблицы с условием ГДЕ, пример где поле id = 1
// $selectByWhere = $APPLICATION->selectByWhere('table1','id',['1']);
// Кастомный метод, для кастомных запросов
// $customSelectBy = $APPLICATION->customSelectBy('table1','WHERE id = ? and text = ?',[1,'text']);
// endregion
// region ДОБАВИТЬ / ОБНОВИТЬ
// Пример запросов INSERT - ВСТАВИТЬ - ДОБАВИТЬ
// Первый аргумент - это название таблицы, в данном случае "table2"; Второй аргумент - массив полей и значений
// В данном случае таблица "table2" имеет поля -> text | pole | intpole - название полей выдуманы и они могут быть любыми и в любом количестве
// $insertBy = $APPLICATION->insertBy('table2',['text'=>'mytext2','pole'=>'azaza','intpole'=>3]);
// Пример запросов UPDATE - ОБНОВИТЬ - ИЗМЕНИТЬ
// Получился самым сложным в синтаксисе.
// Первый аргумент - название таблицы.
// Второй аргумент - Массив из двух ключей, ключ "column" - должно содержать имя колонки в которой необходимо изменить значение
//      > ключ "value" - содержит значение на которое нужно поменять
// КЛЮЧИ ВСЕГДА ОДИНАКОВЫ И ИЗМЕНЕНИЮ НЕ ПОДЛЕЖАТ.
// Третий аргумент - Массив из двух ключей, ключ "column" - содержит имя колонки, ключ "valueIf" - значение.
// Третий аргумент используется для условия WHERE // КЛЮЧИ ВСЕГДА ОДИНАКОВЫ И ИЗМЕНЕНИЮ НЕ ПОДЛЕЖАТ.
// Данный метод формирует запрос UPDATE table2 SET num = :num WHERE id = :id // заместо :num и :id подставляются значения.
// $updateBy = $APPLICATION->updateBy('table2',['column'=>'num','value'=>10],['column'=>'id','valueIf' => 4]);
// endregion
session_start();

?>
<?php include 'template/header.php' ?>