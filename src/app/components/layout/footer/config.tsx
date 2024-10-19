import { Facebook, Instagram, LinkedIn, Twitter } from "../../icons/social";

export interface IFooterLink {
  title: string;
  href: string;
}

export interface IFooterSection {
  [key: string]: IFooterLink[];
}

export const footerLinks: IFooterSection = {
  Kurumsal: [
    { title: "Hakkımızda", href: "#" },
    { title: "Ticari-Finansal Bilgiler", href: "#" },
    { title: "Teknik Altyapı", href: "#" },
    { title: "Sözleşmeler", href: "#" },
    { title: "İletişim Bilgileri", href: "#" },
  ],

  "Nasıl Yapılır?": [
    { title: "Hakkımızda", href: "#" },
    { title: "Ticari-Finansal Bilgiler", href: "#" },
    { title: "Teknik Altyapı", href: "#" },
    { title: "Sözleşmeler", href: "#" },
  ],

  Hizmetlerimiz: [
    { title: "Haber Yazılımı", href: "#" },
    { title: "E-dergi Yazılımı", href: "#" },
    { title: "Web Tasarımı", href: "#" },
    { title: "Bulut Yazılım", href: "#" },
    { title: "Mobil Uygulama", href: "#" },
  ],

  Destek: [
    { title: "Müşteri Paneli", href: "#" },
    { title: "Destek Talebi Gönder", href: "#" },
    { title: "Youtube Eğitim Videoları", href: "#" },
  ],
};

export const socialLinks: { href: string; icon: React.ReactNode }[] = [
  {
    href: "#",
    icon: <Facebook />,
  },
  {
    href: "#",
    icon: <Twitter />,
  },
  {
    href: "#",
    icon: <Instagram />,
  },
  {
    href: "#",
    icon: <LinkedIn />,
  },
];
