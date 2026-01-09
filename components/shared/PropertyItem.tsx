import { FC } from "react";
import { FeaturedProperty } from "@/components/sections/homepage/FeaturedProperty/data";
import Image from "next/image";
import { Headline } from "../typo/headline";
import Link from "next/link";

interface PropertyItemProps {
  data: FeaturedProperty;
}

export const PropertyItem: FC<PropertyItemProps> = ({ data }) => {
  const { image, title, specs } = data;

  return (
    <div className="bg-white">
      <figure>
        <Image
          alt={title}
          width={680}
          height={450}
          className="w-full h-auto object-cover"
          src={image}
        />
      </figure>

      <div className="p-5">
        <Link href={"#"} className="hover:text-primary-hover">
          <Headline tag="h3" className="text-3xl mb-5 line-clamp-1">
            {title}
          </Headline>
        </Link>

        <div className="grid grid-cols-2 gap-5">
          {specs?.map((spec, index) => {
            const { name, value } = spec;

            return (
              <div key={index} className="flex flex-col gap-2 text-base">
                <span className="text-primary">{name}</span>
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
