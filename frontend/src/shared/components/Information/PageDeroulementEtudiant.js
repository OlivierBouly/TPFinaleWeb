import React from "react";

import "./PageDeroulement.css"

function PageAcceuil(props) {
    return(
        <React.Fragment>
            <div className="page-accueil">
                <div id="drawer-hook"></div>
                <h1 className="page-accueil_titre">Déroulement des stages / Horaire de travail</h1>
                <div className="page-accueil_text">
			  Les stages ont lieu durant la session d'hiver.
			  Ils sont d'une durée de 15 semaines, du x janvier au y mai 2024.
			  Vous trouverez les détails dans la section "Les profils du programme
			  informatique, les dates et les spécificités des stages". 
			  <br/>
              <br/>
			  Le stagiaire est tenu de respecter l'horaire  
			  régulier de l'entreprise et des employés occupant des fonctions similaires.
			  Pendant une semaine normale de travaille un stagiaire doit faire entre 35 et 40 heures.
			  Les étudiants qui ne respectent pas le nombre d'heures établies pour une semaine normale 
			  doivent reprendre les heures manquantes en débutant leur stage plus tôt ou en terminant 
			  plus tard (après entente avec le coordonnateur des stages et le professeur-superviseur).
			  Un étudiant qui profite de cette règle ne peut terminer son stage après la 
			  date de présentation des stages.
			  Les étudiants qui font plus de 40 heures par 
			  semaine pourront terminer leur stage plus tôt (après entente avec le coordonnateur et le
			  professeur-superviseur).
              <br/>
              <br/>
			  Pendant les journées pédagogiques et les journées
			  de rattrapage (lecture) identifiées sur le calendrier scolaire, le stagiaire
			  est tenu d'être présent en milieu de stage.
			  Il est possible de débuter le stage plus tôt (que la date prévue) après entente entre
			  l'étudiant, le coordonnateur et l'employeur (un stage ne peut débuter plus tôt que le 
			  premier lundi de janvier de l'année du stage)
			  <br/>
              <br/>
			  Il y aura deux rencontres obligatoires en ligne
			  Vendredi 12h00-13h00 en janvier avant le début des stages.
			Vendredi 12h00-13h00 vers le milieu du stage 
			  (la date sera communiquée plus tard).
			  <br/>
              <br/>
			  Les étudiants doivent remettre un rapport hebdomadaire 
			  décrivant leurs tâches de la semaine au plus tard le lundi suivant 
			  avant 11h00 AM (il est suggéré de remettre ce rapport
			  le vendredi en fin d'après-midi en terminant la semaine). Ce rapport est 
			  envoyé par courriel au professeur superviseur. Le format du rapport 
			  sera discuté avec le professeur superviseur de l'étudiant.
			  <br/>
              <br/>
			  Le professeur superviseur contactera l'étudiant (selon l'horaire
			  préalablement établit avec l'étudiant) à chaque semaine.
			  Le professeur-superviseur rencontre les
			  étudiants à chaque deux semaines (à moins d'une entente 
			  particulière avec le superviseur de l'entreprise).
			  <br/>
              <br/>
			  À la fin des stages (habituellement dans la semaine
			  d'évaluation, une à deux semaines après les stages), les stagiaires seront 
			  appellés à présenter leurs projets de fin d'études aux professeurs et aux autres
			  stagiaires. Les superviseurs en entreprise sont les bienvenus à ces présentations 
			  (les personnes intéressées devraient convenir de l'horaire avec le professeur-superviseur).</div>
            </div>
        </React.Fragment>
    );
}

export default PageAcceuil;