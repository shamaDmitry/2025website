import { About } from "@/components/sections/homepage/About";
import { Hero } from "@/components/sections/homepage/Hero";
import { Stats } from "@/components/sections/homepage/Stats";
import { WhyGreenHart } from "@/components/sections/homepage/WhyGreenHart";
import { MapSection } from "@/components/sections/homepage/MapSection";
import { InvestGreenHart } from "@/components/sections/homepage/InvestGreenHart";
import { FeaturedProperty } from "@/components/sections/homepage/FeaturedProperty";
import { LeadershipTeam } from "@/components/sections/homepage/LeadershipTeam";
import { FaqSection } from "@/components/sections/homepage/FaqSection";
import { LatestInsights } from "@/components/sections/homepage/LatestInsights";
import { RequestInvitation } from "@/components/sections/homepage/RequestInvitation";
import { LeadershipPrincipal } from "@/components/sections/homepage/LeadershipPrincipal";

export default function Home() {
  return (
    <>
      {/* to disable each section use the isShown={false} prop */}

      <Hero />

      <About id="about" />

      <Stats />

      <WhyGreenHart />

      <MapSection />

      <InvestGreenHart />

      <FeaturedProperty id="portfolio" />

      <LeadershipTeam />

      <LeadershipPrincipal />

      <FaqSection id="faq" />

      <LatestInsights id="news" />

      <RequestInvitation id="contact-us" />
    </>
  );
}
