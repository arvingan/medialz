-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 06 月 08 日 09:01
-- 服务器版本: 5.5.24-log
-- PHP 版本: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `mojie`
--

-- --------------------------------------------------------

--
-- 表的结构 `queue`
--

CREATE TABLE IF NOT EXISTS `queue` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sessionid` int(11) NOT NULL,
  `queuenumber` text NOT NULL,
  `phone` text NOT NULL,
  `job` text NOT NULL,
  `sex` text NOT NULL,
  `size` text NOT NULL,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `queue`
--

INSERT INTO `queue` (`id`, `sessionid`, `queuenumber`, `phone`, `job`, `sex`, `size`, `name`) VALUES
(1, 1, '1', '18017057704', '', '', '', ''),
(2, 1, '2', 'test', '', '', '', ''),
(5, 1, '3', '02', '', '1', '', '01'),
(6, 2, '1', '02', '', '1', '', '01');

-- --------------------------------------------------------

--
-- 表的结构 `session`
--

CREATE TABLE IF NOT EXISTS `session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sessionname` text NOT NULL,
  `sessiontime` text NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` text NOT NULL,
  `name` text NOT NULL,
  `sex` text NOT NULL,
  `wxid` text NOT NULL,
  `rtime` text NOT NULL,
  `size` text NOT NULL,
  `job` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 转存表中的数据 `users`
--

INSERT INTO `users` (`id`, `phone`, `name`, `sex`, `wxid`, `rtime`, `size`, `job`) VALUES
(1, '18017057704', '小干', '1', '', '', '', ''),
(2, 'test', '测试', '', '', '', '', ''),
(3, '01', '01', '1', '', '', '', ''),
(4, '02', '01', '1', '', '', '', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
