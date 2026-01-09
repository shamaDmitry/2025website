import { VisiblityProps } from "@/types";
import { FC } from "react";
import { Headline } from "@/components/typo/headline";
import { leadershipData } from "./data";
import { LeadershipTeamSlider } from "./LeadershipTeamSlider";

type LeadershipTeamProps = VisiblityProps;

export const LeadershipTeam: FC<LeadershipTeamProps> = ({ isShown = true }) => {
  if (!isShown) return null;

  return (
    <section className="py-20 md:py-[100px]">
      <div className="container mx-auto px-5 text-center">
        <Headline tag="h2" className="mb-7">
          Our Leadership Team
        </Headline>

        <p className="text-xl mb-14 md:max-w-[65%] mx-auto">
          We relish our relationships with our clients. We also value our role
          as fiduciaries with a commitment to offer honest, trustworthy
          financial advice.
        </p>
      </div>

      <div className="overflow-hidden relative px-5">
        <LeadershipTeamSlider data={leadershipData} />
      </div>
    </section>
  );
};
