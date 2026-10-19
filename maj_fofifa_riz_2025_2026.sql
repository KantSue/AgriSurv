-- Calendriers rizicoles FOFIFA / MINAE / DGM, saison 2025-2026
-- Source : Livre-Riz-2025-2026_VM-2.pdf (tetiandrom-pambolena vary)
-- Dates : debut de la premiere case coloree -> fin de la case rouge (derniere date conseillee).
SET NAMES utf8mb4;
START TRANSACTION;

-- Activites normalisees (les anciennes lignes restent pour les alertes existantes)
INSERT INTO activite (id_activite, type_activite) VALUES (1000, 'Fikarakarana ny tany');
INSERT INTO activite (id_activite, type_activite) VALUES (1001, 'Famafazana');
INSERT INTO activite (id_activite, type_activite) VALUES (1002, 'Fanetsana');
INSERT INTO activite (id_activite, type_activite) VALUES (1003, 'Fitondrana zezika 1');
INSERT INTO activite (id_activite, type_activite) VALUES (1004, 'Fitondrana zezika 2');
INSERT INTO activite (id_activite, type_activite) VALUES (1005, 'Fitondrana zezika 3');
INSERT INTO activite (id_activite, type_activite) VALUES (1006, 'Fitondrana zezika 4');
INSERT INTO activite (id_activite, type_activite) VALUES (1007, 'Fiavàna 1');
INSERT INTO activite (id_activite, type_activite) VALUES (1008, 'Fiavàna 2');
INSERT INTO activite (id_activite, type_activite) VALUES (1009, 'Fiavàna 3');
INSERT INTO activite (id_activite, type_activite) VALUES (1010, 'Famendrahana fanafody 1');
INSERT INTO activite (id_activite, type_activite) VALUES (1011, 'Famendrahana fanafody 2');
INSERT INTO activite (id_activite, type_activite) VALUES (1012, 'Fijinjana');

INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 100, 'Vary', 'Alaotra Mangoro', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 101, 'Vary', 'Ambatosoa', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 102, 'Vary', 'Amoron''i Mania', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 103, 'Vary', 'Analanjirofo', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 104, 'Vary', 'Anosy', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 105, 'Vary', 'Atsimo Atsinanana', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 106, 'Vary', 'Atsinanana', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 107, 'Vary', 'Betsiboka', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 108, 'Vary', 'Boeny', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 109, 'Vary', 'Bongolava', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 110, 'Vary', 'Diana', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 111, 'Vary', 'Fitovinany', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 112, 'Vary', 'Haute Matsiatra', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 113, 'Vary', 'Ihorombe', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 114, 'Vary', 'Itasy', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 115, 'Vary', 'Melaky', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 116, 'Vary', 'Menabe', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 117, 'Vary', 'Sava', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 118, 'Vary', 'Sofia', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 119, 'Vary', 'Vakinankaratra', image_cultur FROM culture WHERE id_culture = 1;
INSERT INTO culture (id_culture, nom_culture, localisation, image_cultur) SELECT 120, 'Vary', 'Vatovavy', image_cultur FROM culture WHERE id_culture = 1;

INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (100, 'Vary an-drano', 100);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (101, 'Vary an-tanety', 100);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (102, 'Vary an-drano', 101);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (103, 'Vary an-tanety', 101);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (104, 'Vary an-drano', 102);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (105, 'Vary an-tanety', 102);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (106, 'Vary an-drano', 103);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (107, 'Vary an-tanety', 103);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (108, 'Vary an-drano', 104);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (109, 'Vary an-tanety', 104);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (110, 'Vary an-drano', 105);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (111, 'Vary an-tanety', 105);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (112, 'Vary an-drano', 106);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (113, 'Vary an-tanety', 106);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (114, 'Vary an-drano', 107);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (115, 'Vary an-tanety', 107);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (116, 'Vary an-drano', 108);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (117, 'Vary an-tanety', 108);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (118, 'Vary an-drano', 109);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (119, 'Vary an-tanety', 109);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (120, 'Vary an-drano', 110);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (121, 'Vary an-tanety', 110);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (122, 'Vary an-drano', 111);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (123, 'Vary an-tanety', 111);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (124, 'Vary an-drano', 112);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (125, 'Vary an-tanety', 112);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (126, 'Vary an-drano', 113);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (127, 'Vary an-tanety', 113);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (128, 'Vary an-drano', 114);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (129, 'Vary an-tanety', 114);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (130, 'Vary an-drano', 115);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (131, 'Vary an-tanety', 115);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (132, 'Vary an-drano', 116);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (133, 'Vary an-tanety', 116);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (134, 'Vary an-drano', 117);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (135, 'Vary an-tanety', 117);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (136, 'Vary an-drano', 118);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (137, 'Vary an-tanety', 118);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (138, 'Vary an-drano', 119);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (139, 'Vary an-tanety', 119);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (140, 'Vary an-drano', 120);
INSERT INTO categorie (id_categorie, categorie_culture, id_culture) VALUES (141, 'Vary an-tanety', 120);

DELETE FROM planning WHERE id_varieter IN (1, 2);

-- p.07 Alaotra Mangoro / Vary an-drano / MKX, Mihary (Alaotra) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (100, 100, 'MKX, Mihary (Alaotra)', 'fohy', 100);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 100, '2025-11-01', '2025-12-10'),
  (1001, 100, '2025-12-01', '2025-12-31'),
  (1002, 100, '2025-12-21', '2026-01-20'),
  (1003, 100, '2025-11-01', '2025-12-10'),
  (1004, 100, '2025-12-21', '2026-01-20'),
  (1005, 100, '2026-01-01', '2026-01-31'),
  (1006, 100, '2026-01-11', '2026-02-10'),
  (1007, 100, '2026-01-01', '2026-01-31'),
  (1008, 100, '2026-01-21', '2026-02-20'),
  (1010, 100, '2025-12-01', '2026-01-20'),
  (1011, 100, '2026-03-21', '2026-04-20'),
  (1012, 100, '2026-03-21', '2026-04-20');

-- p.07 Alaotra Mangoro / Vary an-drano / Sebota 231, Madikatra, IR64, Fy Vary 32 (Alaotra) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (101, 100, 'Sebota 231, Madikatra, IR64, Fy Vary 32 (Alaotra)', 'antonony', 100);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 101, '2025-10-21', '2025-11-30'),
  (1001, 101, '2025-12-01', '2025-12-20'),
  (1002, 101, '2025-12-21', '2026-01-10'),
  (1003, 101, '2025-10-21', '2025-11-30'),
  (1004, 101, '2025-12-21', '2026-01-10'),
  (1005, 101, '2026-01-01', '2026-01-20'),
  (1006, 101, '2026-01-11', '2026-01-31'),
  (1007, 101, '2026-01-01', '2026-01-20'),
  (1008, 101, '2026-01-11', '2026-01-31'),
  (1010, 101, '2025-12-01', '2026-01-20'),
  (1011, 101, '2026-03-11', '2026-04-20'),
  (1012, 101, '2026-04-01', '2026-04-20');

-- p.08 Alaotra Mangoro / Vary an-drano / Tsemaka, Makalioka, Dista (Alaotra) / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (102, 100, 'Tsemaka, Makalioka, Dista (Alaotra)', 'lava', 100);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 102, '2025-10-11', '2025-11-20'),
  (1001, 102, '2025-11-21', '2025-12-10'),
  (1002, 102, '2025-12-11', '2025-12-31'),
  (1003, 102, '2025-10-11', '2025-11-20'),
  (1004, 102, '2025-12-11', '2025-12-31'),
  (1005, 102, '2026-01-01', '2026-01-20'),
  (1006, 102, '2026-01-21', '2026-02-10'),
  (1007, 102, '2026-01-01', '2026-01-20'),
  (1008, 102, '2026-01-21', '2026-02-10'),
  (1010, 102, '2025-11-21', '2026-02-10'),
  (1011, 102, '2026-03-21', '2026-05-10'),
  (1012, 102, '2026-04-21', '2026-05-10');

-- p.08 Alaotra Mangoro / Vary an-tanety / FOFIFA 173, Primavera (Alaotra) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (103, 100, 'FOFIFA 173, Primavera (Alaotra)', 'fohy', 101);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 103, '2025-10-01', '2025-12-31'),
  (1001, 103, '2025-12-01', '2025-12-31'),
  (1003, 103, '2025-10-01', '2025-12-31'),
  (1004, 103, '2025-12-01', '2025-12-31'),
  (1005, 103, '2025-12-21', '2026-01-20'),
  (1006, 103, '2026-01-11', '2026-02-10'),
  (1007, 103, '2025-12-21', '2026-01-20'),
  (1008, 103, '2026-01-11', '2026-02-10'),
  (1012, 103, '2026-04-01', '2026-04-30');

-- p.09 Alaotra Mangoro / Vary an-tanety / Fotsiambo B 22 (Alaotra) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (104, 100, 'Fotsiambo B 22 (Alaotra)', 'antonony', 101);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 104, '2025-10-01', '2025-12-20'),
  (1001, 104, '2025-12-01', '2025-12-20'),
  (1003, 104, '2025-10-01', '2025-12-20'),
  (1004, 104, '2025-12-01', '2025-12-20'),
  (1005, 104, '2025-12-21', '2026-01-10'),
  (1006, 104, '2026-01-11', '2026-01-31'),
  (1007, 104, '2025-12-21', '2026-01-10'),
  (1008, 104, '2026-01-11', '2026-01-31'),
  (1012, 104, '2026-04-11', '2026-04-30');

-- p.09 Alaotra Mangoro / Vary an-drano / Mihary, MKX (Mangoro) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (105, 100, 'Mihary, MKX (Mangoro)', 'fohy', 100);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 105, '2025-11-11', '2025-12-20'),
  (1001, 105, '2026-01-01', '2026-01-20'),
  (1002, 105, '2026-01-11', '2026-01-31'),
  (1003, 105, '2025-11-11', '2025-12-20'),
  (1004, 105, '2026-01-11', '2026-01-31'),
  (1005, 105, '2026-02-01', '2026-02-20'),
  (1007, 105, '2026-02-01', '2026-02-20'),
  (1008, 105, '2026-02-11', '2026-02-28'),
  (1009, 105, '2026-02-11', '2026-02-28'),
  (1010, 105, '2025-11-11', '2026-02-20'),
  (1011, 105, '2026-03-11', '2026-05-10'),
  (1012, 105, '2026-04-21', '2026-05-10');

-- p.10 Alaotra Mangoro / Vary an-drano / Madikatra, IR 64, S231 (Mangoro) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (106, 100, 'Madikatra, IR 64, S231 (Mangoro)', 'antonony', 100);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 106, '2025-10-21', '2025-11-30'),
  (1001, 106, '2025-12-01', '2025-12-31'),
  (1002, 106, '2025-12-21', '2026-01-20'),
  (1003, 106, '2025-10-21', '2025-11-30'),
  (1004, 106, '2025-12-21', '2026-01-20'),
  (1005, 106, '2026-01-11', '2026-02-10'),
  (1006, 106, '2026-01-21', '2026-02-20'),
  (1007, 106, '2026-01-11', '2026-02-10'),
  (1008, 106, '2026-01-21', '2026-02-20'),
  (1010, 106, '2025-10-21', '2026-02-10'),
  (1011, 106, '2026-03-11', '2026-05-10'),
  (1012, 106, '2026-04-11', '2026-05-10');

