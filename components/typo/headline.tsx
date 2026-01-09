import { libreBaskerville } from "@/fonts/libre";
import { cn } from "@/lib/utils";
import React, { FC, PropsWithChildren } from "react";

interface HeadlineProps extends PropsWithChildren {
  tag?: string;
  className?: string;
  title?: string;
}

export const Headline: FC<HeadlineProps> = ({
  children,
  className = "",
  tag = "h1",
  title,
}) => {
  const Component = tag as React.ElementType;

  const defaultStyles = "";
  const defaultH1Styles = "text-6xl";
  const defaultH2Styles = "text-[38px] lg:text-5xl";
  const defaultH3Styles = "text-3xl";
  const defaultH4Styles = "text-2xl";
  const defaultH5Styles = "text-base";
  const defaultH6Styles = "text-sm";

  return (
    <Component
      title={title}
      className={cn({
        [`${defaultStyles} ${libreBaskerville.className}`]: true,
        [`${defaultH1Styles}`]: tag === "h1",
        [`${defaultH2Styles}`]: tag === "h2",
        [`${defaultH3Styles}`]: tag === "h3",
        [`${defaultH4Styles}`]: tag === "h4",
        [`${defaultH5Styles}`]: tag === "h5",
        [`${defaultH6Styles}`]: tag === "h6",
        [`${className}`]: className,
      })}
    >
      {children}
    </Component>
  );
};
