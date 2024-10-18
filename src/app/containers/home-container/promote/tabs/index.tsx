"use client";

import { Layers } from "@/app/components/icons/layers";
import { SmartPhone } from "@/app/components/icons/smart-phone";
import { Speed } from "@/app/components/icons/speed";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import { useState } from "react";

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

const MobileTab: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-start">
      <Image
        src="/assets/images/promote/mobile.png"
        width={625}
        height={525}
        alt="Kusursuz Mobil Deneyimini Bizimle Yaşayın!"
      />
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-gradient font-medium text-xs">
            KUSURSUZ MOBİL DENEYİM!
          </p>
          <h3 className="text-primary text-xlg font-semibold leading-10">
            Moz Haber v1 sayesinde kullanıcı memnuniyetinizi en üst düzeye
            çıkarın
          </h3>
          <p className="text-secondary leading-7">
            Sadece haber değil, bir içerik devrimi! Yepyeni sistemimizle,
            içeriklerinizi üretmek artık daha kolay, daha hızlı ve daha verimli.
            Kaliteyi ve hızı aynı potada eriten tasarım ve yazılımımızla, içerik
            üretim sürecinizi baştan sona yeniden tanımlıyoruz.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-buttonGradient text-white px-6 py-4 rounded-2xl">
            Hemen Satın Al
          </button>
          <button className="text-primary bg-transparent border border-ghost rounded-2xl px-6 py-4">
            Daha Fazla Bilgi Al
          </button>
        </div>
      </div>
    </div>
  );
};

const PerformanceTab: React.FC = () => {
  return (
    <div className="w-full flex items-center">
      <Image
        src="/assets/images/promote/mobile.png"
        width={625}
        height={525}
        alt="Yüksek Hız ve Performans"
      />
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-gradient font-medium text-xs">
            YÜKSEK HIZ VE PERFORMANS!
          </p>
          <h3 className="text-primary text-xlg font-semibold leading-10">
            Performansınızdan ödün vermeyin!
          </h3>
          <p className="text-secondary leading-7">
            Yepyeni yazılım mimarimiz ile, sayfalarınız daha hızlı yüklenir,
            kullanıcı deneyimi maksimum seviyeye çıkar.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-buttonGradient text-white px-6 py-4 rounded-2xl">
            Hemen Satın Al
          </button>
          <button className="text-primary bg-transparent border border-ghost rounded-2xl px-6 py-4">
            Daha Fazla Bilgi Al
          </button>
        </div>
      </div>
    </div>
  );
};

const ThemeTab: React.FC = () => {
  return (
    <div className="w-full flex items-center">
      <Image
        src="/assets/images/promote/mobile.png"
        width={625}
        height={525}
        alt="Zengin Tema Seçenekleri"
      />
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-gradient font-medium text-xs">
            ZENGİN TEMA SEÇENEKLERİ!
          </p>
          <h3 className="text-primary text-xlg font-semibold leading-10">
            Kullanıcı arayüzlerinizi kişiselleştirin
          </h3>
          <p className="text-secondary leading-7">
            Geniş tema seçenekleriyle, kullanıcılarınıza benzersiz bir deneyim
            sunun.
          </p>
        </div>

        <div className="space-x-4">
          <button className="bg-buttonGradient text-white px-6 py-4 rounded-2xl">
            Hemen Satın Al
          </button>
          <button className="text-primary bg-transparent border border-ghost rounded-2xl px-6 py-4">
            Daha Fazla Bilgi Al
          </button>
        </div>
      </div>
    </div>
  );
};

const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<
    "mobile" | "performance" | "theme"
  >("mobile");

  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="bg-light-accent flex space-x-2 w-fit p-2 rounded-2xl">
        <button
          className={cn(
            "flex text-secondary p-3 rounded-2xl hover:text-primary hover:bg-white transition-all duration-300",
            currentTab === "mobile" && "bg-white text-primary"
          )}
          onClick={() => setCurrentTab("mobile")}
        >
          <SmartPhone className="mr-2" />
          Kusursuz Mobil Deneyimi
        </button>
        <button
          className={cn(
            "flex text-secondary p-3 rounded-2xl hover:text-primary hover:bg-white transition-all duration-300",
            currentTab === "performance" && "bg-white text-primary"
          )}
          onClick={() => setCurrentTab("performance")}
        >
          <Speed className="mr-2" />
          Yüksek Hız ve Performans
        </button>
        <button
          className={cn(
            "flex text-secondary p-3 rounded-2xl hover:text-primary hover:bg-white transition-all duration-300",
            currentTab === "theme" && "bg-white text-primary"
          )}
          onClick={() => setCurrentTab("theme")}
        >
          <Layers className="mr-2" />
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
