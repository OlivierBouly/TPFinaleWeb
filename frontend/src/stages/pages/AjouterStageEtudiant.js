import React, { useState, useEffect } from "react";
import { useHttpClient } from "../../shared/hooks/http-hook";
import StagesComp from "../components/StagesComp";

const Stages = () => {
  const {error, sendRequest, clearError } = useHttpClient();
  const [stages, setStages] = useState();

  useEffect(() => {
    const recupererStages = async () => {
      try {
        const reponseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + "/stages");

        setStages(reponseData.stages);
      } catch (err) {
        
      }
    };
    recupererStages();
  }, [sendRequest]);



  return (
    <React.Fragment>
     {stages && <StagesComp items={stages} />};
    </React.Fragment>
  );
};

export default Stages;