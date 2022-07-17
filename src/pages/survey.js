import * as React from "react";
import { useEffect, useState } from "react";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

const SurveyPage = () => {
  const isSSR = typeof window === "undefined";
  const [model, setModel] = useState(undefined);

  useEffect(() => {
    StylesManager.applyTheme("defaultV2");
    fetch("survey.json")
      .then((res) => res.json())
      .then((res) => {
        setModel(new Model(res));
      });
  }, []);

  return !isSSR && model && <Survey model={model} />;
};

export default SurveyPage;
