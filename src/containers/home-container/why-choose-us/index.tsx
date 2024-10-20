import { Elements } from "@/components/icons/elements";
import { chooseCards, IChooseCard } from "./config";
import { cn } from "@/lib/utils";
import SectionHeader from "@/components/section-header";
import { Reveal } from "@/components/motion/reveal";
import { Grow } from "@/components/motion/grow";

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-choose-us"
      className="max-w-screen-xl mx-auto py-14 px-10 mt-[120px] rounded-[40px] relative bg-whyMozBg bg-cover"
    >
      <div className="space-y-12">
        <Grow duration={1}>
          <SectionHeader
            title="Sizin için profesyonel çözümler üretiyoruz!"
            subtitle="NEDEN MOZMEDYA'YI TERCİH ETMELİSİNİZ?"
            description=" Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla
            keşfedin ve güncel kalmanın yanı sıra güvenli bir <br /> şekilde yol
            alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı
            sayesinde tüm detayları biz yönetiyoruz."
          />
        </Grow>

        <div className="grid grid-cols-6 gap-8">
          {chooseCards.map((card: IChooseCard, _idx: number) => (
            <div
              key={_idx}
              className={cn(
                "p-8 col-span-2 border-2 border-white rounded-3xl bg-[rgba(255,255,255,0.3)] backdrop-blur-xl flex flex-col items-center",
                card.className && card.className
              )}
            >
              <Reveal
                axis={_idx % 2 === 0 ? "x" : "y"}
                duration={_idx / 2 === 0 ? 0.5 : _idx / 2}
              >
                <div className="flex flex-col items-center space-y-4">
                  <Elements />
                  <h3 className="text-md text-primary leading-6 font-bold">
                    {card.title}
                  </h3>
                </div>
                <p className="text-secondary font-normal leading-6 text-xs mt-2">
                  {card.description}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
