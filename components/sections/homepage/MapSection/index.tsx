import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC, Fragment } from "react";
import { description, mapStatsData, title } from "./data";
import { StatItem } from "@/components/shared/StatItem";

type MapSectionProps = VisiblityProps;

export const MapSection: FC<MapSectionProps> = ({ isShown = true }) => {
  if (!isShown) return null;

  return (
    <section className="bg-mask pb-9 py-20 md:py-[100px]">
      <div className="container mx-auto px-5 text-center">
        <Headline tag="h2" className="mb-7">
          {title}
        </Headline>

        <p className="text-xl mb-14 md:max-w-[60%] mx-auto">{description}</p>

        <div className="lg:flex lg:justify-center lg:items-center grid grid-cols-2 lg:gap-5 gap-10">
          {mapStatsData.map((item, index) => {
            return (
              <Fragment key={index}>
                <StatItem className="flex-1" key={index} {...item} />

                <div className="hidden bg-[#b9c4d3] w-[1px] min-h-[87px] lg:flex shrink-0 last-of-type:hidden" />
              </Fragment>
            );
          })}
        </div>

        <div className="max-w-[845px] mx-auto mt-28">
          <div className="commonninja_component pid-41a8a55e-a739-4383-936f-7657d3516f83"></div>
        </div>
      </div>
    </section>
  );
};
