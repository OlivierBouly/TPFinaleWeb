const HttpErreur = require("../models/http-erreur");

const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const { response } = require("express");

const Etudiant = require("../models/etudiant");

const getEtudiants = async (requete, reponse, next) => {
  let etudiants;

  try {
    etudiants = await Etudiant.find().populate("stage");
  } catch {
    return next(new HttpErreur("Erreur accès etudiants"), 500);
  }

  reponse.json({
    etudiants: etudiants.map((etudiant) =>
      etudiant.toObject({ getters: true })
    ),
  });
};

const inscription = async (requete, reponse, next) => {
  const { noDa, nom, courriel, profilSortie } = requete.body;

  let etudiantExiste;

  try {

    etudiantExiste = await Etudiant.findOne({ courriel: courriel });
    if (!etudiantExiste) {
      etudiantExiste = await Etudiant.findOne({ nom: nom });
      if(!etudiantExiste){
        etudiantExiste = await Etudiant.findOne({ noDa: noDa });
      }
    }
  } catch {
    return next(new HttpErreur("Échec vérification etudiant existe", 500));
  }

  if (etudiantExiste) {
    return next(
      new HttpErreur("Etudiant existe déjà, veuillez vos connecter", 422)
    );
  }

  let nouvelEtudiant = new Etudiant({
    noDa,
    nom,
    courriel,
    profilSortie,
    stage: null,
  });
  try {
    await nouvelEtudiant.save();
  } catch (err) {
    console.log(err);
    return next(new HttpErreur("Erreur lors de l'ajout de l'etudiant", 422));
  }
  reponse
    .status(201)
    .json({ etudiant: nouvelEtudiant.toObject({ getter: true }) });
};

const ajouterStage = async (requete, reponse, next) => {
  const {stageId} = requete.body;
  const noDa = requete.params.noDa;

  try{
    etudiant = await Etudiant.findOne({'noDa': noDa});

    stageObjId = new mongoose.Types.ObjectId(stageId);
    etudiant.stage = stageId;
    console.log(etudiant)
  } catch(err){
    console.log(err);
    return next(
      new HttpErreur("Erreur lors de la mise a jour de l'étudiant", 500)
    )
  }
}

const connexion = async (requete, reponse, next) => {
  const { courriel, motDePasse } = requete.body;

  let etudiantExiste;

  try {
    etudiantExiste = await Etudiant.findOne({ courriel: courriel });
  } catch {
    return next(
      new HttpErreur("Connexion échouée, veuillez réessayer plus tard", 500)
    );
  }

  if (!etudiantExiste || etudiantExiste.motDePasse !== motDePasse) {
    return next(new HttpErreur("Courriel ou mot de passe incorrect", 401));
  }

  reponse.json({
    message: "connexion réussie!",
    etudiant: etudiantExiste.toObject({ getters: true }),
  });
};

exports.ajouterStage = ajouterStage;
exports.getEtudiants = getEtudiants;
exports.inscription = inscription;
exports.connexion = connexion;
