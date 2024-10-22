import { ArrowRightRound } from "@/components/icons/arrow-right";
import { CheckCircle } from "@/components/icons/check";
import Image from "next/image";

const NewsSoftwareHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-[720px] h-[720px] bg-titleGradient w-full relative overflow-hidden"
    >
      <div className="relative container-auto h-full flex items-center z-20">
        <div className="max-w-[604px] w-[604px]">
          <p className="text-gradient text-xs leading-6 font-semibold">
            MOZ HABER YAZILIMI v1
          </p>
          <h1 className="text-2xl leading-[48px] font-semibold text-primary mt-4">
            Haberlerin gücünü yeniden tanımlıyoruz!
          </h1>

          <div className="flex flex-wrap space-x-6 mt-8">
            <div className="space-y-6">
              <p className="flex space-x-2">
                <span className="w-4 mt-[2px] h-4 flex justify-center items-center">
                  <CheckCircle />
                </span>
                <span className="text-sm text-secondary font-medium">
                  TailwindCSS ile Özgün Tasarım
                </span>
              </p>

              <p className="flex space-x-2">
                <span className="w-4 mt-[2px] h-4 flex justify-center items-center">
                  <CheckCircle />
                </span>
                <span className="text-sm text-secondary font-medium">
                  Yüksek Hız ve Performans
                </span>
              </p>
            </div>
            <div className="space-y-6">
              <p className="flex space-x-2">
                <span className="w-4 mt-[2px] h-4 flex justify-center items-center">
                  <CheckCircle />
                </span>
                <span className="text-sm text-secondary font-medium">
                  Kusursuz Mobil Deneyimi
                </span>
              </p>

              <p className="flex space-x-2">
                <span className="w-4 mt-[2px] h-4 flex justify-center items-center">
                  <CheckCircle />
                </span>
                <span className="text-sm text-secondary font-medium">
                  Zengin Tema Seçenekleri
                </span>
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-ghost max-w-[577px] w-full my-8"></div>

          <p className="text-primary-light text-sm leading-7 font-medium">
            Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle
            haber deneyiminizi zirveye taşıyor.
          </p>

          <div className="flex space-x-4 mt-8">
            <button className="text-white overflow-hidden flex group items-center group bg-buttonGradient text-sm font-medium px-6 py-4 rounded-[100px] w-fit hover:scale-105 hover-animate">
              Hemen Satın Al
              <p className="-ml-1 w-0 h-0 none rounded-full group bg-white grid -translate-y-[200%] translate-x-[200%] place-items-center group-hover:translate-y-0 group-hover:translate-x-3 group-hover:w-6 group-hover:h-6 group-hover-animate">
                <ArrowRightRound className="w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover-animate" />
              </p>
            </button>

            <button className="bg-white text-primary border border-ghost text-sm font-medium px-6 py-4 rounded-[100px] hover:scale-105 hover-animate">
              Daha Fazla Bilgi Al
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1188px] w-full absolute left-0 top-0 h-full bg-white"></div>
      <div className="max-w-[1054px] w-auto md:max-w-full md:w-[1054px] max-h-[586px] absolute bottom-0 right-0">
        <div className="max-w-[414px] w-[414px] max-h-[325px] absolute -left-11 -top-36 z-0">
          <Image
            src="/assets/images/hero/news-software/new.png"
            alt="Mozmedya ile tüm haberlere anında erişin."
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>

        <Image
          src="/assets/images/hero/news-software/browser-device-mockup.svg"
          alt="Mozmedya tüm akılı cihaz ve tarayıcılarınızda!"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto z-10 relative"
        />

        <div className="max-w-[336px] max-h-[288px] absolute -bottom-16 -left-28 z-20">
          <Image
            src="/assets/images/hero/news-software/weather.svg"
            alt="Mozmedya ile güncel hava durumunu takip edebilirsiniz."
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSoftwareHero;
