"use client";

import { Check } from "@/components/icons/check";
import MotionText from "@/components/motion/text";
import Image from "next/image";

import { WeatherShape } from "@/components/shapes/weather";
import { CurrienciesShape } from "@/components/shapes/currencies";
import { MotionDiv } from "@/components/motion/div";

import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "@/components/icons/arrows";
import { cn } from "@/lib/utils";

const carouselItems = [
  {
    subtitle: "MOZ HABER YAZILIMI V1",
    title: "Haberlerin gücünü <br/> yeniden tanımlıyoruz!",
    description:
      "Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve dönüştürme aracı haline geliyor. <br/> Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye taşıyor.",
    renderImages: () => (
      <div className="top-[25px] h-fit flex justify-center relative">
        <MotionDiv duration={0.8}>
          <div className="max-w-[1011px] max-h-[558px]">
            <Image
              src="/assets/images/hero/browser.png"
              alt="Mozmedya Tüm Akıllı Cihazlarda"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          duration={1.2}
          className="absolute -left-[238px] -top-2 w-full h-full"
        >
          <WeatherShape />
        </MotionDiv>

        <MotionDiv
          duration={1.5}
          className="absolute -right-[238px] top-[73px]"
        >
          <CurrienciesShape />
        </MotionDiv>
      </div>
    ),
  },
  {
    subtitle: "MOZ HABER YAZILIMI V1",
    title: "Mozedya ile haber sektöründe yükselişe geçin!",
    description:
      "Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve dönüştürme aracı haline geliyor. <br/> Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye taşıyor.",
    renderImages: () => (
      <div className="top-[25px] h-fit flex justify-center relative">
        <MotionDiv duration={0.8}>
          <div className="max-w-[1011px] max-h-[558px]">
            <Image
              src="/assets/images/hero/browser.png"
              alt="Mozmedya Tüm Akıllı Cihazlarda"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          duration={1.2}
          className="absolute -left-[238px] -top-2 w-full h-full"
        >
          <WeatherShape />
        </MotionDiv>

        <MotionDiv
          duration={1.5}
          className="absolute -right-[238px] top-[73px]"
        >
          <CurrienciesShape />
        </MotionDiv>
      </div>
    ),
  },

  {
    subtitle: "MOZ HABER YAZILIMI V1",
    title: "Haberlerin gücünü <br/> yeniden tanımlıyoruz!",
    description:
      "Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve dönüştürme aracı haline geliyor. <br/> Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye taşıyor.",
    renderImages: () => (
      <div className="top-[25px] h-fit flex justify-center relative">
        <MotionDiv duration={0.8}>
          <div className="max-w-[1011px] max-h-[558px]">
            <Image
              src="/assets/images/hero/browser.png"
              alt="Mozmedya Tüm Akıllı Cihazlarda"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          duration={1.2}
          className="absolute -left-[238px] -top-2 w-full h-full"
        >
          <WeatherShape />
        </MotionDiv>

        <MotionDiv
          duration={1.5}
          className="absolute -right-[238px] top-[73px]"
        >
          <CurrienciesShape />
        </MotionDiv>
      </div>
    ),
  },

  {
    subtitle: "MOZ HABER YAZILIMI V1",
    title: "Haberlerin gücünü <br/> yeniden tanımlıyoruz!",
    description:
      "Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve dönüştürme aracı haline geliyor. <br/> Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye taşıyor.",
    renderImages: () => (
      <div className="top-[25px] h-fit flex justify-center relative">
        <MotionDiv duration={0.8}>
          <div className="max-w-[1011px] max-h-[558px]">
            <Image
              src="/assets/images/hero/browser.png"
              alt="Mozmedya Tüm Akıllı Cihazlarda"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          duration={1.2}
          className="absolute -left-[238px] -top-2 w-full h-full"
        >
          <WeatherShape />
        </MotionDiv>

        <MotionDiv
          duration={1.5}
          className="absolute -right-[238px] top-[73px]"
        >
          <CurrienciesShape />
        </MotionDiv>
      </div>
    ),
  },

  {
    subtitle: "MOZ HABER YAZILIMI V1",
    title: "Haberlerin gücünü <br/> yeniden tanımlıyoruz!",
    description:
      "Haberler artık sadece bilgi akışı değil, aynı zamanda etkileme ve dönüştürme aracı haline geliyor. <br/> Moz Haber Yazılımı v1, güçlü araçları ve kullanıcı dostu arayüzüyle haber deneyiminizi zirveye taşıyor.",
    renderImages: () => (
      <div className="top-[25px] h-fit flex justify-center relative">
        <MotionDiv duration={0.8}>
          <div className="max-w-[1011px] max-h-[558px]">
            <Image
              src="/assets/images/hero/browser.png"
              alt="Mozmedya Tüm Akıllı Cihazlarda"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </MotionDiv>

        <MotionDiv
          duration={1.2}
          className="absolute -left-[238px] -top-2 w-full h-full"
        >
          <WeatherShape />
        </MotionDiv>

        <MotionDiv
          duration={1.5}
          className="absolute -right-[238px] top-[73px]"
        >
          <CurrienciesShape />
        </MotionDiv>
      </div>
    ),
  },
];

