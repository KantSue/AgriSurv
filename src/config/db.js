const{Sequelize}=require('sequelize')
const db=new Sequelize('tantsaha_co2',"root","",{
    host: "localhost",
    dialect:'mysql',
    port:3306
});
db.authenticate()
    .then(()=> console.log("MYSQL connecté"))
    .catch(err => console.error("Erreur de connection",err));

module.exports=db;