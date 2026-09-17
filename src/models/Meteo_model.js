const {QueryTypes}=require ('sequelize');
const db=require('../config/db');
class Meteo_model{
    constructor(id_meteo,localisation,date,temperature_min,temperature_max,pluie,vent,humidite,condition_meteo){
         this.id_meteo = id_meteo;
        this.localisation = localisation;
        this.date = date;
        this.temperature_min = temperature_min;
        this.temperature_max = temperature_max;
        this.pluie = pluie;
        this.vent = vent;
        this.humidite = humidite;
        this.condition_meteo = condition_meteo;
    }
    static async ReadAll(localisation){
        const result=await db.query(
            'SELECT *FROM meteo WHERE localisation=?',
            {
                replacements:[localisation],
                type:QueryTypes.SELECT
            }
        );
        return result;
    }
    static async insert(localisation,date,temperature_min,temperature_max,pluie,vent,humidite,condition_meteo){
        const resultat=await db.query(
            'INSERT INTO meteo (localisation,date,temperature_min,temperature_max,pluie,vent,humidite,condition_meteo) VALUES(?,?,?,?,?,?,?,?)',
            {
                replacements:[localisation,date,temperature_min,temperature_max,pluie,vent,humidite,condition_meteo],
                type:QueryTypes.INSERT
            }
        );
        if (resultat) return true;
    
    }
}
module.exports=Meteo_model