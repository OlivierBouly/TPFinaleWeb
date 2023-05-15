import React from "react";

import "./PageDeroulement.css"

function PageFAQ(props) {
    return(
        <React.Fragment>
            <div className="page-accueil">
                <div id="drawer-hook"></div>
                <h1 className="page-accueil_titre">Foire aux questions - FAQ</h1>
                <div className="page-accueil_text">

                
                <div className="page-accueil_soustitre">{">"}Est-ce que le stage est obligatoire?</div>
				 
			   Le stage de fin d'études en informatique est obligatoire 
			  pour l'obtention du diplôme collgégial. 
              <div className="page-accueil_soustitre">{">"}Quel est l'horaire de l'étudiant durant les stages?</div>
				 
			   L'étudiant doit respecter l'horaire de l'entreprise durant son stage. 
			   <div className="page-accueil_soustitre">{">"}Est-ce que l'étudiant travaille pendant les journées pédagogiques et
			  les journées de rattrapage?</div>
				 
			   L'étudiant doit respecter l'horaire de l'entreprise durant son stage et ce même
			  durant les journées pédagogiques et de rattrapage. 
              <div className="page-accueil_soustitre">{">"}Quelle est la durée d'un stage de fin d'études?</div>
				 
			   La durée du stage est de 15 semaines pour les deux profils de sortie (réseaux et programmation). 
			   <div className="page-accueil_soustitre">{">"}Quelles sont les dates prévues pour les stages?</div>
				 
			   Les stages sont prévus du 21 janvier au 3 mai 2019. 
               </div>
            </div>
        </React.Fragment>
    );
}

export default PageFAQ;