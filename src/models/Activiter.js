const { QueryTypes } = require("sequelize");
const db = require("../config/db");
class PlanningsModel {
  constructor(
    id_planning,
    id_activite,
    id_varieter,
    id_cycle,
    id_categorie,
    date_debut,
    date_fin
  ) {
    this.id_planning = id_planning;
    this.id_varieter = id_varieter;
    this.id_cycle = id_cycle;
    this.date_fin = date_fin;
    this.id_categorie = id_categorie;
    this.date_debut = date_debut;
    this.id_activite = id_activite;
    this.titre_alerte = titre_alerte;
  }
  static async getAll(id_varieter) {
    const result = await db.query(
      "SELECT * FROM planning p JOIN varieter v ON p.id_varieter=v.id_varieter JOIN culture AS c ON c.id_culture=v.id_culture JOIN categorie ca ON ca.id_categorie=v.id_categorie JOIN activite AS a ON a.id_activite=p.id_activite  WHERE p.id_varieter=? ORDER BY date_debut ASC",
      {
        replacements: [id_varieter],
        type: QueryTypes.SELECT,
      }
    );

    return result;
  }
  static async getPlaning(id_varieter) {
    const result = await db.query(
      "SELECT id_planning FROM planning WHERE id_varieter=? ORDER BY date_debut ASC",
      {
        replacements: [id_varieter],
        type: QueryTypes.SELECT,
      }
    );

    return result;
  }

  
  static async VerifyPratiquer(id_paysan, id_varieter) {
    const result = await db.query(
      "SELECT id_varieter FROM pratiquer WHERE id_paysan=? AND id_varieter=?",
      {
        replacements: [id_paysan, id_varieter],
        type: QueryTypes.SELECT,
      }
    );

    return result;
  }

  static async ActitviterPlaning(id_planning) {
    const today = new Date().toISOString().slice(0, 10);
    const passees = await db.query(
      `SELECT *
FROM planning p
LEFT JOIN activite a ON a.id_activite = p.id_activite
LEFT JOIN varieter v ON v.id_varieter = p.id_varieter
LEFT JOIN culture c ON c.id_culture = v.id_culture
LEFT JOIN categorie ca ON ca.id_categorie = v.id_categorie
WHERE p.id_planning = ?
  AND p.date_fin < ?
ORDER BY p.date_debut ASC
`,
      {
        replacements: [id_planning, today],
        type: QueryTypes.SELECT,
      }
    );
    const enCours = await db.query(
      `SELECT *
FROM planning p
LEFT JOIN activite a ON a.id_activite = p.id_activite
LEFT JOIN varieter v ON v.id_varieter = p.id_varieter
LEFT JOIN culture c ON c.id_culture = v.id_culture
LEFT JOIN categorie ca ON ca.id_categorie = v.id_categorie
 WHERE p.id_planning=? 
 AND p.date_debut <= ? 
 AND date_fin >= ? 
 ORDER BY p.date_debut ASC`,
      {
        replacements: [id_planning, today, today],
        type: QueryTypes.SELECT,
      }
    );
    const aVenir = await db.query(
      `SELECT *
FROM planning p
LEFT JOIN activite a ON a.id_activite = p.id_activite
LEFT JOIN varieter v ON v.id_varieter = p.id_varieter
LEFT JOIN culture c ON c.id_culture = v.id_culture
LEFT JOIN categorie ca ON ca.id_categorie = v.id_categorie
 WHERE p.id_planning = ? AND p.date_debut > ?
  ORDER BY p.date_debut ASC`,
      {
        replacements: [id_planning, today],
        type: QueryTypes.SELECT,
      }
    );
    console.log(passees);

    return { passees, enCours, aVenir };
  }
}
module.exports = PlanningsModel;
