const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const Login_router = require('./router/login_router');
app.use('/login', Login_router);

const Conseil_router=require('./router/Conseil_router');
app.use('/conseil',Conseil_router)

const Observation_router=require('./router/Observation_router');
app.use('/observation',Observation_router);

const Meteo_router=require('./router/Meteo_routeur');
app.use('/meteo',Meteo_router);

const Alerte_router=require('./router/Alerte_router');
app.use('/alerte',Alerte_router)

const Culture_router=require('./router/Culture_router');
app.use('/culture',Culture_router)

const Activiter_router=require('./router/Activiter_router');
app.use('/Activity',Activiter_router)

const Admin_router=require('./router/Admin_router');
app.use('/admin',Admin_router)


app.use((err, req, res, next) => {
  console.error(err.stack);
res.status(500).json({ error: "Erreur serveur", details: err.message });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
