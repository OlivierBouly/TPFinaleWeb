const express = require("express");

const controleursStage = require("../controllers/stages-controleurs")
const router = express.Router();


router.get("/:stageId", controleursStage.getStageById);

router.get("/utilisateur/:utilisateurId", controleursStage.getStagesByUserId);

router.post('/', controleursStage.creerStage);

router.patch('/:stageId', controleursStage.updateStage);

router.delete('/:stageId', controleursStage.supprimerStage);

module.exports = router;
