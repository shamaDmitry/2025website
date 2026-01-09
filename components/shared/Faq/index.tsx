"use client";

import { FC, useState } from "react";
import { FaqItem } from "./data";
import { ChevronDownIcon } from "@/components/icons/ChevronDownIcon";
import { cn } from "@/lib/utils";
import { Headline } from "@/components/typo/headline";

interface FaqProps {
  faqData: FaqItem[];
  className?: string;
}

export const Faq: FC<FaqProps> = ({ faqData, className }: FaqProps) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className={cn("w-full mx-auto", className)}>
      {faqData.map((item, index) => (
        <div key={item.id} className="border-b border-gray-200">
          <button
            type="button"
            className="w-full outline-0 flex items-center justify-between py-6 px-0 cursor-pointer"
            onClick={() => toggleAccordion(item.id)}
          >
            <div className="flex gap-8 text-left items-baseline">
              <span className="md:text-2xl">
                {(index + 1).toString().padStart(2, "0")}
              </span>

              <Headline tag="h4" className="!font-gothamBook">
                {item.title}
              </Headline>
            </div>

            <ChevronDownIcon
              className={cn(
                "size-5 transform transition-transform duration-200 shrink-0",
                {
                  "rotate-180 text-primary": activeId === item.id,
                }
              )}
            />
          </button>

          <div
            className={cn(
              "overflow-hidden transition-all duration-200 text-left max-h-0",
              {
                "max-h-80": activeId === item.id,
              }
            )}
          >
            <p className="px-14  md:px-[65px] pb-8 text-gray-600">
              {item.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
