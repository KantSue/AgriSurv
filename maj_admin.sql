-- Ajoute le rôle admin et les dates utilisées par les statistiques
-- sur une base installée avant cette version. À jouer une seule fois,
-- puis réimporter comptes_demo.sql pour avoir le compte admin.
SET NAMES utf8mb4;

ALTER TABLE paysans
  ADD COLUMN role ENUM('paysan','admin') NOT NULL DEFAULT 'paysan',
  ADD COLUMN date_inscription DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN derniere_connexion DATETIME DEFAULT NULL;