-- p.10 Alaotra Mangoro / Vary an-drano / Dista, Mk 34, Tsemaka (Mangoro) / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (107, 100, 'Dista, Mk 34, Tsemaka (Mangoro)', 'lava', 100);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 107, '2025-10-01', '2025-11-10'),
  (1001, 107, '2025-11-11', '2025-11-30'),
  (1002, 107, '2025-12-01', '2025-12-20'),
  (1003, 107, '2025-10-01', '2025-11-10'),
  (1004, 107, '2025-12-01', '2025-12-20'),
  (1005, 107, '2025-12-21', '2026-01-10'),
  (1006, 107, '2026-01-11', '2026-01-31'),
  (1007, 107, '2025-12-21', '2026-01-10'),
  (1008, 107, '2026-01-11', '2026-01-31'),
  (1010, 107, '2025-10-01', '2026-01-31'),
  (1011, 107, '2026-03-11', '2026-04-30'),
  (1012, 107, '2026-04-11', '2026-04-30');

-- p.11 Alaotra Mangoro / Vary an-tanety / Nerica 4 (Mangoro) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (108, 100, 'Nerica 4 (Mangoro)', 'fohy', 101);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 108, '2025-10-01', '2025-12-31'),
  (1001, 108, '2025-12-01', '2025-12-31'),
  (1003, 108, '2025-10-01', '2025-12-31'),
  (1004, 108, '2025-12-01', '2025-12-31'),
  (1005, 108, '2025-12-21', '2026-01-20'),
  (1006, 108, '2026-01-11', '2026-02-10'),
  (1007, 108, '2025-12-21', '2026-01-20'),
  (1008, 108, '2026-01-11', '2026-02-10'),
  (1012, 108, '2026-04-01', '2026-04-30');

-- p.11 Alaotra Mangoro / Vary an-tanety / Fotsiambo B 22, FOFIFA 196 (Mangoro) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (109, 100, 'Fotsiambo B 22, FOFIFA 196 (Mangoro)', 'antonony', 101);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 109, '2025-10-01', '2025-12-20'),
  (1001, 109, '2025-12-01', '2025-12-20'),
  (1003, 109, '2025-10-01', '2025-12-20'),
  (1004, 109, '2025-12-01', '2025-12-20'),
  (1005, 109, '2025-12-21', '2026-01-10'),
  (1006, 109, '2026-01-11', '2026-01-31'),
  (1007, 109, '2025-12-21', '2026-01-10'),
  (1008, 109, '2026-01-11', '2026-01-31'),
  (1012, 109, '2026-04-11', '2026-04-30');

-- p.12 Ambatosoa / Vary an-drano / FOFIFA 198, 2787, Fy Vary 32 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (110, 101, 'FOFIFA 198, 2787, Fy Vary 32', 'lava', 102);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 110, '2025-11-01', '2025-11-30'),
  (1001, 110, '2025-12-01', '2026-01-10'),
  (1002, 110, '2025-12-21', '2026-01-31'),
  (1003, 110, '2025-11-01', '2025-11-30'),
  (1004, 110, '2025-12-21', '2026-01-31'),
  (1005, 110, '2026-01-11', '2026-02-20'),
  (1006, 110, '2026-02-01', '2026-03-10'),
  (1007, 110, '2026-01-11', '2026-02-20'),
  (1008, 110, '2026-02-01', '2026-03-10'),
  (1010, 110, '2025-12-01', '2026-02-28'),
  (1011, 110, '2026-04-01', '2026-06-10'),
  (1012, 110, '2026-05-01', '2026-06-10');

-- p.12 Ambatosoa / Vary an-tanety / Fotsiambo B 22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (111, 101, 'Fotsiambo B 22', 'fohy', 103);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 111, '2025-10-01', '2026-02-10'),
  (1001, 111, '2025-12-01', '2026-02-10'),
  (1003, 111, '2025-10-01', '2026-02-10'),
  (1004, 111, '2025-12-01', '2026-02-10'),
  (1005, 111, '2025-12-21', '2026-02-28'),
  (1006, 111, '2026-01-11', '2026-03-20'),
  (1007, 111, '2025-12-21', '2026-02-28'),
  (1008, 111, '2026-01-11', '2026-03-20'),
  (1012, 111, '2026-04-01', '2026-06-10');

-- p.13 Ambatosoa / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (112, 101, 'Nerica 4', 'antonony', 103);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 112, '2025-10-01', '2026-01-31'),
  (1001, 112, '2025-12-01', '2026-01-31'),
  (1003, 112, '2025-10-01', '2026-01-31'),
  (1004, 112, '2025-12-01', '2026-01-31'),
  (1005, 112, '2025-12-21', '2026-02-20'),
  (1006, 112, '2026-01-11', '2026-03-10'),
  (1007, 112, '2025-12-21', '2026-02-20'),
  (1008, 112, '2026-01-11', '2026-03-10'),
  (1012, 112, '2026-04-11', '2026-06-10');

-- p.13 Amoron'i Mania / Vary an-drano / X 915, X 1648 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (113, 102, 'X 915, X 1648', 'antonony', 104);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 113, '2025-10-01', '2026-01-10'),
  (1001, 113, '2025-11-11', '2026-01-10'),
  (1002, 113, '2025-12-01', '2026-01-20'),
  (1003, 113, '2025-10-01', '2025-11-10'),
  (1004, 113, '2025-12-01', '2026-01-20'),
  (1005, 113, '2025-12-21', '2026-02-10'),
  (1006, 113, '2026-01-01', '2026-02-20'),
  (1007, 113, '2025-12-21', '2026-02-10'),
  (1008, 113, '2026-01-01', '2026-02-20'),
  (1010, 113, '2025-11-21', '2026-01-20'),
  (1011, 113, '2026-03-21', '2026-05-20'),
  (1012, 113, '2026-03-21', '2026-05-20');

-- p.14 Amoron'i Mania / Vary an-drano / X265, FOFIFA 160, FOFIFA 195, FOFIFA 196 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (114, 102, 'X265, FOFIFA 160, FOFIFA 195, FOFIFA 196', 'lava', 104);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 114, '2025-10-01', '2025-12-31'),
  (1001, 114, '2025-11-11', '2025-12-31'),
  (1002, 114, '2025-12-01', '2026-01-20'),
  (1003, 114, '2025-10-01', '2025-11-10'),
  (1004, 114, '2025-12-01', '2026-01-20'),
  (1005, 114, '2025-12-21', '2026-02-10'),
  (1006, 114, '2026-01-11', '2026-02-28'),
  (1007, 114, '2025-12-21', '2026-02-10'),
  (1008, 114, '2026-01-11', '2026-02-28'),
  (1010, 114, '2025-11-11', '2026-02-10'),
  (1011, 114, '2026-04-11', '2026-05-31'),
  (1012, 114, '2026-04-11', '2026-05-31');

-- p.14 Amoron'i Mania / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (115, 102, 'Nerica 4', 'antonony', 105);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 115, '2025-10-01', '2025-12-20'),
  (1001, 115, '2025-12-01', '2025-12-20'),
  (1003, 115, '2025-10-01', '2025-12-20'),
  (1004, 115, '2025-12-01', '2025-12-20'),
  (1005, 115, '2025-12-21', '2026-01-10'),
  (1006, 115, '2026-01-11', '2026-01-31'),
  (1007, 115, '2025-12-21', '2026-01-10'),
  (1008, 115, '2026-01-11', '2026-01-31'),
  (1012, 115, '2026-04-11', '2026-04-30');

-- p.15 Amoron'i Mania / Vary an-tanety / FOFIFA 173 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (116, 102, 'FOFIFA 173', 'lava', 105);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 116, '2025-10-01', '2025-12-10'),
  (1001, 116, '2025-11-21', '2025-12-10'),
  (1003, 116, '2025-10-01', '2025-12-10'),
  (1004, 116, '2025-11-21', '2025-12-10'),
  (1005, 116, '2025-12-11', '2025-12-31'),
  (1006, 116, '2026-01-01', '2026-01-20'),
  (1007, 116, '2025-12-11', '2025-12-31'),
  (1008, 116, '2026-01-01', '2026-01-20'),
  (1012, 116, '2026-04-11', '2026-04-30');

-- p.15 Analamanga / Vary an-drano / X 915 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (117, 1, 'X 915', 'fohy', 1);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 117, '2025-11-01', '2025-12-10'),
  (1001, 117, '2025-12-01', '2025-12-31'),
  (1002, 117, '2025-12-21', '2026-01-20'),
  (1003, 117, '2025-11-01', '2025-12-10'),
  (1004, 117, '2025-12-21', '2026-01-20'),
  (1005, 117, '2026-01-01', '2026-01-31'),
  (1007, 117, '2026-01-01', '2026-01-31'),
  (1008, 117, '2026-01-11', '2026-02-10'),
  (1010, 117, '2025-11-01', '2026-02-10'),
  (1011, 117, '2026-03-01', '2026-04-30'),
  (1012, 117, '2026-04-01', '2026-04-30');

-- p.16 Analamanga / Vary an-drano / Madikatra / antonony
UPDATE varieter SET nom_varieter = 'Madikatra', type_culture = 'antonony', id_categorie = 1, id_culture = 1 WHERE id_varieter = 1;
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 1, '2025-10-21', '2025-11-30'),
  (1001, 1, '2025-11-21', '2025-12-10'),
  (1002, 1, '2025-12-11', '2025-12-31'),
  (1003, 1, '2025-10-21', '2025-11-30'),
  (1004, 1, '2025-12-11', '2025-12-31'),
  (1005, 1, '2026-01-01', '2026-01-20'),
  (1006, 1, '2026-01-21', '2026-02-10'),
  (1007, 1, '2026-01-01', '2026-01-20'),
  (1008, 1, '2026-01-21', '2026-02-10'),
  (1010, 1, '2025-10-21', '2026-02-10'),
  (1011, 1, '2026-03-11', '2026-04-30'),
  (1012, 1, '2026-04-11', '2026-04-30');

-- p.16 Analamanga / Vary an-drano / X 265, FOFIFA 198 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (118, 1, 'X 265, FOFIFA 198', 'lava', 1);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 118, '2025-10-01', '2025-11-10'),
  (1001, 118, '2025-11-11', '2025-11-30'),
  (1002, 118, '2025-12-01', '2025-12-20'),
  (1003, 118, '2025-10-01', '2025-11-10'),
  (1004, 118, '2025-12-01', '2025-12-20'),
  (1005, 118, '2025-12-21', '2026-01-10'),
  (1007, 118, '2025-12-21', '2026-01-10'),
  (1008, 118, '2026-01-11', '2026-01-31'),
  (1010, 118, '2025-10-01', '2026-01-31'),
  (1011, 118, '2026-03-11', '2026-04-30'),
  (1012, 118, '2026-04-11', '2026-04-30');

-- p.17 Analamanga / Vary an-tanety / FOFIFA 196, FOFIFA 173, CHHOMRONG DHAN, FOFIFA 186 / antonony
UPDATE varieter SET nom_varieter = 'FOFIFA 196, FOFIFA 173, CHHOMRONG DHAN, FOFIFA 186', type_culture = 'antonony', id_categorie = 2, id_culture = 1 WHERE id_varieter = 2;
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 2, '2025-10-01', '2025-11-30'),
  (1001, 2, '2025-11-11', '2025-11-30'),
  (1003, 2, '2025-10-01', '2025-11-30'),
  (1004, 2, '2025-11-11', '2025-11-30'),
  (1005, 2, '2025-12-01', '2025-12-20'),
  (1006, 2, '2025-12-21', '2026-01-10'),
  (1007, 2, '2025-12-01', '2025-12-20'),
  (1008, 2, '2025-12-21', '2026-01-10'),
  (1009, 2, '2026-01-11', '2026-01-31'),
  (1012, 2, '2026-04-01', '2026-04-20');

