import React from "react";
import { Button } from "@/components/controls/Button";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";

export const AboutCTA = ({
  text,
  isShown = true,
}: {
  text: string;
  isShown?: boolean;
}) => {
  if (!isShown) return null;

  return (
    <Button isLink href="#" target="_blank" className="text-white gap-7">
      {text}
      <NextArrowIcon className="size-5" />
    </Button>
  );
};
