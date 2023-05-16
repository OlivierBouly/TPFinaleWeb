import React, { useState } from 'react';

import FiltreStages from './FiltreStages';
import StageList from './StageList';
import './Stages.css';

const Stages = (props) => {
  const [filteredProfil, setFilteredProfil] = useState('development');

  const filterChangeHandler = (selectedProfil) => {
    setFilteredProfil(selectedProfil);
  };

  const stagesFiltrees = props.items.filter((stage) => {
    return stage.type === filteredProfil;
  });

  return (
    <div>
        <FiltreStages
          selected={filteredProfil}
          onChangementFiltre={filterChangeHandler}
        />
        <StageList items={stagesFiltrees} />
    </div>
  );
};

export default Stages;