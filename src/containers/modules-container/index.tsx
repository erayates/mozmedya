import React from "react";
import ModulesHero from "./hero";
import ModulesSection from "./modules";
import CTADemo from "@/components/cta-demo";
import ModulesFeatures from "./features";

const ModulesContainer: React.FC = () => {
  return (
    <React.Fragment>
      <ModulesHero />
      <ModulesSection />
      <CTADemo />
      <ModulesFeatures />
    </React.Fragment>
  );
};

export default ModulesContainer;
