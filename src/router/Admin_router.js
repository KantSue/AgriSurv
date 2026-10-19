const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const { requireAdmin } = require("../middleware/auth");
const Admin = require("../controllers/Admin_controller");

router.use(verifyToken, requireAdmin);

router.get("/stats", Admin.stats);

router.get("/varietes", Admin.varietes);
router.get("/activites", Admin.activites);
router.get("/planning/:id_varieter", Admin.planning);
router.post("/planning", Admin.addPlanning);
router.put("/planning/:id", Admin.updatePlanning);
router.delete("/planning/:id", Admin.deletePlanning);

router.get("/conseils", Admin.conseils);
router.post("/conseils", Admin.addConseil);
router.put("/conseils/:id", Admin.updateConseil);
router.delete("/conseils/:id", Admin.deleteConseil);

module.exports = router;
