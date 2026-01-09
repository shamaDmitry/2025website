import { FC } from "react";
import { IconProps } from "./types";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { FacebookIcon } from "@/components/icons/FacebookIcon";
import { InstaIcon } from "@/components/icons/InstaIcon";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { PhoneIcon } from "@/components/icons/PhoneIcon";
import { PinIcon } from "@/components/icons/PinIcon";
import { PrevArrowIcon } from "@/components/icons/PrevArrowIcon";
import { TwitterIcon } from "@/components/icons/TwitterIcon";
import { YoutubeIcon } from "@/components/icons/YoutubeIcon";

interface DynamicIconProps extends IconProps {
  name: string;
}

const DynamicIcon: FC<DynamicIconProps> = ({ name, ...props }) => {
  const icons: { [key: string]: FC<IconProps> } = {
    LinkedinIcon,
    FacebookIcon,
    InstaIcon,
    MailIcon,
    NextArrowIcon,
    PhoneIcon,
    PinIcon,
    PrevArrowIcon,
    TwitterIcon,
    YoutubeIcon,
  };

  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
};

export default DynamicIcon;
