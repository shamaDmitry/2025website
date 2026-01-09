import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";
import { RequestInvitationForm } from "@/components/sections/homepage/RequestInvitation/RequestInvitationForm";
import { RequestInvitationBanner } from "@/components/sections/homepage/RequestInvitation/RequestInvitationBanner";

type RequestInvitationProps = VisiblityProps;

export const RequestInvitation: FC<RequestInvitationProps> = ({
  isShown = true,
  id,
}) => {
  if (!isShown) return null;

  return (
    <section
      id={id}
      className="py-20 md:py-[88px] bg-[url('/images/homepage/request-invitation/request-invitation-bg.png')]  bg-no-repeat md:bg-right bg-bottom"
    >
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-5">
          <div className="md:col-span-8 lg:col-span-7">
            <div>
              <Headline tag="h2" className="mb-6">
                Request Invitation
              </Headline>

              <p className="text-xl mb-10 md:mb-12">
                Have any questions? or thinking of buying, selling or seeking
                advice on a property? Call, email or get in touch via the form
                below.
              </p>

              <RequestInvitationForm />
            </div>
          </div>

          <div className="md:col-span-4 lg:col-span-4 lg:col-start-9">
            <div className="pt-3">
              <RequestInvitationBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
