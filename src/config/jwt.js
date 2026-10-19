require("dotenv").config();

// Même clé pour signer (login) et vérifier (middleware) les tokens.
const JWT_SECRET = process.env.JWT_SECRET || "maCleSuperSecrete123!";
// Les paysans restent connectés un mois pour ne pas refaire la connexion à chaque ouverture.
const SESSION_DURATION = "30d";

module.exports = { JWT_SECRET, SESSION_DURATION };
