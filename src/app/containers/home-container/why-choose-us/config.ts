export interface IChooseCard {
  title: string;
  description: string;
  className?: string;
}

export const chooseCards: IChooseCard[] = [
  {
    title: "Günlük Yedekleme",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },

  {
    title: "Responsive Tasarım",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },

  {
    title: "Yüksek Güvenlik ve Performans",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
  },

  {
    title: "Ticket Sistemi",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
    className: "col-span-3 justify-end h-[325px] text-center",
  },

  {
    title: "Tüm Servislere Entegre Çözümler",
    description:
      "Lorem ipsum dolor sit amet, ectetur adipiscing elit. Phasellus sed massa tristique, luctus sem.",
    className: "col-span-3 justify-end h-[325px] text-center",
  },
];
