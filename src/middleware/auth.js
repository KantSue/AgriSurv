require('dotenv').config();
const jwt=require('jsonwebtoken');
function verifyToken(req,res,next){
    const header=req.headers.authorization;
    if(!header){
        return res.status(401).json({error:"Token manaquant"});
    }
    const token=header.split(" ")[1];
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({error:" Token invalide"});
    }
}
module.exports=verifyToken