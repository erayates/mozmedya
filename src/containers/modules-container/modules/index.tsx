import Module from "@/components/module";
import SectionHeader from "@/components/section-header";
import React from "react";

const ModulesSection: React.FC = () => {
  return (
    <React.Fragment>
      <section id="modules" className="container-auto mb-[200px]">
        <SectionHeader
          subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
          title="Haber sitenizin sınırlarını zorlayın!"
          description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle, içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli. Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik üretim sürecinizi baştan sona yeniden tanımlıyoruz."
          largeTitle={true}
        />

        <div className="flex flex-col mt-[120px] space-y-16">
          <Module
            title="Modül adı demo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus quis erat non fermentum. Maecenas erat mi, vehicula eget dui et, placerat commodo nunc. Cras justo nulla, cursus sit amet tincidunt non."
            features={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
            ]}
          />

          <Module
            title="Modül adı demo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus quis erat non fermentum. Maecenas erat mi, vehicula eget dui et, placerat commodo nunc. Cras justo nulla, cursus sit amet tincidunt non."
            features={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
            ]}
            reverse={true}
          />

          <Module
            title="Modül adı demo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus quis erat non fermentum. Maecenas erat mi, vehicula eget dui et, placerat commodo nunc. Cras justo nulla, cursus sit amet tincidunt non."
            features={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
            ]}
          />

          <Module
            title="Modül adı demo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus quis erat non fermentum. Maecenas erat mi, vehicula eget dui et, placerat commodo nunc. Cras justo nulla, cursus sit amet tincidunt non."
            features={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
            ]}
            reverse={true}
          />
        </div>
      </section>
    </React.Fragment>
  );
};

export default ModulesSection;
