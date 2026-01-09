import { FC } from "react";
import { LeadershipData } from "@/components/sections/homepage/LeadershipTeam/data";
import Image from "next/image";
import { Headline } from "@/components/typo/headline";
import DynamicIcon from "../icons/DynamicIcon";
import Link from "next/link";
import { Button } from "@/components/controls/Button";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { cn } from "@/lib/utils";

interface PersonCardProps {
  data: LeadershipData;
}

interface PersonDescriptionProps {
  position: string;
  className?: string;
  socials: {
    id: string;
    icon: string;
    link: string;
    title: string;
  }[];
}

const PersonDescription: FC<PersonDescriptionProps> = ({
  position,
  socials,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-4 w-full",
        className
      )}
    >
      <div className="text-base">{position}</div>

      <div>
        {socials.map((social) => {
          return (
            <Link
              key={social.id}
              href={social.link}
              target="_blank"
              className="text-primary hover:text-primary-hover"
            >
              <DynamicIcon name={social.icon} className="size-4" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export const PersonCard: FC<PersonCardProps> = ({ data }) => {
  const { name, position, description, image, link, socials } = data;

  return (
    <div className="relative overflow-hidden cursor-pointer group w-full xl:min-w-[320px]">
      <figure className="h-[350px] overflow-hidden">
        <Image
          width={400}
          height={400}
          alt={name}
          src={image}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="py-8 px-7 text-left text-black bg-mask">
        <Headline
          tag="h4"
          title={name}
          className="mb-3 text-2xl whitespace-nowrap text-ellipsis overflow-hidden"
        >
          {name}
        </Headline>

        <PersonDescription position={position} socials={socials} />
      </div>

      <div className="text-left py-10 px-8 overflow-auto group-hover:top-0 absolute w-full h-full top-full right-0 bg-mask/90 transition-all duration-300 flex flex-col items-start">
        <Headline tag="h4" className="mb-3">
          {name}
        </Headline>

        <PersonDescription
          className="mb-5"
          position={position}
          socials={socials}
        />

        <p className="text-base mb-5">{description}</p>

        <Button
          isLink
          href={link}
          size="sm"
          className="text-sm mt-auto shrink-0 gap-4"
          icon={<NextArrowIcon className="size-4" />}
          iconPosition="right"
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
};
