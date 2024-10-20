import React from "react";
import HeroCarousel from "./carousel";

const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <section id="hero" className="w-full h-screen bg-titleGradient relative">
        <div className="bg-heroPattern relative w-full h-full">
          <div className="absolute max-w-screen-xl mx-auto inset-0 top-[70px] left-0 w-full z-20 h-full">
            {/* Carousel */}
            <HeroCarousel />
          </div>
          {/* Clip-path */}
          <div className="h-[278px] bg-[#F6F8FB] w-full absolute -bottom-12 hero-clip-path"></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
