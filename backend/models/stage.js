const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const stageSchema = new Schema({
    nomContact:{type: String, require: true},
    courrielContact:{type: String, require: true},
    telephoneContact: {type: String, require: true},
    entreprise:{type: String, required: true},
    adresseEntreprise: {type: String, required: true},
    type: {type: String, require: true},
    nbPostes: {type: Number, require: true},
    description: {type: String, required: true},
    remuneration: {type: String, require: true},
    etudiants: [{type: mongoose.Types.ObjectId, required: false, ref:"Etudiant"}]
});

module.exports = mongoose.model("Stage", stageSchema);