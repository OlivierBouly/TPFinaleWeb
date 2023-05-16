import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import StageItem from './StageItem';
import Button from '../../shared/components/FormElements/Button';
import './StageList.css';

const StageList = props => {
  if (props.items.length === 0) {
    return (
      <div className="stage-list center">
        <Card>
          <h2>Aucun stages</h2>
          <Button to="/stages/new">Nouveau stage</Button>
        </Card>
      </div>
    );
  }

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
};

export default StageList;
