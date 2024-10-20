import React from "react";
import NewsConsultantHero from "./hero";
import News from "./news";
import Extensions from "./extensions";
import ConsultantPrice from "./consultant-price";
import NewsConsultantModule from "./module";

const NewsConsultantContainer: React.FC = () => {
  return (
    <React.Fragment>
      <NewsConsultantHero />
      <News />
      <Extensions />
      <ConsultantPrice />
      <NewsConsultantModule />
    </React.Fragment>
  );
};

export default NewsConsultantContainer;
