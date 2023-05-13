import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import ErrorModal from "../../shared/components/UIElements/ErrorModal"
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './StageForm.css';

const NewStage = () => {
  const auth = useContext(AuthContext);
  const { error, sendRequest, clearError } = useHttpClient();
  const [formState, inputHandler] = useForm(
    {
      nomContact: {
        value: '',
        isValid: false
      },
      courrielContact: {
        value: '',
        isValid: false
      },
      telephoneContact: {
        value: '',
        isValid: false
      },
      entreprise: {
        value: '',
        isValid: false
      },
      adresseEntreprise: {
        value: '',
        isValid: false
      },
      type: {
        value: '',
        isValid: false
      },
      nbPostes: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      },
      remuneration: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const stageSubmitHandler  = async event =>  {
    event.preventDefault();
    console.log(formState.inputs); // send this to the backend!

    try {
      const reponseData = await sendRequest(
        "http://localhost:5000/api/stages",
        "POST",
        JSON.stringify({
          
          titre: formState.inputs.title.value,
          description: formState.inputs.description.value,
          adresse: formState.inputs.address.value,
        }),
        {
          "Content-Type": "application/json",
        }
      );

      console.log(reponseData);
     // history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError}/>
    <form className="stage-form" onSubmit={stageSubmitHandler}>
      <Input
        id="nomContact"
        element="input"
        type="text"
        label="Nom du contact"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un nom valide."
        onInput={inputHandler}
      />
      <Input
        id="courrielContact"
        element="input"
        type="text"
        label="Courriel du contact"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un courriel valide."
        onInput={inputHandler}
      />
      <Input
        id="telephoneContact"
        element="input"
        type="text"
        label="Telephone du contact"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un numero de telephone valide."
        onInput={inputHandler}
      />
      <Input
        id="entreprise"
        element="input"
        type="text"
        label="Nom d'entreprise"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un nom d'entreprise valide."
        onInput={inputHandler}
      />
      <Input
        id="adresseEntreprise"
        element="input"
        type="text"
        label="Adresse d'entreprise"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez une adresse valide."
        onInput={inputHandler}
      />
      <Input
        id="type"
        element="input"
        type="text"
        label="Type de stages"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un type de valide."
        onInput={inputHandler}
      />
      <Input
        id="nbPostes"
        element="input"
        type="text"
        label="Nombre de postes"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez un nombre de postes valide."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Entrez une description valide (au moins 5 caractères)."
        onInput={inputHandler}
      />
      <Input
        id="remuneration"
        element="input"
        label="Remuneration"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Entrez une type de remuneration valide."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        Ajouter stage
      </Button>
    </form>
    </React.Fragment>
  );
};

export default NewStage;
