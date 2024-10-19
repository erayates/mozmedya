"use client";

import { Layers } from "@/app/components/icons/layers";
import { SmartPhone } from "@/app/components/icons/smart-phone";
import { Speed } from "@/app/components/icons/speed";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { motion, useScroll } from "framer-motion";

const TabContent: React.FC<{
  isActive: boolean;
  children: React.ReactNode;
}> = ({ isActive, children }) => {
  return (
    <div
      className={cn(
        "w-full flex transition-all duration-1000 absolute h-fit",
        isActive ? "translate-y-0 opacity-100" : "translate-y-[150%] opacity-0"
      )}
    >
      {children}
    </div>
  );
};

const TabInnerContent: React.FC<{
  subtitle: string;
  title: string;
  description: string;
}> = ({ subtitle, title, description }) => {
  return (
    <div className="space-y-8 flex-1">
      <div className="space-y-4">
        <p className="text-gradient font-medium text-xs">{subtitle}</p>
        <h3 className="text-primary text-xlg font-semibold leading-10">
          {title}
        </h3>
        <p className="text-secondary leading-7">{description}</p>
      </div>

      <div className="space-x-4">
        <Link
          href="#"
          className="bg-buttonGradient text-white px-6 py-4 rounded-2xl"
        >
          Hemen Satın Al
        </Link>
        <Link
          href="#"
          className="text-primary bg-transparent border border-ghost rounded-2xl px-6 py-4"
        >
          Daha Fazla Bilgi Al
        </Link>
      </div>
    </div>
  );
};

const MobileTab: React.FC = () => {
  return (
    <div className="w-full flex flex-1 items-center">
      <div className="relative flex-1 flex-grow bg-promoteTabEffect bg-cover bg-no-repeat bg-center w-[700px] h-[525px]">
        <Image
          src="/assets/images/promote/iphone.png"
          fill
          className="object-cover object-center"
          alt="Yüksek Hız ve Performans"
        />
      </div>
      <TabInnerContent
        subtitle="KUSURSUZ MOBİL DENEYİM!"
        title="Moz Haber v1 sayesinde kullanıcı memnuniyetinizi en üst düzeye
            çıkarın"
        description="Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle,
            içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli.
            Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik
            üretim sürecinizi baştan sona yeniden tanımlıyoruz."
      />
    </div>
  );
};

const PerformanceTab: React.FC = () => {
  return (
    <div className="w-full flex items-center">
      <div className="relative bg-promoteTabEffect bg-cover bg-center w-[766px] h-[525px]">
        <Image
          src="/assets/images/promote/iphone.png"
          fill
          className="object-contain object-center"
          alt="Yüksek Hız ve Performans"
        />
      </div>

      <TabInnerContent
        subtitle="YÜKSEK HIZ VE PERFORMANS!"
        title="Performansınızdan ödün vermeyin!"
        description="Yepyeni yazılım mimarimiz ile, sayfalarınız daha hızlı yüklenir,
            kullanıcı deneyimi maksimum seviyeye çıkar."
      />
    </div>
  );
};

const ThemeTab: React.FC = () => {
  return (
    <div className="w-full flex items-center">
      <div className="relative p-16 max-w-[650px]">
        <Image
          src="/assets/images/promote/iphone.png"
          width={766}
          height={525}
          className="object-contain object-center"
          alt="Yüksek Hız ve Performans"
        />
      </div>

      <TabInnerContent
        subtitle="ZENGİN TEMA SEÇENEKLERİ!"
        title="Kullanıcı arayüzlerinizi kişiselleştirin"
        description="Geniş tema seçenekleriyle, kullanıcılarınıza benzersiz bir deneyim
            sunun."
      />
    </div>
  );
};

const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<
    "mobile" | "performance" | "theme"
  >("mobile");

  const buttonClasses =
    "flex text-sm font-medium text-secondary p-3 rounded-2xl hover:text-primary hover:bg-white transition-all duration-300";

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="bg-light-accent flex space-x-2 w-fit p-2 rounded-2xl">
        <button
          className={cn(
            buttonClasses,
            currentTab === "mobile" && "bg-white text-primary"
          )}
          onClick={() => setCurrentTab("mobile")}
        >
          <SmartPhone className="mr-3" />
          Kusursuz Mobil Deneyimi
        </button>
        <button
          className={cn(
            buttonClasses,
            currentTab === "performance" && "bg-white text-primary"
          )}
          onClick={() => setCurrentTab("performance")}
        >
          <Speed className="mr-3" />
          Yüksek Hız ve Performans
        </button>
        <button
          className={cn(
            buttonClasses,
            currentTab === "theme" && "bg-white text-primary"
          )}
          onClick={() => setCurrentTab("theme")}
        >
          <Layers className="mr-3" />
          Zengin Tema Seçenekleri
        </button>
      </div>

      <div className="w-full relative h-[600px] overflow-hidden">
        <TabContent isActive={currentTab === "mobile"}>
          <MobileTab />
        </TabContent>
        <TabContent isActive={currentTab === "performance"}>
          <PerformanceTab />
        </TabContent>
        <TabContent isActive={currentTab === "theme"}>
          <ThemeTab />
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
