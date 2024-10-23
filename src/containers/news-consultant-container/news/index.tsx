import { MotionDiv } from "@/components/motion/div";
import { Grow } from "@/components/motion/grow";
import SectionHeader from "@/components/section-header";

const News: React.FC = () => {
  return (
    <section id="news" className="container-auto">
      <MotionDiv duration={1}>
        <SectionHeader
          subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
          title="Haber sitenizin sınırlarını zorlayın!"
          description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle, içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli. Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik üretim sürecinizi baştan sona yeniden tanımlıyoruz."
          largeTitle={true}
        />
      </MotionDiv>

      <div className="grid grid-cols-1 lg:grid-cols-3 mt-24 gap-8">
        <Grow>
          <div>
            <h3 className="text-lg font-bold text-primary leading-6">
              Hizmet adı demo, consectetur adipiscing elit. Donec maximus quis
              erat non
            </h3>
            <p className="text-sm text-secondary font-medium leading-7 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum.
            </p>

            <div className="w-full h-[240px] relative rounded-3xl bg-dark-cream mt-6">
              {/* Image will be stay here */}
            </div>

            <p className="text-sm text-secondary font-medium leading-7 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum. Maecenas erat mi, vehicula eget
              dui et.
            </p>
          </div>
        </Grow>
        <Grow>
          <div>
            <h3 className="text-lg font-bold text-primary leading-6">
              Hizmet adı demo, consectetur adipiscing elit. Donec maximus quis
              erat non
            </h3>
            <p className="text-sm text-secondary font-medium leading-7 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum.
            </p>

            <div className="w-full h-[240px] relative rounded-3xl bg-dark-cream mt-6">
              {/* Image will be stay here */}
            </div>

            <p className="text-sm text-secondary font-medium leading-7 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum. Maecenas erat mi, vehicula eget
              dui et.
            </p>
          </div>
        </Grow>
        <Grow>
          <div>
            <h3 className="text-lg font-bold text-primary leading-6">
              Hizmet adı demo, consectetur adipiscing elit. Donec maximus quis
              erat non
            </h3>
            <p className="text-sm text-secondary font-medium leading-7 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum.
            </p>

            <div className="w-full h-[240px] relative rounded-3xl bg-dark-cream mt-6">
              {/* Image will be stay here */}
            </div>

            <p className="text-sm text-secondary font-medium leading-7 mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              maximus quis erat non fermentum. Maecenas erat mi, vehicula eget
              dui et.
            </p>
          </div>
        </Grow>
      </div>
    </section>
  );
};

export default News;
