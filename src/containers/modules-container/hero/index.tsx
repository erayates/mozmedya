import Image from "next/image";

const ModulesHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[1030px] h-[1030px] -top-[120px] bg-modulesHeroBg bg-no-repeat bg-top relative w-full"
    >
      <div className="container-auto relative flex top-[262px]  h-full">
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

          <button className="py-4 px-6 bg-buttonGradient text-sm font-medium rounded-[100px] mt-8">
            {`MozHaber v1'e Göz At`}
          </button>
        </div>
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
