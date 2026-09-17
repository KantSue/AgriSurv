const { QueryTypes } = require("sequelize");
const db = require("../config/db");
const { data } = require("autoprefixer");
class Culture_model {
  constructor(id_culture,nom_culture,localisation) {
    this.id_culture = id_culture;
    this.nom_culture = nom_culture;
    this.localisation = localisation;
   
  }
  static async afficheCulture(localisation){
        const result=await db.query(
            'SELECT * FROM culture as c JOIN varieter AS v ON v.id_culture=c.id_culture WHERE localisation=? GROUP BY v.id_culture',
            {
               replacements:[localisation],
                type:QueryTypes.SELECT
            }
        );
        const cultures=result.map(c=>({
            ...c,
            image_cultur:c.image_cultur
            ?`data:image/jpeg;base64,${Buffer.from(c.image_cultur).toString('base64')}`
            :null
        }))
        return cultures;
    }
    static async getById(id){
        const result=await db.query(
            'SELECT * FROM culture WHERE id_culture=?',
            {
                replacements:[id],
                type:QueryTypes.SELECT
            }
        );
        return result;
    
    }
     static async afficheCultureCategorie(id_culture){
        const result=await db.query(
            'SELECT * FROM categorie WHERE id_culture=? ',
            {
              replacements:[id_culture],
                type:QueryTypes.SELECT
            }
        );
        return result;
    }
     static async afficheCultureVariety(id_culture,id_categorie){
        const result=await db.query(
            'SELECT DISTINCT v.* FROM varieter AS v JOIN categorie AS c ON v.id_culture=c.id_culture WHERE v.id_culture=? AND v.id_categorie=?',
            {
              replacements:[id_culture,id_categorie],
                type:QueryTypes.SELECT
            }
        );
        return result;
    }   
    static async afficheCultureVariety2(id_culture){
        const result=await db.query(
            'SELECT * FROM varieter WHERE id_culture=?',
            {
              replacements:[id_culture],
                type:QueryTypes.SELECT
            }
        );
 
        return result;
    }
   
   
   
    static async getMyVarieter(id_paysan){
        const result=await db.query(
            `SELECT *
                FROM pratiquer p
                JOIN varieter v ON p.id_varieter = v.id_varieter
                WHERE p.id_paysan =?`,
            {
                replacements:[id_paysan],
                type:QueryTypes.SELECT
            }
        );
        return result;
    
    }

    static async getByPaysan(id_paysan){
        const result=await db.query(
            'SELECT * FROM varieter AS v JOIN pratiquer AS p ON v.id_varieter=p.id_varieter WHERE p.id_paysan=?',
            {
                replacements:[id_paysan],
                type:QueryTypes.SELECT
            }
        );
        return result;
    
    }
    static async AffectculturtoPaysan(id_paysan,id_varieter){
        const result=await db.query(
            'INSERT INTO pratiquer (id_paysan,id_varieter) VALUES(?,?)',
            {
                replacements:[id_paysan,id_varieter],
                type:QueryTypes.INSERT
            }
        );
        return true;
    
    }
    static async IsAlredyExist(id_varieter,id_paysan){
        const result=await db.query(
            'SELECT * FROM pratiquer WHERE id_varieter=? AND id_paysan=? ',
            {
                replacements:[id_varieter,id_paysan],
                type:QueryTypes.SELECT
            }
        );
        
        return result;
    
    }
    static async HasCulture(id_paysan){
        const result=await db.query(
            'SELECT * FROM pratiquer WHERE id_paysan=? ',
            {
                replacements:[id_paysan],
                type:QueryTypes.SELECT
            }
        );
        
        return result;
    }
    
}
module.exports = Culture_model;
