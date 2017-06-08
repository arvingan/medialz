-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-06-08 16:45:26
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
  `phone` text NOT NULL,
  `job` text NOT NULL,
  `sex` text NOT NULL,
  `size` text NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `queue`
--

INSERT INTO `queue` (`id`, `sessionid`, `queuenumber`, `phone`, `job`, `sex`, `size`, `name`) VALUES
(1, 1, '1', '18017057704', '', '', '', ''),
(2, 1, '2', 'test', '', '', '', ''),
(5, 1, '3', '02', '', '1', '', '01'),
(6, 2, '1', '02', '', '1', '', '01'),
(12, 3, '1', '18017057701', 'trueandtrue', '0', '1and2and3', '干金磊'),
(13, 1, '4', '180170577041', 'trueandtrue', '0', '1and2and3', 'das');

-- --------------------------------------------------------

--
-- 表的结构 `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) NOT NULL,
  `sessionname` text NOT NULL,
  `sessiontime` text NOT NULL,
  `type` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `session`
--

INSERT INTO `session` (`id`, `sessionname`, `sessiontime`, `type`) VALUES
(1, '测试场次01', '2017-06-08 下午3点', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `phone`, `name`, `sex`, `wxid`, `rtime`, `size`, `job`) VALUES
(1, '18017057704', '小干', '1', '', '', '', ''),
(2, '18017057703', 'aa', '', NULL, NULL, '', ''),
(3, '18017057701', '干金磊', '0', NULL, NULL, '1and2and3', 'trueandtrue'),
(4, '180170577041', 'das', '0', NULL, NULL, '1and2and3', 'trueandtrue');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `session`
--
ALTER TABLE `session`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
