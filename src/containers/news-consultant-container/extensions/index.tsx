import { Elements } from "@/components/icons/elements";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

interface IExtensionItem {
  title: string;
  description: string;
}

const extensionList: IExtensionItem[] = [
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

const Extensions: React.FC = () => {
  return (
    <section
      id="extension"
      className="container-auto mt-[120px] grid place-items-center"
    >
      <SectionHeader
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        title="Haber sitenizin sınırlarını zorlayın!"
        description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle, içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli.<br/> Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik üretim sürecinizi baştan sona yeniden tanımlıyoruz."
        largeTitle={true}
      />

      <div className="max-w-[888px] max-h-[559px] relative mt-12">
        <Image
          src="/assets/images/news-extension-mockup.png"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      {/* Extensions Group */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {extensionList.map((extension, _idx) => (
          <div className="flex flex-col items-center text-center" key={_idx}>
            <div className="w-14 h-14 rounded-2xl bg-white grid place-items-center">
              <Elements />
            </div>
            <h3 className="font-bold text-md mt-4 text-primary">
              {extension.title}
            </h3>
            <p className="text-secondary font-medium leading-6 text-xs mt-2">
              {extension.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Extensions;
