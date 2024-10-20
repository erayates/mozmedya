import ContactForm from "@/components/forms/contact-form";
import { Letter } from "@/components/icons/letter";
import { CLocationMark } from "@/components/icons/location";
import { PhoneCall } from "@/components/icons/phone-call";
import { socialLinks } from "@/components/layout/footer/config";
import Link from "next/link";

const ContactHero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-textGradient w-full min-h-[1181px] relative mb-[350px]"
    >
      <div className="container-auto relative top-[98px] z-20">
        <div className="text-center space-y-4 text-white">
          <p className="text-xs font-semibold">
            SİZE NASIL YARDIMCI OLABİLİRİZ? BİZE ULAŞIN!
          </p>
          <h1 className="text-2xl leading-[48px] font-semibold">
            Herhangi bir sorunuz mu var?
          </h1>
          <p className="leading-7">
            Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve
            dönüştürme aracı haline geliyor.
            <br /> Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu
            arayüzüyle haber deneyiminizi zirveye taşıyor.
          </p>
        </div>

        {/* Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:px-10">
          <div className="rounded-2xl p-8 bg-white">
            <PhoneCall />
            <h3 className="font-semibold text-primary leading-6 text-md mt-6">
              Bizi Arayın!
            </h3>
            <p className="text-xs font-medium text-secondary mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum.
            </p>

            <p className="bg-buttonGradient text-transparent bg-clip-text text-sm font-semibold mt-6">
              +90 552 489 8277
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white">
            <Letter />
            <h3 className="font-semibold text-primary leading-6 text-md mt-6">
              Bize mail gönderin!
            </h3>
            <p className="text-xs font-medium text-secondary mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum.
            </p>

            <p className="bg-buttonGradient text-transparent bg-clip-text text-sm font-semibold mt-6">
              iletisim@mozmedya.com
            </p>
          </div>

          <div className="rounded-2xl p-8 bg-white">
            <CLocationMark />
            <h3 className="font-semibold text-primary leading-6 text-md mt-6">
              Ofisimizi ziyaret edin!
            </h3>
            <p className="text-xs font-medium text-secondary mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum.
            </p>

            <p className="bg-buttonGradient text-transparent bg-clip-text text-sm font-semibold mt-6">
              Yol tarifi al
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white min-h-[688px] w-full mt-24 py-[72px] px-10 shadow-reference-card rounded-[40px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4 flex flex-col">
              <p className="text-xs text-blue font-semibold leading-6">
                HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!
              </p>
              <h2 className="text-2xl font-semibold text-primary leading-[48px]">
                İletişim form başlığı
              </h2>
              <p className="leading-8 text-md text-secondary font-medium">
                Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle,
                içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha
                verimli. Kaliteyi ve hızı aynı potada eriten tasarım ve
                yazılımımızla, içerik üretim sürecinizi baştan sona yeniden
                tanımlıyoruz.
              </p>
            </div>

            <div className="space-x-4 flex">
              {socialLinks.map((link, _idx) => (
                <Link
                  href={link.href}
                  key={_idx}
                  className="w-12 h-12 bg-cream rounded-2xl grid place-items-center hover:bg-blue hover:text-white"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-dark-cream p-8 rounded-3xl">
            <ContactForm />
          </div>
        </div>
      </div>

      <div className="-mb-1 absolute left-0 w-full min-h-[462px] bottom-0 bg-no-repeat bg-contactHeroShape bg-bottom z-0"></div>
    </section>
  );
};

export default ContactHero;
