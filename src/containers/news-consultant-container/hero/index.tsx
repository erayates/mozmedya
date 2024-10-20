import SectionHeader from "@/components/section-header";
import Link from "next/link";

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
        <h1 className="text-2xl text-primary font-semibold leading-[48px] mt-4">
          Haberlerin gücünü <br /> yeniden tanımlıyoruz!
        </h1>

        <p className="text-secondary text-md font-medium leading-8 mt-4">
          Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve
          dönüştürme aracı haline geliyor. <br />
          Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle
          haber deneyiminizi zirveye taşıyor.
        </p>

        <Link
          href="#"
          className="bg-buttonGradient text-xs font-medium text-white px-6 py-4 rounded-[100px] mt-6"
        >
          Daha fazla bilgi al
        </Link>
      </div>
    </section>
  );
};

export default NewsConsultantHero;
