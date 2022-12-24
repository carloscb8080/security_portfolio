import { SwiperSlide } from "swiper/react";
import { Carrousel } from "../common";
import { SectionLayout } from "../Layouts";
import { HeroSlide } from "./HeroSlide";
export interface SliderItem {
  title: string;
  description: string;
  image: string;
  items: string[];
}

const sliderItems: SliderItem[] = [
  {
    title: "Asesorias y consultorias en seguridad en el trabajo",
    image: "/images/hero.jpg",
    description:
      "Brindamos asesorias y consultorias en seguridad en el trabajo, para que tu empresa cumpla con la normativa vigente y evite sanciones y multas.",
    items: [
      "Asesorias en seguridad en el trabajo",
      "Asesorias auditorias de seguridad en el trabajo",
      "Asesorias en los reglametos de seguridad en el trabajo",
    ],
  },
  {
    title:
      "Implementación y  manejo de ISO 14001, OHSAS 18001 y normativa vigente",
    image: "/images/foto8.jpg",
    description:
      "Implementamos y manejamos los sistemas de gestión de la calidad ISO 9001, medio ambiente ISO 14001, seguridad y salud ocupacional OHSAS 18001 y normativa vigente.",
    items: [
      "Implementación y manejo de ISO 9001",
      "Implementación y manejo de ISO 14001",
      "Implementación y manejo de OHSAS 18001",
    ],
  },
];

export const HeroSection = () => {
  return (
    <SectionLayout>
      <Carrousel>
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlide item={item} />
          </SwiperSlide>
        ))}
      </Carrousel>
    </SectionLayout>
  );
};