const HeroCarousel = () => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

  const handlePrev = () => {
    currentCarouselItem === 0
      ? setCurrentCarouselItem(carouselItems.length - 1)
      : setCurrentCarouselItem((prev) => prev - 1);
  };

  const handleNext = () => {
    currentCarouselItem === carouselItems.length - 1
      ? setCurrentCarouselItem(0)
      : setCurrentCarouselItem((prev) => prev + 1);
  };

  return (
    <React.Fragment>
      <div className="flex justify-center z-30 relative">
        <div className="flex flex-col items-center space-y-6">
          {carouselItems.map((item, _idx) => {
            if (currentCarouselItem === _idx) {
              return (
                <div className="text-center space-y-4 text-white max-w-3xl">
                  <MotionText
                    as="p"
                    text={item.subtitle}
                    className="text-[14px] font-semibold"
                  />
                  <MotionText
                    as="h1"
                    text={item.title}
                    className="font-semibold text-2xl leading-[48px]"
                  />

                  <MotionText
                    as="p"
                    className="font-normal leading-7"
                    text={item.description}
                  />
                </div>
              );
            }
          })}

          {/* Hero Buttons */}
          <div className="flex justify-center space-x-4 text-white z-20">
            <button className="bg-primary text-white rounded-[100px] px-6 py-4 hover-animate hover:scale-105">
              Hemen Satın Al
            </button>
            <button className="bg-transparent rounded-[100px] border border-white/35 px-6 py-4 hover-animate hover:scale-105 hover:bg-white hover:text-primary">
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

          {/* Hero Images */}
          {carouselItems.map((item, _idx) => {
            if (currentCarouselItem === _idx) {
              return item.renderImages();
            }
          })}
        </div>
      </div>

      {/* Navigate Carousel - Arrows */}
      <div className="absolute right-16 top-[181px] -translate-y-1/2 w-5 space-y-2 z-30">
        <button
          className="w-5 h-5 grid place-items-center"
          onClick={handlePrev}
        >
          <ArrowUp />
        </button>
        <div className="flex flex-col space-y-2 items-center">
          {Array.from({ length: 5 }).map((_, _idx) => (
            <div
              key={_idx}
              className={cn(
                "w-[6px] h-[6px] rounded-full bg-white transition-all duration-300 relative overflow-hidden",
                _idx === currentCarouselItem && "h-12 bg-white/30"
              )}
            >
              {currentCarouselItem === _idx && (
                <div
                  className={cn(
                    "absolute -top-32 left-0 h-[30px] w-[6px] bg-white rounded-full transition-all duration-1000",
                    currentCarouselItem === _idx && "top-0"
                  )}
                ></div>
              )}
            </div>
          ))}
        </div>
        <button
          className="w-5 h-5 grid place-items-center"
          onClick={handleNext}
        >
          <ArrowDown />
        </button>
      </div>
    </React.Fragment>
  );
};

export default HeroCarousel;
