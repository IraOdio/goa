-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 19 2020 г., 13:27
-- Версия сервера: 10.3.13-MariaDB-log
-- Версия PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `goa`
--

-- --------------------------------------------------------

--
-- Структура таблицы `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `login` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `account`
--

INSERT INTO `account` (`id`, `login`, `password`, `id_user`) VALUES
(1, 'admin', 'e00cf25ad42683b3df678c61f42c6bda', 1),
(8, 'user', '24c9e15e52afc47c225b757e7bee1f9d', 3),
(9, 'user1', '24c9e15e52afc47c225b757e7bee1f9d', 4),
(10, 'nick1', 'd0dff15c4dc9c4b106889d6f30dce6ce', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `stat`
--

CREATE TABLE `stat` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `nickname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maraphon` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `score` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_at` timestamp NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `stat`
--

INSERT INTO `stat` (`id`, `id_user`, `nickname`, `maraphon`, `score`, `date_at`) VALUES
(1, 1, 'IraOdio', 'Марафон №1', '0:14', '2020-05-18 15:29:50'),
(2, 1, 'IraOdio', 'Марафон №1', '0:23', '2020-05-18 15:32:50'),
(3, 1, 'IraOdio', 'Марафон №1', '0:15', '2020-05-18 18:24:53'),
(4, 1, 'IraOdio', 'Марафон №1', '0:36', '2020-05-18 19:22:04'),
(5, 1, 'IraOdio', 'Марафон №1', '0:36', '2020-05-18 19:22:08'),
(6, 3, 'nick1', 'Марафон №1', '0:28', '2020-05-18 19:23:21'),
(7, 1, 'IraOdio', 'Марафон №1', '1:44', '2020-05-31 08:24:46'),
(8, 1, 'IraOdio', 'Марафон №1', '0:03', '2020-05-31 18:12:32'),
(9, 1, 'IraOdio', 'Марафон №1', '1:10', '2020-06-08 12:22:07'),
(10, 1, 'IraOdio', 'maraphon2', '0:03', '2020-06-08 12:25:45'),
(11, 1, 'IraOdio', 'maraphon2', '0:03', '2020-06-08 12:27:04'),
(12, 1, 'IraOdio', 'Марафон №2', '0:07', '2020-06-08 12:27:41'),
(13, 1, 'IraOdio', 'Марафон №1', '0:03', '2020-06-08 12:30:59'),
(14, 5, 'newnick', 'Марафон №1', '0:16', '2020-06-17 17:10:11'),
(15, 5, 'newnick', 'Марафон №2', '0:02', '2020-06-17 17:10:55');

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `self` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `id_account`, `name`, `nickname`, `age`, `self`, `email`) VALUES
(1, 1, 'Дима', 'IraOdio', 21, 'Текст о себе', 'myemail@dima.em'),
(3, 8, NULL, 'nick1', NULL, NULL, NULL),
(4, 9, NULL, 'user1', NULL, NULL, NULL),
(5, 10, NULL, 'newnick', NULL, NULL, NULL);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `stat`
--
ALTER TABLE `stat`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `stat`
--
ALTER TABLE `stat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
