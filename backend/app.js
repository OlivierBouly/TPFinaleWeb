const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const profsRoutes = require("./routes/profs-routes");
const etudiantsRoutes = require("./routes/etudiants-routes");
const coursRoutes = require("./routes/cours-routes");
const HttpErreur = require("./models/http-erreur");

const app = express();

app.use(bodyParser.json());

app.use("/api/professeurs", profsRoutes);
app.use("/api/cours", coursRoutes);
app.use("/api/etudiants", etudiantsRoutes);

app.use((error, requete, reponse, next) => {
    if(reponse.headerSent){
    return next(error);
    }
    reponse.status(error.code || 500);
    reponse.json({message: error.message || "Une erreur inconnue est survenue" })});

app.use((requete, reponse, next) => {
    return next(new HttpErreur("Route non trouvée", 404));
});

mongoose
.connect("mongodb://127.0.0.1:27017")
.then(() => {
    app.listen(5000)
    console.log("Connexion à la base de données réussie");
})
.catch(erreur => {
    console.log(erreur);
});

//app.listen(5000);
