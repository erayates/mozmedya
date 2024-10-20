import React from "react";
import ReferencesHero from "./hero";
import ReferencesSection from "./references";

const ReferencesContainer: React.FC = () => {
  return (
    <React.Fragment>
      <ReferencesHero />
      <ReferencesSection />
    </React.Fragment>
  );
};

export default ReferencesContainer;
