import dayjs from "dayjs";
import Image from "next/image";
import React, { FC } from "react";
import { Headline } from "@/components/typo/headline";
import { PostData } from "@/components/sections/homepage/LatestInsights/data";
import Link from "next/link";

interface PostItemProps {
  data: PostData;
}

export const PostItem: FC<PostItemProps> = ({ data }) => {
  const { title, category, date, image, link } = data;

  return (
    <div className="flex flex-col">
      <figure>
        <Image
          src={image}
          alt={title}
          width={440}
          height={300}
          className="w-full h-auto object-cover"
        />
      </figure>

      <div className="p-4 md:py-9 md:px-10 flex flex-col h-full bg-white">
        <Link href={link}>
          <Headline tag="h3" className="line-clamp-4 mb-7" title={title}>
            {title}
          </Headline>
        </Link>

        <div className="mt-auto flex-col flex">
          <time dateTime={date} className="text-base">
            {dayjs(date).format("MMMM D, YYYY")}
          </time>

          <Link
            href={`#${category.id}`}
            className="text-primary hover:text-primary-hover"
          >
            {category.name}
          </Link>
        </div>
      </div>
    </div>
  );
};
