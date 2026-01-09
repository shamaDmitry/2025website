import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import { FC } from "react";
import { whyGreenHartData } from "./data";
import Image from "next/image";

type WhyGreenHartProps = VisiblityProps;

export const WhyGreenHart: FC<WhyGreenHartProps> = ({ isShown = true }) => {
  if (!isShown) return null;

  return (
    <section className="py-20 md:py-[100px]">
      <div className="container mx-auto px-5">
        <Headline tag="h2" className="text-center mb-16 md:mb-[99px]">
          Why Green Hart
        </Headline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {whyGreenHartData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <div className="shrink-0 h-[90px] mb-[50px]">
                  <Image
                    className="w-full h-auto object-contain"
                    width={90}
                    height={122}
                    src={item.media}
                    alt={item.title}
                    priority
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-libre-baskerville mb-5">
                    {item.title}
                  </h3>

                  <p className="text-lg/snug">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
