import { VisiblityProps } from "@/types";
import { FC } from "react";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { bottomMenu, contactInfo, menu, socialMenu } from "./data";
import Link from "next/link";
import Image from "next/image";
import { Headline } from "@/components/typo/headline";
import DynamicIcon from "@/components/icons/DynamicIcon";
import { Button } from "@/components/controls/Button";
import { getValue } from "@/components/sections/homepage/RequestInvitation/RequestInvitationBanner";

type FooterProps = VisiblityProps;

export const Footer: FC<FooterProps> = ({ isShown = true }) => {
  if (!isShown) return null;

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-5 pt-20 pb-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-5 grid-rows-none">
          <div className="lg:col-span-5 text-base">
            <Link href="/" className="inline-flex mb-10">
              <Image
                className="h-auto w-full max-w-[205px]"
                alt="logo"
                width={205}
                height={100}
                src={"/images/logos/logo-black.png"}
              />
            </Link>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex gap-5 items-center text-base"
                  >
                    <DynamicIcon
                      name={item.icon}
                      className="text-primary size-4 shrink-0"
                    />

                    {getValue(item.type, item.value, item.text)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:mt-[52px] lg:col-span-2 lg:col-start-7">
            <Headline tag="h4" className="text-primary mb-5">
              Links
            </Headline>

            <nav className="flex flex-col gap-0">
              {menu.map((item) => {
                if (!item.isVisible) return null;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="inline-flex py-1.5 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="lg:mt-[52px] lg:col-span-2 lg:col-start-9">
            <Headline tag="h4" className="text-primary mb-5">
              Social Media
            </Headline>

            <div className="flex items-center lg:justify-between gap-5 lg:gap-2">
              {socialMenu.map((item) => {
                if (!item.isVisible) return null;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="inline-flex py-2 hover:text-primary"
                  >
                    <DynamicIcon name={item.icon} className="size-4" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="lg:mt-[52px] lg:col-span-2">
            <Button
              isLink
              size="xs"
              href="#"
              target="_blank"
              className="lg:w-full !whitespace-normal"
              icon={<NextArrowIcon className="size-4 shrink-0" />}
              iconPosition="right"
            >
              INVESTOR PORTAL
            </Button>
          </div>
        </div>
      </div>

      {/* bottom menu */}
      <div className="border-t border-[#1d1d1d] py-9">
        <div className="container mx-auto px-5 flex flex-col items-start md:flex-row md:items-center justify-between gap-4">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Green Hart Capital. All rights
            reserved.
          </div>

          <div className="flex flex-wrap">
            {bottomMenu.map((item) => {
              if (!item.isVisible) return null;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-sm after:content-['|'] last-of-type:after:hidden after:mx-2"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
