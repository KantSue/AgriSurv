const jwt=require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt');

function verifyToken(req,res,next){
    const header=req.headers.authorization;
    if(!header){
        return res.status(401).json({error:"Token manaquant"});
    }
    const token=header.split(" ")[1];
    try{
        const decoded=jwt.verify(token,JWT_SECRET);
        req.user=decoded;
        next();
    }catch(err){
        return res.status(401).json({error:" Token invalide"});
    }
}

// À placer après verifyToken.
function requireAdmin(req,res,next){
    if(req.user?.role!=="admin"){
        return res.status(403).json({message:"Tsy mahazo miditra eto ianao"});
    }
    next();
}

module.exports=verifyToken;
module.exports.requireAdmin=requireAdmin;
