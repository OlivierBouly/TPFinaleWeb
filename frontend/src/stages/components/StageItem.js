import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './StageItem.css';

const StageItem = props => {
 let type;
  if(props.type == "development"){
    type = "Développement d'applications";
  } else if(props.type == "network"){
    type = "Réseau et Sécurité";
  }

  return (
    <React.Fragment>
      <li className="stage-item">
        <Card className="stage-item__content">
          <div className="stage-item__info">
            <h2>{props.entreprise}</h2>
            <p>{props.nomContact}</p>
            <p>{props.courrielContact}</p>
            <h3>{type}</h3>
            <p>{props.etudiants.length}/{props.nbPostes}</p>
            <p>{props.description}</p>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default StageItem;
