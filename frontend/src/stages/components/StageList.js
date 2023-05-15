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
            key={stage.id}
            id={stage.id}
            image={stage.image}
            title={stage.titre}
            description={stage.description}
            address={stage.address}
            creatorId={stage.createur}
            coordinates={stage.location}
            onDelete={props.onDeleteStage}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default StageList;
