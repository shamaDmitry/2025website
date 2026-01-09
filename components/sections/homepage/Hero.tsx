import { Button } from "@/components/controls/Button";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";

type HeroProps = VisiblityProps;

export const Hero: FC<HeroProps> = ({ isShown = true }) => {
  if (!isShown) return null;

  return (
    <section className="text-black bg-[url('/images/homepage/hero.jpg')] bg-no-repeat bg-cover lg:bg-center bg-bottom py-[100px] min-h-[920px] lg:min-h-[780px] flex items-center">
      <div className="container mx-auto px-5">
        <Headline className="text-[52px] lg:text-[72px]/[1.2] mb-6">
          We Are Real <br /> Estate Investors
        </Headline>

        <p className="text-xl/[1.7] md:max-w-1/2 mb-[50px]">
          Our organization specializes in indetifying, acquiring, and
          managing-high quality multifamily properties
        </p>

        <Button
          isLink
          href="#contact-us"
          className="text-white gap-7"
          size="lg"
        >
          REQUEST INVITATION
          <NextArrowIcon className="size-5" />
        </Button>
      </div>
    </section>
  );
};