-- p.17 Analanjirofo / Vary an-drano / X265, IR64, FOFIFA 189, FOFIFA 190 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (119, 103, 'X265, IR64, FOFIFA 189, FOFIFA 190', 'antonony', 106);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 119, '2025-11-01', '2025-12-20'),
  (1001, 119, '2025-12-21', '2026-01-20'),
  (1002, 119, '2026-01-11', '2026-02-10'),
  (1003, 119, '2025-11-01', '2025-12-20'),
  (1004, 119, '2026-01-11', '2026-02-10'),
  (1005, 119, '2026-02-01', '2026-02-28'),
  (1006, 119, '2026-02-11', '2026-03-10'),
  (1007, 119, '2026-02-01', '2026-02-28'),
  (1008, 119, '2026-02-11', '2026-03-10'),
  (1010, 119, '2025-11-11', '2026-02-28'),
  (1011, 119, '2026-04-11', '2026-05-31'),
  (1012, 119, '2026-05-01', '2026-05-31');

-- p.18 Analanjirofo / Vary an-drano / IR64, FOFIFA 198, 2787 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (120, 103, 'IR64, FOFIFA 198, 2787', 'lava', 106);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 120, '2025-10-21', '2025-11-30'),
  (1001, 120, '2025-12-01', '2025-12-31'),
  (1002, 120, '2025-12-21', '2026-01-20'),
  (1003, 120, '2025-10-21', '2025-11-30'),
  (1004, 120, '2025-12-21', '2026-01-20'),
  (1005, 120, '2026-01-11', '2026-02-10'),
  (1006, 120, '2026-02-01', '2026-02-28'),
  (1007, 120, '2026-01-11', '2026-02-10'),
  (1008, 120, '2026-02-01', '2026-02-28'),
  (1010, 120, '2025-12-01', '2026-02-28'),
  (1011, 120, '2026-04-11', '2026-05-31'),
  (1012, 120, '2026-05-01', '2026-05-31');

-- p.18 Analanjirofo / Vary an-tanety / Fotsiambo B 22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (121, 103, 'Fotsiambo B 22', 'fohy', 107);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 121, '2025-10-01', '2026-01-31'),
  (1001, 121, '2025-12-11', '2026-02-10'),
  (1003, 121, '2025-10-01', '2026-01-31'),
  (1004, 121, '2025-12-01', '2026-01-31'),
  (1005, 121, '2025-12-21', '2026-02-20'),
  (1006, 121, '2026-01-11', '2026-03-10'),
  (1007, 121, '2025-12-21', '2026-02-20'),
  (1008, 121, '2026-01-11', '2026-03-10'),
  (1012, 121, '2026-04-11', '2026-06-10');

-- p.19 Analanjirofo / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (122, 103, 'Nerica 4', 'antonony', 107);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 122, '2025-10-01', '2026-01-31'),
  (1001, 122, '2025-12-01', '2026-01-31'),
  (1003, 122, '2025-10-01', '2026-01-31'),
  (1004, 122, '2025-12-01', '2026-01-31'),
  (1005, 122, '2025-12-21', '2026-02-20'),
  (1006, 122, '2026-01-11', '2026-03-10'),
  (1007, 122, '2025-12-21', '2026-02-20'),
  (1008, 122, '2026-01-11', '2026-03-10'),
  (1009, 122, '2026-02-01', '2026-03-31'),
  (1012, 122, '2026-04-11', '2026-06-10');

-- p.19 Anosy / Vary an-drano / X 265, Sebota 231 (Taolagnaro) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (123, 104, 'X 265, Sebota 231 (Taolagnaro)', 'antonony', 108);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 123, '2025-12-01', '2026-01-10'),
  (1001, 123, '2026-01-01', '2026-01-20'),
  (1002, 123, '2026-01-21', '2026-02-10'),
  (1003, 123, '2025-12-01', '2026-01-10'),
  (1004, 123, '2026-01-21', '2026-02-10'),
  (1005, 123, '2026-02-11', '2026-02-28'),
  (1006, 123, '2026-02-21', '2026-03-10'),
  (1007, 123, '2026-02-11', '2026-02-28'),
  (1008, 123, '2026-02-21', '2026-03-10'),
  (1010, 123, '2026-01-01', '2026-02-28'),
  (1011, 123, '2026-04-11', '2026-05-20'),
  (1012, 123, '2026-05-01', '2026-05-20');

-- p.20 Anosy / Vary an-tanety / Nerica 14 (Taolagnaro) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (124, 104, 'Nerica 14 (Taolagnaro)', 'fohy', 109);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 124, '2025-10-01', '2026-02-28'),
  (1001, 124, '2025-12-21', '2026-02-28'),
  (1003, 124, '2025-10-01', '2026-02-28'),
  (1004, 124, '2025-12-21', '2026-02-28'),
  (1005, 124, '2026-01-11', '2026-03-20'),
  (1006, 124, '2026-02-01', '2026-03-20'),
  (1007, 124, '2026-01-11', '2026-03-20'),
  (1008, 124, '2026-02-01', '2026-03-20'),
  (1012, 124, '2026-04-01', '2026-06-10');

-- p.20 Anosy / Vary an-tanety / Fotsiambo B 22 (Taolagnaro) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (125, 104, 'Fotsiambo B 22 (Taolagnaro)', 'antonony', 109);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 125, '2025-10-01', '2026-01-31'),
  (1001, 125, '2025-12-21', '2026-01-31'),
  (1003, 125, '2025-10-01', '2026-01-31'),
  (1004, 125, '2025-12-21', '2026-01-31'),
  (1005, 125, '2026-01-11', '2026-02-20'),
  (1006, 125, '2026-02-01', '2026-03-10'),
  (1007, 125, '2026-01-11', '2026-02-20'),
  (1008, 125, '2026-02-01', '2026-03-10'),
  (1012, 125, '2026-05-01', '2026-06-10');

-- p.21 Atsimo Atsinanana / Vary an-drano / Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (126, 105, 'Mihary', 'fohy', 110);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 126, '2025-11-01', '2025-12-20'),
  (1001, 126, '2025-12-01', '2025-12-20'),
  (1002, 126, '2025-12-21', '2026-01-10'),
  (1003, 126, '2025-11-01', '2025-12-20'),
  (1004, 126, '2025-12-21', '2026-01-10'),
  (1005, 126, '2026-01-11', '2026-01-31'),
  (1007, 126, '2026-01-11', '2026-01-31'),
  (1010, 126, '2025-12-21', '2026-01-31'),
  (1011, 126, '2026-02-21', '2026-04-10'),
  (1012, 126, '2026-03-21', '2026-04-10');

-- p.21 Atsimo Atsinanana / Vary an-drano / FOFIFA 197, X 265 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (127, 105, 'FOFIFA 197, X 265', 'antonony', 110);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 127, '2025-11-11', '2025-12-20'),
  (1001, 127, '2025-12-01', '2025-12-20'),
  (1002, 127, '2025-12-21', '2026-01-10'),
  (1003, 127, '2025-11-11', '2025-12-20'),
  (1004, 127, '2025-12-21', '2026-01-10'),
  (1005, 127, '2026-01-11', '2026-01-31'),
  (1006, 127, '2026-02-01', '2026-02-20'),
  (1007, 127, '2026-01-11', '2026-01-31'),
  (1008, 127, '2026-02-01', '2026-02-20'),
  (1010, 127, '2025-12-21', '2026-02-20'),
  (1011, 127, '2026-03-11', '2026-04-30'),
  (1012, 127, '2026-04-11', '2026-04-30');

-- p.22 Atsimo Atsinanana / Vary an-drano / FOFIFA 198 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (128, 105, 'FOFIFA 198', 'lava', 110);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 128, '2025-11-01', '2025-12-10'),
  (1001, 128, '2025-11-21', '2025-12-10'),
  (1002, 128, '2025-12-11', '2025-12-31'),
  (1003, 128, '2025-11-01', '2025-12-10'),
  (1004, 128, '2025-12-11', '2025-12-31'),
  (1005, 128, '2026-01-01', '2026-01-20'),
  (1006, 128, '2026-01-21', '2026-02-10'),
  (1007, 128, '2026-01-01', '2026-01-20'),
  (1008, 128, '2026-01-21', '2026-02-10'),
  (1009, 128, '2026-02-11', '2026-02-28'),
  (1010, 128, '2025-11-21', '2026-02-28'),
  (1011, 128, '2026-03-21', '2026-05-10'),
  (1012, 128, '2026-04-21', '2026-05-10');

-- p.22 Atsimo Atsinanana / Vary an-tanety / Fotsiambo B 22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (129, 105, 'Fotsiambo B 22', 'fohy', 111);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 129, '2025-10-01', '2026-02-10'),
  (1001, 129, '2025-11-21', '2026-02-10'),
  (1003, 129, '2025-10-01', '2026-02-10'),
  (1004, 129, '2025-11-21', '2026-02-10'),
  (1005, 129, '2025-12-11', '2026-02-28'),
  (1006, 129, '2026-01-01', '2026-03-20'),
  (1007, 129, '2025-12-11', '2026-02-28'),
  (1008, 129, '2026-01-01', '2026-03-20'),
  (1012, 129, '2026-03-21', '2026-06-10');

-- p.23 Atsimo Atsinanana / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (130, 105, 'Nerica 4', 'antonony', 111);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 130, '2025-10-01', '2026-01-31'),
  (1001, 130, '2025-11-21', '2026-01-31'),
  (1003, 130, '2025-10-01', '2026-01-31'),
  (1004, 130, '2025-11-21', '2026-01-31'),
  (1005, 130, '2025-12-11', '2026-02-20'),
  (1006, 130, '2026-01-01', '2026-03-10'),
  (1007, 130, '2025-12-11', '2026-02-20'),
  (1008, 130, '2026-01-01', '2026-03-10'),
  (1012, 130, '2026-04-01', '2026-06-10');

-- p.23 Atsinanana / Vary an-drano / Mihary, X 1648 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (131, 106, 'Mihary, X 1648', 'fohy', 112);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 131, '2025-11-11', '2025-12-31'),
  (1001, 131, '2025-12-11', '2025-12-31'),
  (1002, 131, '2026-01-01', '2026-01-20'),
  (1003, 131, '2025-11-11', '2025-12-31'),
  (1004, 131, '2026-01-01', '2026-01-20'),
  (1005, 131, '2026-01-21', '2026-02-10'),
  (1007, 131, '2026-01-21', '2026-02-10'),
  (1010, 131, '2025-12-11', '2026-02-10'),
  (1011, 131, '2026-03-01', '2026-04-20'),
  (1012, 131, '2026-04-01', '2026-04-20');

-- p.24 Atsinanana / Vary an-drano / FOFIFA 190 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (132, 106, 'FOFIFA 190', 'antonony', 112);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 132, '2025-11-21', '2025-12-31'),
  (1001, 132, '2025-12-11', '2025-12-31'),
  (1002, 132, '2026-01-01', '2026-01-20'),
  (1003, 132, '2025-11-21', '2025-12-31'),
  (1004, 132, '2026-01-01', '2026-01-20'),
  (1005, 132, '2026-01-21', '2026-02-10'),
  (1006, 132, '2026-02-11', '2026-02-28'),
  (1007, 132, '2026-01-21', '2026-02-10'),
  (1008, 132, '2026-02-11', '2026-02-28'),
  (1010, 132, '2025-12-11', '2026-02-20'),
  (1011, 132, '2026-03-11', '2026-05-10'),
  (1012, 132, '2026-04-21', '2026-05-10');

