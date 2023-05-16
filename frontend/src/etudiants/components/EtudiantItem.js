import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../shared/components/UIElements/Card';
import './EtudiantItem.css';

const EtudiantItem = props => {

  let type;
  if(props.type == "development"){
    type = "Développement d'applications";
  } else if(props.type == "network"){
    type = "Réseau et Sécurité";
  }

  return (
    <li className="etudiant-item">
      <Card className="etudiant-item__content">
          <div className="etudiant-item__info">

            <h2>{props.nom}</h2>
            <h3>{props.noDa}</h3>
            <p>{props.courriel}</p>
            <p>{type}</p>
          </div>
      </Card>
    </li>
  );
};

export default EtudiantItem;
