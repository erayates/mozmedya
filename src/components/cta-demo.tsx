import DemoForm from "./forms/demo-form";

const CTADemo: React.FC = () => {
  return (
    <section
      id="cta-demo"
      className="w-full bg-titleGradientReverse min-h-[392px] h-[392px] relative"
    >
      <div className="absolute w-full h-full left-0 top-0 z-0 min-h-[388px] bg-consultantPriceShape bg-bottom">
        <div className="container-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-white flex flex-col justify-center -top-20 relative max-w-[604px]">
            <p className="text-xs leading-4 font-semibold">
              MOZMEDYA İLE TANIŞIN!
            </p>
            <h2 className="text-xlg font-semibold leading-[48px] mt-4">
              Ücretsiz demo talebinizi oluşturun!
            </h2>
            <p className="leading-7 text-sm font-normal mt-4">
              Yazılımın kontrol panelini incelemek için iletişim
              formunu doldurun ve satış ekibimiz sizi bilgilendirsin, karar
              vermenizde yardımcı olsun.
            </p>

            <button className="bg-white py-3 px-4 rounded-2xl mt-6 w-fit">
              <span className="bg-titleGradient text-transparent font-semibold bg-clip-text text-xs leading-6">
                Fiyat Seçeneklerini Görüntüle
              </span>
            </button>
          </div>

          <div className="bg-white p-8 shadow-reference-card rounded-3xl relative -top-28">
            <DemoForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTADemo;
