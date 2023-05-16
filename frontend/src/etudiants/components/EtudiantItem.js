import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import './EtudiantItem.css';

const EtudiantItem = props => {
  return (
    <li className="etudiant-item">
      <Card className="etudiant-item__content">
        <Link to={`/${props.id}/places`}>
          <div className="etudiant-item__image">
            <Avatar image={props.image} alt={props.nom} />
          </div>
          <div className="etudiant-item__info">
            <h2>{props.nom}</h2>
            <h3>
              {props.places.length} {props.places.length <  1 ? 'Place' : 'Places'}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default EtudiantItem;