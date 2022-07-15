import * as React from "react";
import { useEffect, useState } from "react";
import "survey-core/modern.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("modern");

const SurveyPage = () => {
    
  const [survey, setSurvey] = useState(true);

  useEffect(() => {
    fetch('survey.json')
    .then( res => res.json())
    .then( res => {
        setSurvey(new Model(res))
    })
  }, [])

  return !survey ? <div>Loading...</div> : <Survey model={survey} />;
};

export default SurveyPage;
