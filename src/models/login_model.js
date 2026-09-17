const { QueryTypes } = require("sequelize");
const db = require("../config/db"); // adapte le chemin si besoin
const bcrypt = require("bcrypt");
const body_parser = require("body-parser");
class Login_model {
  constructor(id, nom, prenom, tell, localisation, mdp) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tell;
    this.localisation = localisation;
    this.mdp = mdp;
  }
  static async findByTel(tel) {
    const resultat = await db.query(
      "SELECT*FROM paysans WHERE num_telephone=?",
      {
        replacements: [tel],
        type: QueryTypes.SELECT,
      }
    );
    return resultat[0] || null;
  }
  static async findByName(nom) {
    const result = await db.query("SELECT * FROM paysans WHERE nom_paysan=?", {
      replacements: [nom],
      type: QueryTypes.SELECT,
    });
    return result[0] || null;
  }
  async create() {
    if (!this.mdp) {
      throw new Error("Mot de passe manquant");
    }

    const hashedMdp = await bcrypt.hash(this.mdp, 10);

   const result= await db.query(
      `INSERT INTO paysans
            (nom_paysan, prenom_paysan, num_telephone, localisation, mot_de_passe)
            VALUES (?, ?, ?, ?, ?)`,
      {
        replacements: [
          this.nom,
          this.prenom,
          this.tel,
          this.localisation,
          hashedMdp,
        ],
        type: QueryTypes.INSERT,
      }
    );
    console.log(result)

    return result;
  }

 static async verifyMdp(mdp, hashedMdp) {
  const match = await bcrypt.compare(mdp, hashedMdp);
  console.log(match ? "Mot de passe correct !" : "Mot de passe incorrect !");
  return match;
}

}

module.exports = Login_model;

// (async () => {
//   try {
//     // Tester la connexion
//     await db.authenticate();
//     console.log('Connexion MySQL OK');

//     // Exécuter la requête
//     const cultures = await db.query(
//       'SELECT * FROM culture',
//       { type: QueryTypes.SELECT }
//     );

//     console.log('Résultat :');
//     console.table(cultures);

//   } catch (err) {
//     console.error('Erreur :', err);
//   } finally {
//     await db.close(); // fermer proprement la connexion
//   }
// })();

// exports.SingnIn=async(nom,prenom,tel,localisation,mdp)=>{
//     try{
//          await db.authenticate();
//         const results=await db.query(
//             ' INSERT INTO paysans (nom_paysan,prenom_paysan,num_telephone,localisation,mot_de_passe) VALUE(?,?,?,?,?)',
//             {
//                 replacements:[nom,prenom,tel,localisation,mdp],
//                 type:QueryTypes.INSERT
//             }
//         );
//         return results;
//     }

//     catch(err){
//         console.log(' erreur dans signup',err);
//         throw err;
//     }
// }
// exports.LogIn=async(mdp,tel)=>{
//     try{
//         await db.authenticate();
//         const results=await db.query(
//             'SELECT num_telephone,mot_de_passe FROM paysans WHERE mot_de_passe=? AND num_telephone=?',
//             {
//                 replacements:[mdp,tel],
//                 type:QueryTypes.SELECT
//             }
//         );
//         return results;
//     }catch(err){
//         console.log('erreur dans LogIn',err);
//         throw err;
//     }
// }
