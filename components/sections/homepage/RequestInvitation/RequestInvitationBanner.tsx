import { contactInfo } from "@/components/core/Footer/data";
import DynamicIcon from "@/components/icons/DynamicIcon";
import { Headline } from "@/components/typo/headline";
import Link from "next/link";
import React from "react";

export const getValue = (type: string, value: string, text: string) => {
  switch (type) {
    case "address":
      return <p>{value}</p>;

    case "phone":
      return <Link href={value}>{text}</Link>;

    case "email":
      return <Link href={value}>{text}</Link>;
  }
};

export const RequestInvitationBanner = () => {
  return (
    <div className="text-white min-h-[700px] bg-[url(/images/contact-bg.jpg)] relative w-full bg-[#3791aa] bg-no-repeat bg-bottom bg-cover">
      <div className="p-12 lg:pl-12 lg:pt-14">
        <Headline tag="h3" className="mb-7">
          Green Hart
        </Headline>

        <ul>
          {contactInfo.map((item) => {
            return (
              <li key={item.id} className="flex gap-4 mb-7">
                <DynamicIcon name={item.icon} className="size-5 shrink-0" />

                <div className="flex-1">
                  <div className="text-xl mb-2">{item.label}</div>

                  <div className="lg:max-w-9/12">
                    {getValue(item.type, item.value, item.text)}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
