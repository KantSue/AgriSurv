const express=require("express");
const router=express.Router();
const PlanningsController=require("../controllers/Activiter_controller")
 router.get('/allPlanings/:id_paysan/:id_varieter',PlanningsController.AffichAllPlaning);
router.get('/gestionPlaning/:id_paysan/:id_varieter',PlanningsController.PlannigGestions);

module.exports=router;