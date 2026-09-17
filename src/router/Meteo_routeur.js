const express=require('express');
const router=express.Router();
const Meteo_controller=require('../controllers/Meteo_controller')
router.get('/read/:localisation',Meteo_controller.AfficheTout);
router.post('/insert',Meteo_controller.InsertMeteo)
module.exports=router