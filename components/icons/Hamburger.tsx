import { cn } from "@/lib/utils";
import { FC } from "react";

interface HamburgerProps extends React.HTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  className?: string;
}

export const Hamburger: FC<HamburgerProps> = ({
  isOpen,
  className,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex flex-col justify-center items-center w-10 h-5 cursor-pointer relative",
        className
      )}
    >
      {children}
      <span
        className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
          isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
        }`}
      />
      <span
        className={`block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
          isOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ease-out ${
          isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
        }`}
      />
    </button>
  );
};
