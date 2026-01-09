"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { VisiblityProps } from "@/types";
import { Button } from "@/components/controls/Button";
import { Navbar } from "./NavBar";
import { NextArrowIcon } from "../icons/NextArrowIcon";
import { MobileMenu } from "./MobileMenu";
import { Hamburger } from "../icons/Hamburger";

type HeaderProps = VisiblityProps;

export const Header: FC<HeaderProps> = ({ isShown = true }) => {
  const [activeDropdown, setActiveDropdown] = useState<boolean>(false);

  useEffect(() => {
    if (activeDropdown) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDropdown]);

  if (!isShown) return null;

  return (
    <header className="bg-white shadow-md z-50">
      <div className="flex items-center justify-between container mx-auto px-4 py-3.5 h-20 lg:h-[110px]">
        <div className="flex-1 gap-4 flex items-center justify-between relative">
          <div className="flex items-center shrink-0">
            <Link href="/">
              <Image
                className="h-auto lg:h-20 w-[110px] lg:w-auto"
                src="/images/logos/_logo.png"
                alt="Logo"
                width={170}
                height={83}
                priority
              />
            </Link>
          </div>

          <Hamburger
            className="lg:hidden text-primary hover:text-primary-hover"
            isOpen={activeDropdown}
            onClick={() => setActiveDropdown(true)}
          >
            <span className="sr-only">Open mobile menu</span>
          </Hamburger>

          <div className="hidden lg:flex gap-14">
            <Navbar />

            <Button
              isLink
              href="#"
              target="_blank"
              size="xs"
              className="gap-3.5"
              icon={<NextArrowIcon className="size-4" />}
              iconPosition="right"
            >
              INVESTOR PORTAL
            </Button>
          </div>
        </div>

        <MobileMenu
          className="absolute top-0 left-0 w-full h-full bg-white z-50"
          isOpen={activeDropdown}
          onClose={() => setActiveDropdown(false)}
        />
      </div>
    </header>
  );
};
