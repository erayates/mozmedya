"use client";

import { Minus, Plus } from "@/components/icons/arithmetics";
import SectionHeader from "@/components/section-header";
import { cn } from "@/lib/utils";
import { useState } from "react";

const questions: { id: number; question: string; answer: string }[] = [
  {
    id: 1,
    question:
      "Başka bir yazılımdan MozHaber yazılımına geçersek mevcut verilerimizi aktarıyor musunuz?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare gravida scelerisque. Nam at justo non velit porttitor consectetur in ac arcu. ",
  },
  {
    id: 2,
    question:
      "Başka bir yazılımdan MozHaber yazılımına geçersek mevcut verilerimizi aktarıyor musunuz?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare gravida scelerisque. Nam at justo non velit porttitor consectetur in ac arcu. ",
  },
  {
    id: 3,
    question:
      "Başka bir yazılımdan MozHaber yazılımına geçersek mevcut verilerimizi aktarıyor musunuz?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare gravida scelerisque. Nam at justo non velit porttitor consectetur in ac arcu. ",
  },
  {
    id: 4,
    question:
      "Başka bir yazılımdan MozHaber yazılımına geçersek mevcut verilerimizi aktarıyor musunuz?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare gravida scelerisque. Nam at justo non velit porttitor consectetur in ac arcu. ",
  },
  {
    id: 5,
    question:
      "Başka bir yazılımdan MozHaber yazılımına geçersek mevcut verilerimizi aktarıyor musunuz?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare gravida scelerisque. Nam at justo non velit porttitor consectetur in ac arcu. ",
  },
  {
    id: 6,
    question:
      "Başka bir yazılımdan MozHaber yazılımına geçersek mevcut verilerimizi aktarıyor musunuz?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra nisi eu tellus dimentum, ac gravida turpis iaculis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ornare gravida scelerisque. Nam at justo non velit porttitor consectetur in ac arcu. ",
  },
];

const NewsSoftwareFAQ: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const onAccordionItemClick = (id: number) => {
    if (currentQuestionIndex === id) {
      setCurrentQuestionIndex(0);
      return;
    }
    setCurrentQuestionIndex(id);
  };

  return (
    <section id="sikca-sorulan-sorular" className="container-auto mt-[120px] mb-[171px]">
      <SectionHeader
        subtitle="HABER YAZILIMI DENEYİMİNİZİ YENİDEN TANIMLIYORUZ!"
        title="MozHaber v1 için sıkça sorulan sorular"
        description="Yenilenen alt yapı sayesinde, işinizdeki potansiyeli tam anlamıyla keşfedin ve güncel kalmanın yanı sıra güvenli bir şekilde yol alın. Artık sadece işinize odaklanın, çünkü geliştirilmiş alt yapı sayesinde tüm detayları biz yönetiyoruz."
      />

      <div className="space-y-4 mt-12">
        {questions.map((question) => (
          <div
            className={cn("border bg-light-blue py-5 px-4 border-ghost rounded-2xl cursor-pointer overflow-hidden relative transition duration-300 z-10", currentQuestionIndex === question.id && "bg-white border-none transition duration-300 after:w-full after:h-[3px] after:absolute after:bottom-0 after:left-0 after:rounded-b-[40px] after:bg-textGradient")}
            key={question.id}
            onClick={() => onAccordionItemClick(question.id)}
          >
            <div className="w-full flex justify-between items-center overflow-hidden relative">
              <p
                className={cn(
                  "text-sm text-primary font-semibold leading-6 transition-all duration-300",
                  currentQuestionIndex === question.id && "text-gradient"
                )}
              >
                Başka bir yazılımdan MozHaber yazılımına geçersek mevcut
                verilerimizi aktarıyor musunuz?
              </p>

              <Plus
                className={cn(
                  "absolute -right-12 duration-1000 transition-all",
                  currentQuestionIndex !== question.id &&
                    "right-0 duration-300 transition-all"
                )}
              />
              <Minus
                className={cn(
                  "absolute top-0 right-0 duration-1000 transition-all",
                  currentQuestionIndex !== question.id &&
                    "-top-12 right-0 duration-300 transition-all"
                )}
              />
            </div>

            <p
              className={cn(
                "text-xs font-medium text-secondary absolute translate-y-24 overflow-hidden leading-6 mt-4 transition duration-300",
                currentQuestionIndex === question.id &&
                  "relative transition duration-300 translate-y-0"
              )}
            >
              {question.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSoftwareFAQ;
