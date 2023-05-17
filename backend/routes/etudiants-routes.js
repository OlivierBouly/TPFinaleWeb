const express = require("express");

const controlleursEtudiants = require("../controllers/etudiants-controlleurs")
const router = express.Router();

router.get('/', controlleursEtudiants.getEtudiants);

router.post('/creerEtudiants', controlleursEtudiants.inscription);

router.patch('/:noDa/ajouterStage', controlleursEtudiants.ajouterStage)

module.exports = router;