import { Elements } from "@/components/icons/elements";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

const NewsSoftwareAdvantages: React.FC = () => {
  return (
    <section
      id="avantajlar"
      className="container-auto relative mt-24 mb-[277px] bg-focusTabBg rounded-[40px] pt-24 flex flex-col items-center"
    >
      <SectionHeader
        title="Tamamen işinize odaklanın, gerisini bize bırakın!"
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        description="Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla keşfedin ve güncel kalmanın yanı sıra güvenli bir şekilde yol alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı sayesinde tüm detayları biz yönetiyoruz."
        className="max-w-[974px]"
      />

      <div className="max-h-[290px] max-w-[577px] relative mt-[58px] -bottom-[13px]">
        <Image
          src="/assets/images/computer-hardware.svg"
          alt="Mozmedya'nın Avantajlarına Göz Atın!"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>

      <div className="absolute -bottom-[53px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 left-10 right-10">
        <div className="p-6 bg-white rounded-3xl grid place-items-center text-center shadow-advantage-card">
          <Elements width={32} height={32} />

          <h3 className="font-bold text-md leading-6 mt-4 text-primary">
            Gelişmiş Eklenti Sistemi
          </h3>

          <p className="text-secondary mt-2 text-xs">
            Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed
            massa tristique, luctus sem.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl grid place-items-center text-center shadow-advantage-card relative -bottom-[104px]">
          <Elements width={32} height={32} />

          <h3 className="font-bold text-md leading-6 mt-4 text-primary">
            Gelişmiş Eklenti Sistemi
          </h3>

          <p className="text-secondary mt-2 text-xs">
            Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed
            massa tristique, luctus sem.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl grid place-items-center text-center shadow-advantage-card relative -bottom-[104px]">
          <Elements width={32} height={32} />

          <h3 className="font-bold text-md leading-6 mt-4 text-primary">
            Gelişmiş Eklenti Sistemi
          </h3>

          <p className="text-secondary mt-2 text-xs">
            Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed
            massa tristique, luctus sem.
          </p>
        </div>

        <div className="p-6 bg-white rounded-3xl grid place-items-center text-center shadow-advantage-card">
          <Elements width={32} height={32} />

          <h3 className="font-bold text-md leading-6 mt-4 text-primary">
            Gelişmiş Eklenti Sistemi
          </h3>

          <p className="text-secondary mt-2 text-xs">
            Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed
            massa tristique, luctus sem.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSoftwareAdvantages;
