import { Check } from "@/app/components/icons/check";
import MotionText from "@/app/components/motion/text";
import Image from "next/image";

import { WeatherShape } from "@/app/components/shapes/weather";
import { CurrienciesShape } from "@/app/components/shapes/currencies";
import { MotionDiv } from "@/app/components/motion/div";
import React from "react";

const Hero: React.FC = () => {
  return (
    <React.Fragment>
      <section id="hero" className="w-full h-screen bg-titleGradient relative">
        <div className="absolute max-w-screen-xl mx-auto inset-0 top-[70px] left-0 w-full z-20 h-full bg-heroPattern">
          {/* Carousel */}
          <div className="flex justify-center z-30">
            <div className="max-w-3xl space-y-6">
              <div className="text-center space-y-4 text-white">
                <MotionText
                  as="p"
                  text="MOZ HABER YAZILIMI V1"
                  className="text-[14px] font-semibold"
                />
                <MotionText
                  as="h1"
                  text="Haberlerin gücünü <br/> yeniden tanımlıyoruz!"
                  className="font-semibold text-2xl leading-[48px]"
                />

                <MotionText
                  as="p"
                  className="font-normal leading-7"
                  text="  Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme
                ve dönüştürme aracı haline geliyor. <br/> Moz Haber Yazılımı
                v1, güçlü araçları ve kullanıcı dostu arayüzüyle haber
                deneyiminizi zirveye taşıyor."
                />
              </div>

              {/* Hero Buttons */}
              <div className="flex justify-center space-x-4 text-white z-20">
                <button className="bg-primary rounded-[100px] px-6 py-4">
                  Hemen Satın Al
                </button>
                <button className="bg-transparent rounded-[100px] border border-white px-6 py-4">
                  Daha Fazla Bilgi Al
                </button>
              </div>

              <div className="space-x-8 text-white flex justify-center">
                <p className="flex items-center">
                  <Check className="mr-2" />
                  Kusursuz Mobil Deneyimi
                </p>

                <p className="flex items-center">
                  <Check className="mr-2" />
                  Yüksek Hız ve Performans
                </p>

                <p className="flex items-center">
                  <Check className="mr-2" />
                  Zengin Tema Seçenekleri
                </p>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div className="mt-[65px] h-fit flex justify-center relative">
            <MotionDiv duration={0.8}>
              <Image
                src="/assets/images/hero/browser.png"
                alt="Mozmedya.com Hero Browser Image"
                width={911}
                height={558}
              />
            </MotionDiv>

            <MotionDiv
              duration={1.2}
              className="absolute -left-16 -top-2 w-full h-full"
            >
              <WeatherShape />
            </MotionDiv>

            <MotionDiv duration={1.5} className="absolute -right-14 top-[73px]">
              <CurrienciesShape />
            </MotionDiv>
          </div>
        </div>
        {/* Clip-path */}
        <div className="h-[278px] bg-[#F6F8FB] w-full absolute -bottom-12 hero-clip-path"></div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
