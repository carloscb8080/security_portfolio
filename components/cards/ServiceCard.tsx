import { motion } from "framer-motion";
import { FC } from "react";
import { FaHandPointRight } from "react-icons/fa";
import { Service } from "../../graphql";
import { fadeIn } from "../../utils/motion";

interface Props {
  service: Service;
  active: boolean;
  onActive: (id: string) => void;
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
      className={`flex relative overshadow shadow-lg p-4 rounded-xl overflow-hidden cursor-pointer transition-[flex] duration-[0.5s] ease-out-flex before:bg-indigo-900 before:opacity-[.8] lg:flex-col  ${
        active
          ? "lg:flex-[3] flex-[2]"
          : "lg:flex-[1] flex-[.5] justify-between lg:items-center "
      }`}
      onClick={() => onActive(service.id)}
      style={{
        backgroundImage: `url(${service.image.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative h-full w-full flex-1 flex items-center gap-2">
        <div>
          <h3
            className={`text-white text-center text-3xl ${
              active
                ? ""
                : "lg:absolute lg:bottom-0 lg:-rotate-90 lg:origin-top-left lg:w-[40vh]"
            }`}
          >
            {service.title}
          </h3>
          <br />
          {active && (
            <p className="text-white text-center font-bold">
              {service.description}
            </p>
          )}
          <br />
          {active && (
            <ul className="w-full">
              {service.items.map((item, idx) => (
                <motion.li
                  key={item}
                  className="text-white flex"
                  initial="hidden"
                  whileInView="show"
                  variants={fadeIn({
                    direction: "up",
                    delay: idx * 0.2,
                  })}
                >
                  <FaHandPointRight className="inline-block mr-2 mt-1 text-indigo-500 font-extrabold" />
                  <p className="flex-1">{item}</p>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <span className=" text-gray-100 text-2xl font-bold bg-indigo-500  rounded-full p-4">
          {idx + 1}
        </span>
      </div>
    </motion.div>
  );
};
