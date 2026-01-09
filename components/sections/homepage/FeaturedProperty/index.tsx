import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";
import { featuredPropertyData } from "./data";
import { FeaturedPropertySlider } from "./FeaturedPropertySlider";
import { MorePropertyCTA } from "@/components/cta-buttons/MorePropertyCTA";

type FeaturedPropertyProps = VisiblityProps;

export const FeaturedProperty: FC<FeaturedPropertyProps> = ({
  isShown = true,
  id,
}) => {
  if (!isShown) return null;

  return (
    <section id={id} className="bg-mask py-20 md:py-[100px]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-4 mb-8">
          <Headline tag="h2" className="mb-5">
            Featured Property
          </Headline>

          {/* isShown={false} prop is used to disable the button */}
          <MorePropertyCTA />
        </div>
      </div>

      <div className="overflow-hidden relative px-5">
        <FeaturedPropertySlider data={featuredPropertyData} />
      </div>
    </section>
  );
};