-- p.24 Atsinanana / Vary an-drano / FOFIFA 198 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (133, 106, 'FOFIFA 198', 'lava', 112);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 133, '2025-11-11', '2025-12-31'),
  (1001, 133, '2025-12-11', '2025-12-31'),
  (1002, 133, '2026-01-01', '2026-01-20'),
  (1003, 133, '2025-11-11', '2025-12-31'),
  (1004, 133, '2026-01-01', '2026-01-20'),
  (1005, 133, '2026-01-21', '2026-02-10'),
  (1006, 133, '2026-02-11', '2026-02-28'),
  (1007, 133, '2026-01-21', '2026-02-10'),
  (1008, 133, '2026-02-11', '2026-02-28'),
  (1010, 133, '2025-12-11', '2026-03-10'),
  (1011, 133, '2026-04-01', '2026-05-31'),
  (1012, 133, '2026-05-11', '2026-05-31');

-- p.25 Atsinanana / Vary an-tanety / Fotsiambo B 22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (134, 106, 'Fotsiambo B 22', 'fohy', 113);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 134, '2025-10-01', '2026-01-31'),
  (1001, 134, '2025-11-11', '2026-01-31'),
  (1003, 134, '2025-10-01', '2026-01-31'),
  (1004, 134, '2025-11-11', '2026-01-31'),
  (1005, 134, '2025-12-01', '2026-02-20'),
  (1006, 134, '2025-12-21', '2026-03-10'),
  (1007, 134, '2025-12-01', '2026-02-20'),
  (1008, 134, '2025-12-21', '2026-03-10'),
  (1012, 134, '2026-03-11', '2026-05-31');

-- p.25 Atsinanana / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (135, 106, 'Nerica 4', 'antonony', 113);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 135, '2025-10-01', '2026-01-20'),
  (1001, 135, '2025-11-11', '2026-01-20'),
  (1003, 135, '2025-10-01', '2026-01-20'),
  (1004, 135, '2025-11-11', '2026-01-20'),
  (1005, 135, '2025-12-01', '2026-02-10'),
  (1006, 135, '2025-12-21', '2026-02-28'),
  (1007, 135, '2025-12-01', '2026-02-10'),
  (1008, 135, '2025-12-21', '2026-02-28'),
  (1012, 135, '2026-03-21', '2026-05-31');

-- p.26 Betsiboka / Vary an-drano / X 915 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (136, 107, 'X 915', 'fohy', 114);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 136, '2025-11-21', '2026-01-10'),
  (1001, 136, '2025-12-21', '2026-01-10'),
  (1002, 136, '2026-01-11', '2026-01-31'),
  (1003, 136, '2025-11-21', '2026-01-10'),
  (1004, 136, '2026-01-11', '2026-01-31'),
  (1005, 136, '2026-02-01', '2026-02-20'),
  (1007, 136, '2026-02-01', '2026-02-20'),
  (1010, 136, '2026-01-11', '2026-02-20'),
  (1011, 136, '2026-03-11', '2026-04-30'),
  (1012, 136, '2026-04-11', '2026-04-30');

-- p.26 Betsiboka / Vary an-drano / FOFIFA 160, FOFIFA 189 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (137, 107, 'FOFIFA 160, FOFIFA 189', 'antonony', 114);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 137, '2025-11-01', '2025-12-20'),
  (1001, 137, '2025-12-01', '2025-12-20'),
  (1002, 137, '2025-12-21', '2026-01-10'),
  (1003, 137, '2025-11-01', '2025-12-20'),
  (1004, 137, '2025-12-21', '2026-01-10'),
  (1005, 137, '2026-01-11', '2026-01-31'),
  (1006, 137, '2026-02-01', '2026-02-20'),
  (1007, 137, '2026-01-11', '2026-01-31'),
  (1008, 137, '2026-02-01', '2026-02-20'),
  (1010, 137, '2025-12-21', '2026-02-20'),
  (1011, 137, '2026-03-11', '2026-04-30'),
  (1012, 137, '2026-04-11', '2026-04-30');

-- p.27 Betsiboka / Vary an-tanety / Nerica 4, Fotsiambo B22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (138, 107, 'Nerica 4, Fotsiambo B22', 'fohy', 115);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 138, '2025-10-01', '2025-12-20'),
  (1001, 138, '2025-11-11', '2025-12-20'),
  (1003, 138, '2025-10-01', '2025-12-20'),
  (1004, 138, '2025-11-11', '2025-12-20'),
  (1005, 138, '2025-12-01', '2026-01-10'),
  (1006, 138, '2025-12-21', '2026-01-31'),
  (1007, 138, '2025-12-01', '2026-01-10'),
  (1008, 138, '2025-12-21', '2026-01-31'),
  (1012, 138, '2026-03-11', '2026-04-20');

-- p.27 Betsiboka / Vary an-tanety / Telorirana 3737 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (139, 107, 'Telorirana 3737', 'antonony', 115);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 139, '2025-10-01', '2025-12-31'),
  (1001, 139, '2025-11-11', '2025-12-31'),
  (1003, 139, '2025-10-01', '2025-12-31'),
  (1004, 139, '2025-11-11', '2025-12-31'),
  (1005, 139, '2025-12-01', '2026-01-20'),
  (1006, 139, '2025-12-21', '2026-02-10'),
  (1007, 139, '2025-12-01', '2026-01-20'),
  (1008, 139, '2025-12-21', '2026-02-10'),
  (1012, 139, '2026-03-21', '2026-05-10');

-- p.28 Boeny / Vary an-drano / Fy Vary 32, Fy Vary 85, Sebota 281, Mahavonjy / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (140, 108, 'Fy Vary 32, Fy Vary 85, Sebota 281, Mahavonjy', 'fohy', 116);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 140, '2025-11-01', '2025-12-20'),
  (1001, 140, '2025-12-01', '2025-12-20'),
  (1002, 140, '2025-12-21', '2026-01-10'),
  (1003, 140, '2025-11-01', '2025-12-20'),
  (1004, 140, '2025-12-21', '2026-01-10'),
  (1005, 140, '2026-01-11', '2026-01-31'),
  (1007, 140, '2026-01-11', '2026-01-31'),
  (1010, 140, '2025-12-01', '2026-01-31'),
  (1011, 140, '2026-02-21', '2026-04-10'),
  (1012, 140, '2026-03-21', '2026-04-10');

-- p.28 Boeny / Vary an-drano / Fy Vary 85, Tsiresindrano / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (141, 108, 'Fy Vary 85, Tsiresindrano', 'antonony', 116);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 141, '2025-10-21', '2025-12-10'),
  (1001, 141, '2025-11-21', '2025-12-10'),
  (1002, 141, '2025-12-11', '2025-12-31'),
  (1003, 141, '2025-10-21', '2025-12-10'),
  (1004, 141, '2025-12-11', '2025-12-31'),
  (1005, 141, '2026-01-01', '2026-01-20'),
  (1006, 141, '2026-01-21', '2026-02-10'),
  (1007, 141, '2026-01-01', '2026-01-20'),
  (1008, 141, '2026-01-21', '2026-02-10'),
  (1010, 141, '2025-12-11', '2026-02-10'),
  (1011, 141, '2026-03-11', '2026-04-20'),
  (1012, 141, '2026-04-01', '2026-04-20');

-- p.29 Boeny / Vary an-tanety / Mavitrika, Primavera, Nerica 9, Nerica 11, Nerica 4 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (142, 108, 'Mavitrika, Primavera, Nerica 9, Nerica 11, Nerica 4', 'fohy', 117);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 142, '2025-10-01', '2025-12-31'),
  (1001, 142, '2025-12-01', '2025-12-31'),
  (1003, 142, '2025-10-01', '2025-12-31'),
  (1004, 142, '2025-12-01', '2025-12-31'),
  (1005, 142, '2025-12-21', '2026-01-20'),
  (1007, 142, '2025-12-21', '2026-01-20'),
  (1008, 142, '2026-01-11', '2026-02-10'),
  (1009, 142, '2026-01-11', '2026-02-10'),
  (1012, 142, '2026-03-21', '2026-04-20');

-- p.29 Bongolava / Vary an-drano / X1648, Sebota 281, Mihary, Fy Vary 32 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (143, 109, 'X1648, Sebota 281, Mihary, Fy Vary 32', 'fohy', 118);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 143, '2025-11-21', '2026-01-10'),
  (1001, 143, '2025-12-21', '2026-01-10'),
  (1002, 143, '2026-01-11', '2026-01-31'),
  (1003, 143, '2025-11-21', '2026-01-10'),
  (1004, 143, '2026-01-11', '2026-01-31'),
  (1005, 143, '2026-02-01', '2026-02-20'),
  (1007, 143, '2026-02-01', '2026-02-20'),
  (1008, 143, '2026-02-11', '2026-02-28'),
  (1010, 143, '2025-12-21', '2026-02-20'),
  (1011, 143, '2026-03-11', '2026-04-20'),
  (1012, 143, '2026-04-11', '2026-04-30');

-- p.30 Bongolava / Vary an-drano / X 265, Fy Vary 85 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (144, 109, 'X 265, Fy Vary 85', 'antonony', 118);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 144, '2025-11-11', '2025-12-31'),
  (1001, 144, '2025-12-11', '2025-12-31'),
  (1002, 144, '2026-01-01', '2026-01-20'),
  (1003, 144, '2025-11-11', '2025-12-31'),
  (1004, 144, '2026-01-01', '2026-01-20'),
  (1005, 144, '2026-01-21', '2026-02-10'),
  (1006, 144, '2026-02-11', '2026-02-28'),
  (1007, 144, '2026-01-21', '2026-02-10'),
  (1008, 144, '2026-02-11', '2026-02-28'),
  (1010, 144, '2025-12-11', '2026-02-28'),
  (1011, 144, '2026-03-21', '2026-04-30'),
  (1012, 144, '2026-04-21', '2026-05-10');

-- p.30 Bongolava / Vary an-tanety / Nerica 14 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (145, 109, 'Nerica 14', 'fohy', 119);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 145, '2025-10-01', '2026-01-31'),
  (1001, 145, '2026-01-01', '2026-01-31'),
  (1003, 145, '2025-10-01', '2026-01-31'),
  (1004, 145, '2026-01-01', '2026-01-31'),
  (1005, 145, '2026-01-21', '2026-02-20'),
  (1006, 145, '2026-02-11', '2026-03-10'),
  (1007, 145, '2026-01-21', '2026-02-20'),
  (1008, 145, '2026-02-11', '2026-03-10'),
  (1012, 145, '2026-04-11', '2026-05-10');

-- p.31 Bongolava / Vary an-tanety / Primavera, FOFIFA 161, FOFIFA 173, Nerica 4, Fotsiambo B22, Nerica 9, Nerica 11, Telorirana 3737 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (146, 109, 'Primavera, FOFIFA 161, FOFIFA 173, Nerica 4, Fotsiambo B22, Nerica 9, Nerica 11, Telorirana 3737', 'antonony', 119);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 146, '2025-10-01', '2025-12-20'),
  (1001, 146, '2025-12-01', '2025-12-20'),
  (1003, 146, '2025-10-01', '2025-12-20'),
  (1004, 146, '2025-12-01', '2025-12-20'),
  (1005, 146, '2025-12-21', '2026-01-10'),
  (1006, 146, '2026-01-11', '2026-01-31'),
  (1007, 146, '2025-12-21', '2026-01-10'),
  (1008, 146, '2026-01-11', '2026-01-31'),
  (1012, 146, '2026-04-11', '2026-04-30');

