import { CheckCircle } from "@/components/icons/check";
import Link from "next/link";

const features = [
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
  "Ücretsiz Güncelleme",
];

const ConsultantPrice: React.FC = () => {
  return (
    <section
      id="consultant price"
      className="w-full bg-titleGradientReverse min-h-[466px] h-[466px] mt-[150px] relative"
    >
      <div className="absolute inset-0 right-0 left-0 min-h-[388px] bg-consultantPriceShape bg-center">
        <div className="container-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-white flex flex-col justify-center -top-10 relative">
            <p className="leading-4 text-xs font-medium">
              HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!
            </p>
            <h2 className="text-xl leading-[48px] font-semibold">
              Danışmanlık Ücret Başlığı
            </h2>

            <p className="text-md leading-8 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              tellus odio. Vivamus a eros eget mi suscipit accumsan sit amet
              quis quam. Mauris non neque libero. Nam imperdiet enim in rutrum.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="bg-white rounded-3xl shadow-reference-card -top-10 relative px-6 pt-12 pb-11">
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-md text-primary font-bold leading-6">
                  Google News Danışmanlığı
                </p>
                <p className="text-xs font-semibold text-secondary leading-4">
                  Her domain için ayrı lisans gerekir.
                </p>
              </div>

              <div className="text-right">
                <p className="text-xlg text-primary font-bold leading-8">
                  4.500₺
                </p>
                <p className="text-secondary text-xs font-medium">
                  /tek seferlik ödeme
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-ghost w-full my-6"></div>

            <div className="space-y-6">
              <p className="text-xs font-bold text-primary leading-4">
                Ücrete neler dahil?
              </p>

              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                {features.map((feature, _idx) => (
                  <div className="flex space-x-2">
                    <div className="w-5 h-5 grid place-items-center">
                      <CheckCircle />
                    </div>
                    <p className="text-xs font-bold text-primary flex">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button className="rounded-2xl bg-buttonGradient p-4 text-center text-xs text-white font-medium w-full leading-4">
                Hemen Satın Al
              </button>

              <p className="text-primary text-xs font-bold leading-4 text-center">
                Seçili bankaların kartlarına 6 ve 12 ay taksit fırsatı!{" "}
                <span className="text-gradient ml-2">Daha fazla bilgi al</span>
              </p>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default ConsultantPrice;
