import { Elements, ElementsWhite } from "@/components/icons/elements";
import { Grow } from "@/components/motion/grow";
import { Reveal } from "@/components/motion/reveal";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

const Focus: React.FC = () => {
  return (
    <section id="focus" className="max-w-screen-xl mx-auto mt-[120px] mb-48">
      <Reveal axis="x">
        <div className="space-y-12">
          <SectionHeader
            subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
            title="Tamamen işinize odaklanın, gerisini bize bırakın!"
            description="Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla keşfedin ve güncel kalmanın yanı sıra güvenli bir <br/> şekilde yol alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı sayesinde tüm detayları biz yönetiyoruz."
          />

          <div className="grid grid-cols-4 gap-8">
            <Grow duration={0.5}>
              <div className="flex flex-col items-center space-y-2 group text-center">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="bg-buttonHoverGradient group-hover:bg-textGradient rounded-2xl flex items-center justify-center w-12 h-12 p-3">
                    <Elements className="group-hover:hidden" />
                    <ElementsWhite className="hidden group-hover:flex" />
                  </div>
                  <h3 className="text-md text-primary leading-6 font-bold">
                    Gelişmiş Eklenti Sistemi
                  </h3>
                </div>

                <p className="text-xs text-secondary pb-6">
                  Lorem ipsum dolor sit amet, ectetur elit. Phasellus sed massa
                  tristique, luctus sem.
                </p>

                <div className="bg-textGradient h-[3px] w-full opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></div>
              </div>
            </Grow>

            <Grow duration={0.7}>
              <div className="flex flex-col items-center space-y-2 group text-center">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="bg-buttonHoverGradient group-hover:bg-textGradient rounded-2xl flex items-center justify-center w-12 h-12 p-3">
                    <Elements className="group-hover:hidden" />
                    <ElementsWhite className="hidden group-hover:flex" />
                  </div>
                  <h3 className="text-md text-primary leading-6 font-bold">
                    Gelişmiş Eklenti Sistemi
                  </h3>
                </div>

                <p className="text-xs text-secondary pb-6">
                  Lorem ipsum dolor sit amet, ectetur elit. Phasellus sed massa
                  tristique, luctus sem.
                </p>

                <div className="bg-textGradient h-[3px] w-full opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></div>
              </div>
            </Grow>

            <Grow duration={1}>
              <div className="flex flex-col items-center space-y-2 group text-center">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="bg-buttonHoverGradient group-hover:bg-textGradient rounded-2xl flex items-center justify-center w-12 h-12 p-3">
                    <Elements className="group-hover:hidden" />
                    <ElementsWhite className="hidden group-hover:flex" />
                  </div>
                  <h3 className="text-md text-primary leading-6 font-bold">
                    Gelişmiş Eklenti Sistemi
                  </h3>
                </div>

                <p className="text-xs text-secondary pb-6">
                  Lorem ipsum dolor sit amet, ectetur elit. Phasellus sed massa
                  tristique, luctus sem.
                </p>

                <div className="bg-textGradient h-[3px] w-full opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></div>
              </div>
            </Grow>

            <Grow duration={1.2}>
              <div className="flex flex-col items-center space-y-2 group text-center">
                <div className="space-y-4 flex flex-col items-center">
                  <div className="bg-buttonHoverGradient group-hover:bg-textGradient rounded-2xl flex items-center justify-center w-12 h-12 p-3">
                    <Elements className="group-hover:hidden" />
                    <ElementsWhite className="hidden group-hover:flex" />
                  </div>
                  <h3 className="text-md text-primary leading-6 font-bold">
                    Gelişmiş Eklenti Sistemi
                  </h3>
                </div>

                <p className="text-xs text-secondary pb-6">
                  Lorem ipsum dolor sit amet, ectetur elit. Phasellus sed massa
                  tristique, luctus sem.
                </p>

                <div className="bg-textGradient h-[3px] w-full opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"></div>
              </div>
            </Grow>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <div className="w-full h-[430px] bg-focusTabBg rounded-3xl relative">
          <div className="h-[430px] w-[872px] absolute top-0 left-1/2 -translate-x-1/2">
            <Image
              src="/assets/images/focus/admin-panel.svg"
              alt="Mozmedya Admin Paneli"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};
export default Focus;
