import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import EtudiantsList from "../components/EtudiantsList";

const Etudiants = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [etudiants, setEtudiants] = useState();

  useEffect(() => {
    const recupererEtudiants = async () => {
      try {
        const reponseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/etudiants");

        setEtudiants(reponseData.etudiants);
      } catch (err) {
        
      }
    };
    recupererEtudiants();
  }, [sendRequest]);



  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
     {etudiants && <EtudiantsList items={etudiants} />};
    </React.Fragment>
  );
};

export default Etudiants;
