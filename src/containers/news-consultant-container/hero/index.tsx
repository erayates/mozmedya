import { ArrowRightRound } from "@/components/icons/arrow-right";
import MotionText from "@/components/motion/text";

const NewsConsultantHero = () => {
  return (
    <section
      id="hero"
      className="min-h-[640px] w-full bg-newConsultantHero grid place-items-center"
    >
      <div className="container-auto grid place-items-center text-center">
        <p className="text-gradient text-xs font-bold">
          GOOGLE NEWS DANIŞMANLIĞI
        </p>
        <MotionText
          as="h1"
          className="text-2xl text-primary font-semibold leading-[48px] max-w-[604px] mt-4"
          text="Haberlerin gücünü yeniden tanımlıyoruz!"
        ></MotionText>

        <MotionText
          as="p"
          className="text-secondary text-md font-medium leading-8 mt-4 max-w-[845px]"
          text="  Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve
          dönüştürme aracı haline geliyor. Moz Haber Yazılımı v1, güçlü araçları
          ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye taşıyor."
        />

        <button className="mt-6 overflow-hidden text-white flex group items-center group bg-buttonGradient text-sm font-medium px-6 py-4 rounded-[100px] w-fit hover:scale-105 hover-animate">
          Daha Fazla Bilgi Al
          <p className="-ml-1 w-0 h-0 none rounded-full group bg-white grid -translate-y-[200%] translate-x-[200%] place-items-center group-hover:translate-y-0 group-hover:translate-x-3 group-hover:w-6 group-hover:h-6 group-hover-animate">
            <ArrowRightRound className="w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-auto group-hover:h-auto group-hover-animate" />
          </p>
        </button>
      </div>
    </section>
  );
};

export default NewsConsultantHero;
