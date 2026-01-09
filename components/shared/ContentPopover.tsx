"use client";

import React, { FC, useState } from "react";
import { Headline } from "../typo/headline";
import { ContentPopoverData } from "../sections/homepage/LeadershipPrincipal/data";
import { cn } from "@/lib/utils";

interface ContentPopoverProps {
  data: ContentPopoverData[];
}

const ContentPopover: FC<ContentPopoverProps> = ({ data }) => {
  const [selectedHeadline, setSelectedHeadline] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
      <div className="flex flex-col items-start">
        {data.map((headline) => (
          <div
            key={headline.id}
            className="w-full border-b md:border-0 border-b-[#c7ced8]"
          >
            <button
              type="button"
              className={cn(
                "px-0 py-6 h-[88px] cursor-pointer w-full text-left hover:text-primary transition-colors md:border-b border-b-[#c7ced8]",
                {
                  "text-primary": selectedHeadline === headline.id,
                }
              )}
              onClick={() => setSelectedHeadline(headline.id)}
            >
              <Headline tag="h3" className="text-3xl">
                {headline.title}
              </Headline>
            </button>

            <div
              className={cn(
                "block md:hidden text-lg text-black text-left py-5 md:pt-5",
                {
                  hidden: selectedHeadline !== headline.id,
                }
              )}
            >
              <p>{data.find((h) => h.id === selectedHeadline)?.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block text-lg text-black text-left pt-5">
        <p>{data.find((h) => h.id === selectedHeadline)?.content}</p>
      </div>
    </div>
  );
};

export default ContentPopover;
