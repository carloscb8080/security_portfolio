import { SwiperSlide } from "swiper/react";
import { ProjectCard } from "../cards";
import { Carrousel, Title } from "../common";
import { SectionLayout } from "../Layouts";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  date: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Implementación de seguridad en el trabajo",
    description: "Implementación de seguridad en el trabajo",
    image: "/images/foto1.jpg",
    url: "https://www.google.com",
    date: "2021-01-01",
  },
  {
    id: 2,
    title: "Capacitaciones en seguridad en el trabajo",
    description: "Capacitaciones en seguridad en el trabajo",
    image: "/images/foto2.jpg",
    url: "https://www.google.com",
    date: "2021-01-01",
  },
  {
    id: 3,
    title: "Asesorias en seguridad en el trabajo",
    description: "Asesorias en seguridad en el trabajo",
    image: "/images/foto3.jpg",
    url: "https://www.google.com",
    date: "2021-01-01",
  },
  {
    id: 4,
    title: "Implementación de normativa vigente",
    description: "Implementación de normativa vigente",
    image: "/images/foto4.jpg",
    url: "https://www.google.com",
    date: "2021-01-01",
  },
  {
    id: 5,
    title: "Auditorias de seguridad en el trabajo",
    description: "Auditorias de seguridad en el trabajo",
    image: "/images/foto5.jpg",
    url: "https://www.google.com",
    date: "2021-01-01",
  },
  {
    id: 6,
    title: "Elaboración de informes de seguridad en el trabajo",
    description: "Elaboración de informes de seguridad en el trabajo",
    image: "/images/foto8.jpg",
    url: "https://www.google.com",
    date: "2021-01-01",
  },
];

export const ProjectSection = () => {
  return (
    <SectionLayout>
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
      <Carrousel slidesPerView={2} spaceBetween={20} autoplay>
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            {({ isActive }) => (
              <ProjectCard project={project} active={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Carrousel>
    </SectionLayout>
  );
};
