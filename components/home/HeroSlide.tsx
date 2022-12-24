import { motion } from "framer-motion";
import { FC } from "react";
import { AiFillCheckCircle, AiFillInfoCircle } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { textVariant } from "../../utils/motion";
import { Button } from "../common/Button";
import { Title } from "../common/Title";
import { SliderItem } from "./HeroSection";

interface Props {
  item: SliderItem;
}

export const HeroSlide: FC<Props> = ({ item }) => {
  const words = item.title.split(" ");
  const firstWord = words.shift();
  const lastWord = words.pop();
  const title = words.join(" ");

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center overshadow flex flex-col justify-center items-center p-2"
      style={{
        backgroundImage: `url('${item.image}')`,
      }}
    >
      <div className="max-w-3xl flex flex-col items-center">
        <motion.div
          variants={textVariant(1.1)}
          initial="hidden"
          whileInView="show"
          className="text-white"
        >
          <Title
            subtitle="TE OFRECEMOS: "
            title={title}
            firstWord={firstWord || ""}
            lastWord={lastWord}
            className="text-2xl md:text-4xl  xl:text-6xl"
          />
        </motion.div>

        <br />
        <ul className="ml-8 ">
          {item.items.map((item) => (
            <Li key={item} label={item} />
          ))}
        </ul>

        <br />
        <div className="flex gap-2">
          <Button variant="contained">
            Contactar ahora <SiMinutemailer className="inline-block ml-2" />
          </Button>
          <Button variant="outlined">
            Sobre mí
            <AiFillInfoCircle className="inline-block ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Li = ({ label }: { label: string }) => (
  <li className="text-white text-xl">
    <AiFillCheckCircle className="inline-block mr-2 text-indigo-500 font-extrabold" />
    {label}
  </li>
);
