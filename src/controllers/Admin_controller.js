const Admin_model = require("../models/Admin_model");

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

// Renvoie un message d'erreur, ou null si la ligne de calendrier est valide.
function checkPlanning({ id_activite, date_debut, date_fin }) {
  if (!id_activite) return "Safidio ny lahasa";
  if (!DATE_RE.test(date_debut || "") || !DATE_RE.test(date_fin || "")) return "Daty tsy mety";
  if (date_fin < date_debut) return "Tsy maintsy aorian'ny daty fanombohana ny daty fiafarana";
  return null;
}

function checkConseil({ type_conseil, titre, contenu }) {
  if (!type_conseil?.trim()) return "Ampidiro ny sokajy";
  if (!titre?.trim()) return "Ampidiro ny lohateny";
  if (titre.trim().length > 50) return "Lohateny 50 litera fara-fahabetsany";
  if (!contenu?.trim()) return "Ampidiro ny votoatiny";
  return null;
}

const trimConseil = ({ type_conseil, titre, contenu }) => ({
  type_conseil: type_conseil.trim(),
  titre: titre.trim(),
  contenu: contenu.trim(),
});

// Toutes les routes admin ont la même gestion d'erreur.
const handle = (fn) => async (req, res) => {
  try {
    await fn(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
  stats: handle(async (req, res) => res.json(await Admin_model.stats())),

  varietes: handle(async (req, res) => res.json(await Admin_model.varietes())),
  activites: handle(async (req, res) => res.json(await Admin_model.activites())),
  planning: handle(async (req, res) => res.json(await Admin_model.planning(req.params.id_varieter))),

  addPlanning: handle(async (req, res) => {
    const error = checkPlanning(req.body);
    if (error || !req.body.id_varieter) return res.status(400).json({ message: error || "Safidio ny karazana" });
    const id = await Admin_model.addPlanning(req.body);
    res.status(201).json({ id_planning: id });
  }),
  updatePlanning: handle(async (req, res) => {
    const error = checkPlanning(req.body);
    if (error) return res.status(400).json({ message: error });
    await Admin_model.updatePlanning(req.params.id, req.body);
    res.json({ success: true });
  }),
  deletePlanning: handle(async (req, res) => {
    await Admin_model.deletePlanning(req.params.id);
    res.json({ success: true });
  }),

  conseils: handle(async (req, res) => res.json(await Admin_model.conseils())),
  addConseil: handle(async (req, res) => {
    const error = checkConseil(req.body);
    if (error) return res.status(400).json({ message: error });
    const id = await Admin_model.addConseil(trimConseil(req.body));
    res.status(201).json({ id_conseil: id });
  }),
  updateConseil: handle(async (req, res) => {
    const error = checkConseil(req.body);
    if (error) return res.status(400).json({ message: error });
    await Admin_model.updateConseil(req.params.id, trimConseil(req.body));
    res.json({ success: true });
  }),
  deleteConseil: handle(async (req, res) => {
    await Admin_model.deleteConseil(req.params.id);
    res.json({ success: true });
  }),
};