-- p.31 Diana / Vary an-drano / X265, FOFIFA 197 (Antsiranana) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (147, 110, 'X265, FOFIFA 197 (Antsiranana)', 'antonony', 120);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 147, '2025-11-01', '2025-12-31'),
  (1001, 147, '2025-12-01', '2025-12-31'),
  (1002, 147, '2025-12-21', '2026-01-20'),
  (1003, 147, '2025-11-01', '2025-12-31'),
  (1004, 147, '2025-12-21', '2026-01-20'),
  (1005, 147, '2026-01-11', '2026-02-10'),
  (1007, 147, '2026-01-11', '2026-02-10'),
  (1010, 147, '2025-12-21', '2026-02-10'),
  (1011, 147, '2026-03-01', '2026-04-30'),
  (1012, 147, '2026-04-11', '2026-05-10');

-- p.32 Diana / Vary an-tanety / Fotsiambo B 22 (Antsiranana) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (148, 110, 'Fotsiambo B 22 (Antsiranana)', 'fohy', 121);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 148, '2025-10-01', '2026-01-10'),
  (1001, 148, '2025-12-21', '2026-01-10'),
  (1003, 148, '2025-10-01', '2026-01-10'),
  (1004, 148, '2025-12-21', '2026-01-10'),
  (1005, 148, '2026-01-11', '2026-01-31'),
  (1006, 148, '2026-02-01', '2026-02-20'),
  (1007, 148, '2026-01-11', '2026-01-31'),
  (1008, 148, '2026-02-01', '2026-02-20'),
  (1012, 148, '2026-04-11', '2026-04-30');

-- p.32 Diana / Vary an-tanety / Nerica 4 (Antsiranana) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (149, 110, 'Nerica 4 (Antsiranana)', 'antonony', 121);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 149, '2025-10-01', '2025-12-20'),
  (1001, 149, '2025-12-01', '2025-12-20'),
  (1003, 149, '2025-10-01', '2025-12-20'),
  (1004, 149, '2025-12-01', '2025-12-20'),
  (1005, 149, '2025-12-21', '2026-01-10'),
  (1006, 149, '2026-01-11', '2026-01-31'),
  (1007, 149, '2025-12-21', '2026-01-10'),
  (1008, 149, '2026-01-11', '2026-01-31'),
  (1012, 149, '2026-04-11', '2026-04-30');

-- p.33 Diana / Vary an-drano / FOFIFA 187, FOFIFA 188 (Ambilobe, Ambanja) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (150, 110, 'FOFIFA 187, FOFIFA 188 (Ambilobe, Ambanja)', 'antonony', 120);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 150, '2025-11-01', '2025-12-20'),
  (1001, 150, '2025-12-01', '2025-12-20'),
  (1002, 150, '2025-12-21', '2026-01-10'),
  (1003, 150, '2025-11-01', '2025-12-20'),
  (1004, 150, '2025-12-21', '2026-01-10'),
  (1005, 150, '2026-01-11', '2026-01-31'),
  (1006, 150, '2026-02-01', '2026-02-20'),
  (1007, 150, '2026-01-11', '2026-01-31'),
  (1008, 150, '2026-02-01', '2026-02-20'),
  (1010, 150, '2025-12-01', '2026-02-20'),
  (1011, 150, '2026-03-11', '2026-04-30'),
  (1012, 150, '2026-04-11', '2026-04-30');

-- p.33 Diana / Vary an-drano / FOFIFA 198, FOFIFA 187 (Ambilobe, Ambanja) / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (151, 110, 'FOFIFA 198, FOFIFA 187 (Ambilobe, Ambanja)', 'lava', 120);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 151, '2025-10-11', '2025-11-30'),
  (1001, 151, '2025-11-11', '2025-11-30'),
  (1002, 151, '2025-12-01', '2025-12-20'),
  (1003, 151, '2025-10-11', '2025-11-30'),
  (1004, 151, '2025-12-01', '2025-12-20'),
  (1005, 151, '2025-12-21', '2026-01-10'),
  (1006, 151, '2026-01-11', '2026-01-31'),
  (1007, 151, '2025-12-21', '2026-01-10'),
  (1008, 151, '2026-01-11', '2026-01-31'),
  (1010, 151, '2025-12-01', '2026-01-31'),
  (1011, 151, '2026-03-11', '2026-04-30'),
  (1012, 151, '2026-04-11', '2026-04-30');

-- p.34 Diana / Vary an-tanety / Fotsiambo B 22 (Ambilobe, Ambanja) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (152, 110, 'Fotsiambo B 22 (Ambilobe, Ambanja)', 'fohy', 121);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 152, '2025-10-01', '2026-01-10'),
  (1001, 152, '2025-12-01', '2026-01-10'),
  (1003, 152, '2025-10-01', '2026-01-10'),
  (1004, 152, '2025-12-01', '2026-01-10'),
  (1005, 152, '2025-12-21', '2026-01-31'),
  (1006, 152, '2026-01-11', '2026-02-20'),
  (1007, 152, '2025-12-21', '2026-01-31'),
  (1008, 152, '2026-01-11', '2026-02-20'),
  (1012, 152, '2026-03-21', '2026-04-30');

-- p.34 Diana / Vary an-tanety / Nerica 4, Telorirana 3737 (Ambilobe, Ambanja) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (153, 110, 'Nerica 4, Telorirana 3737 (Ambilobe, Ambanja)', 'antonony', 121);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 153, '2025-10-01', '2025-12-31'),
  (1001, 153, '2025-12-01', '2025-12-31'),
  (1003, 153, '2025-10-01', '2025-12-31'),
  (1004, 153, '2025-12-01', '2025-12-31'),
  (1005, 153, '2025-12-21', '2026-01-20'),
  (1006, 153, '2026-01-11', '2026-02-10'),
  (1007, 153, '2025-12-21', '2026-01-20'),
  (1008, 153, '2026-01-11', '2026-02-10'),
  (1012, 153, '2026-04-11', '2026-05-10');

-- p.35 Fitovinany / Vary an-drano / Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (154, 111, 'Mihary', 'fohy', 122);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 154, '2025-11-11', '2025-12-31'),
  (1001, 154, '2025-12-11', '2025-12-31'),
  (1002, 154, '2026-01-01', '2026-01-20'),
  (1003, 154, '2025-11-11', '2025-12-31'),
  (1004, 154, '2026-01-01', '2026-01-20'),
  (1005, 154, '2026-01-21', '2026-02-10'),
  (1007, 154, '2026-01-21', '2026-02-10'),
  (1010, 154, '2025-12-11', '2026-01-31'),
  (1011, 154, '2026-02-21', '2026-04-20'),
  (1012, 154, '2026-04-01', '2026-04-20');

-- p.35 Fitovinany / Vary an-drano / FOFIFA 197, Mangafototra, X 265 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (155, 111, 'FOFIFA 197, Mangafototra, X 265', 'antonony', 122);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 155, '2025-10-21', '2025-12-31'),
  (1001, 155, '2025-11-21', '2025-12-31'),
  (1002, 155, '2025-12-11', '2026-01-20'),
  (1003, 155, '2025-10-21', '2025-12-31'),
  (1004, 155, '2025-12-11', '2026-01-20'),
  (1005, 155, '2026-01-01', '2026-02-10'),
  (1006, 155, '2026-01-21', '2026-02-28'),
  (1007, 155, '2026-01-01', '2026-02-10'),
  (1008, 155, '2026-01-21', '2026-02-28'),
  (1010, 155, '2025-12-11', '2026-02-28'),
  (1011, 155, '2026-03-21', '2026-05-10'),
  (1012, 155, '2026-04-01', '2026-05-10');

-- p.36 Fitovinany / Vary an-drano / FOFIFA 198 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (156, 111, 'FOFIFA 198', 'lava', 122);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 156, '2025-10-21', '2025-12-20'),
  (1001, 156, '2025-11-21', '2025-12-20'),
  (1002, 156, '2025-12-11', '2026-01-10'),
  (1003, 156, '2025-10-21', '2025-12-20'),
  (1004, 156, '2025-12-11', '2026-01-10'),
  (1005, 156, '2026-01-01', '2026-01-31'),
  (1006, 156, '2026-01-21', '2026-02-20'),
  (1007, 156, '2026-01-01', '2026-01-31'),
  (1008, 156, '2026-01-21', '2026-02-20'),
  (1010, 156, '2025-12-11', '2026-03-10'),
  (1011, 156, '2026-04-01', '2026-05-20'),
  (1012, 156, '2026-04-21', '2026-05-20');

-- p.36 Fitovinany / Vary an-tanety / Fotsiambo B22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (157, 111, 'Fotsiambo B22', 'fohy', 123);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 157, '2025-10-01', '2026-01-10'),
  (1001, 157, '2025-12-01', '2026-01-10'),
  (1003, 157, '2025-10-01', '2026-01-10'),
  (1004, 157, '2025-12-01', '2026-01-10'),
  (1005, 157, '2025-12-21', '2026-01-31'),
  (1006, 157, '2026-01-11', '2026-02-20'),
  (1007, 157, '2025-12-21', '2026-01-31'),
  (1008, 157, '2026-01-11', '2026-02-20'),
  (1012, 157, '2026-04-01', '2026-05-10');

-- p.37 Fitovinany / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (158, 111, 'Nerica 4', 'antonony', 123);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 158, '2025-10-11', '2025-12-31'),
  (1001, 158, '2025-12-01', '2025-12-31'),
  (1003, 158, '2025-10-11', '2025-12-31'),
  (1004, 158, '2025-12-01', '2025-12-31'),
  (1005, 158, '2025-12-21', '2026-01-20'),
  (1006, 158, '2026-01-11', '2026-02-10'),
  (1007, 158, '2025-12-21', '2026-01-20'),
  (1008, 158, '2026-01-11', '2026-02-10'),
  (1012, 158, '2026-04-11', '2026-05-10');

-- p.37 Haute Matsiatra / Vary an-drano / FOFIFA 160 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (159, 112, 'FOFIFA 160', 'antonony', 124);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 159, '2025-11-01', '2025-12-31'),
  (1001, 159, '2025-12-01', '2025-12-31'),
  (1002, 159, '2025-12-21', '2026-01-20'),
  (1003, 159, '2025-11-01', '2025-12-31'),
  (1004, 159, '2025-12-21', '2026-01-20'),
  (1005, 159, '2026-01-11', '2026-02-10'),
  (1006, 159, '2026-02-01', '2026-02-28'),
  (1007, 159, '2026-01-11', '2026-02-10'),
  (1008, 159, '2026-02-01', '2026-02-28'),
  (1010, 159, '2025-12-21', '2026-02-28'),
  (1011, 159, '2026-03-21', '2026-05-10'),
  (1012, 159, '2026-04-11', '2026-05-10');

-- p.38 Haute Matsiatra / Vary an-drano / FOFIFA 195, X 265 (Riz bas-fond) / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (160, 112, 'FOFIFA 195, X 265 (Riz bas-fond)', 'lava', 124);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 160, '2025-10-11', '2025-12-10'),
  (1001, 160, '2025-11-11', '2025-12-10'),
  (1002, 160, '2025-12-01', '2025-12-31'),
  (1003, 160, '2025-10-11', '2025-12-10'),
  (1004, 160, '2025-12-01', '2025-12-31'),
  (1005, 160, '2025-12-21', '2026-01-20'),
  (1006, 160, '2026-01-11', '2026-02-10'),
  (1007, 160, '2025-12-21', '2026-01-20'),
  (1008, 160, '2026-01-11', '2026-02-10'),
  (1010, 160, '2025-12-01', '2026-01-31'),
  (1011, 160, '2026-03-11', '2026-04-30'),
  (1012, 160, '2026-04-11', '2026-05-10');

