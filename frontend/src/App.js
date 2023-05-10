import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import PlaceList from './places/components/PlaceList';

const App = () => {

  let routes;

  routes = (
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/etudiants" exact>
        <Users />
      </Route>
      <Route path="/stages" exact>
        <PlaceList />
      </Route>
      <Redirect to="/" />
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
