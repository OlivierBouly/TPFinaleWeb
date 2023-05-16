const express = require("express");

const controleursEtudiants = require("../controllers/etudiants-controlleurs")
const router = express.Router();

router.get('/', controleursEtudiants.getEtudiants);

router.post('/creerEtudiants', controleursEtudiants.inscription);

module.exports = router;