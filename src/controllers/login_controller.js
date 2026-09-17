const Login_model = require("../models/login_model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SECRET_KEY = "maCleSuperSecrete123!"

class Login_controller {
  static async signup(req, res) {
    try {
      const { nom, prenom, tel, localisation, mdp } = req.body;
      const isExist = await Login_model.findByTel(tel);
      if (isExist) {
        return res.json({ message: "Efa manana kaonty ianao" });
      }
      const paysan = new Login_model(0, nom, prenom, tel, localisation, mdp);
      const resultat=await paysan.create();
      if (!resultat){
        resultat.json({message:"Amarino ny fisoratna anarana"})
      }
      paysan.id_paysan=resultat[0]
      const token = jwt.sign(
        { id: paysan.id_paysan,
           nom: paysan.nom_paysan,
           localisation:paysan.localisation },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.json({ message: "Tongasoa", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
  static async login(req, res) {
    try {
      const { nom, tel, mdp } = req.body;
      const user = await Login_model.findByName(nom);
      const u=await Login_model.findByTel(tel);
      if (!u) return res.status(400).json({message: "Utilisateur non trouvé"});
      console.log(u);
      const mdpsansespace=mdp.replace(/\s+/g, "");

      const mdpValidation = await Login_model.verifyMdp(mdpsansespace, u.mot_de_passe);
      if (!mdpValidation)
        return res.status(400).json({ message: "kaody midafina diso" });
 
      const token = jwt.sign(
        {
          id: u.id_paysan,
          nom: u.nom_paysan,
          localisation:u.localisation
        },
        SECRET_KEY,
        { expiresIn: "1h" }
      );

      res.json({ message: "Tongasoa", token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur" });
    }
  }
}
module.exports = Login_controller;

// exports.signup=async(req,res,err)=>{
//         const{nom,prenom,tel,localisation,mdp}=req.body;
//     try
//     {
//         const paysan=await login_models.SingnIn(nom,prenom,tel,localisation,mdp);
//         res.json({message:" Tongasoa",paysan});
//     }
//     catch (err){

//         console.error("Erreur signup:", err); // <- affiche l'erreur dans le terminal
//         res.status(500).json({ error: "Erreur serveur", details: err.message });

//     }
// }
// exports.read=(req,res)=>{
//     res.json({message:" coucou"});
// }
// exports.login=async(req,res,err)=>{
//     const{nom,prenom,tel,localisation,mdp}=req.body;
//     try{

//     }
// }