-- p.38 Haute Matsiatra / Vary an-tanety / FOFIFA 196, FOFIFA 173, CHHOMRONG DHAN, FOFIFA 186 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (161, 112, 'FOFIFA 196, FOFIFA 173, CHHOMRONG DHAN, FOFIFA 186', 'antonony', 125);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 161, '2025-10-01', '2025-11-30'),
  (1001, 161, '2025-11-11', '2025-11-30'),
  (1003, 161, '2025-10-01', '2025-11-30'),
  (1004, 161, '2025-11-11', '2025-11-30'),
  (1005, 161, '2025-12-01', '2025-12-20'),
  (1006, 161, '2025-12-21', '2026-01-10'),
  (1007, 161, '2025-12-01', '2025-12-20'),
  (1008, 161, '2025-12-21', '2026-01-10'),
  (1012, 161, '2026-04-01', '2026-04-20');

-- p.39 Ihorombe / Vary an-drano / X 915, Mihary, FOFIFA 195, FOFIFA 196 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (162, 113, 'X 915, Mihary, FOFIFA 195, FOFIFA 196', 'fohy', 126);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 162, '2025-10-01', '2025-12-20'),
  (1001, 162, '2025-11-21', '2025-12-31'),
  (1002, 162, '2025-12-11', '2026-01-20'),
  (1003, 162, '2025-10-01', '2025-12-20'),
  (1004, 162, '2025-12-11', '2026-01-20'),
  (1005, 162, '2026-01-01', '2026-02-10'),
  (1007, 162, '2026-01-01', '2026-02-10'),
  (1010, 162, '2025-11-21', '2025-12-31'),
  (1011, 162, '2026-03-01', '2026-04-20'),
  (1012, 162, '2026-03-11', '2026-04-20');

-- p.39 Ihorombe / Vary an-drano / X 1648, Sebota 281 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (163, 113, 'X 1648, Sebota 281', 'antonony', 126);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 163, '2025-10-01', '2025-12-10'),
  (1001, 163, '2025-11-11', '2025-12-20'),
  (1002, 163, '2025-12-01', '2026-01-10'),
  (1003, 163, '2025-10-01', '2025-11-10'),
  (1004, 163, '2025-12-01', '2026-01-10'),
  (1005, 163, '2025-12-21', '2026-01-31'),
  (1006, 163, '2026-01-01', '2026-02-10'),
  (1007, 163, '2025-12-21', '2026-01-31'),
  (1008, 163, '2026-01-01', '2026-02-10'),
  (1010, 163, '2025-11-11', '2026-01-10'),
  (1011, 163, '2026-03-21', '2026-04-30'),
  (1012, 163, '2026-03-21', '2026-04-30');

-- p.40 Ihorombe / Vary an-tanety / Nerica 14 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (164, 113, 'Nerica 14', 'fohy', 127);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 164, '2025-10-21', '2025-12-10'),
  (1001, 164, '2025-12-01', '2025-12-20'),
  (1003, 164, '2025-10-21', '2025-12-10'),
  (1004, 164, '2025-12-21', '2026-01-10'),
  (1005, 164, '2026-01-11', '2026-01-31'),
  (1007, 164, '2025-12-21', '2026-01-10'),
  (1008, 164, '2026-01-11', '2026-01-31'),
  (1012, 164, '2026-03-11', '2026-03-31');

-- p.40 Itasy / Vary an-drano / X915, Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (165, 114, 'X915, Mihary', 'fohy', 128);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 165, '2025-10-01', '2025-12-20'),
  (1001, 165, '2025-11-01', '2026-01-10'),
  (1002, 165, '2025-11-21', '2026-01-31'),
  (1003, 165, '2025-10-01', '2025-12-20'),
  (1004, 165, '2025-11-21', '2026-01-31'),
  (1005, 165, '2025-12-11', '2026-02-20'),
  (1007, 165, '2025-12-11', '2026-02-20'),
  (1010, 165, '2025-11-01', '2025-12-20'),
  (1011, 165, '2026-02-21', '2026-04-30'),
  (1012, 165, '2026-02-21', '2026-04-30');

-- p.41 Itasy / Vary an-drano / FOFIFA 160, X 1648 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (166, 114, 'FOFIFA 160, X 1648', 'antonony', 128);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 166, '2025-10-01', '2025-12-10'),
  (1001, 166, '2025-11-01', '2025-12-20'),
  (1002, 166, '2025-11-21', '2026-01-10'),
  (1003, 166, '2025-10-01', '2025-12-10'),
  (1004, 166, '2025-11-21', '2026-01-10'),
  (1005, 166, '2025-12-11', '2026-01-31'),
  (1006, 166, '2025-12-21', '2026-02-10'),
  (1007, 166, '2025-12-11', '2026-01-31'),
  (1008, 166, '2025-12-21', '2026-02-10'),
  (1010, 166, '2025-10-01', '2025-12-31'),
  (1011, 166, '2026-03-01', '2026-04-30'),
  (1012, 166, '2026-03-11', '2026-04-30');

-- p.41 Itasy / Vary an-drano / Fy Vary 32, Fy Vary 85, Mailaka X 265 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (167, 114, 'Fy Vary 32, Fy Vary 85, Mailaka X 265', 'lava', 128);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 167, '2025-10-01', '2025-11-30'),
  (1001, 167, '2025-10-21', '2025-12-10'),
  (1002, 167, '2025-11-11', '2025-12-31'),
  (1003, 167, '2025-10-01', '2025-11-30'),
  (1004, 167, '2025-11-11', '2025-12-31'),
  (1005, 167, '2025-12-01', '2026-01-20'),
  (1006, 167, '2026-01-01', '2026-02-20'),
  (1007, 167, '2025-12-01', '2026-01-20'),
  (1008, 167, '2026-01-01', '2026-02-20'),
  (1010, 167, '2025-10-21', '2026-01-20'),
  (1011, 167, '2026-03-11', '2026-05-10'),
  (1012, 167, '2026-03-21', '2026-05-10');

-- p.42 Itasy / Vary an-tanety / Mavitrika / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (168, 114, 'Mavitrika', 'fohy', 129);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 168, '2025-10-01', '2025-12-31'),
  (1001, 168, '2025-11-21', '2025-12-31'),
  (1003, 168, '2025-10-01', '2025-12-31'),
  (1004, 168, '2025-11-21', '2025-12-31'),
  (1005, 168, '2025-12-11', '2026-01-20'),
  (1006, 168, '2026-01-01', '2026-02-10'),
  (1007, 168, '2025-12-11', '2026-01-20'),
  (1008, 168, '2026-01-01', '2026-02-10'),
  (1012, 168, '2026-03-21', '2026-04-30');

-- p.42 Itasy / Vary an-tanety / FOFIFA 161, FOFIFA 173, FOFIFA 196, FOFIFA 200, FOFIFA 201 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (169, 114, 'FOFIFA 161, FOFIFA 173, FOFIFA 196, FOFIFA 200, FOFIFA 201', 'antonony', 129);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 169, '2025-10-01', '2025-12-10'),
  (1001, 169, '2025-11-21', '2025-12-10'),
  (1003, 169, '2025-10-01', '2025-12-10'),
  (1004, 169, '2025-11-21', '2025-12-10'),
  (1005, 169, '2025-12-11', '2025-12-31'),
  (1006, 169, '2026-01-01', '2026-01-20'),
  (1007, 169, '2025-12-11', '2025-12-31'),
  (1008, 169, '2026-01-01', '2026-01-20'),
  (1012, 169, '2026-04-11', '2026-04-30');

-- p.43 Melaky / Vary an-drano / X 915, Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (170, 115, 'X 915, Mihary', 'fohy', 130);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 170, '2025-10-01', '2025-12-20'),
  (1001, 170, '2025-11-01', '2026-01-10'),
  (1002, 170, '2025-11-21', '2026-01-31'),
  (1003, 170, '2025-10-01', '2025-12-20'),
  (1004, 170, '2025-11-21', '2026-01-31'),
  (1005, 170, '2025-12-11', '2026-02-20'),
  (1007, 170, '2025-12-11', '2026-02-20'),
  (1010, 170, '2025-10-01', '2025-12-20'),
  (1011, 170, '2026-02-21', '2026-04-30'),
  (1012, 170, '2026-02-21', '2026-04-30');

-- p.43 Melaky / Vary an-drano / FOFIFA 196, FOFIFA 197 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (171, 115, 'FOFIFA 196, FOFIFA 197', 'antonony', 130);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 171, '2025-10-01', '2025-12-10'),
  (1001, 171, '2025-11-01', '2025-12-31'),
  (1002, 171, '2025-11-21', '2026-01-20'),
  (1003, 171, '2025-10-01', '2025-12-10'),
  (1004, 171, '2025-11-21', '2026-01-20'),
  (1005, 171, '2025-12-11', '2026-02-10'),
  (1006, 171, '2025-12-21', '2026-02-20'),
  (1007, 171, '2025-12-11', '2026-02-10'),
  (1008, 171, '2025-12-21', '2026-02-20'),
  (1010, 171, '2025-11-01', '2025-12-31'),
  (1011, 171, '2026-03-11', '2026-05-10'),
  (1012, 171, '2026-03-11', '2026-05-10');

-- p.44 Melaky / Vary an-drano / Fy Vary 32, Fy Vary 85, X 265 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (172, 115, 'Fy Vary 32, Fy Vary 85, X 265', 'lava', 130);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 172, '2025-10-01', '2025-12-10'),
  (1001, 172, '2025-10-21', '2025-12-20'),
  (1002, 172, '2025-11-11', '2026-01-10'),
  (1003, 172, '2025-10-01', '2025-12-10'),
  (1004, 172, '2025-11-11', '2026-01-10'),
  (1005, 172, '2025-12-01', '2026-01-31'),
  (1006, 172, '2026-01-01', '2026-02-28'),
  (1007, 172, '2025-12-01', '2026-01-31'),
  (1008, 172, '2026-01-01', '2026-02-28'),
  (1010, 172, '2025-10-21', '2026-01-10'),
  (1011, 172, '2026-03-21', '2026-05-20'),
  (1012, 172, '2026-03-21', '2026-05-20');

-- p.44 Melaky / Vary an-tanety / Nerica 14 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (173, 115, 'Nerica 14', 'fohy', 131);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 173, '2025-10-01', '2026-01-20'),
  (1001, 173, '2025-12-01', '2026-01-20'),
  (1003, 173, '2025-10-01', '2026-01-20'),
  (1004, 173, '2025-12-01', '2026-01-20'),
  (1005, 173, '2025-12-21', '2026-02-10'),
  (1007, 173, '2025-12-01', '2026-01-20'),
  (1008, 173, '2025-12-21', '2026-02-10'),
  (1012, 173, '2026-03-11', '2026-04-30');

