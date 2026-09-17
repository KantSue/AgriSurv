const{ QueryTypes}=require('sequelize');
const db=require('../config/db');
class Observation_model{
    constructor(id_observation,id_paysan,titre_observation,contenu,date_obs){
        this.id_observation=id_observation;
        this.id_paysan=id_paysan;
        this.titre_obs=titre_observation;
        this.contenu=contenu;
        this.date_obs=date_obs

    }
    static async createObs(titre,contenu,id_paysan){
        
        const resulttat=await db.query(
            'INSERT INTO observation (titre_observation,contenu,id_paysan) VALUES(?,?,?)',
            {
                replacements:[titre,contenu,id_paysan],
                type:QueryTypes.INSERT
            }
        );
        return true;
    }
    static async ReadOneObs(id_observation){
        const result= await db.query(
            'SELECT * FROM observation WHERE id_observation=?',
            {
                replacements:[id_observation],
                type:QueryTypes.SELECT
            }
        );
        return result[0]||null;
    }
    static async ReadAllObs(id_paysan){
         const result= await db.query(
            'SELECT titre_observation,contenu,date_observation FROM observation WHERE id_paysan=? ORDER BY date_observation DESC;',
            {
                replacements:[id_paysan],
                type:QueryTypes.SELECT
            }
        );
        return result;
    }
    static async seekByTitle(titre){
         const result= await db.query(
            'SELECT * FROM observation WHERE titre_observation=?',
            {
                replacements:[titre],
                type:QueryTypes.SELECT
            }
        );
        return result[0]||null;
    }
    static async seekByDate(date,id_paysan){
         const result= await db.query(
            'SELECT * FROM observation WHERE date_observation=? AND id_paysan=?',
            {
                replacements:[date,id_paysan],
                type:QueryTypes.SELECT
            }
        );
        return result[0]||null;
    }

    static async updateObs(id_observation,titre,contenu){
         const resulttat=await db.query(
            'UPDATE observation SET titre_observation=?,contenu=? WHERE id_observation=?',
            {
                replacements:[titre,contenu,id_observation],
                type:QueryTypes.UPDATE
            }
        );
        return true;
    }
    static async deleteObs(id_observation){
         const resulttat=await db.query(
            'DELETE FROM observation WHERE id_observation=?',
            {
                replacements:[id_observation],
                type:QueryTypes.DELETE
            }
        );
        return true;
    
    }
}
module.exports=Observation_model;