import { FC } from "react";
import Link from "next/link";
import { navBarData } from "@/components/core/NavBar/data";
import { Button } from "@/components/controls/Button";
import { NextArrowIcon } from "../icons/NextArrowIcon";
import Image from "next/image";
import { Hamburger } from "../icons/Hamburger";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const MobileMenu: FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  className,
}) => {
  return (
    <div
      className={cn(
        "transition-all h-full w-full bg-white/90 flex flex-col",
        className,
        {
          hidden: !isOpen,
        }
      )}
    >
      <div className="flex items-center justify-between border-b border-gray-200 p-4 h-20">
        <Link href="/">
          <Image
            className="h-auto w-[110px]"
            src="/images/logos/_logo.png"
            alt="Logo"
            width={110}
            height={83}
            priority
          />
        </Link>

        <Hamburger
          className="lg:hidden text-primary hover:text-primary-hover"
          isOpen={true}
          onClick={onClose}
        >
          <span className="sr-only">Close mobile menu</span>
        </Hamburger>
      </div>

      <div className="p-4 overflow-y-auto">
        <nav className="mb-10">
          {navBarData.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                className="block px-4 py-2 text-black text-base hover:text-primary"
                onClick={onClose}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button
          isLink
          href="#"
          target="_blank"
          className="w-full sm:w-auto"
          icon={<NextArrowIcon className="size-4" />}
          iconPosition="right"
        >
          INVESTOR PORTAL
        </Button>
      </div>
    </div>
  );
};
