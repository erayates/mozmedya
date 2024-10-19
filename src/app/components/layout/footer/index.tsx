import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Location, Mail, Phone } from "../../icons/footer";
import { footerLinks, socialLinks } from "./config";
import SectionHeader from "../../section-header";

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <div className="bg-textGradient h-1 w-full mt-44"></div>
      <footer className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto">
          {/* Footer Top */}
          <div className="flex relative border-b border-b-ghost justify-between items-center py-20">
            <div className="space-y-6 max-w-[663px]">
              <div className="space-y-4">
                <SectionHeader
                  subtitle="MOZMEDYA İLE TANIŞIN!"
                  title="Ücretsiz demo talebinizi oluşturun!"
                  description="   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus sed massa tristique, luctus sem vel, tincidunt
                  risus. Sed scelerisque, sapien ac efficitur commodo."
                  className="text-left"
                  smallDescription={true}
                />
              </div>

              <div className="space-x-4">
                <button className="bg-buttonGradient text-xs text-white py-3 px-8 rounded-2xl font-normal leading-6">
                  Hemen Satın Al
                </button>
                <button className="bg-white text-xs py-3 px-4 font-semibold border border-ghost rounded-2xl leading-6">
                  Demo Talebi Oluştur
                </button>
              </div>
            </div>

            <div className="absolute -right-40 max-w-[721px] max-h-[541px]">
              <Image
                src="/assets/images/devices-mockup.png"
                alt="Mozmedya Tüm Akıllı Cihazlarda"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Footer Mid */}
          <div className="py-20 space-y-10">
            <div className="flex justify-between items-center">
              <div className="flex space-x-4 items-center">
                <div className="w-[211px] h-[40px]">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Mozmedya Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>

                <div className="h-[2px] w-4 bg-primary"></div>
                <p className="text-xs font-semibold text-primary">
                  Profesyonel Haber Yazılımı ve Web Yazılım Çözümleri
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2">
                {socialLinks.map((link, _idx) => (
                  <Link
                    key={_idx}
                    href={link.href}
                    className="w-10 h-10 rounded-2xl grid place-items-center bg-cream hover:bg-textGradient hover:text-white"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links - Contact */}
            <div className="flex space-x-24">
              <div className="space-y-4 max-w-[420px]">
                <p className="font-bold text-md text-primary">
                  Bize Ulaşın
                </p>
                <ul className="flex flex-col space-y-2 text-primary">
                  <li className="flex space-x-[6px] items-center">
                    <div className="w-5 h-5 mt-1">
                      <Phone />
                    </div>
                    <span className="font-medium text-xs leading-8">
                      +90 552 489 8277
                    </span>
                  </li>

                  <li className="flex space-x-[6px] items-center">
                    <div className="w-5 h-5 mt-1">
                      <Mail />
                    </div>
                    <span className="font-medium text-xs leading-8">
                      iletisim@mozmedya.com
                    </span>
                  </li>

                  <li className="flex space-x-[6px]">
                    <div className="w-5 h-5 mt-2">
                      <Location />
                    </div>
                    <span className="font-medium text-xs leading-8">
                      Balıkesir Üniversitesi Teknoloji Geliştirme Bölgesi -
                      Çağış Mah. Çağış BM Sk. No: 340/16 Ofis:32 Bigadiç /
                      Balıkesir
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex space-x-12">
                {Object.entries(footerLinks).map(([section, links]) => (
                  <ul
                    key={section}
                    className="flex flex-col text-primary min-w-fit"
                  >
                    <p className="font-bold text-md mb-4">{section}</p>
                    {links.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="font-medium text-xs leading-8"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-6 flex justify-between border-t border-t-ghost">
            <p className="text-primary text-xs font-semibold">
              Copyright © 2024 Moz Medya
            </p>

            <div className="space-x-4 flex items-center">
              <Link href="#" className="text-xs font-semibold text-secondary">
                Gizlilik Sözleşmesi
              </Link>

              <div className="w-[6px] h-[6px] bg-ghost rounded-full"></div>

              <Link href="#" className="text-xs font-semibold text-secondary">
                Kişisel Verilerin Korunma Kanunu
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
