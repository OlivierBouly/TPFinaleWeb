import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHistory } from 'react-router-dom';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './EtudiantForm.css';

const NewEtudiant = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      noDa: {
        value: 0,
        isValid: false
      },
      nom: {
        value: '',
        isValid: false
      },
      courriel: {
        value: '',
        isValid: false
      },
      profilSortie: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const etudiantSubmitHandler  = async event =>  {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!

    try {
      const reponseData = await sendRequest(
        "http://localhost:5000/api/etudiants/creerEtudiants",
        "POST",
        JSON.stringify({
          noDa: formState.inputs.noDa.value,
          nom: formState.inputs.nom.value,
          courriel: formState.inputs.courriel.value,
          profilSortie: formState.inputs.profilSortie.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );
     history.push("/etudiants");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError}/>
    <form className="etudiant-form" onSubmit={etudiantSubmitHandler}>
      <Input
        id="noDa"
        element="input"
        type="number"
        label="Numéro de DA"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un numéro de DA valide."
        onInput={inputHandler}
      />
      <Input
        id="nom"
        element="input"
        type="text"
        label="Nom de l'étudiant"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un nom valide."
        onInput={inputHandler}
      />
      <Input
        id="courriel"
        element="input"
        type="text"
        label="Courriel de l'étudiant"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
        errorText="Entrez un courriel valide."
        onInput={inputHandler}
      />
      <Input
        id="profilSortie"
        element="input"
        type="text"
        label="Profil de sortie"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un profil de sortie valide."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Ajouter étudiant
      </Button>
    </form>
    </React.Fragment>
  );
};

export default NewEtudiant;
