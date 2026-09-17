-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 22 déc. 2025 à 20:44
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tantsaha_co2`
--

-- --------------------------------------------------------

--
-- Structure de la table `activite`
--

DROP TABLE IF EXISTS `activite`;
CREATE TABLE IF NOT EXISTS `activite` (
  `id_activite` int NOT NULL AUTO_INCREMENT,
  `id_culture` int NOT NULL,
  `type_activite` varchar(50) DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  PRIMARY KEY (`id_activite`),
  KEY `id_culture` (`id_culture`)
) ENGINE=MyISAM AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `activite`
--

INSERT INTO `activite` (`id_activite`, `id_culture`, `type_activite`, `date_debut`, `date_fin`) VALUES
(1, 1, 'Fikarakarana ny tany', '2025-10-21', '2025-11-30'),
(2, 1, 'Famafazana ', '2025-11-21', '2025-12-10'),
(3, 1, 'Fanetsana ', '2025-12-11', '2025-12-31'),
(4, 1, 'Fitondrana zezika 1 ', '2025-10-21', '2025-11-30'),
(5, 1, 'Fitondrana zezika 2', '2025-12-11', '2025-12-31'),
(6, 1, 'Fitondrana zezika 3', '2026-01-01', '2026-01-20'),
(7, 1, 'Fitondrana zezika 4', '2026-01-21', '2026-02-10'),
(8, 1, 'Fiavàna / Sarclage 1', '2026-01-01', '2026-01-20'),
(9, 1, 'Fiavàna / Sarclage 2', '2026-01-21', '2026-02-10'),
(10, 1, 'Famendrahana fanafody 1', '2025-10-21', '2026-02-10'),
(11, 1, 'Famendrahana fanafody 2', '2026-03-11', '2026-04-30'),
(12, 1, 'Fijinjana ', '2026-04-21', '2026-05-10'),
(13, 2, 'Fikarakarana ny tany', '2025-10-01', '2025-12-10'),
(14, 2, 'Famafazana', '2025-11-21', '2025-12-10'),
(15, 2, 'Fitondrana zezika 1', '2025-10-01', '2025-12-10'),
(16, 2, 'Fitondrana zezika 2', '2025-11-21', '2025-12-10'),
(17, 2, 'Fitondrana zezika 3', '2025-12-11', '2025-12-31'),
(18, 2, 'Fitondrana zezika 4', '2026-01-01', '2026-01-20'),
(19, 2, 'Fiavàna 1', '2025-12-11', '2025-12-31'),
(20, 2, 'Fiavàna  2', '2026-01-01', '2026-01-20'),
(21, 2, 'Fijinjana', '2026-04-11', '2026-04-30'),
(22, 3, 'Fikarakarana ny tany', '2025-10-01', '2025-10-31'),
(23, 3, 'Fambolena', '2025-11-11', '2025-11-30'),
(24, 3, 'Fitondrana zezika 1', '2025-10-01', '2025-10-31'),
(25, 3, 'Fitondrana zezika 2', '2025-12-01', '2025-12-20'),
(26, 3, 'Fitondrana zezika 3', '2025-12-21', '2026-01-10'),
(27, 3, 'Fiavàna / Sarclage 1', '2025-12-01', '2025-12-20'),
(28, 3, 'Fiavàna / Sarclage 2', '2025-12-21', '2026-01-20'),
(29, 3, 'Fanotofana', '2025-12-21', '2026-01-20'),
(30, 3, 'Famendrahana fanafody 1', '2025-10-01', '2025-10-31'),
(31, 3, 'Famendrahana fanafody 2', '2025-12-01', '2025-12-20'),
(32, 3, 'Famendrahana fanafody 3', '2026-03-01', '2026-04-20'),
(33, 3, 'Fiotazana', '2026-04-21', '2026-05-20');

-- --------------------------------------------------------

--
-- Structure de la table `alerte`
--

DROP TABLE IF EXISTS `alerte`;
CREATE TABLE IF NOT EXISTS `alerte` (
  `id_alerte` int NOT NULL AUTO_INCREMENT,
  `id_meteo` int DEFAULT NULL,
  `id_activite` int DEFAULT NULL,
  `type_alerte` varchar(50) DEFAULT NULL,
  `date_debut` date DEFAULT NULL,
  `date_fin` date DEFAULT NULL,
  `message` text,
  `etat` enum('non_lue','vue','traitee') DEFAULT 'non_lue',
  PRIMARY KEY (`id_alerte`),
  KEY `id_meteo` (`id_meteo`),
  KEY `id_activite` (`id_activite`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `alerte`
--

INSERT INTO `alerte` (`id_alerte`, `id_meteo`, `id_activite`, `type_alerte`, `date_debut`, `date_fin`, `message`, `etat`) VALUES
(1, 1, 1, 'Pluie', '2025-12-05', '2025-12-07', 'Mety hisy orana be. Tandremo ny famafazana.', 'non_lue'),
(2, NULL, 2, 'Fanetsana', '2025-12-11', '2025-12-15', 'Fotoana mety hanaovana fanetsana.', 'non_lue');

-- --------------------------------------------------------

--
-- Structure de la table `conseil`
--

DROP TABLE IF EXISTS `conseil`;
CREATE TABLE IF NOT EXISTS `conseil` (
  `id_conseil` int NOT NULL AUTO_INCREMENT,
  `type_conseil` varchar(50) DEFAULT NULL,
  `contenu` text,
  `audio` varchar(100) DEFAULT NULL,
  `pictogramme` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_conseil`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `conseil`
