-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-02-2016 a las 00:50:30
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cinema`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `accion`
--

CREATE TABLE `accion` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `silla` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `fecha` date NOT NULL,
  `ciudad` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `accion`
--

INSERT INTO `accion` (`id`, `tipo`, `silla`, `nombre`, `fecha`, `ciudad`) VALUES
(1, 0, 91, 'nicolas', '2016-02-13', 'medellin'),
(2, 0, 92, 'nicolas', '2016-02-13', 'medellin'),
(3, 0, 45, 'nicolas', '2016-02-13', 'montoya'),
(4, 0, 46, 'nicolas', '2016-02-13', 'montoya'),
(5, 1, 1, 'CAROLINA', '2016-02-13', 'ENVIGADO'),
(6, 1, 2, 'CAROLINA', '2016-02-13', 'ENVIGADO'),
(7, 0, 17, 'NICOLAS', '2016-02-14', 'MEDELLIN'),
(8, 0, 18, 'NICOLAS', '2016-02-14', 'MEDELLIN');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comedia`
--

CREATE TABLE `comedia` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `silla` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `fecha` date NOT NULL,
  `ciudad` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `comedia`
--

INSERT INTO `comedia` (`id`, `tipo`, `silla`, `nombre`, `fecha`, `ciudad`) VALUES
(1, 0, 56, 'nicolas', '2016-02-13', 'medellin'),
(2, 0, 46, 'nicolas', '2016-02-13', 'medellin'),
(3, 0, 48, 'nicolas', '2016-02-13', 'medellin'),
(4, 0, 49, 'nicolas', '2016-02-13', 'medellin'),
(5, 0, 24, 'nicolas', '2016-02-13', 'medellin'),
(6, 0, 26, 'nicolas', '2016-02-13', 'medellin'),
(7, 0, 40, 'nicolas', '2016-02-13', 'envigado'),
(8, 0, 31, 'nicolas', '2016-02-13', 'envigado'),
(9, 0, 42, 'nicolas', '2016-02-13', 'envigado'),
(10, 0, 82, 'carolina', '2016-02-13', 'envigado'),
(11, 0, 83, 'carolina', '2016-02-13', 'envigado'),
(12, 0, 66, 'nicolas', '2016-02-13', 'envigado'),
(13, 0, 64, 'helena', '2016-02-13', 'medellin'),
(14, 0, 65, 'helena', '2016-02-13', 'medellin'),
(16, 0, 80, 'nicolas', '2016-02-14', 'moe'),
(18, 0, 50, 'nicolas', '2016-02-13', 'envigado'),
(19, 0, 51, 'nicolas', '2016-02-13', 'envigado'),
(20, 1, 4, 'aja', '2016-02-13', 'aja');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `drama`
--

CREATE TABLE `drama` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `silla` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `fecha` date NOT NULL,
  `ciudad` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `drama`
--

INSERT INTO `drama` (`id`, `tipo`, `silla`, `nombre`, `fecha`, `ciudad`) VALUES
(1, 0, 20, 'Iaoa', '2016-02-13', 'ion'),
(2, 0, 12, 'puebas', '2016-02-13', 'medellin'),
(3, 0, 37, 'puebas', '2016-02-13', 'medellin'),
(4, 0, 27, 'puebas', '2016-02-13', 'medellin'),
(5, 0, 47, 'carolina', '2016-02-13', 'envigado'),
(6, 0, 48, 'carolina', '2016-02-13', 'envigado'),
(7, 1, 3, 'nicolas', '2016-02-13', 'medellin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `terror`
--

CREATE TABLE `terror` (
  `id` int(11) NOT NULL,
  `tipo` int(11) NOT NULL,
  `silla` int(11) NOT NULL,
  `nombre` varchar(256) NOT NULL,
  `fecha` date NOT NULL,
  `ciudad` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `terror`
--

INSERT INTO `terror` (`id`, `tipo`, `silla`, `nombre`, `fecha`, `ciudad`) VALUES
(1, 0, 79, 'helena', '2016-02-13', 'envigado'),
(2, 0, 80, 'helena', '2016-02-13', 'envigado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `accion`
--
ALTER TABLE `accion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `comedia`
--
ALTER TABLE `comedia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `drama`
--
ALTER TABLE `drama`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `terror`
--
ALTER TABLE `terror`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `accion`
--
ALTER TABLE `accion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `comedia`
--
ALTER TABLE `comedia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT de la tabla `drama`
--
ALTER TABLE `drama`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT de la tabla `terror`
--
ALTER TABLE `terror`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
