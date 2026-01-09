import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";
import { latestInsightsData } from "./data";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { Button } from "@/components/controls/Button";
import { LatestInsightsSlider } from "./LatestInsightsSlider";

type LatestInsightsProps = VisiblityProps;

export const LatestInsights: FC<LatestInsightsProps> = ({
  isShown = true,
  id,
}) => {
  if (!isShown) return null;

  return (
    <section id={id} className="bg-mask py-20 md:py-[100px]">
      <div className="container mx-auto px-5">
        <div className="flex lg:flex-row flex-col justify-between gap-4 mb-12 items-start lg:items-stretch">
          <Headline tag="h2">Our Latest Insights</Headline>

          <Button isLink href="#" className="gap-7">
            MORE NEWS
            <NextArrowIcon className="size-5" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden relative px-5">
        <LatestInsightsSlider data={latestInsightsData} />
      </div>
    </section>
  );
};
