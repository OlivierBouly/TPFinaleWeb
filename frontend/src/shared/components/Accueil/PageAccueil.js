import React from "react";

import "./PageAccueil.css"
import { NavLink } from 'react-router-dom';

function PageAcceuil(props) {
    return(
        <React.Fragment>
                      <ul className="nav-links-accueil">
      <li>
        <NavLink to="/deroulementEtu" exact>Deroulement des stages (Etudiants)</NavLink>
      </li>
      <li>
        <NavLink to="/deroulementEmp" exact>Deroulement des stages (Employeurs)</NavLink>
      </li>
      <li>
        <NavLink to="/profilApp" exact>Profils et competences des stagiaires</NavLink>
      </li>
    </ul>
            <div className="page-accueil">
                <div id="drawer-hook"></div>
                <img className="page-accueil_image" src="https://www.rccq.org/wp-content/uploads/2014/03/logo-college-montmorency.png" alt="logo du college montmorency" ></img>
                <h1 className="page-accueil_titre">Édition 2023</h1>
                <div className="page-accueil_text">Bienvenue sur le site des stages de fin d'études des
techniques de l'informatique du  Collège Montmorency!

À la fin de leurs études,
les étudiants sont appelés à mettre en
pratique les compétences acquises durant le programme.
Cela se fait grâce à la participation d'entreprises de la
région qui les accueillent afin de finaliser leurs
formations.

Le Collège Montmorency
offre ainsi aux employeurs l'occasion d'obtenir une
main-d'œuvre compétente, tout en leur permettant de
participer à la formation finale des
étudiants.

Le stage de fin d'études
est une expérience concrète permettant d'acquérir une
expérience professionnelle formatrice.

Les étudiants terminent
la portion académique de leurs études en informatique
selon une des deux voies de sortie du programme:
Réseaux et sécurité informatique
Développement d'applications informatiques</div>
            </div>


        </React.Fragment>
    );
}

export default PageAcceuil;