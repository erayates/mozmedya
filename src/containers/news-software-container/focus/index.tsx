import SectionHeader from "@/components/section-header";

const NewsFeatureFocus: React.FC = () => {
  return (
    <section id="focus" className="mt-24 mb-[186px] container-auto">
      <SectionHeader
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        title="Tamamen işinize odaklanın, gerisini bize bırakın!"
        description="Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla keşfedin ve güncel kalmanın yanı sıra güvenli bir şekilde yol alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı sayesinde tüm detayları biz yönetiyoruz."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-8 mt-12">
        <div className="row-span-2 col-span-2 bg-dark-cream px-12 py-6 rounded-2xl h-[592px] flex flex-col justify-end">
          <h3 className="text-[24px] font-bold text-primary leading-6">
            Gelişmiş Eklenti Sistemi
          </h3>
          <p className="text-sm text-secondary leading-7 font-medium mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Nam ornare
            gravida scelerisque. Nam at justo non velit porttitor consectetur in
            ac arcu.
          </p>
        </div>

        <div className="row-span-1 col-span-1 bg-dark-cream p-6 rounded-2xl flex flex-col justify-end">
          <h3 className="text-[20px] font-bold text-primary leading-6">
            Gelişmiş Eklenti Sistemi
          </h3>
          <p className="text-xs text-secondary leading-6 font-medium mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra nisi eu tellus dimentum.
          </p>
        </div>

        <div className="row-span-1 col-span-1 bg-dark-cream p-6 rounded-2xl flex flex-col justify-end">
          <h3 className="text-[20px] font-bold text-primary leading-6">
            Gelişmiş Eklenti Sistemi
          </h3>
          <p className="text-xs text-secondary leading-6 font-medium mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra nisi eu tellus dimentum.
          </p>
        </div>

        <div className="row-span-1 col-span-1 bg-dark-cream p-6 rounded-2xl flex flex-col justify-end">
          <h3 className="text-[20px] font-bold text-primary leading-6">
            Gelişmiş Eklenti Sistemi
          </h3>
          <p className="text-xs text-secondary leading-6 font-medium mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra nisi eu tellus dimentum.
          </p>
        </div>

        <div className="row-span-2 col-span-2 bg-dark-cream px-12 py-6 rounded-2xl h-[592px] flex flex-col justify-end">
          <h3 className="text-[24px] font-bold text-primary leading-6">
            Gelişmiş Eklenti Sistemi
          </h3>
          <p className="text-sm text-secondary leading-7 font-medium mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Nam ornare
            gravida scelerisque. Nam at justo non velit porttitor consectetur in
            ac arcu.
          </p>
        </div>

        <div className="row-span-1 col-span-1 bg-dark-cream p-6 rounded-2xl flex flex-col justify-end">
          <h3 className="text-[20px] font-bold text-primary leading-6">
            Gelişmiş Eklenti Sistemi
          </h3>
          <p className="text-xs text-secondary leading-6 font-medium mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            viverra nisi eu tellus dimentum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsFeatureFocus;
