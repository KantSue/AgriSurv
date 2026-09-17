const { QueryTypes } = require("sequelize");
const db = require("../config/db");
class Alrerte_model {
  constructor(
    id_alerte,
    id_activite,
    type_alerte,
    date_debut,
    date_fin,
    message,
    etat,
    titre_alerte,
    id_planning
  ) {
    this.id_alerte = id_alerte;
    this.type_alerte = type_alerte;
    this.date_debut = date_debut;
    this.date_fin = date_fin;
    this.message = message;
    this.etat = etat;
    this.id_activite = id_activite;
    this.titre_alerte = titre_alerte;
    this.id_planning = id_planning;
  }

  static async generateAlertDebut(id_paysan) {
    const result = await db.query(
            `SELECT p.*
        FROM planning p
        JOIN pratiquer pr
        ON p.id_culture   = pr.id_culture
        AND p.id_varieter  = pr.id_varieter
        AND p.id_cycle     = pr.id_cycle
        AND p.id_categorie = pr.id_categorie
        WHERE pr.id_paysan = ?
       `,
        {
            replacements: [id_paysan],
            type: QueryTypes.SELECT
        }
    );
   
    return result
  }
  static async generateAlertFin(id_paysan) {
    const result = await db.query(
            `SELECT p.*,a.*
        FROM planning p
        JOIN pratiquer pr
        ON p.id_culture   = pr.id_culture
        AND p.id_varieter  = pr.id_varieter
        AND p.id_cycle     = pr.id_cycle
        AND p.id_categorie = pr.id_categorie
        JOIN activite a
        ON p.id_planning=a.id_activite
        WHERE pr.id_paysan = ?
        AND p.date_fin BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 3 DAY)`,
        {
            replacements: [id_paysan],
            type: QueryTypes.SELECT
        }
    );
    return result
  }
  static async affichAllAlerte(id_paysan) {
    const result = await db.query(
      "SELECT DISTINCT * FROM alerte a JOIN recevoir r ON r.id_alerte=a.id_alerete WHERE r.id_paysan=?",
      {
         replacements: [id_paysan],
        type: QueryTypes.SELECT,
      }
    );
    return result;
  }
  

  static async InsertAlerte( type_alerte,date_debut,date_fin,message,etat,titre_alerte) {
    const res = await db.query(
      `INSERT INTO alerte (type_alerte, date_debut, date_fin, message, etat, titre_alerte) 
         VALUES (?, ?, ?, ?, ?, ?)`,
      {
        replacements: [
          type_alerte,
          date_debut,
          date_fin,
          message,
          etat,
          titre_alerte,
          
        ],
        type: QueryTypes.INSERT,
      }
    );
    return {success:true,result:res};
  }
  static async SendAlerte(id_paysan, id_alerte) {
    const res = await db.query(
      `INSERT INTO recevoir (id_paysan,id_alerte)VALUES (?, ?)`,
      {
        replacements: [id_paysan, id_alerte],
        type: QueryTypes.INSERT,
      }
    );
    return res;
  }

  static async UpdateEtat(id_alerte) {
    const etats = `vue`;
    const result = await db.query(
      "UPDATE alerte SET etat=? WHERE id_alerte=?",
      {
        replacements: [etats, id_alerte],
        type: QueryTypes.UPDATE,
      }
    );
    return result;
  }
  static async deleteAlerte(id_alerte) {
    const result = await db.query("DELETE FROM alerte WHERE id_alerte=?", {
      replacements: [id_alerte],
      type: QueryTypes.DELETE,
    });
    return result;
  }
}
module.exports = Alrerte_model;
