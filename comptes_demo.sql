-- Comptes de démonstration AgriSurv (code : 123456 pour les trois comptes)
-- À importer après tantsaha_co2.sql. Peut être rejoué : les comptes sont recréés.
SET NAMES utf8mb4;

DELETE FROM pratiquer WHERE id_paysan IN (9001, 9002, 9003);
DELETE FROM paysans WHERE id_paysan IN (9001, 9002, 9003);

INSERT INTO paysans (id_paysan, nom_paysan, prenom_paysan, num_telephone, localisation, mot_de_passe) VALUES
  (9001, 'Rakoto', 'Demo', '0340000001', 'Analamanga', '$2b$10$HLWxWnlac3JwvbaNM.lXwO7/oVce4KVtaPwNj19wUVkiXo0e2zMjW'),
  (9002, 'Rasoa', 'Demo', '0340000002', 'Alaotra Mangoro', '$2b$10$HyIch/.Ctk3AWT5v48srvuhEFF8jrAxALqVwuWn4W2F/nWh2XochC'),
  (9003, 'Randria', 'Demo', '0340000003', 'Sava', '$2b$10$Vck6BW.TVAtx5WG.BoTYBe42uNWdjf3RqA2z0V5e/lxL6heNMsbh2');

-- Rakoto : Madikatra (Analamanga, an-drano) ; Rasoa : MKX, Mihary (Alaotra) ; Randria : sans variété
INSERT INTO pratiquer (id_paysan, id_varieter) VALUES
  (9001, 1),
  (9002, 100);
