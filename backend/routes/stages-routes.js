const express = require("express");

const controlleursStage = require("../controllers/stages-controlleurs")

const router = express.Router();

router.get("/", controlleursStage.getStages)

router.get("/:stageId", controlleursStage.getStageById);

router.get("/utilisateur/:utilisateurId", controlleursStage.getStagesByUserId);

router.post('/creerStages', controlleursStage.creerStage);

router.patch('/:stageId', controlleursStage.updateStage);

router.delete('/:stageId', controlleursStage.supprimerStage);

module.exports = router;
