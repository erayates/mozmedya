import { ArrowRightRound } from "@/components/icons/arrow-right";
import { Reveal } from "@/components/motion/reveal";
import Image from "next/image";

const ModulesHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[1030px] h-[1030px] -top-[120px] bg-modulesHeroBg bg-no-repeat bg-top relative w-full"
    >
      <div className="container-auto relative flex top-[262px]  h-full">
        <Reveal>
          <div className="text-white relative max-w-[604px]">
            <p className="text-xs leading-4 font-medium">MODÜLLER</p>
            <h1 className="text-2xl font-semibold leading-[48px] mt-4">
              Haberlerin gücünü yeniden tanımlıyoruz!
            </h1>
            <p className="leading-7 max-w-[560px] text-sm font-normal mt-4">
              Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve
              dönüştürme aracı haline geliyor. Moz Haber Yazılımı v1, güçlü
              araçları ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye
              taşıyor.
            </p>

            <button className="mt-8 overflow-hidden flex group items-center group bg-buttonGradient text-sm font-medium px-6 py-4 rounded-[100px] w-fit hover-animate">
              {`MozHaber v1'e Göz At`}
              <p className="-ml-1 w-0 h-0 none rounded-full group bg-white grid -translate-y-[200%] translate-x-[200%] place-items-center group-hover:translate-y-0 group-hover:translate-x-3 group-hover:w-6 group-hover:h-6 group-hover-animate">
                <ArrowRightRound className="w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover-animate" />
              </p>
            </button>
          </div>
        </Reveal>
      </div>

      <div className="max-w-[1300px] max-h-[1041px] absolute top-0 right-0">
        <Image
          src="/assets/images/mozmedya-multi-devices.png"
          alt="Mozmedya ile haberler tüm cihazlarınızda!"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ModulesHero;
