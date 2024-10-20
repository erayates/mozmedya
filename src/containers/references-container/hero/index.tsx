import MotionText from "@/components/motion/text";

const ReferencesHero: React.FC = () => {
  return (
    <section id="hero" className="h-[742px] w-full bg-textGradient relative">
      <div className="container-auto text-white h-full flex flex-col items-center text-center lg:items-start lg:text-start relative top-[100px] lg:top-[150px] space-y-4">
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

      <div className="absolute left-0 bottom-0 w-full min-h-[742px] bg-referencesHeroShape bg-no-repeat bg-bottom"></div>
    </section>
  );
};

export default ReferencesHero;
