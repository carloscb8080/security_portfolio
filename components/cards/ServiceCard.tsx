import { motion } from "framer-motion";
import { FC } from "react";
import { fadeIn } from "../../utils/motion";
import { Title } from "../common/Title";
import { Service } from "../home/ServiceSection";

interface Props {
  service: Service;
  active: boolean;
  onActive: (id: number) => void;
  idx: number;
}

export const ServiceCard: FC<Props> = ({ service, active, onActive, idx }) => {
  return (
    <motion.div
      variants={fadeIn({
        delay: idx * 0.5,
        type: "spring",
        direction: "right",
        duration: 0.75,
      })}
      initial="hidden"
      whileInView="show"
      className={`flex relative overshadow shadow-lg p-4 rounded-xl overflow-hidden cursor-pointer transition-[flex] duration-[0.5s] ease-out-flex before:bg-indigo-500 before:opacity-[.5] lg:flex-col  ${
        active
          ? "lg:flex-[3] flex-[2]"
          : "lg:flex-[1] flex-[.5] justify-between lg:items-center "
      }`}
      onClick={() => onActive(+service.id)}
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative h-full w-full flex-1 flex items-center">
        <div>
          <h3
            className={`text-white text-center  ${
              active
                ? ""
                : "lg:absolute lg:bottom-0 lg:-rotate-90 lg:origin-top-left w-[40vh]"
            }`}
          >
            {service.title}
          </h3>
          {active && (
            <p className="text-white text-center text-lg font-bold">
              {service.description}
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div>
          {/* <span className="text-white text-4xl font-bold">{idx + 1}</span> */}
          <Title title={String(idx + 1)} firstWord="" variant="secondary" />
        </div>
      </div>
    </motion.div>
  );
};
