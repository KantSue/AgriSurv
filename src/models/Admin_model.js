const { QueryTypes } = require("sequelize");
const db = require("../config/db");

const select = (sql, replacements = []) =>
  db.query(sql, { replacements, type: QueryTypes.SELECT });

class Admin_model {
  // ---- Statistiques ----
  static async stats() {
    const [totaux] = await select(
      `SELECT
         COUNT(*) AS paysans,
         SUM(date_inscription >= NOW() - INTERVAL 30 DAY) AS nouveaux_30j,
         SUM(derniere_connexion >= NOW() - INTERVAL 30 DAY) AS actifs_30j,
         SUM(NOT EXISTS (SELECT 1 FROM pratiquer pr WHERE pr.id_paysan = p.id_paysan)) AS sans_variete
       FROM paysans p
       WHERE role = 'paysan'`
    );
    const [obs] = await select("SELECT COUNT(*) AS observations FROM observation");

    const parRegion = await select(
      `SELECT COALESCE(localisation, '?') AS label, COUNT(*) AS total
       FROM paysans WHERE role = 'paysan'
       GROUP BY localisation ORDER BY total DESC, label`
    );
    const parVariete = await select(
      `SELECT CONCAT(v.nom_varieter, ' (', c.localisation, ')') AS label, COUNT(*) AS total
       FROM pratiquer pr
       JOIN varieter v ON v.id_varieter = pr.id_varieter
       JOIN culture c ON c.id_culture = v.id_culture
       JOIN paysans p ON p.id_paysan = pr.id_paysan AND p.role = 'paysan'
       GROUP BY v.id_varieter, v.nom_varieter, c.localisation
       ORDER BY total DESC, label LIMIT 10`
    );
    const parMois = await select(
      `SELECT DATE_FORMAT(date_inscription, '%Y-%m') AS mois, COUNT(*) AS total
       FROM paysans
       WHERE role = 'paysan' AND date_inscription >= DATE_FORMAT(NOW() - INTERVAL 5 MONTH, '%Y-%m-01')
       GROUP BY mois ORDER BY mois`
    );
    const derniers = await select(
      `SELECT nom_paysan, prenom_paysan, num_telephone, localisation, date_inscription, derniere_connexion
       FROM paysans WHERE role = 'paysan'
       ORDER BY date_inscription DESC LIMIT 8`
    );

    const n = (v) => Number(v) || 0;
    return {
      totaux: {
        paysans: n(totaux.paysans),
        nouveaux_30j: n(totaux.nouveaux_30j),
        actifs_30j: n(totaux.actifs_30j),
        sans_variete: n(totaux.sans_variete),
        observations: n(obs.observations),
      },
      parRegion: parRegion.map((r) => ({ ...r, total: n(r.total) })),
      parVariete: parVariete.map((r) => ({ ...r, total: n(r.total) })),
      parMois: parMois.map((r) => ({ ...r, total: n(r.total) })),
      derniers,
    };
  }

  // ---- Calendrier ----
  static async varietes() {
    return select(
      `SELECT v.id_varieter, v.nom_varieter, v.type_culture, c.localisation, c.nom_culture, ca.categorie_culture
       FROM varieter v
       JOIN culture c ON c.id_culture = v.id_culture
       LEFT JOIN categorie ca ON ca.id_categorie = v.id_categorie
       ORDER BY c.localisation, c.nom_culture, ca.categorie_culture, v.nom_varieter`
    );
  }

  static async activites() {
    // Un même nom existe sous plusieurs id : on n'en propose qu'un (le plus récent, celui des calendriers FOFIFA).
    return select(
      `SELECT MAX(id_activite) AS id_activite, TRIM(type_activite) AS type_activite
       FROM activite GROUP BY TRIM(type_activite)
       ORDER BY MAX(id_activite) < 1000, MAX(id_activite)`
    );
  }

  static async planning(id_varieter) {
    return select(
      `SELECT p.id_planning, p.id_activite, TRIM(a.type_activite) AS type_activite, p.date_debut, p.date_fin
       FROM planning p JOIN activite a ON a.id_activite = p.id_activite
       WHERE p.id_varieter = ?
       ORDER BY p.date_debut, p.date_fin`,
      [id_varieter]
    );
  }

  static async addPlanning({ id_varieter, id_activite, date_debut, date_fin }) {
    const [id] = await db.query(
      "INSERT INTO planning (id_varieter, id_activite, date_debut, date_fin) VALUES (?, ?, ?, ?)",
      { replacements: [id_varieter, id_activite, date_debut, date_fin], type: QueryTypes.INSERT }
    );
    return id;
  }

  static async updatePlanning(id_planning, { id_activite, date_debut, date_fin }) {
    await db.query(
      "UPDATE planning SET id_activite = ?, date_debut = ?, date_fin = ? WHERE id_planning = ?",
      { replacements: [id_activite, date_debut, date_fin, id_planning], type: QueryTypes.UPDATE }
    );
  }

  static async deletePlanning(id_planning) {
    await db.query("DELETE FROM planning WHERE id_planning = ?", {
      replacements: [id_planning],
      type: QueryTypes.DELETE,
    });
  }

  // ---- Torohevitra ----
  static async conseils() {
    return select(
      `SELECT id_conseil, type_conseil, titre, contenu, pictogramme IS NOT NULL AS has_image
       FROM conseil ORDER BY type_conseil, titre`
    );
  }

  static async addConseil({ type_conseil, titre, contenu }) {
    const [id] = await db.query(
      "INSERT INTO conseil (type_conseil, titre, contenu) VALUES (?, ?, ?)",
      { replacements: [type_conseil, titre, contenu], type: QueryTypes.INSERT }
    );
    return id;
  }

  static async updateConseil(id_conseil, { type_conseil, titre, contenu }) {
    await db.query(
      "UPDATE conseil SET type_conseil = ?, titre = ?, contenu = ? WHERE id_conseil = ?",
      { replacements: [type_conseil, titre, contenu, id_conseil], type: QueryTypes.UPDATE }
    );
  }

  static async deleteConseil(id_conseil) {
    await db.query("DELETE FROM conseil WHERE id_conseil = ?", {
      replacements: [id_conseil],
      type: QueryTypes.DELETE,
    });
  }
}

module.exports = Admin_model;