--

INSERT INTO `conseil` (`id_conseil`, `type_conseil`, `contenu`, `audio`, `pictogramme`) VALUES
(1, 'Semis', 'Aza mamafy amin’ny tany lena be na maina be. Miandrasa tany mando antonony.', 'audio_semis.mp3', 'semis.png'),
(2, 'Fertilisation', 'Ataovy ara-potoana ny fitondrana zezika mba hampatanjaka ny voly.', 'audio_zezika.mp3', 'zezika.png'),
(3, 'Sarclage', 'Esory matetika ny ahidratsy mba tsy haka ny otrikaina ilain’ny voly.', 'audio_sarclage.mp3', 'sarclage.png'),
(4, 'Fanafody', 'Ampiasao amin’ny fatra voatondro ny fanafody hiadiana amin’ny bibikely.', 'audio_fanafody.mp3', 'fanafody.png'),
(5, 'Fijinjana', 'Jereo raha masaka tsara ny voly alohan’ny fijinjana.', 'audio_fijinjana.mp3', 'recolte.png');

-- --------------------------------------------------------

--
-- Structure de la table `culture`
--

DROP TABLE IF EXISTS `culture`;
CREATE TABLE IF NOT EXISTS `culture` (
  `id_culture` int NOT NULL AUTO_INCREMENT,
  `nom_culture` varchar(50) DEFAULT NULL,
  `varieter` varchar(50) DEFAULT NULL,
  `cycle_vie` varchar(50) DEFAULT NULL,
  `localisation` varchar(100) DEFAULT NULL,
  `categorie_culture` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_culture`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `culture`
--

INSERT INTO `culture` (`id_culture`, `nom_culture`, `varieter`, `cycle_vie`, `localisation`, `categorie_culture`) VALUES
(1, 'Vary', 'Madikatra', 'Antonony', 'Analamanga', 'Andrano'),
(2, 'Vary', 'FOFIFA196', 'Antonony', 'Analamanga', 'Vary an-tanety'),
(3, 'Katsaka', 'MEVA', 'Lava', 'Analamanga', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `meteo`
--

DROP TABLE IF EXISTS `meteo`;
CREATE TABLE IF NOT EXISTS `meteo` (
  `id_meteo` int NOT NULL AUTO_INCREMENT,
  `localisation` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `temperature_min` float DEFAULT NULL,
  `temperature_max` float DEFAULT NULL,
  `pluie` float DEFAULT NULL,
  `vent` float DEFAULT NULL,
  `humidite` float DEFAULT NULL,
  `condition_meteo` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_meteo`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `observation`
--

DROP TABLE IF EXISTS `observation`;
CREATE TABLE IF NOT EXISTS `observation` (
  `id_observation` int NOT NULL AUTO_INCREMENT,
  `id_paysan` int NOT NULL,
  `titre_observation` varchar(100) DEFAULT NULL,
  `contenu` text,
  PRIMARY KEY (`id_observation`),
  KEY `id_paysan` (`id_paysan`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `paysans`
--

DROP TABLE IF EXISTS `paysans`;
CREATE TABLE IF NOT EXISTS `paysans` (
  `id_paysan` int NOT NULL AUTO_INCREMENT,
  `nom_paysan` varchar(50) NOT NULL,
  `prenom_paysan` varchar(50) NOT NULL,
  `num_telephone` varchar(20) DEFAULT NULL,
  `localisation` varchar(100) DEFAULT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  PRIMARY KEY (`id_paysan`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `paysans`
--

INSERT INTO `paysans` (`id_paysan`, `nom_paysan`, `prenom_paysan`, `num_telephone`, `localisation`, `mot_de_passe`) VALUES
(1, 'Rakoto', 'Jean', '0341234567', 'Analamanga', 'Rakoto200'),
(2, 'Rasoa', 'Marie', '0329876543', 'Alaotra Mangoro', 'Raoa300');

-- --------------------------------------------------------

--
-- Structure de la table `pratiquer`
--

DROP TABLE IF EXISTS `pratiquer`;
CREATE TABLE IF NOT EXISTS `pratiquer` (
  `id_paysan` int NOT NULL,
  `id_culture` int NOT NULL,
  PRIMARY KEY (`id_paysan`,`id_culture`),
  KEY `id_culture` (`id_culture`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `recevoir`
--

DROP TABLE IF EXISTS `recevoir`;
CREATE TABLE IF NOT EXISTS `recevoir` (
  `id_paysan` int NOT NULL,
  `id_alerte` int NOT NULL,
  PRIMARY KEY (`id_paysan`,`id_alerte`),
  KEY `id_alerte` (`id_alerte`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
