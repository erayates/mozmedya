import { Elements } from "@/app/components/icons/elements";
import Tabs from "./tabs";
import { MozIcon } from "@/app/components/icons/moz";

const Promote: React.FC = () => {
  return (
    <section id="promote" className="max-w-screen-xl mx-auto mt-60 space-y-24">
      <div className="space-y-12">
        <div className="space-y-4 bg-transparent text-center">
          <p className="text-xs text-gradient font-semibold">
            HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!
          </p>
          <h2 className="text-2xl font-semibold leading-[48px]">
            Haber sitenizin sınırlarını zorlayın!
          </h2>
          <p className="text-md text-secondary leading-8">
            Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle,
            içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli.{" "}
            <br />
            Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik
            üretim sürecinizi baştan sona yeniden tanımlıyoruz.
          </p>
        </div>
        <Tabs />
      </div>

      <div className="mt-24 space-y-12">
        <div className="space-y-4 text-center">
          <p className="text-xs text-gradient font-semibold">
            HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!
          </p>
          <h2 className="text-xl font-semibold leading-[48px]">
            Tamamen işinize odaklanın, gerisini bize bırakın!
          </h2>
          <p className="text-secondary">
            Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla
            keşfedin ve güncel kalmanın yanı sıra güvenli bir <br /> şekilde yol
            alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı
            sayesinde tüm detayları biz yönetiyoruz.
          </p>
        </div>

        <div className="shadow-promote-cards rounded-[24px]">
          <div className="divide-light-accent grid md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2 pl-14 pr-8 py-8 border-r border-accent">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>

            <div className="space-y-2 pl-14 pr-8 py-8 border-r border-accent">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>
            <div className="space-y-2 pl-14 pr-8 py-8 border-r border-accent">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>

            <div className="space-y-2 pl-14 pr-8 py-8">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>

            <div className="space-y-2 pl-14 pr-8 py-8 border-r border-t border-accent">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>

            <div className="space-y-2 pl-14 pr-8 py-8 border-r border-t border-accent">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>

            <div className="space-y-2 pl-14 pr-8 py-8 border-r border-t border-accent">
              <div className="space-y-4">
                <Elements />
                <h3 className="font-semibold text-md text-primary">
                  Gelişmiş Eklenti Sistemi
                </h3>
              </div>
              <p className="text-secondary text-[14px] leading-6">
                Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus
                sed massa tristique, luctus sem.
              </p>
            </div>

            <div className="space-y-6 w-full h-full border-r flex items-center justify-center flex-col border-t border-accent">
              <MozIcon />
              <h3 className="font-semibold text-md text-primary">
                Moz Haber Yazılımı v1
              </h3>
              <button className="bg-buttonGradient py-3 px-4 rounded-2xl text-white text-[14px]">
                Tüm Özellikleri Gör
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promote;
