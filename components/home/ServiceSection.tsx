import { FC, useState } from "react";
import { Service } from "../../graphql";
import { CardWhatsapp, ServiceCard } from "../cards";
import { Title } from "../common/Title";
import { SectionLayout } from "../Layouts";

interface Props {
  services: Service[];
}

export const ServiceSection: FC<Props> = ({ services }) => {
  const [active, setActive] = useState("");
  const onActive = (id: string) => {
    setActive(id);
  };
  return (
    <SectionLayout id="service-section" className="max-w-7xl mx-auto p-4">
      <Title
        subtitle="Conece los "
        firstWord="Servicios"
        title="que te damos"
        isDark
      />
      <br />
      <div className="flex flex-col lg:flex-row gap-4 min-h-[70vh]">
        {services.map((service, idx) => (
          <ServiceCard
            key={service.id}
            service={service}
            active={active === service.id}
            onActive={onActive}
            idx={idx}
          />
        ))}
      </div>
      <br />
      <CardWhatsapp />
    </SectionLayout>
  );
};
