import React from "react";
import Hero from "./hero";
import Promote from "./promote";

const HomeContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Promote />
    </React.Fragment>
  );
};

export default HomeContainer;
