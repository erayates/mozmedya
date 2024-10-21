import { Elements } from "@/components/icons/elements";
import SectionHeader from "@/components/section-header";

const features: { title: string; description: string }[] = [
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
  {
    title: "Gelişmiş Eklenti Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },
];

const ModulesFeatures: React.FC = () => {
  return (
    <section id="features" className="container-auto mt-[152px] mb-[195px]">
      <SectionHeader
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        title="Haber sitenizin sınırlarını zorlayın!"
        description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle, içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli. Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik üretim sürecinizi baştan sona yeniden tanımlıyoruz."
        largeTitle={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-x-8 gap-y-10">
        {features.map((feature, _idx) => (
          <div className="flex flex-col items-center px-6" key={_idx}>
            <div className="w-14 h-14 rounded-2xl bg-light-blue grid place-items-center">
              <Elements className="p-1" />
            </div>
            <h3 className="font-bold leading-6 text-md text-primary mt-4">
              {feature.title}
            </h3>
            <p className="text-xs font-medium text-center leading-6 text-secondary mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModulesFeatures;
