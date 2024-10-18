import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowRightRound } from "./icons/arrow-right";

interface INavLinkItem {
  href: string;
  label: string;
  subitems?: INavLinkItem[];
}

const navLinks: INavLinkItem[] = [
  {
    href: "/",
    label: "Haber Yazılımı",
  },
  {
    href: "/news-danismanlik",
    label: "News Danışmanlık",
  },
  {
    href: "/referanslar",
    label: "Referanslar",
  },
  {
    href: "/iletisim",
    label: "İletişim",
  },
];

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 z-50 bg-white shadow-xl">
      <div className="max-w-screen-xl mx-auto flex items-center justify-center space-x-6 text-xs leading-8">
        <p className="text-primary font-medium">
          Özel ihtiyaçlarınız için özel çözümler: Sizin için yazılımı
          şekillendiriyoruz!
        </p>
        <Link
          href="#"
          className="bg-titleGradient text-transparent bg-clip-text font-semibold flex items-center space-x-1"
        >
          <span>Talebinizi İletin</span>
          <ArrowRight />
        </Link>
      </div>

      <div className="h-[1px] w-full bg-ghost"></div>

      <div className="flex max-w-screen-xl mx-auto items-center justify-between py-4">
        <Link href="/">
          <Image
            src="/assets/images/logo.png"
            alt="Mozmedya Logo"
            width={211}
            height={40}
          />
        </Link>
        <nav>
          <ul className="flex">
            {navLinks.map((navLink: INavLinkItem, _idx: number) => (
              <Link href={navLink.href} key={_idx}>
                <li className="px-4 py-3 rounded-2xl hover:bg-buttonHoverGradient group transition-all duration-300">
                  <span className="text-primary-light font-medium text-sm group-hover:bg-titleGradient group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                    {navLink.label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        <button className="bg-buttonGradient px-4 py-3 rounded-2xl flex space-x-2">
          <span className="text-white font-normal">Ücretsiz Deneyin</span>
          <span className="bg-white w-6 h-6 rounded-full p-1 flex items-center justify-center">
            <ArrowRightRound />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
