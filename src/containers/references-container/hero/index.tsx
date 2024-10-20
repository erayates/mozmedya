import MotionText from "@/components/motion/text";
import Image from "next/image";

const ReferencesHero: React.FC = () => {
  return (
    <section id="hero" className="h-[742px] w-full bg-textGradient relative">
      <div className="container-auto text-white h-full flex justify-center lg:items-start text-center lg:text-start relative top-[75px] lg:top-[150px]">
        <div className="space-y-4">
          <MotionText
            as="p"
            text="REFERANSLARIMIZ"
            className="text-xs leading-4 font-semibold"
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
          dönüştürme aracı haline geliyor. <br/>
          Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle
          haber deneyiminizi zirveye taşıyor."
            className="text-sm leading-7"
          />

          <button className="mt-6 bg-buttonGradient text-sm font-medium px-6 py-4 rounded-[100px] w-fit">
            Aramıza Katılın
          </button>
        </div>

        <div className="absolute lg:relative h-[280px] w-[548px]">
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

          <div className="w-[121px] h-[42px] absolute right-8 bottom-12">
            <Image
              src="/assets/logos/trt-logo.svg"
              sizes="100vw"
              height={0}
              width={0}
              alt="TRT Logo"
              className="object-cover w-full h-auto invert brightness-0"
            />
          </div>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 w-full min-h-[742px] bg-referencesHeroShape bg-no-repeat bg-bottom"></div>
    </section>
  );
};

export default ReferencesHero;
