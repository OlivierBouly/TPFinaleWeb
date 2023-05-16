const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const etudiantSchema = new Schema({
    noDa:{type: Number, required: true},
    nom:{type: String, required: true},
    courriel: {type: String, required: true},
    profilSortie: {type: String, required: true},
    stage: {type: mongoose.Types.ObjectId, required: false, ref:"Stage"}
});



module.exports = mongoose.model("Etudiant", etudiantSchema);