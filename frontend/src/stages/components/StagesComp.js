import React, { useState, useContext } from 'react';
import { EtudiantContext } from "../../shared/context/etudiant-context";
import FiltreStages from './FiltreStages';
import StageList from './StageList';
import './Stages.css';

const Stages = (props) => {

  const etudiant = useContext(EtudiantContext);

  const [filteredProfil, setFilteredProfil] = useState('development');

  const filterChangeHandler = (selectedProfil) => {
    setFilteredProfil(selectedProfil);
  };

  const [filteredType, setFilteredType] = useState(etudiant.profil);
  console.log(etudiant.profil)

  const stagesFiltrees = props.items.filter((stage) => {
    return stage.type === filteredProfil;
  });
  
  const typeFiltrees = props.items.filter((stage) => {
    return stage.type === filteredType && stage.nbPostes != stage.etudiants.length;
  });

  if(window.location.pathname != "/stages"){

    if(etudiant.profil == "development") {
      return (
        <div>
            <FiltreStages
              selected={filteredType}
            />
            <StageList items={typeFiltrees} />
        </div>
      );
    } else {
      return (
        <div>
            <FiltreStages
              selected={filteredType}
            />
            <StageList items={typeFiltrees} />
        </div>
      );
    }

  } else {
    return (
      <div>
          <FiltreStages
            selected={filteredProfil}
            onChangementFiltre={filterChangeHandler}
          />
          <StageList items={stagesFiltrees} />
      </div>
    );
  }

};

export default Stages;