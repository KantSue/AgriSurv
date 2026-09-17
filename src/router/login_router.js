const express=require('express');
const router=express.Router();
const LoginController=require('../controllers/login_controller');

router.get('/signup',(req,res)=>{
res.json({ message: "Route GET signup OK" });
})
router.post('/signup',LoginController.signup);
router.post('/loging',LoginController.login);
module.exports=router;