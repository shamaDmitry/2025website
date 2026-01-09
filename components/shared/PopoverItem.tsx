import { FC } from "react";
import { InvestData } from "@/components/sections/homepage/InvestGreenHart/data";
import { Headline } from "../typo/headline";

interface PopoverItemProps {
  data: InvestData;
  index: number;
}

export const PopoverItem: FC<PopoverItemProps> = ({ data, index }) => {
  return (
    <div className="group cursor-pointer relative flex justify-start gap-6 md:gap-9 pb-7 last-of-type:pb-0 before:absolute before:top-0 md:before:left-[28px] before:w-1 before:h-full before:bg-black last-of-type:before:hidden before:left-[23px]">
      <div className="text-2xl md:text-3xl relative font-libre-baskerville size-[50px] md:size-[60px] shrink-0 flex items-center justify-center bg-black text-white group-hover:bg-primary group-hover:text-white transition-colors">
        {index.toString().padStart(2, "0")}
      </div>

      <div className="text-left pt-3.5">
        <Headline
          tag="h3"
          className="text-2xl md:text-3xl mb-3 group-hover:text-primary transition-colors"
        >
          {data.title}
        </Headline>

        <p className="text-base">{data.description}</p>
      </div>
    </div>
  );
};
