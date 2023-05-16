import React from 'react';

import EtudiantItem from './EtudiantItem';
import Card from '../../shared/components/UIElements/Card';
import './EtudiantsList.css';

const EtudiantsList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun étudiant trouvé</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="etudiants-list">
      {props.items.map(etudiant => (
        <EtudiantItem
          key={etudiant.id}
          id={etudiant.id}
          image={etudiant.image}
          nom={etudiant.nom}
          places={etudiant.places}
        />
      ))}
    </ul>
  );
};

export default EtudiantsList;
