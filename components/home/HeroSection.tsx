import { FC } from "react";
import { SwiperSlide } from "swiper/react";
import { Carousel } from "../../graphql";
import { Carrousel } from "../common";
import { SectionLayout } from "../Layouts";
import { HeroSlide } from "./HeroSlide";

interface Props {
  carousels: Carousel[];
}

export const HeroSection: FC<Props> = ({ carousels }) => {
  return (
    <SectionLayout id="hero-section">
      <Carrousel>
        {carousels.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlide item={item} />
          </SwiperSlide>
        ))}
      </Carrousel>
    </SectionLayout>
  );
};
