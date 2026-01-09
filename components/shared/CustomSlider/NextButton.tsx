import { Button } from "@/components/controls/Button";
import { NextArrowIcon } from "@/components/icons/NextArrowIcon";
import { FC, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

interface NextButtonProps {
  className?: string;
}

export const NextButton: FC<NextButtonProps> = ({ className }) => {
  const [isEnd, setIsEnd] = useState(true);
  const swiper = useSwiper();

  useEffect(() => {
    if (swiper) {
      setIsEnd(swiper.isEnd);
    }

    const handleSlideChange = () => {
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <Button
      type="button"
      disabled={isEnd}
      className={className}
      variant="square"
      onClick={() => swiper.slideNext()}
      icon={<NextArrowIcon className="size-5" />}
    />
  );
};
