import { ArrowRightRound } from "@/components/icons/arrow-right";
import { MotionDiv } from "@/components/motion/div";
import MotionText from "@/components/motion/text";
import Image from "next/image";

const ReferencesHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[762px] h-[762px] w-full bg-textGradient relative"
    >
      <div className="absolute inset-0 left-0 bottom-0 w-full min-h-[742px] bg-referencesHeroShape bg-no-repeat bg-bottom">
        <div className="container-auto text-white h-full flex justify-center lg:items-start text-center pt-[75px] lg:pt-[150px] lg:text-start">
          <div className="space-y-4 w-[760px] max-w-[760px]">
            <MotionText
              as="p"
              text="REFERANSLARIMIZ"
              className="text-xs leading-4 font-medium"
            />

            <MotionText
              as="h1"
              text="Haberlerin gücünü
          <br/> yeniden tanımlıyoruz!"
              className="text-2xl leading-[48px] font-semibold"
            />

            <MotionText
              as="p"
              text="Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve
          dönüştürme aracı haline geliyor.
          Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle
          haber deneyiminizi zirveye taşıyor."
              className="text-sm leading-7 font-normal"
            />

            <button className="mt-6 overflow-hidden flex group items-center group bg-buttonGradient text-sm font-medium px-6 py-4 rounded-[100px] w-fit hover:scale-105 hover-animate">
              Aramıza Katılın
              <p className="-ml-1 w-0 h-0 none rounded-full group bg-white grid -translate-y-[200%] translate-x-[200%] place-items-center group-hover:translate-y-0 group-hover:translate-x-3 group-hover:w-6 group-hover:h-6 group-hover-animate">
                <ArrowRightRound className="w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover-animate" />
              </p>
            </button>
          </div>

          <div className="absolute lg:relative h-[280px] w-[548px]">
            <MotionDiv duration={1}>
              <div className="w-[121px] h-[42px] right-0 -top-4 absolute">
                <Image
                  src="/assets/logos/trt-logo.svg"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt="TRT Logo"
                  className="object-cover w-full h-auto invert brightness-0"
                />
              </div>
            </MotionDiv>

            <MotionDiv duration={0.5}>
              <div className="w-[121px] h-[42px] absolute -top-8">
                <Image
                  src="/assets/logos/trt-logo.svg"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt="TRT Logo"
                  className="object-cover w-full h-auto invert brightness-0"
                />
              </div>
            </MotionDiv>

            <MotionDiv duration={0.7}>
              <div className="w-[121px] h-[42px] absolute left-44 top-24">
                <Image
                  src="/assets/logos/trt-logo.svg"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt="TRT Logo"
                  className="object-cover w-full h-auto invert brightness-0"
                />
              </div>
            </MotionDiv>

            <MotionDiv duration={0.9}>
              <div className="w-[121px] h-[42px] absolute -bottom-[250px] right-0">
                <Image
                  src="/assets/logos/trt-logo.svg"
                  sizes="100vw"
                  height={0}
                  width={0}
                  alt="TRT Logo"
                  className="object-cover w-full h-auto invert brightness-0"
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferencesHero;
