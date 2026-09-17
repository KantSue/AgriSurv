const { QueryTypes } = require("sequelize");
const db = require("../config/db");
class Conseil_model {
  constructor(id_conseil, type, contenu, audio, pictogramme, titre) {
    this.id_conseil = id_conseil;
    this.type = type;
    this.contenu = contenu;
    this.audio = audio;
    this.pictogramme = pictogramme;
    this.titre = titre;
  }

  static async getByTitre(title) {
    const result = await db.query("SELECT * FROM conseil WHERE titre=?", {
      replacements: [title],
      type: QueryTypes.SELECT,
    });
    const conseil = result.map((c) => ({
      ...c,
      pictogramme: c.pictogramme
        ? `data:image/jpeg;base64,${Buffer.from(c.pictogramme).toString(
            "base64"
          )}`
        : null,
    }));
    console.log(conseil);
    return conseil;
  }
  static async getByType(type) {
    const result = await db.query(
      "SELECT * FROM conseil WHERE type_conseil=?",
      {
        replacements: [type],
        type: QueryTypes.SELECT,
      }
    );
    const typesWithImages = result.map((t) => ({
      ...t,
      pictogramme: t.pictogramme
        ? `data:image/jpeg;base64,${Buffer.from(t.pictogramme).toString(
            "base64"
          )}`
        : null,
    }));
    return typesWithImages;
  }
  static async readAllType() {
    const result = await db.query(
      "SELECT type_conseil,pictogramme FROM conseil GROUP BY type_conseil",
      {
        type: QueryTypes.SELECT,
      }
    );
    const typesWithImages = result.map((t) => ({
      ...t,
      pictogramme: t.pictogramme
        ? `data:image/jpeg;base64,${Buffer.from(t.pictogramme).toString(
            "base64"
          )}`
        : null,
    }));

    return typesWithImages;
  }
  static async readAllTitre() {
    const result = await db.query("SELECT titre FROM conseil", {
      type: QueryTypes.SELECT,
    });
    return result;
  }
}
module.exports = Conseil_model;
