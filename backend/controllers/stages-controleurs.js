const { response } = require("express");
const { default: mongoose, mongo } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const HttpErreur = require("../models/http-erreur");

const Stage = require("../models/stage");
const Utilisateur = require("../models/utilisateur");

const getStageById = async (requete, reponse, next) => {
  const stageId = requete.params.stageId;
  let stage;
  try {
    stage = await Stage.findById(stageId);
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération du stage", 500)
    );
  }
  if (!stage) {
    return next(new HttpErreur("Aucune stage trouvée pour l'id fourni", 404));
  }
  reponse.json({ stage: stage.toObject({ getters: true }) });
};

const getStages = async (requete, reponse, next) => {
  let stages;
  try {
    stages = await Stage.find();
  } catch (err) {
    return next(
      new HttpErreur("Erreur lors de la récupération des stages", 500)
    );
  }
  if (!stages) {
    return next(new HttpErreur("Aucune stage trouvée", 404));
  }
  reponse.json({
    stages: stages.map((stage) =>
      stage.toObject({ getters: true })
    ),
  });
};

const getStagesByUserId = async (requete, reponse, next) => {
  const utilisateurId = requete.params.utilisateurId;

  let stages;
  try {
   let  utilisateur = await Utilisateur.findById(utilisateurId).populate("stages");
  
  stages =  utilisateur.stages;
  console.log(utilisateur);
    
    //stages = await Stage.find({ createur: utilisateurId });
  } catch (err) {
    return next(
      new HttpErreur(
        "Erreur lors de la récupération des stages de l'utilisateur",
        500
      )
    );
  }

  if (!stages || stages.length === 0) {
    return next(
      new HttpErreur("Aucune stage trouvé pour l'utilisateur fourni", 404)
    );
  }

  reponse.json({
    stages: stages.map((stage) => stage.toObject({ getters: true })),
  });
};

const creerStage = async (requete, reponse, next) => {
  const { nomContact, courrielContact, telephoneContact, entreprise, adresseEntreprise, type, nbPostes, description, remuneration } = requete.body;
  const nouvelleStage = new Stage({
    nomContact,
    courrielContact,
    telephoneContact,
    entreprise,
    adresseEntreprise,
    type,
    nbPostes,
    description,
    remuneration,
    etudiants: []
  });

  let stageExiste;
/*
  try {
      stageExiste = await Stage.findOne({ titre: titre });
  } catch (err){
      console.log(err)
      return next(new HttpErreur("Échec vérification stage existe", 500));
  }

  if (stageExiste) {
    return next(
      new HttpErreur("Stage existe deja", 422)
    );
  }
*/
  try {
    await nouvelleStage.save();

  } catch (err) {
    const erreur = new HttpErreur("Création de stage échouée", 500);
    return next(erreur);
  }
  reponse.status(201).json({ stage: nouvelleStage });
};

const updateStage = async (requete, reponse, next) => {
  const { titre, description } = requete.body;
  const stageId = requete.params.stageId;

  let stage;

  try {
    stage = await Stage.findById(stageId);
    stage.titre = titre;
    stage.description = description;
    await stage.save();
  } catch {
    return next(
      new HttpErreur("Erreur lors de la mise à jour du stage", 500)
    );
  }

  reponse.status(200).json({ stage: stage.toObject({ getters: true }) });
};

const supprimerStage = async (requete, reponse, next) => {
  const stageId = requete.params.stageId;
  let stage;
  try {
    stage = await Stage.findById(stageId).populate("createur");
  } catch {
    return next(
      new HttpErreur("Erreur lors de la suppression de la stage", 500)
    );
  }
  if(!stage){
    return next(new HttpErreur("Impossible de trouver la stage", 404));
  }

  try{

    
    await stage.remove();
    stage.createur.stages.pull(stage);
    await stage.createur.save()

  }catch{
    return next(
      new HttpErreur("Erreur lors de la suppression de la stage", 500)
    );
  }
  reponse.status(200).json({ message: "Stage supprimée" });
};

exports.getStageById = getStageById;
exports.getStagesByUserId = getStagesByUserId;
exports.creerStage = creerStage;
exports.updateStage = updateStage;
exports.supprimerStage = supprimerStage;
exports.getStages = getStages;
