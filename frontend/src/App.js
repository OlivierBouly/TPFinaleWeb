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

const App = () => {

  let routes;

  routes = (
    <Switch>
      <Route path="/" exact><PageAcceuil /></Route>
      <Route path="/etudiants" exact><Etudiants /></Route>
      <Route path="/stages" exact><Stages /></Route>
      <Route path="/deroulementEtu" exact><PageDeroulementEtudiant /></Route>
      <Route path="/deroulementEmp" exact><PageDeroulementEmployeur /></Route>
      <Route path="/profilRes" exact><PageProfilEtCompetence /></Route>
      <Route path="/profilApp" exact><PageProfilEtCompetence /></Route>
    </Switch>
  );

  return (
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  );
};

export default App;
