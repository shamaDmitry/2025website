import { FC } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "base" | "sm" | "xs" | "lg";
  variant?: "default" | "square";
  color?: "primary" | "secondary";
  icon?: React.ReactNode;
  children?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLink?: boolean;
  href?: Url;
  target?: string;
}

export const Button: FC<ButtonProps> = ({
  size = "base",
  variant = "default",
  color = "primary",
  icon,
  children,
  className,
  iconPosition = "left",
  isLink = false,
  href,
  target,
  disabled,
  ...props
}) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center transition-colors cursor-pointer whitespace-nowrap",
    {
      // Color variations
      "bg-primary text-white hover:bg-primary-hover": color === "primary",

      // Height variations
      "h-[50px] px-4 text-lg": size === "base",
      "h-[45px] px-4 text-sm": size === "sm",
      "h-[40px] px-4 text-sm": size === "xs",
      "h-[60px] px-6 text-lg": size === "lg",

      // Square variant
      "w-[50px] h-[50px] p-0": variant === "square",

      // Spacing when icon is present
      "gap-2": icon && variant !== "square" && children,
      "cursor-not-allowed opacity-50": disabled,
    },
    className
  );

  if (isLink && href) {
    return (
      <Link className={buttonClasses} href={href} target={target}>
        {iconPosition === "left" && icon}
        {children}
        {iconPosition === "right" && icon}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};
