"use client";
import {
  Layers,
  Panel,
  Settings,
  Star,
  QuestionMark,
  Letter,
} from "@/components/icons/news-tabs";


const NewsSoftwareTabs: React.FC = () => {
  return (
    <div className="border-t border-b h-20 border-ghost sticky  top-0 bg-white">
      <ul className="container-auto h-full flex justify-center space-x-14 overflow-x-auto overflow-hidden">
        <li className="group h-full">
          <a
            href="#teknik-özellikler"
            className="text-[15px] h-full flex items-center space-x-2 relative font-medium text-secondary after:absolute after:left-0 after:bottom-0 after:bg-textGradient after:w-0 after:h-[3px] hover:after:w-full hover:after:transition-all hover:after:duration-1000"
          >
            <span className="w-6 h-6 group-hover:text-blue group-hover-animation grid place-items-center">
              <Settings />
            </span>
            <span className="text-secondary group-hover:text-primary group-hover-animation">
              Teknik Özellikler
            </span>
          </a>
        </li>

        <li className="group h-full">
          <a
            href="#genel-özellikler"
            className="text-[15px] h-full flex items-center space-x-2 relative font-medium text-secondary after:absolute after:left-0 after:bottom-0 after:bg-textGradient after:w-0 after:h-[3px] hover:after:w-full hover:after:transition-all hover:after:duration-1000"
          >
            <span className="w-6 h-6 group-hover:text-blue group-hover-animation grid place-items-center">
              <Layers />
            </span>
            <span className="text-secondary group-hover:text-primary group-hover-animation">
              Genel Özellikler
            </span>
          </a>
        </li>

        <li className="group h-full">
          <a
            href="#cta-demo"
            className="text-[15px] h-full flex items-center space-x-2 relative font-medium text-secondary after:absolute after:left-0 after:bottom-0 after:bg-textGradient after:w-0 after:h-[3px] hover:after:w-full hover:after:transition-all hover:after:duration-1000"
          >
            <span className="w-6 h-6 group-hover:text-blue group-hover-animation grid place-items-center">
              <Panel />
            </span>
            <span className="text-secondary group-hover:text-primary group-hover-animation">
              Yönetici Paneli
            </span>
          </a>
        </li>

        <li className="group h-full">
          <a
            href="#cta-demo"
            className="text-[15px] h-full flex items-center space-x-2 relative font-medium text-secondary after:absolute after:left-0 after:bottom-0 after:bg-textGradient after:w-0 after:h-[3px] hover:after:w-full hover:after:transition-all hover:after:duration-1000"
          >
            <span className="w-6 h-6 group-hover:text-blue group-hover-animation grid place-items-center">
              <Star />
            </span>
            <span className="text-secondary group-hover:text-primary group-hover-animation">
              Avantajlar
            </span>
          </a>
        </li>

        <li className="group h-full">
          <a
            href="#cta-demo"
            className="text-[15px] h-full flex items-center space-x-2 relative font-medium text-secondary after:absolute after:left-0 after:bottom-0 after:bg-textGradient after:w-0 after:h-[3px] hover:after:w-full hover:after:transition-all hover:after:duration-1000"
          >
            <span className="w-6 h-6 group-hover:text-blue group-hover-animation grid place-items-center">
              <QuestionMark />
            </span>
            <span className="text-secondary group-hover:text-primary group-hover-animation">
              Sıkça Sorulan Sorular
            </span>
          </a>
        </li>

        <li className="group h-full">
          <a
            href="#cta-demo"
            className="text-[15px] h-full flex items-center space-x-2 relative font-medium text-secondary after:absolute after:left-0 after:bottom-0 after:bg-textGradient after:w-0 after:h-[3px] hover:after:w-full hover:after:transition-all hover:after:duration-1000"
          >
            <span className="w-6 h-6 group-hover:text-blue group-hover-animation grid place-items-center">
              <Letter />
            </span>
            <span className="text-secondary group-hover:text-primary group-hover-animation">
              Demo Talep Formu
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NewsSoftwareTabs;
