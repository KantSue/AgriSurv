const Observation_model=require('../models/Observation_model');
class Observation_controller{
    static async CreateObservation(req,res){
        try{
            const {titre,contenu}=req.body;
            const id_paysan=req.user.id_paysan;
            const results= await Observation_model.createObs(titre,contenu,id_paysan);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async ReadOne(req,res){
        try{
            const{id_observation}=req.params;
            const results=await Observation_model.ReadOneObs(id_observation);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async ReadAll(req,res){
         try{
            const id_paysan=req.user.id_paysan;

            const results=await Observation_model.ReadAllObs(id_paysan);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    
    static async seekBytitre(req,res){
         try{
            const{titre}=req.body;
            const results=await Observation_model.seekByTitle(titre);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async seekByDaty(req,res){
         try{
            const{date}=req.body;
            const id_paysan=req.user.id_paysan;
            const results=await Observation_model.seekByDate(date,id_paysan);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async updateObservation(req,res){
        try{
            const {id_observation,titre,contenu}=req.body;
            const results= await Observation_model.updateObs(id_observation,titre,contenu);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async deleteObservation(req,res){
        try{
            const{ id_observation}=req.params;
            const exist=await Observation_model.ReadOneObs(id_observation)
            if(!exist) return res.status(400).json({ message: "fanamarihana tsy misy" });

            const results=await Observation_model.deleteObs(id_observation);
            return res.json(results);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    } 

}





































module.exports=Observation_controller