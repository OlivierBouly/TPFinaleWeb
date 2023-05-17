import React from 'react';

import EtudiantItem from './EtudiantItem';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './EtudiantsList.css';

const EtudiantsList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>Aucun étudiant trouvé</h2>
          <Button to="/etudiants/new">Nouvel étudiant</Button>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Button to="/etudiants/new">Nouvel étudiant</Button>
      <ul className="etudiants-list">
        {props.items.map(etudiant => (
          <EtudiantItem
            nom={etudiant.nom}
            noDa={etudiant.noDa}
            courriel={etudiant.courriel}
            type={etudiant.profilSortie}
            stage={etudiant.stage}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default EtudiantsList;
