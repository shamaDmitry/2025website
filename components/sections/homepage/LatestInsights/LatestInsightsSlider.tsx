"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { FC } from "react";
import { PostData } from "./data";
import { PrevButton } from "@/components/shared/CustomSlider/PrevButton";
import { NextButton } from "@/components/shared/CustomSlider/NextButton";
import { PostItem } from "@/components/shared/PostItem";

interface LatestInsightsSliderProps {
  data: PostData[];
}

export const LatestInsightsSlider: FC<LatestInsightsSliderProps> = ({
  data,
}) => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
      className="!overflow-visible"
      navigation={false}
      centeredSlides={true}
      grabCursor={true}
    >
      {data.length > 1 && (
        <div className="-ml-5 -mr-5 flex pointer-events-none justify-between max-w-[calc(var(--container-width)+40px)] sm:ml-auto sm:mr-auto px-5 absolute left-0 right-0 top-1/2 -translate-y-1/2 z-50">
          <PrevButton className="pointer-events-auto relative -left-5" />

          <NextButton className="pointer-events-auto relative -right-5" />
        </div>
      )}

      {data.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <PostItem data={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