-- p.45 Melaky / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (174, 115, 'Nerica 4', 'antonony', 131);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 174, '2025-10-01', '2025-12-31'),
  (1001, 174, '2025-11-21', '2025-12-31'),
  (1003, 174, '2025-10-01', '2025-12-31'),
  (1004, 174, '2025-11-21', '2025-12-31'),
  (1005, 174, '2025-12-11', '2026-01-20'),
  (1006, 174, '2026-01-01', '2026-02-10'),
  (1007, 174, '2025-12-11', '2026-01-20'),
  (1008, 174, '2026-01-01', '2026-02-10'),
  (1012, 174, '2026-03-21', '2026-04-30');

-- p.45 Menabe / Vary an-drano / Sebota 70, X 915, Mihary (Morondava, Manja, Belo sur Tsiribihina) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (175, 116, 'Sebota 70, X 915, Mihary (Morondava, Manja, Belo sur Tsiribihina)', 'fohy', 132);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 175, '2025-10-01', '2025-12-20'),
  (1001, 175, '2025-12-11', '2026-01-10'),
  (1002, 175, '2026-01-01', '2026-01-31'),
  (1003, 175, '2025-10-01', '2025-12-20'),
  (1004, 175, '2026-01-01', '2026-01-31'),
  (1005, 175, '2026-01-21', '2026-02-20'),
  (1007, 175, '2026-01-21', '2026-02-20'),
  (1010, 175, '2025-10-01', '2026-01-20'),
  (1011, 175, '2026-03-21', '2026-04-30'),
  (1012, 175, '2026-04-01', '2026-04-30');

-- p.46 Menabe / Vary an-drano / Sebota 70, X 915, Mihary (Miandrivazo, Mahabo) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (176, 116, 'Sebota 70, X 915, Mihary (Miandrivazo, Mahabo)', 'fohy', 132);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 176, '2025-10-01', '2025-12-31'),
  (1001, 176, '2025-11-21', '2026-01-10'),
  (1002, 176, '2025-12-11', '2026-01-31'),
  (1003, 176, '2025-10-01', '2025-12-31'),
  (1004, 176, '2025-12-11', '2026-01-31'),
  (1005, 176, '2026-01-01', '2026-02-20'),
  (1007, 176, '2026-01-01', '2026-02-20'),
  (1010, 176, '2025-11-21', '2025-12-31'),
  (1011, 176, '2026-03-01', '2026-04-30'),
  (1012, 176, '2026-03-11', '2026-04-30');

-- p.46 Menabe / Vary an-drano / FOFIFA 196, FOFIFA 197, X 265 (Miandrivazo, Mahabo) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (177, 116, 'FOFIFA 196, FOFIFA 197, X 265 (Miandrivazo, Mahabo)', 'antonony', 132);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 177, '2025-10-01', '2025-12-10'),
  (1001, 177, '2025-11-11', '2025-12-20'),
  (1002, 177, '2025-12-01', '2026-01-10'),
  (1003, 177, '2025-10-01', '2025-11-10'),
  (1004, 177, '2025-12-01', '2026-01-10'),
  (1005, 177, '2025-12-21', '2026-01-31'),
  (1006, 177, '2026-01-01', '2026-02-10'),
  (1007, 177, '2025-12-21', '2026-01-31'),
  (1008, 177, '2026-01-01', '2026-02-10'),
  (1010, 177, '2025-11-11', '2026-01-10'),
  (1011, 177, '2026-03-21', '2026-04-30'),
  (1012, 177, '2026-03-21', '2026-04-30');

-- p.47 Menabe / Vary an-drano / FOFIFA 198, 2787 (Miandrivazo, Mahabo) / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (178, 116, 'FOFIFA 198, 2787 (Miandrivazo, Mahabo)', 'lava', 132);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 178, '2025-10-01', '2025-11-30'),
  (1001, 178, '2025-11-11', '2025-12-10'),
  (1002, 178, '2025-12-01', '2025-12-31'),
  (1003, 178, '2025-10-01', '2025-11-10'),
  (1004, 178, '2025-12-01', '2025-12-31'),
  (1005, 178, '2025-12-21', '2026-01-20'),
  (1006, 178, '2026-01-01', '2026-01-31'),
  (1007, 178, '2025-12-21', '2026-01-20'),
  (1008, 178, '2026-01-01', '2026-01-31'),
  (1009, 178, '2026-01-21', '2026-02-20'),
  (1010, 178, '2025-11-11', '2026-02-20'),
  (1011, 178, '2026-04-01', '2026-05-10'),
  (1012, 178, '2026-04-11', '2026-05-10');

-- p.47 Menabe / Vary an-tanety / Nerica 14 (Miandrivazo, Mahabo) / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (179, 116, 'Nerica 14 (Miandrivazo, Mahabo)', 'fohy', 133);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 179, '2025-10-01', '2026-01-10'),
  (1001, 179, '2025-12-11', '2026-01-10'),
  (1003, 179, '2025-10-01', '2026-01-10'),
  (1004, 179, '2025-12-11', '2026-01-10'),
  (1005, 179, '2026-01-01', '2026-01-31'),
  (1007, 179, '2025-12-11', '2026-01-10'),
  (1008, 179, '2026-01-01', '2026-01-31'),
  (1012, 179, '2026-03-21', '2026-04-20');

-- p.48 Menabe / Vary an-tanety / Nerica 4, B 22 (Miandrivazo, Mahabo) / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (180, 116, 'Nerica 4, B 22 (Miandrivazo, Mahabo)', 'antonony', 133);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 180, '2025-10-01', '2025-12-31'),
  (1001, 180, '2025-12-11', '2025-12-31'),
  (1003, 180, '2025-10-01', '2025-12-31'),
  (1004, 180, '2025-12-11', '2025-12-31'),
  (1005, 180, '2026-01-01', '2026-01-20'),
  (1006, 180, '2026-01-21', '2026-02-10'),
  (1007, 180, '2026-01-01', '2026-01-20'),
  (1008, 180, '2026-01-21', '2026-02-10'),
  (1012, 180, '2026-04-21', '2026-05-10');

-- p.48 Sava / Vary an-drano / Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (181, 117, 'Mihary', 'fohy', 134);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 181, '2025-10-01', '2025-12-31'),
  (1001, 181, '2025-11-11', '2026-01-20'),
  (1002, 181, '2025-12-01', '2026-02-10'),
  (1003, 181, '2025-10-01', '2025-12-31'),
  (1004, 181, '2025-12-01', '2026-02-10'),
  (1005, 181, '2025-12-21', '2026-02-28'),
  (1007, 181, '2025-12-11', '2026-02-20'),
  (1010, 181, '2025-11-11', '2026-01-20'),
  (1011, 181, '2026-03-01', '2026-05-10'),
  (1012, 181, '2026-03-01', '2026-05-10');

-- p.49 Sava / Vary an-drano / IR 64, X 1648, X 265 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (182, 117, 'IR 64, X 1648, X 265', 'antonony', 134);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 182, '2025-10-01', '2026-01-20'),
  (1001, 182, '2025-11-11', '2026-01-31'),
  (1002, 182, '2025-12-01', '2026-02-20'),
  (1003, 182, '2025-10-01', '2026-01-20'),
  (1004, 182, '2025-12-01', '2026-02-20'),
  (1005, 182, '2025-12-21', '2026-03-10'),
  (1006, 182, '2026-01-01', '2026-03-20'),
  (1007, 182, '2025-12-21', '2026-03-10'),
  (1008, 182, '2026-01-01', '2026-03-20'),
  (1010, 182, '2025-11-11', '2026-01-10'),
  (1011, 182, '2026-03-21', '2026-05-31'),
  (1012, 182, '2026-03-21', '2026-06-10');

-- p.49 Sava / Vary an-drano / Fy Vary 32, Fy Vary 85, 2787 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (183, 117, 'Fy Vary 32, Fy Vary 85, 2787', 'lava', 134);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 183, '2025-10-01', '2025-12-20'),
  (1001, 183, '2025-11-01', '2026-01-10'),
  (1002, 183, '2025-11-11', '2026-01-31'),
  (1003, 183, '2025-10-01', '2025-12-20'),
  (1004, 183, '2025-11-11', '2026-01-31'),
  (1005, 183, '2025-12-01', '2026-02-20'),
  (1006, 183, '2026-01-11', '2026-03-20'),
  (1007, 183, '2025-12-01', '2026-02-20'),
  (1008, 183, '2026-01-11', '2026-03-20'),
  (1009, 183, '2026-01-21', '2026-03-31'),
  (1010, 183, '2025-11-11', '2026-01-31'),
  (1011, 183, '2026-04-01', '2026-05-31'),
  (1012, 183, '2026-04-01', '2026-06-10');

-- p.50 Sava / Vary an-tanety / Nerica 14 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (184, 117, 'Nerica 14', 'fohy', 135);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 184, '2025-10-01', '2026-01-20'),
  (1001, 184, '2025-12-01', '2026-01-20'),
  (1003, 184, '2025-10-01', '2026-01-20'),
  (1004, 184, '2025-12-01', '2026-01-20'),
  (1005, 184, '2025-12-21', '2026-02-10'),
  (1007, 184, '2025-12-01', '2026-01-20'),
  (1008, 184, '2025-12-21', '2026-02-10'),
  (1012, 184, '2026-03-11', '2026-04-30');

-- p.50 Sava / Vary an-tanety / Nerica 4 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (185, 117, 'Nerica 4', 'antonony', 135);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 185, '2025-10-01', '2025-12-31'),
  (1001, 185, '2025-11-21', '2025-12-31'),
  (1003, 185, '2025-10-01', '2025-12-31'),
  (1004, 185, '2025-11-21', '2025-12-31'),
  (1005, 185, '2025-12-11', '2026-01-20'),
  (1006, 185, '2026-01-01', '2026-02-10'),
  (1007, 185, '2025-12-11', '2026-01-20'),
  (1008, 185, '2026-01-01', '2026-02-10'),
  (1012, 185, '2026-04-01', '2026-05-10');

-- p.51 Sofia / Vary an-drano / Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (186, 118, 'Mihary', 'fohy', 136);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 186, '2025-10-01', '2025-12-20'),
  (1001, 186, '2025-11-11', '2025-12-31'),
  (1002, 186, '2025-12-01', '2026-01-20'),
  (1003, 186, '2025-10-01', '2025-12-20'),
  (1004, 186, '2025-12-01', '2026-01-20'),
  (1005, 186, '2025-12-21', '2026-02-10'),
  (1007, 186, '2025-12-21', '2026-02-10'),
  (1010, 186, '2025-11-11', '2025-12-20'),
  (1011, 186, '2026-03-01', '2026-04-20'),
  (1012, 186, '2026-03-01', '2026-04-20');

-- p.51 Sofia / Vary an-drano / IR 64, X 1648, X 265 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (187, 118, 'IR 64, X 1648, X 265', 'antonony', 136);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 187, '2025-10-01', '2025-12-20'),
  (1001, 187, '2025-11-11', '2025-12-31'),
  (1002, 187, '2025-12-01', '2026-01-20'),
  (1003, 187, '2025-10-01', '2025-12-20'),
  (1004, 187, '2025-12-01', '2026-01-20'),
  (1005, 187, '2025-12-21', '2026-02-10'),
  (1006, 187, '2026-01-01', '2026-02-20'),
  (1007, 187, '2025-12-21', '2026-02-10'),
  (1008, 187, '2026-01-01', '2026-02-20'),
  (1010, 187, '2025-11-11', '2026-01-10'),
  (1011, 187, '2026-03-21', '2026-05-10'),
  (1012, 187, '2026-03-21', '2026-05-10');

