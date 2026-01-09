import ContentPopover from "@/components/shared/ContentPopover";
import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";
import { contentPopoverData } from "./data";

type LeadershipPrincipalProps = VisiblityProps;

export const LeadershipPrincipal: FC<LeadershipPrincipalProps> = ({
  isShown = true,
}) => {
  if (!isShown) return null;

  return (
    <section className="pt-0 py-[50px] bg-[url('/images/homepage/leadership-principal/leadership-principal-bg.png')] md:bg-cover md:bg-center min-h-[450px] bg-no-repeat bg-bottom bg-auto">
      <div className="container max-w-[var(--width-wrapper)] mx-auto px-5 text-center">
        <Headline tag="h2" className="lg:text-4xl mb-10">
          Our Leadership Principal
        </Headline>

        <ContentPopover data={contentPopoverData} />
      </div>
    </section>
  );
};
