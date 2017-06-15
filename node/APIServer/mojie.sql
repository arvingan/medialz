-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-06-15 12:15:53
-- 服务器版本： 5.6.35-log
-- PHP Version: 5.4.45

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mojie`
--

-- --------------------------------------------------------

--
-- 表的结构 `queue`
--

CREATE TABLE IF NOT EXISTS `queue` (
  `id` int(11) NOT NULL,
  `sessionid` int(11) NOT NULL,
  `queuenumber` text NOT NULL,
  `phone` text,
  `job` text,
  `sex` text,
  `size` text,
  `name` text
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `queue`
--

INSERT INTO `queue` (`id`, `sessionid`, `queuenumber`, `phone`, `job`, `sex`, `size`, `name`) VALUES
(15, 2, '1', '18017057704', 'coser/showgirl/', '1', '666/666/666', 'arvin'),
(16, 2, '2', '15821678800', 'showgirl/', '0', '//', 'jjq'),
(17, 2, '3', '139160814521111', 'coser/', '1', '0/0/000000000', '王大王');

-- --------------------------------------------------------

--
-- 表的结构 `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) NOT NULL,
  `sessionname` text,
  `sessiontime` text,
  `type` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `session`
--

INSERT INTO `session` (`id`, `sessionname`, `sessiontime`, `type`) VALUES
(2, '6月15日', '222', 1),
(3, '6月15日', '', 0);

-- --------------------------------------------------------

--
-- 表的结构 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `phone` text NOT NULL,
  `name` text NOT NULL,
  `sex` text,
  `wxid` text,
  `rtime` text,
  `size` text,
  `job` text
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `phone`, `name`, `sex`, `wxid`, `rtime`, `size`, `job`) VALUES
(6, '18017057704', 'arvin', '1', NULL, NULL, '666/666/666', 'coser/showgirl/'),
(7, '15821678800', 'jjq', '0', NULL, NULL, '//', 'showgirl/'),
(8, '139160814521111', '王大王', '1', NULL, NULL, '0/0/000000000', 'coser/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `queue`
--
ALTER TABLE `queue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `session`
--
ALTER TABLE `session`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `queue`
--
ALTER TABLE `queue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
