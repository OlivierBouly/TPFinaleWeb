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
      new HttpErreur("Erreur lors de la récupération de la stage", 500)
    );
  }
  if (!stage) {
    return next(new HttpErreur("Aucune stage trouvée pour l'id fourni", 404));
  }
  reponse.json({ stage: stage.toObject({ getters: true }) });
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
  const { titre, description, adresse, createur } = requete.body;
  const nouvelleStage = new Stage({
    titre,
    description,
    adresse,
    image:
      "https://www.cmontmorency.qc.ca/wp-content/uploads/images/college/Porte_1_juin_2017-1024x683.jpg",
    createur,
  });

  let utilisateur;

  try {
    utilisateur = await Utilisateur.findById(createur);
    
  } catch {
    
    return next(new HttpErreur("Création de stage échouée", 500));
  }

  if (!utilisateur) {
    return next(new HttpErreur("Utilisateur non trouvé selon le id"), 504);
  }

  try {

    
    await nouvelleStage.save();
    //Ce n'est pas le push Javascript, c'est le push de mongoose qui récupe le id de la stage et l'ajout au tableau de l'utilisateur
    utilisateur.stages.push(nouvelleStage);
    await utilisateur.save();
    //Une transaction ne crée pas automatiquement de collection dans mongodb, même si on a un modèle
    //Il faut la créer manuellement dans Atlas ou Compass
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
      new HttpErreur("Erreur lors de la mise à jour de la stage", 500)
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
