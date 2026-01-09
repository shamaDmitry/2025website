import { cn } from "@/lib/utils";

import React, { FC } from "react";

interface StatItemProps {
  value: string;
  label: string;
  className?: string;
}

export const StatItem: FC<StatItemProps> = ({ className, value, label }) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-4 text-center", className)}
    >
      <div className="text-3xl lg:text-5xl text-primary font-libre-baskerville">
        {value}
      </div>

      <div className="text-base tracking-[3px]">{label}</div>
    </div>
  );
};
