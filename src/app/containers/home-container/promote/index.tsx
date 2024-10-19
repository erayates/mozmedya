import { Elements } from "@/app/components/icons/elements";
import Tabs from "./tabs";
import { MozIcon } from "@/app/components/icons/moz";
import SectionHeader from "@/app/components/section-header";
import { cn } from "@/app/lib/utils";
import { IPromoteCard, promoteCards } from "./config";
import Link from "next/link";

import { Reveal } from "@/app/components/motion/reveal";
import { Grow } from "@/app/components/motion/grow";

const Promote: React.FC = () => {
  return (
    <section id="promote" className="max-w-screen-xl mx-auto mt-60 space-y-24">
      <Reveal>
        <div className="space-y-12">
          <SectionHeader
            title="Haber sitenizin sınırlarını zorlayın!"
            subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
            description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle,
            içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli.
            <br />
            Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik
            üretim sürecinizi baştan sona yeniden tanımlıyoruz."
            largeTitle={true}
          />
          <Tabs />
        </div>
      </Reveal>

      <div className="mt-24 space-y-12">
        <Reveal duration={1}>
          <SectionHeader
            subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
            title="Tamamen işinize odaklanın, gerisinizi bize bırakın!"
            description="  Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla
            keşfedin ve güncel kalmanın yanı sıra güvenli bir <br /> şekilde yol
            alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı
            sayesinde tüm detayları biz yönetiyoruz."
          />
        </Reveal>

        <div className="shadow-promote-cards rounded-[24px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {promoteCards.map((card: IPromoteCard, _idx: number) => (
              <div
                className={cn(
                  "space-y-2 pl-10 pt-14 pb-10 pr-8 border-r border-accent",
                  card.className && card.className
                )}
                key={_idx}
              >
                <Grow duration={_idx / 5}>
                  <div className="space-y-4">
                    <Elements />
                    <h3 className="font-semibold text-md text-primary">
                      Gelişmiş Eklenti Sistemi
                    </h3>
                  </div>
                  <p className="text-secondary text-xs leading-6">
                    Lorem ipsum dolor sit amet, ectetur adipiscing elit.
                    Phasellus sed massa tristique, luctus sem.
                  </p>
                </Grow>
              </div>
            ))}

            <Reveal className="h-full">
              <div className="space-y-6 w-full h-full border-r flex items-center justify-center flex-col border-t border-accent">
                <MozIcon />
                <h3 className="font-semibold text-md text-primary">
                  Moz Haber Yazılımı v1
                </h3>
                <Link
                  href="#"
                  className="bg-buttonGradient py-3 px-4 rounded-2xl text-white text-xs"
                >
                  Tüm Özellikleri Gör
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promote;
