import Module from "@/components/module";

const NewsConsultantModule: React.FC = () => {
  const features = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitonec maximus quis.",
  ];

  return (
    <section id="module" className="container-auto mt-[170px] mb-[170px]">
      <Module
        title="Hizmet Adı"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus quis erat non fermentum. Maecenas erat mi, vehicula eget dui et, placerat commodo nunc. Cras justo nulla, cursus sit amet tincidunt non."
        features={features}
        imageSource=""
      />
    </section>
  );
};

export default NewsConsultantModule;
