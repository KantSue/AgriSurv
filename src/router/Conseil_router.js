const express=require('express');
const router=express.Router();
const Conseil_controller=require('../controllers/Conseil_controller')

router.get('/allType',Conseil_controller.AffichAllType);
router.get('/bytype/:type',Conseil_controller.AffichByType);

router.get('/allTitle',Conseil_controller.AfichAlltitle);

router.get('/byTitle/:title',Conseil_controller.AffichByTitle);
module.exports=router;