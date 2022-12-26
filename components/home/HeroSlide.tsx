import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi";
import { RiDownloadCloudFill } from "react-icons/ri";
import { fadeIn } from "../../utils/motion";
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
        <Title
          subtitle="TE OFRECEMOS: "
          title={title}
          firstWord={firstWord || ""}
          lastWord={lastWord}
          className="text-2xl md:text-4xl  xl:text-6xl text-white"
        />

        <br />
        <ul className="ml-8 ">
          {item.items.map((item, idx) => (
            <Li key={item} label={item} idx={idx} />
          ))}
        </ul>

        <br />
        <br />
        <div className="flex gap-2">
          <Link href="/#about-section">
            <Button variant="contained">
              Sobre mí <HiInformationCircle className="inline-block ml-2" />
            </Button>
          </Link>
          <Button variant="outlined">
            Mi cv
            <RiDownloadCloudFill className="inline-block ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Li = ({ label, idx }: { label: string; idx: number }) => (
  <motion.li
    className="text-white text-xl"
    initial="hidden"
    whileInView="show"
    variants={fadeIn({
      direction: "up",
      delay: idx * 0.2,
    })}
  >
    <AiFillCheckCircle className="inline-block mr-2 text-indigo-500 font-extrabold" />
    {label}
  </motion.li>
);
