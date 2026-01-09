import { AboutCTA } from "@/components/cta-buttons/AboutCTA";
import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { aboutData } from "./data";
import { cn } from "@/lib/utils";

type AboutProps = VisiblityProps;

export const About: FC<AboutProps> = ({ isShown = true, id }) => {
  if (!isShown) return null;

  return (
    <section
      id={id}
      className="text-black bg-[url('/images/homepage/about/about-bg.png')] bg-no-repeat md:bg-left md:bg-contain bg-bottom py-14 pb-[100px] md:py-[100px] min-h-[820px] flex items-center"
    >
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 mb-5">
          <div className="order-last lg:order-none lg:col-span-5">
            <div className="relative flex md:items-end md:justify-normal items-center">
              <Image
                className="w-full md:max-w-[440px] h-auto max-w-1/2"
                src="/images/homepage/about01.jpg"
                alt="about"
                width={440}
                height={510}
                priority
              />

              <div className="bg-white p-2.5 md:w-[275px] shrink-0 relative lg:absolute lg:-right-[15%] lg:-bottom-[22%] md:left-auto -left-[15%] right-0 -bottom-[100px]">
                <Image
                  className="w-full h-auto max-w-[175px] md:max-w-max"
                  src="/images/homepage/about02.jpg"
                  alt="about"
                  width={255}
                  height={280}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="mb-10 lg:mb-0 order-first lg:order-none lg:col-span-6 lg:col-start-7">
            <div className="pt-3">
              <Headline tag="h2" className="mb-5 lg:mb-[46px]">
                About Green Hart
              </Headline>

              <div className="space-y-5 mb-5 md:mb-14">
                {aboutData.map((item) => {
                  return (
                    <p
                      key={item.id}
                      className={cn("text-lg/normal", {
                        "text-xl/normal": item.isSubHeading,
                      })}
                    >
                      {item.text}
                    </p>
                  );
                })}
              </div>

              {/* isShown={false} to hide*/}
              <AboutCTA text={"ABOUT US"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
