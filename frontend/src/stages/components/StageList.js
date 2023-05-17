import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import StageItem from './StageItem';
import Button from '../../shared/components/FormElements/Button';
import './StageList.css';

const StageList = props => {
  if (props.items.length === 0 && window.location.pathname == "/stages") {
    return (
      <div className="stage-list center">
        <Card>
          <h2>Aucun stages</h2>
          <Button to="/stages/new">Nouveau stage</Button>
        </Card>
      </div>
    );
  }

  if (props.items.length === 0 && window.location.pathname != "/stages") {
    return (
      <div className="stage-list center">
        <Card>
          <h2>Aucun stages</h2>
        </Card>
      </div>
    );
  }

  if(window.location.pathname != "/stages"){
    return (
      <React.Fragment>
        <ul className="stage-list">
          {props.items.map(stage => (
            <StageItem
              id={stage.id}
              nomContact={stage.nomContact}
              courrielContact={stage.courrielContact}
              telephoneContact={stage.telephoneContact}
              entreprise={stage.entreprise}
              addressEntreprise={stage.addressEntreprise}
              type={stage.type}
              nbPostes={stage.nbPostes}
              description={stage.description}
              remuneration={stage.remuneration}
              etudiants={stage.etudiants}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Button to="/stages/new">Nouveau stage</Button>
        <ul className="stage-list">
          {props.items.map(stage => (
            <StageItem
              nomContact={stage.nomContact}
              courrielContact={stage.courrielContact}
              telephoneContact={stage.telephoneContact}
              entreprise={stage.entreprise}
              addressEntreprise={stage.addressEntreprise}
              type={stage.type}
              nbPostes={stage.nbPostes}
              description={stage.description}
              remuneration={stage.remuneration}
              etudiants={stage.etudiants}
            />
          ))}
        </ul>
      </React.Fragment>
    );
  }


};

export default StageList;
