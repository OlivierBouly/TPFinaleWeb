import React from 'react';

import './FiltreStages.css';

const FiltreStages = (props) => {
  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  return (
    <div className='stages-filter'>
      <div className='stages-filter__control'>
        <label>Filtrer par profil</label>
        <select value={props.selected} onChange={menuDeroulantHandler}>
          <option value='development'>Développement d'applications</option>
          <option value='network'>Réseau et Sécurité</option>
        </select>
      </div>
    </div>
  );
};

export default FiltreStages;