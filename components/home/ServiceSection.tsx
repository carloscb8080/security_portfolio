import { useState } from "react";
import { ServiceCard } from "../cards";
import { Title } from "../common/Title";
import { SectionLayout } from "../Layouts";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "1",
    title: "Implementación de seguridad en el trabajo",
    description:
      "Implementar políticas y objetivos de Seguridad y salud ocupacional.",
    image: "/images/foto1.jpg",
  },
  {
    id: "2",
    title: "Capacitación en seguridad en el trabajo",
    description:
      "Brindamos capacitaciones a todo el personal de la organización de acuerdo con el programa anual de capacitaciones",
    image: "/images/foto2.jpg",
  },
  {
    id: "3",
    title: "Asesorias en seguridad en el trabajo",
    description:
      "Brindamos asesorias en seguridad en los reglamentos de seguridad en el trabajo, para que tu empresa cumpla con la normativa vigente y evite sanciones y multas.",
    image: "/images/foto3.jpg",
  },
  {
    id: "4",
    title: "Implementación de ISO 14001 y OHSAS",
    description:
      "Implementamos y manejamos los sistemas de gestión de la calidad ISO 9001, medio ambiente ISO 14001, seguridad y salud ocupacional OHSAS 18001 y normativa vigente.",
    image: "/images/foto4.jpg",
  },
  {
    id: "5",
    title: "Auditorias de seguridad en el trabajo",
    description:
      "Realizamos auditorias de seguridad en el trabajo para que tu empresa cumpla con la normativa vigente y evite sanciones y multas.",
    image: "/images/foto5.jpg",
  },
  {
    id: "6",
    title: "Elaboración de informes de seguridad en el trabajo",
    description:
      "Elaboramos informes técnicos sobre la Gestión de seguridad, Salud Ocupacional y Medio Ambiente.",
    image: "/images/foto6.jpg",
  },
];

export const ServiceSection = () => {
  const [active, setActive] = useState(0);
  const onActive = (id: number) => {
    setActive(id);
  };
  return (
    <SectionLayout>
      <div className="max-w-7xl mx-auto">
        <Title
          subtitle="Conece los "
          firstWord="Servicios"
          title="que presto"
          isDark
        />
        <br />
        <div className="flex flex-col lg:flex-row gap-4 min-h-[70vh]">
          {services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              active={active === +service.id}
              onActive={onActive}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};
