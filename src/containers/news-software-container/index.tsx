import NewsSoftwareHero from "./hero";
import React from "react";
import NewsSoftwareTabs from "./tabs";
import NewsSoftwareFeatures from "./features";
import NewsFeatureFocus from "./focus";
import CTADemo from "@/components/cta-demo";
import NewsSoftwareAdminPanel from "./admin-panel";
import NewsSoftwareAdvantages from "./advantages";
import NewsSoftwarePrice from "./price";
import NewsSoftwareFAQ from "./faq";


const NewsSoftwareContainer: React.FC = () => {
  return (
    <React.Fragment>
      <NewsSoftwareHero />
      <div className="relative overflow-auto">
        <NewsSoftwareTabs />
        <NewsSoftwareFeatures />
        <NewsFeatureFocus />
        <CTADemo />
        <NewsSoftwareAdminPanel />
        <NewsSoftwareAdvantages />
        <NewsSoftwarePrice />
        <NewsSoftwareFAQ />
      </div>
    </React.Fragment>
  );
};

export default NewsSoftwareContainer;
