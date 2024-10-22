import { CheckGreen } from "@/components/icons/check";
import { CrossX } from "@/components/icons/cross-x";
import { Elements } from "@/components/icons/elements";
import { Question } from "@/components/icons/question";
import SectionHeader from "@/components/section-header";
import Link from "next/link";

const NewsSoftwarePrice: React.FC = () => {
  return (
    <section id="fiyat-listesi" className="container-auto">
      <SectionHeader
        title="MozHaber v1 için fiyat bilgisi"
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        description="Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla keşfedin ve güncel kalmanın yanı sıra güvenli bir şekilde yol alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı sayesinde tüm detayları biz yönetiyoruz."
        className="max-w-[974px]"
      />

      <div className="space-y-3 pt-12">
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] rounded-2xl bg-white">
          <div className="w-[378px] pt-8 pb-9 pl-6 pr-[65px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold mb-4">
              Seçili bankaların kartlarına <br /> 6 ve 12 ay taksit fırsatı!
            </p>

            <Link
              href="#"
              className="bg-buttonGradient py-3 px-[30px] text-xs leading-4 rounded-xl text-white"
            >
              Daha Fazla Bilgi Al
            </Link>

            <p className="pt-7 text-secondary text-xs font-semibold leading-4">
              *Her domain için ayrı lisans gerekmektedir.
            </p>
          </div>

          <div className="w-[232px] p-6 border-r border-r-dark-cream grid place-items-center">
            <Elements />

            <p className="text-gradient text-sm leading-4 font-semibold mt-4">
              Tek Lisans
            </p>
            <p className="leading-4 text-xs font-semibold line-through text-secondary mt-3">
              8.000₺
            </p>
            <p className="font-semibold text-primary line-through leading-6 text-[24px]">
              4.500₺
            </p>
            <p className="text-[12px] leading-4 font-medium text-primary-light">{`(tek seferlik ödeme)`}</p>
            <button className="bg-white rounded-xl border border-ghost text-xs py-3 px-11 font-semibold  mt-4">
              Şimdi Satın Al
            </button>
          </div>

          <div className="w-[232px] p-6 border-r border-r-dark-cream grid place-items-center">
            <Elements />

            <p className="text-gradient text-sm leading-4 font-semibold mt-4">
              Tek Lisans
            </p>
            <p className="leading-4 text-xs font-semibold line-through text-secondary mt-3">
              8.000₺
            </p>
            <p className="font-semibold text-primary line-through leading-6 text-[24px]">
              4.500₺
            </p>
            <p className="text-[12px] leading-4 font-medium text-primary-light">{`(tek seferlik ödeme)`}</p>
            <button className="bg-white rounded-xl border border-ghost text-xs py-3 px-11 font-semibold  mt-4">
              Şimdi Satın Al
            </button>
          </div>

          <div className="w-[232px] p-6 border-r border-r-dark-cream grid place-items-center">
            <Elements />

            <p className="text-gradient text-sm leading-4 font-semibold mt-4">
              Tek Lisans
            </p>
            <p className="leading-4 text-xs font-semibold line-through text-secondary mt-3">
              8.000₺
            </p>
            <p className="font-semibold text-primary line-through leading-6 text-[24px]">
              4.500₺
            </p>
            <p className="text-[12px] leading-4 font-medium text-primary-light">{`(tek seferlik ödeme)`}</p>
            <button className="bg-white rounded-xl border border-ghost text-xs py-3 px-11 font-semibold  mt-4">
              Şimdi Satın Al
            </button>
          </div>

          <div className="w-[232px] p-6 grid place-items-center">
            <Elements />

            <p className="text-gradient text-sm leading-4 font-semibold mt-4">
              Tek Lisans
            </p>
            <p className="leading-4 text-xs font-semibold line-through text-secondary mt-3">
              8.000₺
            </p>
            <p className="font-semibold text-primary line-through leading-6 text-[24px]">
              4.500₺
            </p>
            <p className="text-[12px] leading-4 font-medium text-primary-light">{`(tek seferlik ödeme)`}</p>
            <button className="bg-white rounded-xl border border-ghost text-xs py-3 px-11 font-semibold  mt-4">
              Şimdi Satın Al
            </button>
          </div>
        </div>

        {/* İlk kurulum Bedeli */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                İlk Kurulum Bedeli
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              2.000 TL
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              2.000 TL
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              2.000 TL
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              2.000 TL
            </p>
          </div>
        </div>

        {/* Hızlı Kurulum */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Hızlı Kurulum Bedeli
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>
        </div>

        {/* Hosting */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white ">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Hosting
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>
        </div>

        {/* Depolama / SSD */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white ">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Depolama / SSD
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100 GB
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100 GB
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100 GB
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100 GB
            </p>
          </div>
        </div>

        {/* Trafik / Ziyaretçi */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Trafik / Ziyaretçi
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100-300K
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100-300K
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100-300K
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              100-300K
            </p>
          </div>
        </div>

        {/* Güncelleme  */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white ">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Güncelleme
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>
        </div>

        {/* Ücretsiz Destek */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Ücretsiz Destek
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CrossX />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>
        </div>

        {/* Kredi Kartı / Taksit */}
        <div className="grid grid-cols-[375px_227px_227px_227px_227px] h-[56px] rounded-2xl bg-white">
          <div className="w-[378px]  py-5 px-[18px] border-r border-r-dark-cream">
            <p className="leading-8 text-lg font-semibold flex space-x-2 items-center">
              <span className="text-[15px] text-primary leading-4">
                Kredi Kartı / Taksit
              </span>
              <span>
                <Question />
              </span>
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>

          <div className="w-[232px] border-r border-r-dark-cream grid place-items-center">
            <p className="text-[15px] leading-4 text-center font-semibold text-primary">
              <CheckGreen />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSoftwarePrice;
