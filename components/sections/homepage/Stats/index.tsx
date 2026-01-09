import { VisiblityProps } from "@/types";
import { FC, Fragment } from "react";
import { statsData } from "./data";
import { StatItem } from "@/components/shared/StatItem";

type StatsProps = VisiblityProps;

export const Stats: FC<StatsProps> = ({ isShown = true }) => {
  if (!isShown) return null;

  return (
    <section className="bg-mask md:pt-[70px] md:pb-[62px] py-10">
      <div className="container mx-auto px-5">
        <div className="lg:flex lg:justify-center lg:items-center grid grid-cols-2 lg:gap-5 gap-10">
          {statsData.map((item, index) => {
            return (
              <Fragment key={index}>
                <StatItem className="flex-1" key={index} {...item} />

                <div className="hidden bg-[#b9c4d3] w-[1px] min-h-[87px] lg:flex shrink-0 last-of-type:hidden" />
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
