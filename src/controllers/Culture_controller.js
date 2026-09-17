const Culture_model=require('../models/Cultur_model')
class Culture_controller{

    static async AffichAllType(req,res){
        try{
            const {localisation}=req.params
            const result=await Culture_model.afficheCulture(localisation);
            if(result.length===0) return res.status(500).json({ message: "Tsy misy fambolena hita" });
            
        
            return res.json(result)
            
        }catch (error) {
            console.error(error);
            
        }
    }
    static async AffichAllVarieter(req,res){
        try{
            const{id_culture,id_categorie}=req.params;
            const result=await Culture_model.afficheCultureVariety(id_culture,id_categorie);
             if (result.length === 0) {
            return res.status(404).json({
          
                data: [] 
            });
        }
        return res.status(200).json(result);
            
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur dans AffichAllVarieter" });
        }
    }
    static async AffichAllVarieter2(req,res){
        try{
            const{id_culture}=req.params;
            const result=await Culture_model.afficheCultureVariety2(id_culture);
             if (result.length === 0) {
            return res.status(404).json({
          
                data: [] 
            });
        }
        return res.status(200).json(result);
            
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur dans AffichAllVarieter" });
        }
    }
     

    static async AffichAllCatego(req,res){
        try{
            const{id_culture}=req.params;
            const result=await Culture_model.afficheCultureCategorie(id_culture);
             if (result.length === 0) {
            return res.status(404).json({
            
                data: [] 
            });
        }
        return res.status(200).json(result);
            
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur dans AffichAllCatego" });
        }
    }
  
    
     
     static async getMyVar(req,res){
        try{
            const{id_paysan}=req.params;
            const result=await Culture_model.getMyVarieter(id_paysan);
             console.log(result);
            return res.json(result);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async getInfoOfOneCulture(req,res){
        try{
             const{id_culture}=req.params;
            const result=await Culture_model.getById(id_culture);
             console.log(result);
            return res.json(result);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async verifiedIfhas(req,res){
        try{
             const{id_paysan}=req.params;
            const result=await Culture_model.HasCulture(id_paysan);
            
             console.log(result);
            return res.json(result);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
        
    }
    static async PutCuInP(req,res){
        try{
            
            console.log("BODY RECU :", req.body);
            const {id_paysan,id_varieter}=req.body;
            const alreadyHave=await Culture_model.IsAlredyExist(id_paysan,id_varieter)
            if (alreadyHave.length>0) return res.status(400).json({ message: "Sokajy efa misy" });
           
                    
            const result=await Culture_model.AffectculturtoPaysan(id_paysan,id_varieter);
             console.log(result);
             console.log({
                id_paysan,
               
                id_varieter,
              
                });

             return res.json({ success: true, result });
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur PutCuInP" });
        }
    }

    
}module.exports=Culture_controller