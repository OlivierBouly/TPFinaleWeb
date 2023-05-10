import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.css';

const NavLinks = props => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/etudiants" exact>Étudiants</NavLink>
      </li>
      <li>
        <NavLink to="/stages" exact>Stages</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
