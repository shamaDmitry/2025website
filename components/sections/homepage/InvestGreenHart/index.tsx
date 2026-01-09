import { Headline } from "@/components/typo/headline";
import { VisiblityProps } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { investData } from "./data";
import { PopoverItem } from "@/components/shared/PopoverItem";

type InvestGreenHartProps = VisiblityProps;

export const InvestGreenHart: FC<InvestGreenHartProps> = ({
  isShown = true,
}) => {
  if (!isShown) return null;

  return (
    <section className="py-20 md:pt-[100px] md:pb-[110px]">
      <div className="container mx-auto px-5 text-center">
        <Headline tag="h2" className="mb-5 md:mb-7">
          Invest with Green Hart
        </Headline>

        <p className="text-xl mb-14  md:mb-24 md:max-w-[60%] mx-auto">
          Aenean ornare cursus lorem at imperdiet. Aenean luctus hendrerit neque
          id aliquam. Donec feugiat tortor a justo euismod lobortis
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-last md:order-first">
            <Image
              className="w-full md:max-w-[600px] h-auto"
              width={600}
              height={615}
              src="/images/homepage/invest-green-hart/invest-bg.jpg"
              alt="Invest Green Hart"
              priority
            />
          </div>

          <div className="order-first md:order-last">
            {investData.map((item, index) => {
              return (
                <PopoverItem key={item.id} data={item} index={index + 1} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
