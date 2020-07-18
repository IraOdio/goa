<?php include 'backend/prolog2.php' ?>
<?php include 'template/header.php' ?>
<div class="content">
    <div class="navLearnWrapper">
        <div class="navLearnTitle">
            Тайтл меню
        </div>
        <ol class="navLearnList">
            <li class="navLearnItem">
                <a id="whatAlg" href="#" class="navLearnLink">Что такое алгоритм</a>
            </li>
            <li class="navLearnItem">
                <a id="AlgSort" href="#" class="navLearnLink">Сортировка</a>
            </li>
            <li class="navLearnItem">
                <a id="AlgSearch" href="#" class="navLearnLink">Поиск</a>
            </li>
            <li class="navLearnItem">
                <a id="AlgRecursive" href="#" class="navLearnLink">Рекурсия</a>
            </li>
        </ol>
    </div>
    <div class="learnContent">
        <div id="js-patternAlg">
            <div class="lection" id="whatAlgLection">
                <div class="lection-title">Лекция - Что такое Алгоритм</div>
                <div class="lectionContent">
                    Лекция - Алгоритм
                </div>
            </div>
            <div class="lection" id="AlgSortLection">
                <div class="lection-title">Лекция - Сортировка</div>
                <div class="lectionContent">
                    Лекция - Сортировка
                </div>
            </div>
            <div class="lection" id="AlgSearchLection">
                <div class="lection-title">Лекция - Поиск</div>
                <div class="lectionContent">
                    Лекция - Поиск
                </div>
            </div>
            <div class="lection" id="AlgRecursiveLection">
                <div class="lection-title">Лекция - Рекурсия</div>
                <div class="lectionContent">
                    Лекция - Рекурсия
                </div>
            </div>
        </div>
    </div>
    Здесь будут мини лекции, возможно с 3д визуализацией алгоритмов (надеюсь что будут)
</div>
<script>
    let whatAlg = document.getElementById('whatAlg');
    let AlgSort = document.getElementById('AlgSort');
    let AlgSearch = document.getElementById('AlgSearch');
    let AlgRecursive = document.getElementById('AlgRecursive');
    let patternAlg = document.getElementById('js-patternAlg');
    whatAlg.onclick = function () {
        patternAlg.className = "whatAlg";
    };
    AlgSort.onclick = function () {
        patternAlg.className = "AlgSort";
    };
    AlgSearch.onclick = function () {
        patternAlg.className = "AlgSearch";
    };
    AlgRecursive.onclick = function () {
        patternAlg.className = "AlgRecursive";
    };
</script>
<style>
    .lection{
        display: none;
    }
    .whatAlg>#whatAlgLection{
        display: block;
    }
    .AlgSort>#AlgSortLection{
        display: block;
    }
    .AlgSearch>#AlgSearchLection{
        display: block;
    }
    .AlgRecursive>#AlgRecursiveLection{
        display: block;
    }
</style>
<?php include 'backend/epilog.php' ?>
