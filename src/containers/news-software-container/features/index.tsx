import { Elements } from "@/components/icons/elements";
import SectionHeader from "@/components/section-header";

const features: { title: string; description: string }[] = [
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sedmassa tristique, luctus sem.",
  },
];

const NewsSoftwareFeatures: React.FC = () => {
  return (
    <section className="container-auto my-24">
      <SectionHeader
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        title="Haber sitenizin sınırlarını zorlayın!"
        description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle, içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli. Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik üretim sürecinizi baştan sona yeniden tanımlıyoruz."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {features.map((feature, _idx) => (
          <div
            key={_idx}
            className="rounded-xl border border-ghost hover:border-blue hover:shadow-reference-card hover-animate group p-6"
          >
            <div className="w-6 h-6 relative grid place-items-center group-hover:after:absolute group-hover:after:-left-6 group-hover:after:top-0 group-hover:after:h-8 group-hover:after:w-[2px] group-hover:after:bg-textGradient group-hover:after:group-hover-animation">
              <Elements />
            </div>
            <h3 className="text-primary font-bold leading-6 mt-4 text-md">
              {feature.title}
            </h3>
            <p className="text-xs text-secondary font-medium leading-6 mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSoftwareFeatures;
