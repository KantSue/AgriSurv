-- Passage des calendriers rizicoles à la saison 2026-2027 (dates décalées d'un an)
-- pour que des activités soient en cours ("Lahasa anio") pendant la démonstration.
-- À importer après maj_fofifa_riz_2025_2026.sql. Peut être rejoué : seules les dates
-- de la saison 2025-2026 sont décalées.
SET NAMES utf8mb4;

UPDATE planning
SET date_debut = DATE_ADD(date_debut, INTERVAL 1 YEAR),
    date_fin = DATE_ADD(date_fin, INTERVAL 1 YEAR)
WHERE date_debut < '2026-07-01';
