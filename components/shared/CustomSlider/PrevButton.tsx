import { Button } from "@/components/controls/Button";
import { PrevArrowIcon } from "@/components/icons/PrevArrowIcon";
import { FC, useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

interface PrevButtonProps {
  className?: string;
}

export const PrevButton: FC<PrevButtonProps> = ({ className }) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const swiper = useSwiper();

  useEffect(() => {
    const handleResize = () => {
      if (swiper) {
        swiper.update();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [swiper]);

  useEffect(() => {
    if (swiper) {
      setIsBeginning(swiper.isBeginning);
    }

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <Button
      type="button"
      disabled={isBeginning}
      className={className}
      variant="square"
      onClick={() => swiper.slidePrev()}
      icon={<PrevArrowIcon className="size-5" />}
    />
  );
};
