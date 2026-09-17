const express=require("express");
const router=express.Router();
const Alerte_controller=require("../controllers/Alerte_controlller");

// router.post("/verify", Alerte_controller.Insertalerte);
// router.get('/allAlerts',Alerte_controller.ReadAll);
// router.get('/byType/:typ',Alerte_controller.AffichByTypeAlerte);
// router.post('/insert',Alerte_controller.Insertalerte);
router.get('/update/:id_alerte',Alerte_controller.UpdateEtat);
router.post('/delete/:id_alerte',Alerte_controller.DeleteAlerte);
router.get('/c',Alerte_controller.GenerateAlertedeb);
router.post('/afich/:id_paysan',Alerte_controller.Afich);

module.exports=router;