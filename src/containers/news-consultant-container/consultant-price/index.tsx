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
      <div className="container-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4 text-white flex flex-col justify-center">
          <p className="leading-4 text-xs font-semibold">
            HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!
          </p>
          <h2 className="text-xl leading-[48px] font-semibold">
            Danışmanlık Ücret Başlığı
          </h2>

          <p className="text-md leading-8 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            tellus odio. Vivamus a eros eget mi suscipit accumsan sit amet quis
            quam. Mauris non neque libero. Nam imperdiet enim in rutrum.
          </p>
        </div>

        <div className="bg-white rounded-3xl -mt-[26px] shadow-reference-card px-6 pt-12 pb-11">
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
                <p className="text-xs font-bold text-primary flex">
                  <CheckCircle />
                  <span className="ml-2">{feature}</span>
                </p>
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

      <div className="absolute inset-0 right-0 left-0 min-h-[388px] bg-consultantPriceShape bg-center"></div>
    </section>
  );
};

export default ConsultantPrice;
