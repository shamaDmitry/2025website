import React from "react";
import { Button } from "@/components/controls/Button";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";

export const MorePropertyCTA = ({ isShown = true }: { isShown?: boolean }) => {
  if (!isShown) return null;

  return (
    <Button isLink href="#" className="text-white gap-7">
      MORE PROPERTY
      <NextArrowIcon className="size-5" />
    </Button>
  );
};
