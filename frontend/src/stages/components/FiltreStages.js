import React, { useState, useContext } from 'react';
import { EtudiantContext } from "../../shared/context/etudiant-context";
import './FiltreStages.css';

const FiltreStages = (props) => {

  const etudiant = useContext(EtudiantContext);

  const menuDeroulantHandler = (event) => {
    props.onChangementFiltre(event.target.value);
  };

  if(window.location.pathname != "/stages"){
    if(etudiant.profil == "development") {
      return (
        <div className='stages-filter'>
          <div className='stages-filter__control'>
            <select value={props.selected}>
              <option value='development'>Développement d'applications</option>
            </select>
          </div>
        </div>
      );
    } else {
      return (
        <div className='stages-filter'>
          <div className='stages-filter__control'>
            <select value={props.selected}>
              <option value='network'>Réseau et Sécurité</option>
            </select>
          </div>
        </div>
      );
    }

  } else {
    return (
      <div className='stages-filter'>
        <div className='stages-filter__control'>
          <select value={props.selected} onChange={menuDeroulantHandler}>
            <option value='development'>Développement d'applications</option>
            <option value='network'>Réseau et Sécurité</option>
          </select>
        </div>
      </div>
    );
  }


};

export default FiltreStages;