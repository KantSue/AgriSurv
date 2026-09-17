const express=require ('express');
const router=express.Router();
const Observation_controller=require('../controllers/Observation_controller');
const verifyToken=require('../middleware/auth');
router.use(verifyToken);
router.post('/creation',Observation_controller.CreateObservation);
router.post('/Oneread/:id_observation',Observation_controller.ReadOne);
router.post('/bytitre',Observation_controller.seekBytitre);
router.post('/bydate',Observation_controller.seekByDaty);
router.post('/update',Observation_controller.updateObservation);
router.get('/delete:id_observation',Observation_controller.deleteObservation);
router.get('/readAll',Observation_controller.ReadAll)
module.exports=router;