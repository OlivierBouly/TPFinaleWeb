import { Link } from 'react-router-dom';
import React, { useContext } from "react";
import { EtudiantContext } from "../../shared/context/etudiant-context";
import { useHistory } from "react-router-dom";
import Card from '../../shared/components/UIElements/Card';
import './EtudiantItem.css';
import Button from '../../shared/components/FormElements/Button';

const EtudiantItem = props => {

  const navigate = useHistory();
  const etudiant = useContext(EtudiantContext);

  const ajouterStageHandler = () => {
    etudiant.set(props.noDa, props.type);
    navigate.push(`/etudiants/${props.noDa}/ajouterStage`);
  }

  let type;
  if(props.type == "development"){
    type = "Développement d'applications";
  } else if(props.type == "network"){
    type = "Réseau et Sécurité";
  }
  let stage;

  if(props.stage == null){
    stage = "Aucun stages";
  } else {
    stage = props.stage;
  }

  if(stage == "Aucun stages"){
    return (
      <li className="etudiant-item">
        <Card className="etudiant-item__content">
            <div className="etudiant-item__info">
              <h2>{props.nom}</h2>
              <h3>{props.noDa}</h3>
              <p>{props.courriel}</p>
              <p>{type}</p>
              <p>{stage}</p>
            </div>
            <Button onClick={ajouterStageHandler}>Ajouter un stage</Button>
        </Card>
      </li>
    );
  } else{
    return (
      <li className="etudiant-item">
        <Card className="etudiant-item__content">
            <div className="etudiant-item__info">
              <h2>{props.nom}</h2>
              <h3>{props.noDa}</h3>
              <p>{props.courriel}</p>
              <p>{type}</p>
              <h4>Stage : </h4>
              <p>{stage.entreprise}</p>
              <p>{stage.description}</p>
            </div>
        </Card>
      </li>
    );
  }
};

export default EtudiantItem;