-- p.52 Sofia / Vary an-drano / Fy Vary 32, Fy Vary 85 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (188, 118, 'Fy Vary 32, Fy Vary 85', 'lava', 136);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 188, '2025-10-01', '2025-12-10'),
  (1001, 188, '2025-11-11', '2025-12-20'),
  (1002, 188, '2025-12-01', '2026-01-10'),
  (1003, 188, '2025-10-01', '2025-11-10'),
  (1004, 188, '2025-12-01', '2026-01-10'),
  (1005, 188, '2025-12-21', '2026-01-31'),
  (1006, 188, '2026-01-11', '2026-02-20'),
  (1007, 188, '2025-12-21', '2026-01-31'),
  (1008, 188, '2026-01-11', '2026-02-20'),
  (1009, 188, '2026-01-21', '2026-02-28'),
  (1010, 188, '2025-11-11', '2026-02-10'),
  (1011, 188, '2026-04-11', '2026-05-20'),
  (1012, 188, '2026-04-11', '2026-05-20');

-- p.52 Sofia / Vary an-tanety / Nerica 4, Mavitrika / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (189, 118, 'Nerica 4, Mavitrika', 'fohy', 137);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 189, '2025-12-01', '2026-01-20'),
  (1001, 189, '2025-12-21', '2026-01-20'),
  (1003, 189, '2025-12-01', '2026-01-20'),
  (1004, 189, '2026-01-11', '2026-02-10'),
  (1005, 189, '2026-01-21', '2026-02-20'),
  (1007, 189, '2026-01-11', '2026-02-10'),
  (1008, 189, '2026-01-21', '2026-02-20'),
  (1012, 189, '2026-04-01', '2026-04-30');

-- p.53 Sofia / Vary an-tanety / Telorirana 3737 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (190, 118, 'Telorirana 3737', 'antonony', 137);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 190, '2025-11-11', '2025-12-31'),
  (1001, 190, '2025-12-01', '2025-12-31'),
  (1003, 190, '2025-11-11', '2025-12-31'),
  (1004, 190, '2025-12-01', '2025-12-31'),
  (1005, 190, '2025-12-21', '2026-01-20'),
  (1006, 190, '2026-01-11', '2026-02-10'),
  (1007, 190, '2025-12-21', '2026-01-20'),
  (1008, 190, '2026-01-11', '2026-02-10'),
  (1012, 190, '2026-04-01', '2026-04-30');

-- p.53 Vakinankaratra / Vary an-drano / X 915 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (191, 119, 'X 915', 'fohy', 138);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 191, '2025-10-01', '2025-12-20'),
  (1001, 191, '2025-11-11', '2025-12-31'),
  (1002, 191, '2025-12-01', '2026-01-20'),
  (1003, 191, '2025-10-01', '2025-12-20'),
  (1004, 191, '2025-12-01', '2026-01-20'),
  (1005, 191, '2025-12-21', '2026-02-10'),
  (1007, 191, '2025-12-21', '2026-02-10'),
  (1008, 191, '2026-01-01', '2026-02-20'),
  (1010, 191, '2025-11-11', '2025-12-20'),
  (1011, 191, '2026-03-11', '2026-04-20'),
  (1012, 191, '2026-03-01', '2026-04-20');

-- p.54 Vakinankaratra / Vary an-drano / FOFIFA 196 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (192, 119, 'FOFIFA 196', 'antonony', 138);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 192, '2025-10-01', '2025-12-20'),
  (1001, 192, '2025-11-11', '2025-12-31'),
  (1002, 192, '2025-12-01', '2026-01-20'),
  (1003, 192, '2025-10-01', '2025-12-20'),
  (1004, 192, '2025-12-01', '2026-01-20'),
  (1005, 192, '2025-12-21', '2026-02-10'),
  (1006, 192, '2026-01-01', '2026-02-20'),
  (1007, 192, '2025-12-21', '2026-02-10'),
  (1008, 192, '2026-01-01', '2026-02-20'),
  (1010, 192, '2025-11-11', '2025-12-31'),
  (1011, 192, '2026-04-01', '2026-05-10'),
  (1012, 192, '2026-03-21', '2026-05-10');

-- p.54 Vakinankaratra / Vary an-drano / FOFIFA 195, FOFIFA 160, X 265 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (193, 119, 'FOFIFA 195, FOFIFA 160, X 265', 'lava', 138);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 193, '2025-10-01', '2025-12-20'),
  (1001, 193, '2025-11-11', '2025-12-31'),
  (1002, 193, '2025-12-01', '2026-01-20'),
  (1003, 193, '2025-10-01', '2025-12-20'),
  (1004, 193, '2025-12-01', '2026-01-20'),
  (1005, 193, '2025-12-21', '2026-02-10'),
  (1006, 193, '2026-01-21', '2026-03-10'),
  (1007, 193, '2025-12-21', '2026-02-10'),
  (1008, 193, '2026-01-21', '2026-03-10'),
  (1010, 193, '2025-11-11', '2026-01-31'),
  (1011, 193, '2026-04-11', '2026-05-31'),
  (1012, 193, '2026-04-11', '2026-05-31');

-- p.55 Vakinankaratra / Vary an-tanety / Fotsiambo B22 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (194, 119, 'Fotsiambo B22', 'fohy', 139);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 194, '2025-10-01', '2025-11-20'),
  (1001, 194, '2025-11-11', '2025-12-20'),
  (1003, 194, '2025-10-01', '2025-11-20'),
  (1004, 194, '2025-11-11', '2025-12-20'),
  (1005, 194, '2025-12-01', '2026-01-10'),
  (1006, 194, '2025-12-21', '2026-01-31'),
  (1007, 194, '2025-12-01', '2026-01-10'),
  (1008, 194, '2025-12-21', '2026-01-31'),
  (1012, 194, '2026-03-11', '2026-04-20');

-- p.55 Vakinankaratra / Vary an-tanety / FOFIFA 173, CHHOMRONG DHAN, FOFIFA 196, FOFIFA 186 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (195, 119, 'FOFIFA 173, CHHOMRONG DHAN, FOFIFA 196, FOFIFA 186', 'antonony', 139);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 195, '2025-10-01', '2025-12-10'),
  (1001, 195, '2025-11-21', '2025-12-10'),
  (1003, 195, '2025-10-01', '2025-12-10'),
  (1004, 195, '2025-11-21', '2025-12-10'),
  (1005, 195, '2025-12-11', '2025-12-31'),
  (1006, 195, '2026-01-01', '2026-01-20'),
  (1007, 195, '2025-12-11', '2025-12-31'),
  (1008, 195, '2026-01-01', '2026-01-20'),
  (1012, 195, '2026-04-11', '2026-04-30');

-- p.56 Vakinankaratra / Vary an-tanety / FOFIFA 200 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (196, 119, 'FOFIFA 200', 'lava', 139);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 196, '2025-10-01', '2025-12-10'),
  (1001, 196, '2025-11-21', '2025-12-10'),
  (1003, 196, '2025-10-01', '2025-12-10'),
  (1004, 196, '2025-11-21', '2025-12-10'),
  (1005, 196, '2025-12-11', '2025-12-31'),
  (1006, 196, '2026-01-01', '2026-01-20'),
  (1007, 196, '2025-12-11', '2025-12-31'),
  (1008, 196, '2026-01-01', '2026-01-20'),
  (1012, 196, '2026-04-21', '2026-05-10');

-- p.56 Vatovavy / Vary an-drano / Mihary / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (197, 120, 'Mihary', 'fohy', 140);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 197, '2025-10-01', '2026-01-10'),
  (1001, 197, '2025-11-11', '2026-01-20'),
  (1002, 197, '2025-12-01', '2026-02-10'),
  (1003, 197, '2025-10-01', '2026-01-10'),
  (1004, 197, '2025-12-01', '2026-02-10'),
  (1005, 197, '2025-12-21', '2026-02-28'),
  (1007, 197, '2025-12-21', '2026-02-28'),
  (1010, 197, '2025-11-11', '2026-01-10'),
  (1011, 197, '2026-03-01', '2026-05-10'),
  (1012, 197, '2026-03-01', '2026-05-10');

-- p.57 Vatovavy / Vary an-drano / IR 64, Sebota 231, X 265 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (198, 120, 'IR 64, Sebota 231, X 265', 'antonony', 140);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 198, '2025-10-01', '2026-01-10'),
  (1001, 198, '2025-11-21', '2026-01-20'),
  (1002, 198, '2025-12-11', '2026-02-10'),
  (1003, 198, '2025-10-01', '2026-01-10'),
  (1004, 198, '2025-12-11', '2026-02-10'),
  (1005, 198, '2026-01-01', '2026-02-28'),
  (1006, 198, '2026-01-11', '2026-03-10'),
  (1007, 198, '2026-01-01', '2026-02-28'),
  (1008, 198, '2026-01-11', '2026-03-10'),
  (1010, 198, '2025-11-21', '2026-01-20'),
  (1011, 198, '2026-04-01', '2026-05-31'),
  (1012, 198, '2026-04-01', '2026-05-31');

-- p.57 Vatovavy / Vary an-drano / FOFIFA 160, 2787 / lava
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (199, 120, 'FOFIFA 160, 2787', 'lava', 140);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 199, '2025-10-01', '2025-12-31'),
  (1001, 199, '2025-11-21', '2026-01-10'),
  (1002, 199, '2025-12-11', '2026-01-31'),
  (1003, 199, '2025-10-01', '2025-12-31'),
  (1004, 199, '2025-12-11', '2026-01-31'),
  (1005, 199, '2026-01-01', '2026-02-20'),
  (1006, 199, '2026-01-21', '2026-03-10'),
  (1007, 199, '2026-01-01', '2026-02-20'),
  (1008, 199, '2026-01-21', '2026-03-10'),
  (1009, 199, '2026-02-01', '2026-03-20'),
  (1010, 199, '2025-11-21', '2026-02-20'),
  (1011, 199, '2026-04-11', '2026-05-31'),
  (1012, 199, '2026-04-21', '2026-06-10');

-- p.58 Vatovavy / Vary an-tanety / Nerica 4 / fohy
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (200, 120, 'Nerica 4', 'fohy', 141);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 200, '2025-12-01', '2026-01-31'),
  (1001, 200, '2025-12-11', '2026-01-31'),
  (1003, 200, '2025-12-01', '2026-01-31'),
  (1004, 200, '2025-12-11', '2026-01-31'),
  (1005, 200, '2026-01-01', '2026-02-20'),
  (1006, 200, '2026-01-21', '2026-03-10'),
  (1007, 200, '2026-01-01', '2026-02-20'),
  (1008, 200, '2026-01-21', '2026-03-10'),
  (1012, 200, '2026-03-21', '2026-05-10');

-- p.58 Vatovavy / Vary an-tanety / Telorirana 3737 / antonony
INSERT INTO varieter (id_varieter, id_culture, nom_varieter, type_culture, id_categorie) VALUES (201, 120, 'Telorirana 3737', 'antonony', 141);
INSERT INTO planning (id_activite, id_varieter, date_debut, date_fin) VALUES
  (1000, 201, '2025-11-11', '2025-12-31'),
  (1001, 201, '2025-12-01', '2025-12-31'),
  (1003, 201, '2025-11-11', '2025-12-31'),
  (1004, 201, '2025-12-21', '2026-01-20'),
  (1005, 201, '2026-01-11', '2026-02-10'),
  (1006, 201, '2026-02-01', '2026-02-28'),
  (1007, 201, '2026-01-11', '2026-02-10'),
  (1008, 201, '2026-02-01', '2026-02-28'),
  (1012, 201, '2026-04-11', '2026-05-10');

COMMIT;
