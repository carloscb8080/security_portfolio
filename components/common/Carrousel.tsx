import { FC, useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperProps, SwiperRef } from "swiper/react";

interface Props extends SwiperProps {}

export const Carrousel: FC<Props> = ({ children, ...props }) => {
  const prev = useRef<HTMLDivElement>(null);
  const next = useRef<HTMLDivElement>(null);
  const slider = useRef<SwiperRef>(null);

  const handlePrev = () => {
    slider.current?.swiper.slidePrev();
  };

  const handleNext = () => {
    slider.current?.swiper.slideNext();
  };

  return (
    <Swiper
      ref={slider}
      spaceBetween={0}
      centeredSlides={true}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        renderBullet: function (_idx, className) {
          return `<span class="bg-indigo-500 w-10 rounded-lg hover:bg-indigo-700 ${className}"></span>`;
        },
      }}
      navigation={{
        prevEl: prev.current,
        nextEl: next.current,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      {...props}
    >
      {children}

      <div
        className="absolute top-1/2 lg:left-8 transform -translate-y-1/2 z-30"
        onClick={handlePrev}
      >
        <div
          ref={prev}
          className="bg-indigo-500 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>

      <div
        onClick={handleNext}
        className="absolute top-1/2 right-0 lg:right-8 transform -translate-y-1/2 z-30"
      >
        <div
          ref={next}
          className="bg-indigo-500 text-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:bg-indigo-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </Swiper>
  );
};
