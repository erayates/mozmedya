import React from "react";
import Hero from "./hero";
import Promote from "./promote";
import WhyChooseUs from "./why-choose-us";
import Focus from "./focus";

const HomeContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Hero />
      <Promote />
      <WhyChooseUs />
      <Focus />
    </React.Fragment>
  );
};

export default HomeContainer;
