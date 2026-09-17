const Alrerte_model = require("../models/Alerte_model");
const PlanningsController = require("./Activiter_controller");

class Alerte_controller {



static async GenerateAlertedeb(req, res) {
    try {
      let Isgenerated=false
      const { id_paysan } = req.params;
      console.log(id_paysan)
      const resultat = await Alrerte_model.generateAlertDebut(id_paysan);
       if (resultat.length>0){
        for(const resu of resultat ){

           const type_alerte = "activite";
            const message = "Efa manakaiky ny fotoana";
            const etat = "non_lu";
            const titre = resu.type_activite;
            const inserted = await Alrerte_model.InsertAlerte(
              type_alerte,
              resu.date_debut,
              resu.date_fin,
              message,
              etat,
              titre,
              
            );
            if(inserted.success) {
              Isgenerated=true
            await Alrerte_model.SendAlerte(id_paysan,inserted.result[0])
          }
        }
       }
      
       
      return res.json({generated: Isgenerated, data: resultat} );
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur dans GenerateAlertedeb" });
    }
  }
  static async Afich(req,res){
    try{
      const { id_paysan } = req.params;
      const resultat = await Alrerte_model.affichAllAlerte(id_paysan);
      if(resultat.length===0) return res.json({message:"Tsy misy fampintandremana hita"})
      return res.json({success:true,result:resultat});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur dans Afich" });
    }
  }
  static async GenerateAlertefin(req, res) {
    try {
      const { id_paysan } = req.params;
      const resultat = await Alrerte_model.generateAlertDebut(id_paysan);
     
      return res.json(resultat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }

  static async UpdateEtat(req, res) {
    try {
      const { id_alerte } = req.params;
      const resultat = await Alrerte_model.generateAlertFin(id_alerte);
   
      return res.json(resultat);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
  static async DeleteAlerte(req, res) {
    try {
      const { id_alerte } = req.params;
      const result = await Alrerte_model.deleteAlerte(id_alerte);
      console.log(result);
      return res.json(result);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }


}
module.exports = Alerte_controller;
