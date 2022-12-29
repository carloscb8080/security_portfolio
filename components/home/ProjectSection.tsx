import { FC, useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";
import { Experience } from "../../graphql";
import { ProjectCard } from "../cards";
import { Carrousel, Title } from "../common";
import { SectionLayout } from "../Layouts";

interface Props {
  experiences: Experience[];
}
export const ProjectSection: FC<Props> = ({ experiences }) => {
  const [lg, setLg] = useState(false);

  useEffect(() => {
    setLg(window.innerWidth > 1024);
  }, []);

  return (
    <SectionLayout id="project-section">
      <div className="max-w-6xl mx-auto p-4">
        <Title
          subtitle="Conoce más sobre: "
          firstWord="Mi"
          title="Experiencia"
          isDark
        />
      </div>
      <br />
      <br />
      <Carrousel
        slidesPerView={lg ? 2 : "auto"}
        spaceBetween={lg ? 20 : 0}
        autoplay
      >
        {experiences.map((experience) => (
          <SwiperSlide key={experience.id}>
            {({ isActive }) => (
              <ProjectCard experience={experience} active={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Carrousel>
    </SectionLayout>
  );
};
