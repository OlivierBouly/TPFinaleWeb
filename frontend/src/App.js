import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Etudiants from './etudiants/pages/Etudiants';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import PageAcceuil from './shared/components/Accueil/PageAccueil';
import Stages from './stages/pages/Stages';
import PageDeroulementEtudiant from "./shared/components/Information/PageDeroulementEtudiant"
import PageDeroulementEmployeur from "./shared/components/Information/PageDeroulementEmployeur"
import PageProfilEtCompetence from './shared/components/Information/PageProfilEtCompetence';
import NewStage from "./stages/pages/NewStage"
import PageFAQ from './shared/components/Information/PageFAQ';
import Footer from "./shared/components/Footer/Footer";
import NewEtudiant from "./etudiants/pages/NewEtudiant";
import AjouterStageEtudiant from "./stages/pages/AjouterStageEtudiant"
import { EtudiantContext } from './shared/context/etudiant-context';

const App = () => {

  const [noDa, setnoDa] = useState(false);
  const [profil, setProfil] = useState(false);

  const login = useCallback((noDa, profil) => {
    setnoDa(noDa);
    setProfil(profil);
  }, []);

  const logout = useCallback(() => {
    setnoDa(null);
    setProfil(null);
  }, []);

  let routes;

  routes = (
    <Switch>
      <Route path="/" exact><PageAcceuil /></Route>
      <Route path="/etudiants" exact><Etudiants /></Route>
      <Route path="/etudiants/new" exact><NewEtudiant /></Route>
      <Route path="/stages" exact><Stages /></Route>
      <Route path="/stages/new" exact><NewStage /></Route>
      <Route path="/deroulementEtu" exact><PageDeroulementEtudiant /></Route>
      <Route path="/deroulementEmp" exact><PageDeroulementEmployeur /></Route>
      <Route path="/profilRes" exact><PageProfilEtCompetence /></Route>
      <Route path="/profilApp" exact><PageProfilEtCompetence /></Route>
      <Route path="/faq" exact><PageFAQ /></Route>
      <Route path="/etudiants/:noDa/ajouterStage" exact><AjouterStageEtudiant /></Route>
    </Switch>
  );

  return (
    <EtudiantContext.Provider value={{ noDa: noDa, profil: profil, login: login, logout: logout }}>
      <Router>
        <MainNavigation />
        <main>{routes}</main>
        <Footer />
      </Router>
    </EtudiantContext.Provider>
  );
};

export default App;
