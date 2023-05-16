import React, { useState, useContext } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './StageItem.css';

const StageItem = props => {

  return (
    <React.Fragment>
      <li className="stage-item">
        <Card className="stage-item__content">
          <div className="stage-item__info">
            <h2>{props.entreprise}</h2>
            <h3>{props.remuneration}</h3>
            <p>{props.description}</p>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default StageItem;
