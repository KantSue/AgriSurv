const PlanningsModel=require('../models/Activiter')
const Culture_controller=require('../controllers/Culture_controller')
const Alrerte_model = require('../models/Alerte_model')


class PlanningsController{
  static async AffichAllPlaning(req,res){
        
      try{
           const{id_paysan,id_varieter}=req.params
     const verification=await PlanningsModel.VerifyPratiquer(id_paysan,id_varieter)
    
        if(verification.length===0){
            return res.status(500).json({message:"Tsy mbola manana Planing ianao"})
           
         }
            const result=await PlanningsModel.getAll(id_varieter);
           if(result.length===0) return res.status(500).json({ message: "Tsy misy fambolena hita" });
           return res.json({success:true,resultat:result})
         
       
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Erreur serveur" });
        }
  }
            
    static async PlannigGestions(req,res){
        try{ 
            const{id_paysan,id_varieter}=req.params
            console.log(" nisy anreto",id_paysan,id_varieter)
            
            const verification=await PlanningsModel.VerifyPratiquer(id_paysan,id_varieter)
            if(verification.length===0){
                return res.status(500).json({message:"Tsy mbola manana tetiandro ianao"})
           
           }
        //    console.log(" verifiacation:",verification)

        //    const id_v=verification[0]
        //    console.log(id_v)
            const planningsDetail = [];         
                const result=await PlanningsModel.getPlaning(verification[0].id_varieter);
                console.log(result)
                if (!result || result.length === 0) {
                return res.status(404).json({ message: "Tsy misy tetiandro azo" });
                }
                for (const l of result) {
                    const planning = await PlanningsModel.ActitviterPlaning(l.id_planning);

                    if (
                        (!planning.passees || planning.passees.length === 0) &&
                        (!planning.enCours || planning.enCours.length === 0) &&
                        (!planning.aVenir || planning.aVenir.length === 0)
                    ) {
                        continue; 
                    }
                    planningsDetail.push({
                        id_planning: l.id_planning,
                        passees: planning.passees,
                        enCours: planning.enCours,
                        aVenir: planning.aVenir
                    });
                }
    
        // console.log("jesuis planningdetails",planningsDetail)
        // for (const p of planningsDetail) {
        //     console.log("Planning:", p.id_planning);
        //     console.log("Passees:", p.passees);
        // }

        if (planningsDetail.length === 0) {
            return res.status(404).json({ message: "Tsy misy tetiandro hita" });
        }
        return res.json({ success: true, result: planningsDetail });
        
    } catch (error) {
        console.error("Erreur PlannigGestion:", error);
        return res.status(500).json({ message: "Erreur serveur" });
    }
}

}
module.exports=PlanningsController