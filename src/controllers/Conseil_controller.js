const Conseil_model=require('../models/Conseil_model')
class Conseil_controller{
    static async AffichAllType(req,res){
        try{
            const result=await Conseil_model.readAllType();
            return res.json(result)
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async AffichByType(req,res){
        try{
            const{type}=req.params;
            const result=await Conseil_model.getByType(type);
             console.log(result);
            return res.json(result);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async AfichAlltitle(req,res){
        try{
            const result=await Conseil_model.readAllTitre();
            return res.json(result)
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async AffichByTitle(req,res){
        try{
             const{title}=req.params;
             if(!title){
                return res.status(400).json({message:"Tsy ampy lohateny"})
             }
             console.log(title)
            const result=await Conseil_model.getByTitre(title);
            return res.json(result);
        }catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
}
module.exports=Conseil_controller