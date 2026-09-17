const express=require('express');


const router=express.Router();
const Culture_controller=require('../controllers/Culture_controller')

router.get('/showAll/:localisation',Culture_controller.AffichAllType);
router.get('/Variety/:id_culture/:id_categorie',Culture_controller.AffichAllVarieter);
router.get('/Variety2/:id_culture',Culture_controller.AffichAllVarieter2);

router.get('/categorie/:id_culture',Culture_controller.AffichAllCatego);

router.get('/getVarieter/:id_paysan',Culture_controller.getMyVar);

router.get('/oneInfo/:id_culture',Culture_controller.getInfoOfOneCulture);
router.get('/getInfo/:id_paysan',Culture_controller.verifiedIfhas)
router.post('/insert/',Culture_controller.PutCuInP);
module.exports=router;