import React, { useState, useContext } from 'react';
import { EtudiantContext } from "../../shared/context/etudiant-context";
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './StageItem.css';
import { useHistory } from 'react-router-dom';

const StageItem = props => {
  const etudiant = useContext(EtudiantContext);
  const {error, sendRequest, clearError } = useHttpClient();

  const history = useHistory();

 let type;
  if(props.type == "development"){
    type = "Développement d'applications";
  } else if(props.type == "network"){
    type = "Réseau et Sécurité";
  }

  const ajouterStageHandler = async () => {
    history.push("/etudiants");
    try {
      await sendRequest(
        `http://localhost:5000/api/etudiants/${etudiant.noDa}/ajouterStage`,
        'PATCH',
        JSON.stringify({
          stageId : props.id,
        }),
        {
          'Content-Type': 'application/json'
        }
      );

    } catch (err) {
      console.log(err)
    }

  }

  if(window.location.pathname != "/stages"){
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
            <Button onClick={ajouterStageHandler}>Ajouter ce stage</Button>
          </Card>
        </li>
      </React.Fragment>
    );
  } else {
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
  }


};

export default StageItem;
