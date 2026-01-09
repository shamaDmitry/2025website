import { FaqCTA } from "@/components/cta-buttons/FaqCTA";
import { Faq } from "@/components/shared/Faq";
import { faqData } from "@/components/shared/Faq/data";
import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";

type FaqSectionProps = VisiblityProps;

export const FaqSection: FC<FaqSectionProps> = ({ isShown = true, id }) => {
  if (!isShown) return null;

  return (
    <section id={id} className="py-20 md:py-[100px]">
      <div className="container max-w-[var(--width-wrapper)] mx-auto px-5 text-center">
        <Headline tag="h2" className="mb-10 md:mb-14">
          Frequently Asked Questions
        </Headline>

        <Faq className="mb-10 md:mb-[60px]" faqData={faqData} />

        {/* isShown={false} to disable the CTA button */}
        <FaqCTA />
      </div>
    </section>
  );
};
