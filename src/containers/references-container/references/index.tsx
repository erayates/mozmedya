import { ArrowUpRight } from "@/components/icons/arrow-right";
import SectionHeader from "@/components/section-header";
import Image from "next/image";
import Link from "next/link";

interface IReferenceItem {
  logo: string;
  href: string;
}

const referenceItems: IReferenceItem[] = [
  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },

  {
    logo: "trt-logo.svg",
    href: "https://www.trt.com.tr",
  },
];

const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="bg-white pb-48">
      <div className="container-auto space-y-16">
        <SectionHeader
          subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
          title="Haber sitenizin sınırlarını zorlayın!"
          description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle, içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli. <br/> Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik üretim sürecinizi baştan sona yeniden tanımlıyoruz."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {referenceItems.map((reference, _idx) => (
            <Link
              href={reference.href}
              key={_idx}
              target="_blank"
              className="border border-ghost rounded-3xl cursor-pointer p-8 hover:shadow-reference-card hover:border-blue hover:border-2 group space-y-8 transition-colors duration-300 hover:transition-colors hover:duration-300"
            >
              <div className="w-[85px] h-[30px] relative">
                <Image
                  src={`/assets/logos/${reference.logo}`}
                  width={0}
                  height={0}
                  alt="TRT Logo"
                  sizes="100vw"
                  className="w-full h-auto text-amber-600"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-md font-bold text-primary leading-6">
                  trt.com.tr
                </p>
                <ArrowUpRight className="group-hover:text-blue transition-all duration-300 group-hover:transition-all group-hover:duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
