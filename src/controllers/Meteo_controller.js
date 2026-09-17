const Meteo_model=require('../models/Meteo_model')
class Meteo_controller{
    static async AfficheTout(req,res){
        try{
            const {localisation}=req.params;
           
            if(!localisation){
                return res.status(400).json({message:"Toerana tsy hita"});
            }
            console.log (localisation);
            const result=await Meteo_model.ReadAll(localisation);
            return res.json(result);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
     static async InsertMeteo(req, res) {
        try {
            // Ici on récupère les données depuis le corps de la requête (POST)
            const { localisation, date, temperature_min, temperature_max, pluie, vent, humidite, condition_meteo } = req.body;
            if (!localisation || !date || temperature_min == null || temperature_max == null) {
                return res.status(400).json({ message: "Champs obligatoires manquants" });
            }
            await Meteo_model.insert(localisation, date, temperature_min, temperature_max, pluie, vent, humidite, condition_meteo);

            return res.status(201).json({ message: "Observation météo ajoutée avec succès" });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur lors de l'insertion" });
        }
    }
}
module.exports=Meteo_controller